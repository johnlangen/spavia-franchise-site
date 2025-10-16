import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { captcha, ...formData } = body;

  if (!captcha) {
    return NextResponse.json(
      { success: false, error: "Missing captcha" },
      { status: 400 }
    );
  }

  // 🔐 Verify captcha
  const verifyRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
    }
  );
  const verifyData = await verifyRes.json();
  if (!verifyData.success) {
    return NextResponse.json(
      { success: false, error: "Captcha failed" },
      { status: 400 }
    );
  }

  // ✅ Insert into Monday.com
  try {
    // Use the actual City column ID: text_mkwsb0wp
    const columnVals = {
      email_mkwsf6vv: { email: formData.email, text: formData.email },
      phone_mkwse69z: { phone: formData.phone, countryShortName: "US" },
      text_mkwsb0wp: formData.city,            // ✅ Correct City column ID
      text_mkws26k0: formData.state,
      text_mkwsvr57: formData.investment,
      text_mkwsx6bk: "Franchise Form",
    };

    console.log("👉 Sending to Monday columnVals:", columnVals);

    const mutation = `
      mutation CreateItem(
        $boardId: ID!,
        $groupId: String!,
        $itemName: String!,
        $columnValues: JSON!
      ) {
        create_item(
          board_id: $boardId,
          group_id: $groupId,
          item_name: $itemName,
          column_values: $columnValues
        ) {
          id
        }
      }
    `;

    const mondayRes = await fetch("https://api.monday.com/v2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.MONDAY_API_KEY!,
      },
      body: JSON.stringify({
        query: mutation,
        variables: {
          boardId: process.env.MONDAY_BOARD_ID,
          groupId: "topics", // adjust if needed
          itemName: `${formData.firstName} ${formData.lastName}`,
          columnValues: JSON.stringify(columnVals), // ✅ stringified once
        },
      }),
    });

    const mondayData = await mondayRes.json();
    console.log("✅ Monday response:", mondayData);

    if (mondayData.errors) {
      console.error("❌ Monday error:", mondayData.errors);
      return NextResponse.json(
        { success: false, error: "Failed to save to Monday" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {

    console.error("❌ Error saving lead:", err);
    return NextResponse.json(
      { success: false, error: "Failed to save lead" },
      { status: 500 }
    );
  }
}

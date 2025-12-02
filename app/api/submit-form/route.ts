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

  // ✅ Save to Monday.com
  try {
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

    const columnVals = {
      email_mkwsf6vv: { email: formData.email, text: formData.email },
      phone_mkwse69z: { phone: formData.phone, countryShortName: "US" },
      text_mkwsb0wp: formData.city,
      text_mkws26k0: formData.state,
      text_mkwsvr57: formData.investment,
      text_mkwsx6bk: "Franchise Form",
      date_mkwsba3m: { date: today },
    };

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
          groupId: "topics",
          itemName: `${formData.firstName} ${formData.lastName}`,
          columnValues: JSON.stringify(columnVals),
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

    // ✅ Add to ActiveCampaign
    try {
      const acForm = new URLSearchParams({
        u: "1",
        f: "1",
        s: "",
        c: "0",
        m: "0",
        act: "sub",
        v: "2",
        or: "6d2955e6e540fa8ca57bb575ae5af086",
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        "field[209]": formData.city, // city
        "field[1]": formData.state,  // state
        "field[208]": formData.investment, // liquid assets
      });

      const acRes = await fetch(
        "https://spaviainternational.activehosted.com/proc.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: acForm.toString(),
        }
      );

      const acText = await acRes.text();
      const acSuccess = acText.includes("thank_you") || acRes.ok;

      if (!acSuccess) {
        console.error("⚠️ ActiveCampaign form submission failed:", acText);
      } else {
        console.log("✅ ActiveCampaign lead added successfully");
      }
    } catch (acErr) {
      console.error("❌ Error submitting to ActiveCampaign:", acErr);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("❌ Error saving lead:", err);
    return NextResponse.json(
      { success: false, error: "Failed to save lead" },
      { status: 500 }
    );
  }
}

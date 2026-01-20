import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1️⃣ Create / update contact
    const contactRes = await fetch(
      `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contacts`,
      {
        method: "POST",
        headers: {
          "Api-Token": process.env.ACTIVE_CAMPAIGN_API_KEY!,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          contact: {
            email: body.email,
            firstName: body.firstName,
            lastName: body.lastName,
            phone: body.phone,
            fieldValues: body.zip
              ? [{ field: "90", value: body.zip }]
              : [],
          },
        }),
      }
    );

    const contactData = await contactRes.json();

    if (!contactRes.ok) {
      console.error("Contact create failed:", contactData);
      return NextResponse.json(contactData, { status: 400 });
    }

    const contactId = contactData?.contact?.id;
    if (!contactId) throw new Error("No contact ID returned");

    // 2️⃣ Subscribe to Organic Lead List (ID = 2)
    const listRes = await fetch(
      `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contactLists`,
      {
        method: "POST",
        headers: {
          "Api-Token": process.env.ACTIVE_CAMPAIGN_API_KEY!,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          contactList: {
            list: "2",
            contact: contactId,
            status: 1,
          },
        }),
      }
    );

    const listData = await listRes.json();

    if (!listRes.ok) {
      console.error("List subscribe failed:", listData);
      return NextResponse.json(listData, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Franchise lead error:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const fieldValues = [];
    if (body.zip) {
      fieldValues.push({
        field: "90", // Zip Code custom field
        value: body.zip,
      });
    }

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
            ...(fieldValues.length ? { fieldValues } : {}),
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

    if (!contactId) {
      throw new Error("No contact ID returned from ActiveCampaign");
    }

    // 2️⃣ Subscribe contact to Organic Lead List (ID = 2)
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

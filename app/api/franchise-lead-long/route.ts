import { NextResponse } from "next/server";

const LIST_ID = "2"; // Organic Lead List

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Create or update contact
    const contactRes = await fetch(
      `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contacts`,
      {
        method: "POST",
        headers: {
          "Api-Token": process.env.ACTIVE_CAMPAIGN_API_KEY!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact: {
            email: body.email,
            firstName: body.firstName,
            lastName: body.lastName,
            phone: body.phone,
            fieldValues: [
              { field: "90", value: body.zip },            // Zip Code
              { field: "1", value: body.state },            // State
              { field: "343", value: body.primaryGoal },    // Primary Goal
              { field: "208", value: body.liquidAssets },   // Liquid Assets
              { field: "341", value: body.netWorth },       // Estimated Net Worth
              { field: "342", value: body.creditScore },    // Credit Score
            ],
          },
        }),
      }
    );

    const contactData = await contactRes.json();

    if (!contactRes.ok) {
      return NextResponse.json(contactData, { status: 400 });
    }

    const contactId = contactData.contact.id;

    // 2. Subscribe contact to Organic Lead List
    await fetch(
      `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contactLists`,
      {
        method: "POST",
        headers: {
          "Api-Token": process.env.ACTIVE_CAMPAIGN_API_KEY!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactList: {
            list: LIST_ID,
            contact: contactId,
            status: 1,
          },
        }),
      }
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Submission failed" },
      { status: 500 }
    );
  }
}

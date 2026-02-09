import { NextResponse } from "next/server";

const LIST_ID = "2"; // Organic Lead List

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Create or update contact (sync = upsert, won't fail on duplicates)
    const contactRes = await fetch(
      `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contact/sync`,
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
      console.error("AC contact sync failed:", contactData);
      return NextResponse.json(
        { error: "We couldn't process your request right now. Please try again shortly." },
        { status: 400 }
      );
    }

    const contactId = contactData.contact?.id;
    if (!contactId) {
      console.error("No contact ID returned from AC:", contactData);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    // 2. Subscribe contact to Organic Lead List
    const listRes = await fetch(
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

    if (!listRes.ok) {
      const listData = await listRes.json();
      console.error("AC list subscribe failed:", listData);
      // Don't fail the whole submission for a list subscribe issue
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Franchise lead long error:", err);
    return NextResponse.json(
      { error: "Submission failed. Please try again." },
      { status: 500 }
    );
  }
}

// Fire-and-forget sync of a PARTIAL form lead (step 1 completed, form
// abandoned) into ActiveCampaign. Tagged "Incomplete Lead" and deliberately
// NOT subscribed to the Organic Lead List — partials feed a nurture
// automation, not Tyler's call queue. Must never block or fail the
// step-1 save, so all errors are logged and swallowed.

const AC_TAG_INCOMPLETE = process.env.AC_TAG_INCOMPLETE || "214";

export interface PartialLead {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  zip?: string;
}

export async function syncPartialToAC(lead: PartialLead): Promise<void> {
  try {
    const contactRes = await fetch(
      `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contact/sync`,
      {
        method: "POST",
        headers: {
          "Api-Token": process.env.ACTIVE_CAMPAIGN_API_KEY!,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          contact: {
            email: lead.email,
            ...(lead.firstName ? { firstName: lead.firstName } : {}),
            ...(lead.lastName ? { lastName: lead.lastName } : {}),
            ...(lead.phone ? { phone: lead.phone } : {}),
            ...(lead.zip ? { fieldValues: [{ field: "90", value: lead.zip }] } : {}),
          },
        }),
      }
    );

    const contactData = await contactRes.json();
    const contactId = contactData?.contact?.id;
    if (!contactRes.ok || !contactId) {
      console.error("AC partial sync failed:", contactData);
      return;
    }

    const tagRes = await fetch(
      `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contactTags`,
      {
        method: "POST",
        headers: {
          "Api-Token": process.env.ACTIVE_CAMPAIGN_API_KEY!,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          contactTag: { contact: contactId, tag: AC_TAG_INCOMPLETE },
        }),
      }
    );
    if (!tagRes.ok) {
      console.error("AC partial tag failed:", await tagRes.json());
    }
  } catch (err) {
    console.error("AC partial sync error:", err);
  }
}

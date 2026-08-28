// Fire-and-forget sync of a PARTIAL form lead (step 1 completed, form
// abandoned) into ActiveCampaign. Tagged "Incomplete Lead" and deliberately
// NOT subscribed to the Organic Lead List — partials feed a nurture
// automation, not Tyler's call queue. Must never block or fail the
// step-1 save, so all errors are logged and swallowed.

const AC_TAG_INCOMPLETE = process.env.AC_TAG_INCOMPLETE || "214";

// Same first-touch attribution field map as the full-submit routes
// (app/api/franchise-lead*/route.ts). Any field left unset is silently
// skipped. Without this, step-1 abandoners land in AC with no attribution
// at all — invisible to campaign A/B measurement.
const AC_ATTRIBUTION_FIELDS: Record<string, string | undefined> = {
  utm_source: process.env.AC_FIELD_UTM_SOURCE,
  utm_medium: process.env.AC_FIELD_UTM_MEDIUM,
  utm_campaign: process.env.AC_FIELD_UTM_CAMPAIGN,
  utm_content: process.env.AC_FIELD_UTM_CONTENT,
  utm_term: process.env.AC_FIELD_UTM_TERM,
  referrer: process.env.AC_FIELD_REFERRER,
  landing_page: process.env.AC_FIELD_LANDING_PAGE,
  gclid: process.env.AC_FIELD_GCLID || "354",
};

function buildAttributionFieldValues(
  attribution: Record<string, string | undefined> | undefined
): { field: string; value: string }[] {
  if (!attribution) return [];
  return Object.entries(AC_ATTRIBUTION_FIELDS)
    .filter(([key, fieldId]) => fieldId && attribution[key])
    .map(([key, fieldId]) => ({
      field: fieldId as string,
      value: String(attribution[key]),
    }));
}

export interface PartialLead {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  zip?: string;
  liquidAssets?: string;
  attribution?: Record<string, string | undefined>;
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
            fieldValues: [
              ...(lead.zip ? [{ field: "90", value: lead.zip }] : []),
              // 208 = Liquid Assets — captured on step 1 so even partial
              // leads are scoreable in AC
              ...(lead.liquidAssets
                ? [{ field: "208", value: lead.liquidAssets }]
                : []),
              ...buildAttributionFieldValues(lead.attribution),
            ],
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

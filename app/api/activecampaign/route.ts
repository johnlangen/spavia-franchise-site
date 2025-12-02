import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("🪵 [AC Proxy] Incoming form submission");

    const incoming = await req.formData();

    // 🧹 strip reCAPTCHA — ActiveCampaign cannot validate tokens from your domain
    if (incoming.has("g-recaptcha-response")) {
      console.log("🪵 [AC Proxy] Removing g-recaptcha-response before submission");
      incoming.delete("g-recaptcha-response");
    }

    const base = "https://spaviainternational.activehosted.com";
    const formUrl = `${base}/f/1`;

    // --- Step 1: warm-up GET to collect cookies & hidden fields ---
    const warmup = await fetch(formUrl, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Safari/605.1.15",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });

    const cookieHeader = warmup.headers.get("set-cookie");
    const formHtml = await warmup.text();

    // 🧩 extract the current hidden fields (s, c, m, act, v, or)
    const hiddenMatches = [...formHtml.matchAll(/name="([^"]+)"\s+value="([^"]*)"/g)];
    const hiddenFields: Record<string, string> = {};
    for (const [, name, value] of hiddenMatches) {
      hiddenFields[name] = value;
    }
    console.log("🪵 [AC Proxy] Extracted hidden fields:", hiddenFields);

    // --- Step 2: build params dynamically with fresh hidden values ---
    const params = new URLSearchParams();
    params.append("u", "1");
    params.append("f", "1");

    for (const key of ["s", "c", "m", "act", "v", "or"]) {
      if (hiddenFields[key]) params.append(key, hiddenFields[key]);
    }

    for (const [k, v] of incoming.entries()) params.append(k, String(v));
    params.append("jsonp", "true");

    const submitUrl = `${base}/proc.php?${params.toString()}`;

    // --- Step 3: real submission using cookies ---
    const submitRes = await fetch(submitUrl, {
      method: "GET",
      redirect: "manual",
      headers: {
        Cookie: cookieHeader ?? "",
        Referer: formUrl,
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Safari/605.1.15",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });

    console.log("🪵 [AC Proxy] Submit status:", submitRes.status);
    const redirect = submitRes.headers.get("location");

    // --- Step 4: handle redirect (successful submission) ---
    if (redirect) {
      console.log("🪵 [AC Proxy] Redirect detected:", redirect);
      const thankUrl = redirect.startsWith("http")
        ? redirect
        : `${base}${redirect}`;

      const final = await fetch(thankUrl, {
        headers: { Referer: submitUrl, Cookie: cookieHeader ?? "" },
      });
      const html = await final.text();
      const ok =
        /thank you|successfully subscribed|form has been submitted/i.test(html);

      return NextResponse.json({
        success: ok,
        redirected: true,
        thankYouUrl: thankUrl,
        status: final.status,
      });
    }

    // --- Step 5: no redirect (usually form error or captcha fail) ---
    const html = await submitRes.text();
    const ok =
      submitRes.ok &&
      /thank you|successfully subscribed|form has been submitted/i.test(html);

    return NextResponse.json({
      success: ok,
      redirected: false,
      status: submitRes.status,
      preview: html.slice(0, 300),
    });
  } catch (err: any) {
    console.error("💥 [AC Proxy] Error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

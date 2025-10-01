import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { captcha, ...formData } = body;

  if (!captcha) {
    return NextResponse.json({ success: false, error: "Missing captcha" }, { status: 400 });
  }

  // Verify with Google
  const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
  });

  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return NextResponse.json({ success: false, error: "Captcha failed" }, { status: 400 });
  }

  // ✅ At this point, captcha is valid
  // You can save formData to DB, send email, etc.
  console.log("Form submission:", formData);

  return NextResponse.json({ success: true });
}

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  try {
    const { email, zip, firstName, lastName, phone } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }

    const { error } = await supabase
      .from("franchise_leads")
      .upsert(
        {
          email,
          zip: zip || null,
          first_name: firstName || null,
          last_name: lastName || null,
          phone: phone || null,
          source: "short_full",
          stage: "hero_completed",
        },
        { onConflict: "email" }
      );

    if (error) {
      console.error("Supabase short form error:", error);
      return NextResponse.json({ error: "DB insert failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Short DB error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

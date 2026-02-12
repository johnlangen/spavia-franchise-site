import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  try {
    const { email, leadSource } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const { error } = await supabase
      .from("franchise_leads")
      .upsert(
        {
          email,
          source: leadSource || "short_partial",
          stage: "hero_step1",
        },
        { onConflict: "email" }
      );

    if (error) {
      console.error("Supabase step1 error:", error);
      return NextResponse.json({ error: "DB error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Step1 error:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      email,
      firstName,
      lastName,
      phone,
      zip,
      state,
      primaryGoal,
      leadSource,
    } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email required" },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("franchise_leads")
      .upsert(
        {
          email,
          first_name: firstName,
          last_name: lastName,
          phone,
          zip,
          state,
          primary_goal: primaryGoal,
          source: leadSource || "long_form",
          stage: "long_started",
        },
        { onConflict: "email" }
      );

    if (error) {
      console.error("Supabase long step 1 error:", error);
      return NextResponse.json(
        { error: "DB insert failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Long step 1 server error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

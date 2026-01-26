import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { cookies } from "next/headers";

export async function GET() {
  const authCookie = cookies().get("admin_auth")?.value;
  if (authCookie !== "1") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const orders = await query(
    "SELECT * FROM orders ORDER BY created_at DESC"
  );
  return NextResponse.json({ data: orders });
}


import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const rows = await query(
    "SELECT * FROM products WHERE id = ? LIMIT 1",
    [params.id]
  );
  const product = Array.isArray(rows) ? rows[0] : null;

  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ data: product });
}


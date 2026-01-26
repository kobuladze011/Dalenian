import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

const parseBody = async (request: NextRequest) => {
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    return request.json();
  }
  const formData = await request.formData();
  return Object.fromEntries(formData.entries());
};

export async function POST(request: NextRequest) {
  const body = await parseBody(request);
  const name = String(body.name ?? "");
  const slug = String(body.slug ?? "");
  const price = Number(body.price ?? 0);
  const material = String(body.material ?? "");
  const color = String(body.color ?? "");
  const description = String(body.description ?? "");
  const imageUrl = body.imageUrl ? String(body.imageUrl) : null;

  if (!name || !slug || !price || !material || !color) {
    return NextResponse.json({ error: "Missing fields." }, { status: 400 });
  }

  await query(
    "INSERT INTO products (name, slug, price, material, color, description, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [name, slug, price, material, color, description, imageUrl]
  );

  return NextResponse.redirect(new URL("/admin/products", request.url));
}


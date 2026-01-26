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

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await parseBody(request);
  const intent = String(body.intent ?? "update");

  if (intent === "update") {
    await query(
      "UPDATE products SET name = ?, slug = ?, price = ?, material = ?, color = ?, description = ?, image_url = ? WHERE id = ?",
      [
        String(body.name ?? ""),
        String(body.slug ?? ""),
        Number(body.price ?? 0),
        String(body.material ?? ""),
        String(body.color ?? ""),
        String(body.description ?? ""),
        body.imageUrl ? String(body.imageUrl) : null,
        params.id
      ]
    );
  }

  if (intent === "create-variant") {
    await query(
      "INSERT INTO product_variants (product_id, name, color, finish, price, stock) VALUES (?, ?, ?, ?, ?, ?)",
      [
        params.id,
        String(body.variantName ?? ""),
        String(body.variantColor ?? ""),
        String(body.variantFinish ?? ""),
        Number(body.variantPrice ?? 0),
        Number(body.variantStock ?? 0)
      ]
    );
  }

  if (intent === "update-variant") {
    await query(
      "UPDATE product_variants SET name = ?, color = ?, finish = ?, price = ?, stock = ? WHERE id = ?",
      [
        String(body.variantName ?? ""),
        String(body.variantColor ?? ""),
        String(body.variantFinish ?? ""),
        Number(body.variantPrice ?? 0),
        Number(body.variantStock ?? 0),
        Number(body.variantId ?? 0)
      ]
    );
  }

  return NextResponse.redirect(new URL(`/admin/products/${params.id}`, request.url));
}


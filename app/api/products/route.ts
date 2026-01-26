import { NextRequest, NextResponse } from "next/server";
import { listProducts } from "@/lib/products";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const products = await listProducts({
    material: searchParams.get("material") ?? undefined,
    color: searchParams.get("color") ?? undefined,
    minPrice: searchParams.get("minPrice")
      ? Number(searchParams.get("minPrice"))
      : undefined,
    maxPrice: searchParams.get("maxPrice")
      ? Number(searchParams.get("maxPrice"))
      : undefined,
    sort: searchParams.get("sort") ?? undefined
  });

  return NextResponse.json({ data: products });
}


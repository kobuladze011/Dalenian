import { query } from "@/lib/db";

export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  material: string;
  color: string;
  description: string;
  image_url: string | null;
  created_at: string;
};

export type ProductVariant = {
  id: number;
  product_id: number;
  name: string;
  color: string;
  finish: string;
  price: number;
  stock: number;
};

export const mockProducts: Product[] = [
  {
    id: 101,
    name: "Peach Clay Case",
    slug: "peach-clay-case",
    price: 38,
    material: "Handmade Clay",
    color: "Peach",
    description:
      "A soft peach clay case with rounded edges and a satin glow.",
    image_url: "/images/products/case1.jpg",
    created_at: new Date().toISOString()
  },
  {
    id: 102,
    name: "Soft Rose Case",
    slug: "soft-rose-case",
    price: 42,
    material: "Glazed Clay",
    color: "Rose",
    description:
      "Gentle rose glaze with a smooth finish, crafted to fit your daily carry.",
    image_url: "/images/products/case1.jpg",
    created_at: new Date().toISOString()
  },
  {
    id: 103,
    name: "Apricot Carry Case",
    slug: "apricot-carry-case",
    price: 45,
    material: "Satin Finish",
    color: "Apricot",
    description:
      "Apricot-toned clay with a warm satin finish for a retro feel.",
    image_url: "/images/products/case1.jpg",
    created_at: new Date().toISOString()
  }
];

export async function getFeaturedProducts() {
  try {
    const rows = await query<Product[]>(
      "SELECT * FROM products ORDER BY created_at DESC LIMIT 6"
    );
    return rows.length ? rows : mockProducts;
  } catch {
    return mockProducts;
  }
}

export async function getProductBySlug(slug: string) {
  try {
    const rows = await query<Product[]>(
      "SELECT * FROM products WHERE slug = ? LIMIT 1",
      [slug]
    );
    return rows[0] ?? mockProducts.find((product) => product.slug === slug);
  } catch {
    return mockProducts.find((product) => product.slug === slug);
  }
}

export async function getProductVariants(productId: number) {
  try {
    return await query<ProductVariant[]>(
      "SELECT * FROM product_variants WHERE product_id = ? ORDER BY price ASC",
      [productId]
    );
  } catch {
    return [];
  }
}

export async function listProducts(filters: {
  material?: string;
  color?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
}) {
  const where: string[] = [];
  const values: Array<string | number> = [];

  if (filters.material) {
    // Use LIKE for flexible material matching (e.g., "Clay" matches "Handmade Clay", "Glazed Clay")
    where.push("material LIKE ?");
    values.push(`%${filters.material}%`);
  }
  if (filters.color) {
    where.push("color = ?");
    values.push(filters.color);
  }
  if (filters.minPrice !== undefined) {
    where.push("price >= ?");
    values.push(filters.minPrice);
  }
  if (filters.maxPrice !== undefined) {
    where.push("price <= ?");
    values.push(filters.maxPrice);
  }

  const orderBy =
    filters.sort === "price-asc"
      ? "price ASC"
      : filters.sort === "price-desc"
        ? "price DESC"
        : "created_at DESC";

  const sql = `
    SELECT * FROM products
    ${where.length ? `WHERE ${where.join(" AND ")}` : ""}
    ORDER BY ${orderBy}
  `;

  try {
    const rows = await query<Product[]>(sql, values);
    if (rows.length > 0) {
      return rows;
    }
  } catch {
    // Fall through to apply filters to mockProducts
  }

  // Apply filters to mockProducts if database query fails or returns no results
  let filtered = [...mockProducts];

  if (filters.material) {
    filtered = filtered.filter((product) =>
      product.material.toLowerCase().includes(filters.material!.toLowerCase())
    );
  }
  if (filters.color) {
    filtered = filtered.filter((product) => product.color === filters.color);
  }
  if (filters.minPrice !== undefined) {
    filtered = filtered.filter((product) => product.price >= filters.minPrice!);
  }
  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter((product) => product.price <= filters.maxPrice!);
  }

  // Apply sorting
  if (filters.sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (filters.sort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else {
    filtered.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  return filtered;
}


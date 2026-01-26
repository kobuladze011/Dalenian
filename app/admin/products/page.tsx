import Link from "next/link";
import AdminNav from "@/components/AdminNav";
import { query } from "@/lib/db";
import "../admin.css";

type ProductRow = {
  id: number;
  name: string;
  slug: string;
  price: number;
  material: string;
  color: string;
};

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const products = await query<ProductRow[]>(
    "SELECT id, name, slug, price, material, color FROM products ORDER BY created_at DESC"
  );

  return (
    <main className="section admin-root">
      <div className="container" style={{ display: "grid", gap: 24 }}>
        <div>
          <span className="pill">Admin</span>
          <h1 style={{ margin: "12px 0" }}>Products</h1>
          <p style={{ color: "#7b6f67" }}>
            Update pricing, variants, and product details.
          </p>
        </div>
        <AdminNav />
        <div className="grid" style={{ gap: 12 }}>
          {products.length ? (
            products.map((product) => (
              <div
                key={product.id}
                className="card"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  flexWrap: "wrap"
                }}
              >
                <div>
                  <strong>{product.name}</strong>
                  <p style={{ margin: "6px 0 0", color: "#7b6f67" }}>
                    {product.material} · {product.color}
                  </p>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <span style={{ fontWeight: 600 }}>
                    ${product.price.toFixed(2)}
                  </span>
                  <Link
                    className="button secondary"
                    href={`/admin/products/${product.id}`}
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="card">No products yet.</div>
          )}
        </div>
        <Link className="button" href="/admin/products/new">
          Add a product
        </Link>
      </div>
    </main>
  );
}


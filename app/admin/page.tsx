import AdminNav from "@/components/AdminNav";
import { query } from "@/lib/db";
import "./admin.css";

type StatRow = { total: number };

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const [products] = await query<StatRow[]>(
    "SELECT COUNT(*) AS total FROM products"
  );
  const [orders] = await query<StatRow[]>(
    "SELECT COUNT(*) AS total FROM orders"
  );

  return (
    <main className="section admin-root">
      <div className="container" style={{ display: "grid", gap: 24 }}>
        <div>
          <span className="pill">Admin</span>
          <h1 style={{ margin: "12px 0" }}>Dashboard</h1>
          <p style={{ color: "#7b6f67" }}>
            Manage products, variants, and review orders in one place.
          </p>
        </div>
        <AdminNav />
        <div className="grid grid-2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Products</h3>
            <p style={{ fontSize: 32, margin: "12px 0" }}>
              {products?.total ?? 0}
            </p>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Orders</h3>
            <p style={{ fontSize: 32, margin: "12px 0" }}>
              {orders?.total ?? 0}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}


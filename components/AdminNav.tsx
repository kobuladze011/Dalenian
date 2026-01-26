import Link from "next/link";

export default function AdminNav() {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        gap: 16,
        alignItems: "center",
        flexWrap: "wrap"
      }}
    >
      <Link className="button secondary" href="/admin">
        Dashboard
      </Link>
      <Link className="button secondary" href="/admin/products">
        Products
      </Link>
      <Link className="button secondary" href="/admin/products/new">
        New Product
      </Link>
    </div>
  );
}


import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backdropFilter: "blur(16px)",
        background: "rgba(255, 244, 241, 0.9)",
        borderBottom: "1px solid #f6d9d0"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 0"
        }}
      >
        <Link href="/" style={{ fontWeight: 700, fontSize: 20 }}>
          Dalenian
        </Link>
        <nav style={{ display: "flex", gap: 20, fontSize: 14 }}>
          <Link href="/shop">Shop</Link>
          <Link href="/#benefits">Benefits</Link>
          <Link href="/#featured">Featured</Link>
          <Link href="/admin/login">Admin</Link>
        </nav>
      </div>
    </header>
  );
}


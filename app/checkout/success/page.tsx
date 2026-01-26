import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main className="section">
      <div className="container" style={{ display: "grid", gap: 16 }}>
        <div className="card" style={{ textAlign: "center" }}>
          <h1 style={{ marginTop: 0 }}>Order confirmed</h1>
          <p style={{ color: "#7b6f67" }}>
            Thank you for your order. We are preparing your handmade case now.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link className="button" href="/shop">
              Continue shopping
            </Link>
            <Link className="button secondary" href="/">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}


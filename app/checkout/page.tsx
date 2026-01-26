import Link from "next/link";

type CheckoutPageProps = {
  searchParams: {
    productId?: string;
    variantId?: string;
    quantity?: string;
  };
};

export default function CheckoutPage({ searchParams }: CheckoutPageProps) {
  return (
    <main className="section">
      <div className="container" style={{ display: "grid", gap: 24 }}>
        <div>
          <span className="pill">Checkout</span>
          <h1 style={{ margin: "12px 0" }}>Secure checkout</h1>
          <p style={{ color: "#7b6f67" }}>
            Checkout is currently unavailable while Stripe is removed.
          </p>
        </div>
        <div className="card" style={{ display: "grid", gap: 12 }}>
          <h3 style={{ marginTop: 0 }}>Coming soon</h3>
          <p style={{ color: "#7b6f67" }}>
            We are preparing a new payment flow. Browse the shop meanwhile.
          </p>
          <Link className="button" href="/shop">
            Visit the shop
          </Link>
        </div>
      </div>
    </main>
  );
}


"use client";

import { useState } from "react";

type Variant = {
  id: number;
  name: string;
  color: string;
  finish: string;
  price: number;
  stock: number;
};

type AddToCartFormProps = {
  productId: number;
  variants: Variant[];
};

export default function AddToCartForm({
  productId,
  variants
}: AddToCartFormProps) {
  const [variantId, setVariantId] = useState<number | "">(
    variants[0]?.id ?? ""
  );
  const [quantity, setQuantity] = useState(1);
  const [notice] = useState(
    "Checkout is temporarily disabled while Stripe is removed."
  );

  return (
    <div className="card" style={{ display: "grid", gap: 12 }}>
      {variants.length ? (
        <div>
          <label style={{ fontSize: 12, color: "#7b6f67" }}>Variant</label>
          <select
            className="select"
            value={variantId}
            onChange={(event) =>
              setVariantId(
                event.target.value ? Number(event.target.value) : ""
              )
            }
          >
            {variants.map((variant) => (
              <option key={variant.id} value={variant.id}>
                {variant.name} · {variant.color} · {variant.finish} · $
                {variant.price.toFixed(2)}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div style={{ color: "#7b6f67", fontSize: 13 }}>
          No variants listed yet. We will use the base product price.
        </div>
      )}
      <div>
        <label style={{ fontSize: 12, color: "#7b6f67" }}>Quantity</label>
        <input
          className="input"
          type="number"
          min={1}
          max={10}
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
        />
      </div>
      <button className="button" disabled>
        Checkout disabled
      </button>
      <p style={{ color: "#7b6f67", margin: 0 }}>{notice}</p>
    </div>
  );
}


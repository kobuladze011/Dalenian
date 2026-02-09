import Link from "next/link";

type ProductCardProps = {
  id: number;
  slug: string;
  name: string;
  price: number;
  imageUrl?: string | null;
  material: string;
};

export default function ProductCard({
  slug,
  name,
  price,
  imageUrl,
  material
}: ProductCardProps) {
  return (
    <Link href={`/product/${slug}`} className="card">
      <div
        style={{
          height: 198,
          borderRadius: 18,
          background: "#ffe6df",
          display: "grid",
          placeItems: "center",
          marginBottom: 16,
          overflow: "hidden"
        }}
      >
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span style={{ color: "#7b6f67", fontSize: 14 }}>
            Image coming soon
          </span>
        )}
      </div>
      <h3 style={{ margin: "0 0 6px" }}>{name}</h3>
      <p style={{ margin: 0, color: "#7b6f67", fontSize: 13 }}>{material}</p>
      <p style={{ margin: "10px 0 0", fontWeight: 600 }}>
        ${price.toFixed(2)}
      </p>
    </Link>
  );
}


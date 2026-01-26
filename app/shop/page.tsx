import FilterBar from "@/components/FilterBar";
import ProductCard from "@/components/ProductCard";
import { listProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Shop",
  description: "Browse Dalenian handmade clay lighter cases."
};

type ShopPageProps = {
  searchParams: {
    material?: string;
    color?: string;
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
  };
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const products = await listProducts({
    material: searchParams.material,
    color: searchParams.color,
    minPrice: searchParams.minPrice ? Number(searchParams.minPrice) : undefined,
    maxPrice: searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined,
    sort: searchParams.sort
  });

  return (
    <main className="section">
      <div className="container" style={{ display: "grid", gap: 24 }}>
        <div>
          <span className="pill">Shop</span>
          <h1 style={{ margin: "12px 0" }}>All lighter cases</h1>
          <p style={{ color: "#7b6f67" }}>
            Filter by material, color, and finish to find your perfect match.
          </p>
        </div>
        <FilterBar />
        <div className="grid grid-3">
          {products.length ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                slug={product.slug}
                name={product.name}
                price={product.price}
                imageUrl={product.image_url}
                material={product.material}
              />
            ))
          ) : (
            <div className="card">No products match your filters yet.</div>
          )}
        </div>
      </div>
    </main>
  );
}


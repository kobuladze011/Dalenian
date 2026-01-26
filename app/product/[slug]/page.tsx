import { notFound } from "next/navigation";
import AddToCartForm from "@/components/AddToCartForm";
import ProductGallery from "@/components/ProductGallery";
import { getProductBySlug, getProductVariants } from "@/lib/products";

type ProductPageProps = {
  params: { slug: string };
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    return { title: "Product not found" };
  }
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.image_url ? [product.image_url] : []
    }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return notFound();
  }

  const variants = await getProductVariants(product.id);
  const images = product.image_url ? [product.image_url] : [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: images,
    brand: "Dalenian",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <main className="section">
      <div className="container" style={{ display: "grid", gap: 32 }}>
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        >
          <ProductGallery images={images} name={product.name} />
          <div style={{ display: "grid", gap: 16 }}>
            <span className="pill">Handmade</span>
            <h1 style={{ margin: 0 }}>{product.name}</h1>
            <p style={{ margin: 0, color: "#7b6f67" }}>
              {product.material} · {product.color}
            </p>
            <p style={{ fontSize: 22, fontWeight: 600 }}>
              ${product.price.toFixed(2)}
            </p>
            <div className="card" style={{ display: "grid", gap: 12 }}>
              <h3 style={{ marginTop: 0 }}>Details at a glance</h3>
              <div className="grid grid-2">
                <div>
                  <strong>Fits</strong>
                  <p style={{ margin: "6px 0 0", color: "#7b6f67" }}>
                    Standard pocket lighters
                  </p>
                </div>
                <div>
                  <strong>Finish</strong>
                  <p style={{ margin: "6px 0 0", color: "#7b6f67" }}>
                    Satin clay glaze
                  </p>
                </div>
                <div>
                  <strong>Care</strong>
                  <p style={{ margin: "6px 0 0", color: "#7b6f67" }}>
                    Wipe clean, avoid soaking
                  </p>
                </div>
                <div>
                  <strong>In the box</strong>
                  <p style={{ margin: "6px 0 0", color: "#7b6f67" }}>
                    Case + cotton pouch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Product description</h3>
            <p style={{ color: "#7b6f67" }}>
              {product.description ||
                "Each Dalenian case is formed by hand and finished with a soft peach glaze."}
            </p>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Shipping & returns</h3>
            <p style={{ color: "#7b6f67" }}>
              Ships in 2-4 business days. Returns accepted within 14 days of
              delivery for unused items.
            </p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}


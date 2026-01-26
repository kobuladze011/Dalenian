import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, mockProducts, type Product } from "@/lib/products";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let featured: Product[] = [];
  try {
    featured = await getFeaturedProducts();
  } catch {
    featured = [];
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Dalenian",
    description:
      "Premium handmade clay lighter cases crafted for protection and style.",
    url: "https://dalenian.com",
    brand: {
      "@type": "Brand",
      name: "Dalenian"
    }
  };

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className={`${styles.heroCard} card`}>
            <div>
              <span className="pill">Handmade lighter cases</span>
              <h1 className={styles.heroTitle}>
                Peach‑pink lighters, retro and sweet.
              </h1>
              <p className={styles.heroCopy}>
                Dalenian shapes clay cases for your favorite lighters: soft
                edges, warm glaze, and a nostalgic palette that feels curated.
              </p>
              <div className={styles.heroActions}>
                <Link className="button" href="/shop">
                  Shop the collection
                </Link>
                <Link className="button secondary" href="/#benefits">
                  Why Dalenian
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="featured">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="section-title" style={{ margin: 0 }}>
              Featured lighter cases
            </h2>
            <Link href="/shop" style={{ color: "#dd6b54", fontWeight: 600 }}>
              View all
            </Link>
          </div>
          <div className={styles.featuredGrid}>
            {(featured.length ? featured.slice(0, 3) : mockProducts).map(
              (product, index) => (
                <Link
                  key={`${product.name}-${index}`}
                  href={`/product/${product.slug}`}
                  className={`card ${styles.featuredCard}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className={styles.featuredImage}
                    src={product.image_url ?? "/images/products/case1.jpg"}
                    alt={product.name}
                  />
                  <div className={styles.featuredMeta}>
                    <h3 className={styles.featuredTitle}>{product.name}</h3>
                    <p className={styles.featuredNote}>{product.material}</p>
                    <p className={styles.featuredPrice}>
                      ${Number(product.price).toFixed(2)}
                    </p>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section" id="benefits">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 32 }}>
            Why the clay matters
          </h2>
          <div className="grid grid-3">
            {[
              {
                title: "Premium material",
                text: "Warm, tactile clay finished with a soft satin glaze."
              },
              {
                title: "Everyday protection",
                text: "Rounded edges protect from scuffs and pocket wear."
              },
              {
                title: "Signature style",
                text: "A muted 70s palette with peach and oat tones."
              }
            ].map((benefit) => (
              <div key={benefit.title} className="card">
                <h3 style={{ marginTop: 0 }}>{benefit.title}</h3>
                <p style={{ color: "#7b6f67" }}>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`${styles.ctaCard} card`}>
            <div>
              <h2 style={{ marginTop: 0 }}>Carry a tiny retro artifact.</h2>
              <p style={{ color: "#4d4239" }}>
                Explore limited runs, custom finishes, and soft‑tone palettes.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <Link className="button" href="/shop">
                Shop now
              </Link>
              <Link className="button secondary" href="/checkout">
                Start checkout
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}


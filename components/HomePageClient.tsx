"use client";

import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useI18n } from "@/lib/i18n";
import { type Product } from "@/lib/products";
import styles from "../app/page.module.css";

export default function HomePageClient({
  featured
}: {
  featured: Product[];
}) {
  const { t } = useI18n();

  return (
    <>
      <section className="section">
        <div className="container">
          <div className={`${styles.heroCard} card`}>
            <div>
              <span className="pill">{t.home.pill}</span>
              <h1 className={styles.heroTitle}>{t.home.heroTitle}</h1>
              <p className={styles.heroCopy}>{t.home.heroDescription}</p>
              <div className={styles.heroActions}>
                <Link className="button" href="/shop">
                  {t.home.shopCollection}
                </Link>
                <Link className="button secondary" href="/#benefits">
                  {t.home.whyDalenian}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`${styles.countersCard} card`}>
            <AnimatedCounter
              end={130}
              label={t.home.counter1Label}
            />
            <AnimatedCounter
              end={150}
              label={t.home.counter2Label}
            />
            <AnimatedCounter
              end={4}
              label={t.home.counter3Label}
            />
          </div>
        </div>
      </section>

      <section className="section" id="featured">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="section-title" style={{ margin: 0 }}>
              {t.home.featuredTitle}
            </h2>
            <Link href="/shop" style={{ color: "#dd6b54", fontWeight: 600 }}>
              {t.home.viewAll}
            </Link>
          </div>
          <div className={styles.featuredGrid}>
            {featured.slice(0, 3).map((product, index) => (
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
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="benefits">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 32 }}>
            {t.home.benefitsTitle}
          </h2>
          <div className="grid grid-3">
            {[
              {
                title: t.home.benefit1Title,
                text: t.home.benefit1Text
              },
              {
                title: t.home.benefit2Title,
                text: t.home.benefit2Text
              },
              {
                title: t.home.benefit3Title,
                text: t.home.benefit3Text
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
              <h2 style={{ marginTop: 0 }}>{t.home.ctaTitle}</h2>
              <p style={{ color: "#4d4239" }}>{t.home.ctaDescription}</p>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <Link className="button" href="/shop">
                {t.home.shopNow}
              </Link>
              <Link className="button secondary" href="/checkout">
                {t.home.startCheckout}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

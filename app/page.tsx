import { getFeaturedProducts, mockProducts, type Product } from "@/lib/products";
import HomePageClient from "@/components/HomePageClient";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let featured: Product[] = [];
  try {
    featured = await getFeaturedProducts();
  } catch {
    featured = [];
  }

  // Use mock products if no DB products
  if (featured.length === 0) {
    featured = mockProducts;
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
      <HomePageClient featured={featured} />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}


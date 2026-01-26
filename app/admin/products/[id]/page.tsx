import Link from "next/link";
import AdminNav from "@/components/AdminNav";
import ImageUpload from "@/components/ImageUpload";
import { query } from "@/lib/db";
import "../../admin.css";

type ProductRow = {
  id: number;
  name: string;
  slug: string;
  price: number;
  material: string;
  color: string;
  description: string;
  image_url: string | null;
};

type VariantRow = {
  id: number;
  name: string;
  color: string;
  finish: string;
  price: number;
  stock: number;
};

type AdminEditPageProps = {
  params: { id: string };
};

export const dynamic = "force-dynamic";

export default async function AdminEditProductPage({
  params
}: AdminEditPageProps) {
  const [product] = await query<ProductRow[]>(
    "SELECT * FROM products WHERE id = ?",
    [params.id]
  );
  const variants = await query<VariantRow[]>(
    "SELECT * FROM product_variants WHERE product_id = ?",
    [params.id]
  );

  if (!product) {
    return (
      <main className="section">
        <div className="container">
          <div className="card">Product not found.</div>
        </div>
      </main>
    );
  }

  return (
    <main className="section admin-root">
      <div className="container" style={{ display: "grid", gap: 24 }}>
        <div>
          <span className="pill">Admin</span>
          <h1 style={{ margin: "12px 0" }}>Edit product</h1>
        </div>
        <AdminNav />
        <form
          className="card"
          action={`/api/admin/products/${product.id}`}
          method="post"
          style={{ display: "grid", gap: 12 }}
        >
          <input type="hidden" name="intent" value="update" />
          <input
            className="input"
            name="name"
            defaultValue={product.name}
          />
          <input
            className="input"
            name="slug"
            defaultValue={product.slug}
          />
          <div className="grid grid-2">
            <input
              className="input"
              name="price"
              defaultValue={product.price}
            />
            <input
              className="input"
              name="material"
              defaultValue={product.material}
            />
          </div>
          <div className="grid grid-2">
            <input
              className="input"
              name="color"
              defaultValue={product.color}
            />
            <input
              className="input"
              name="imageUrl"
              defaultValue={product.image_url ?? ""}
              id="edit-image-url"
            />
          </div>
          <ImageUpload inputId="edit-image-url" />
          <textarea
            className="textarea"
            name="description"
            rows={4}
            defaultValue={product.description}
          />
          <button className="button" type="submit">
            Update product
          </button>
        </form>

        <div className="card" style={{ display: "grid", gap: 12 }}>
          <h3 style={{ marginTop: 0 }}>Variants</h3>
          {variants.length ? (
            variants.map((variant) => (
              <form
                key={variant.id}
                action={`/api/admin/products/${product.id}`}
                method="post"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                  gap: 8,
                  alignItems: "center"
                }}
              >
                <input type="hidden" name="intent" value="update-variant" />
                <input type="hidden" name="variantId" value={variant.id} />
                <input
                  className="input"
                  name="variantName"
                  defaultValue={variant.name}
                />
                <input
                  className="input"
                  name="variantColor"
                  defaultValue={variant.color}
                />
                <input
                  className="input"
                  name="variantFinish"
                  defaultValue={variant.finish}
                />
                <input
                  className="input"
                  name="variantPrice"
                  defaultValue={variant.price}
                />
                <input
                  className="input"
                  name="variantStock"
                  defaultValue={variant.stock}
                />
                <button className="button secondary" type="submit">
                  Save
                </button>
              </form>
            ))
          ) : (
            <p style={{ color: "#7b6f67" }}>No variants yet.</p>
          )}
        </div>

        <form
          className="card"
          action={`/api/admin/products/${product.id}`}
          method="post"
          style={{ display: "grid", gap: 12 }}
        >
          <input type="hidden" name="intent" value="create-variant" />
          <h3 style={{ marginTop: 0 }}>Add new variant</h3>
          <div className="grid grid-2">
            <input
              className="input"
              name="variantName"
              placeholder="Variant name"
              required
            />
            <input
              className="input"
              name="variantColor"
              placeholder="Color"
              required
            />
          </div>
          <div className="grid grid-2">
            <input
              className="input"
              name="variantFinish"
              placeholder="Finish"
              required
            />
            <input
              className="input"
              name="variantPrice"
              placeholder="Price"
              required
            />
          </div>
          <input
            className="input"
            name="variantStock"
            placeholder="Stock"
            required
          />
          <button className="button" type="submit">
            Add variant
          </button>
          <Link className="button secondary" href="/admin/products">
            Back to list
          </Link>
        </form>
      </div>
    </main>
  );
}


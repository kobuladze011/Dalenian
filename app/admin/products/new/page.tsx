import Link from "next/link";
import AdminNav from "@/components/AdminNav";
import ImageUpload from "@/components/ImageUpload";
import "../../admin.css";

export default function AdminNewProductPage() {
  return (
    <main className="section admin-root">
      <div className="container" style={{ display: "grid", gap: 24 }}>
        <div>
          <span className="pill">Admin</span>
          <h1 style={{ margin: "12px 0" }}>Create product</h1>
          <p style={{ color: "#7b6f67" }}>
            Add a handmade clay lighter case to the store.
          </p>
        </div>
        <AdminNav />
        <form
          className="card"
          action="/api/admin/products"
          method="post"
          style={{ display: "grid", gap: 12 }}
        >
          <input className="input" name="name" placeholder="Name" required />
          <input className="input" name="slug" placeholder="Slug" required />
          <div className="grid grid-2">
            <input
              className="input"
              name="price"
              placeholder="Price"
              required
            />
            <input
              className="input"
              name="material"
              placeholder="Material"
              required
            />
          </div>
          <div className="grid grid-2">
            <input
              className="input"
              name="color"
              placeholder="Color"
              required
            />
            <input
              className="input"
              name="imageUrl"
              placeholder="Image URL"
              id="new-image-url"
            />
          </div>
          <ImageUpload inputId="new-image-url" />
          <textarea
            className="textarea"
            name="description"
            rows={4}
            placeholder="Description"
          />
          <button className="button" type="submit">
            Save product
          </button>
          <Link className="button secondary" href="/admin/products">
            Cancel
          </Link>
        </form>
      </div>
    </main>
  );
}


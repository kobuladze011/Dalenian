import "../admin.css";

export default function AdminLoginPage() {
  return (
    <main className="section admin-root">
      <div className="container" style={{ display: "grid", gap: 24 }}>
        <div>
          <span className="pill">Admin</span>
          <h1 style={{ margin: "12px 0" }}>Admin access</h1>
          <p style={{ color: "#7b6f67" }}>
            Enter the admin password to continue.
          </p>
        </div>
        <form
          className="card"
          action="/api/admin/login"
          method="post"
          style={{ display: "grid", gap: 12 }}
        >
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button className="button" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}


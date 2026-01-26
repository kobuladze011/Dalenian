import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="container">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Page not found</h2>
          <p style={{ color: "#7b6f67" }}>
            The page you are looking for does not exist.
          </p>
          <Link className="button" href="/">
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}


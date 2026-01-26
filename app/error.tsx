"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <main className="section">
      <div className="container">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Something went wrong</h2>
          <p style={{ color: "#7b6f67" }}>{error.message}</p>
        </div>
      </div>
    </main>
  );
}


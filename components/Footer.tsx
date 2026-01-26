export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #f6d9d0",
        padding: "32px 0",
        background: "#fff4f1"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap"
        }}
      >
        <div>
          <strong>Dalenian</strong>
          <p style={{ margin: "6px 0 0", color: "#7b6f67" }}>
            Handmade clay lighter cases with a premium peach glow.
          </p>
        </div>
        <div style={{ color: "#7b6f67", fontSize: 13 }}>
          © {new Date().getFullYear()} Dalenian. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


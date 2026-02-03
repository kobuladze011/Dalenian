"use client";

import { useI18n } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        alignItems: "center",
        padding: "4px",
        background: "rgba(255, 255, 255, 0.6)",
        borderRadius: 8,
        border: "1px solid rgba(42, 36, 31, 0.15)"
      }}
    >
      <button
        onClick={() => setLanguage("en")}
        style={{
          padding: "6px 12px",
          border: "none",
          background: language === "en" ? "#f6d9d0" : "transparent",
          borderRadius: 6,
          cursor: "pointer",
          fontSize: 13,
          fontWeight: language === "en" ? 600 : 400,
          color: language === "en" ? "#2a241f" : "#75665c",
          transition: "all 0.2s ease"
        }}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ka")}
        style={{
          padding: "6px 12px",
          border: "none",
          background: language === "ka" ? "#f6d9d0" : "transparent",
          borderRadius: 6,
          cursor: "pointer",
          fontSize: 13,
          fontWeight: language === "ka" ? 600 : 400,
          color: language === "ka" ? "#2a241f" : "#75665c",
          transition: "all 0.2s ease"
        }}
      >
        KA
      </button>
    </div>
  );
}

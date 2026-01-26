"use client";

import { useState } from "react";

type ImageUploadProps = {
  inputId: string;
};

export default function ImageUpload({ inputId }: ImageUploadProps) {
  const [status, setStatus] = useState("");

  const upload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setStatus("Uploading...");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error ?? "Upload failed.");
      }
      const input = document.getElementById(inputId) as HTMLInputElement | null;
      if (input) {
        input.value = payload.url;
      }
      setStatus("Uploaded.");
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Upload failed.");
    }
  };

  return (
    <div style={{ display: "grid", gap: 6 }}>
      <input type="file" accept="image/*" onChange={upload} />
      {status ? <span style={{ fontSize: 12 }}>{status}</span> : null}
    </div>
  );
}


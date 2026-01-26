"use client";

import { useState } from "react";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active];

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div
        style={{
          height: 360,
          borderRadius: 20,
          background: "#ffe6df",
          overflow: "hidden"
        }}
      >
        {current ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={current}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              height: "100%",
              display: "grid",
              placeItems: "center",
              color: "#7b6f67"
            }}
          >
            No images yet
          </div>
        )}
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {images.map((img, index) => (
          <button
            key={`${img}-${index}`}
            onClick={() => setActive(index)}
            style={{
              border: active === index ? "2px solid #f59d82" : "1px solid #f0dad3",
              borderRadius: 12,
              padding: 0,
              width: 64,
              height: 64,
              overflow: "hidden",
              background: "transparent"
            }}
            aria-label={`View ${name} image ${index + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}


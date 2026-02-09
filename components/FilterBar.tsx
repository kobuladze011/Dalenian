"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const state = useMemo(
    () => ({
      material: searchParams.get("material") ?? "",
      color: searchParams.get("color") ?? "",
      sort: searchParams.get("sort") ?? "newest",
      minPrice: searchParams.get("minPrice") ?? "",
      maxPrice: searchParams.get("maxPrice") ?? ""
    }),
    [searchParams]
  );

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <div
      className="card"
      style={{
        display: "grid",
        gap: 12,
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))"
      }}
    >
      <div>
        <label style={{ fontSize: 12, color: "#7b6f67" }}>Material</label>
        <select
          className="select"
          value={state.material}
          onChange={(event) => updateParam("material", event.target.value)}
        >
          <option value="">All</option>
          <option value="Clay">Clay</option>
          <option value="Glaze">Glaze</option>
          <option value="Satin">Satin</option>
        </select>
      </div>
      <div>
        <label style={{ fontSize: 12, color: "#7b6f67" }}>Color</label>
        <select
          className="select"
          value={state.color}
          onChange={(event) => updateParam("color", event.target.value)}
        >
          <option value="">All</option>
          <option value="Peach">Peach</option>
          <option value="Rose">Rose</option>
          <option value="Apricot">Apricot</option>
        </select>
      </div>
      <div>
        <label style={{ fontSize: 12, color: "#7b6f67" }}>Sort</label>
        <select
          className="select"
          value={state.sort}
          onChange={(event) => updateParam("sort", event.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <div>
        <label style={{ fontSize: 12, color: "#7b6f67" }}>Min Price</label>
        <input
          className="input"
          value={state.minPrice}
          onChange={(event) => updateParam("minPrice", event.target.value)}
          placeholder="20"
        />
      </div>
      <div>
        <label style={{ fontSize: 12, color: "#7b6f67" }}>Max Price</label>
        <input
          className="input"
          value={state.maxPrice}
          onChange={(event) => updateParam("maxPrice", event.target.value)}
          placeholder="90"
        />
      </div>
    </div>
  );
}


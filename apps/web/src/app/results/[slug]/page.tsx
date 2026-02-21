"use client";

import { useEffect, useState } from "react";

export default function ResultsPage({ params }: { params: { slug: string } }) {
  const [percent, setPercent] = useState<number | null>(null);

  useEffect(() => {
    const keys = Object.keys(localStorage).filter((k) => k.startsWith("x1academy_result_"));
    const last = keys.sort().slice(-1)[0];
    if (!last) return;
    try {
      const r = JSON.parse(localStorage.getItem(last) || "null");
      setPercent(r?.percent ?? null);
    } catch {
      // ignore malformed local storage values
    }
  }, []);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <h2 style={{ marginTop: 0 }}>Results</h2>
      <div style={{ padding: 14, borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)" }}>
        <div style={{ fontWeight: 900, fontSize: 22 }}>{percent ?? "—"}%</div>
        <div style={{ opacity: 0.8, marginTop: 6 }}>
          Next: we&apos;ll persist this result to the API and award badges automatically.
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a href="/curriculum" style={btnStyle()}>
          Back to Curriculum
        </a>
        <a href={`/lesson/${params.slug}`} style={btnStyle(true)}>
          Review Lesson
        </a>
      </div>
    </div>
  );
}

function btnStyle(primary = false): React.CSSProperties {
  return {
    padding: "10px 14px",
    borderRadius: 12,
    textDecoration: "none",
    color: primary ? "#0b0b10" : "#f4f4f6",
    background: primary ? "#f4f4f6" : "rgba(255,255,255,0.12)",
    fontWeight: 800
  };
}

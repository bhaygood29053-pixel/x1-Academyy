export function ProgressBar({ value, max }: { value: number; max: number }) {
  const pct = max <= 0 ? 0 : Math.min(100, Math.round((value / max) * 100));
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span>Progress</span>
        <span>{pct}%</span>
      </div>
      <div style={{ height: 10, borderRadius: 10, background: "rgba(255,255,255,0.12)" }}>
        <div
          style={{
            height: 10,
            borderRadius: 10,
            width: `${pct}%`,
            background: "rgba(255,255,255,0.65)"
          }}
        />
      </div>
    </div>
  );
}

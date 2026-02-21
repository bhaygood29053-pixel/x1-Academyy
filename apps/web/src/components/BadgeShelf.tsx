import type { BadgeDef } from "@/lib/types";

export function BadgeShelf({ badges, owned }: { badges: BadgeDef[]; owned: string[] }) {
  return (
    <div>
      <h3 style={{ margin: "16px 0 8px" }}>Badges</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
        {badges.map((b) => {
          const has = owned.includes(b.badge_id);
          return (
            <div
              key={b.badge_id}
              style={{
                padding: 12,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.14)",
                opacity: has ? 1 : 0.45
              }}
            >
              <div style={{ fontWeight: 700 }}>{b.name}</div>
              <div style={{ fontSize: 13, marginTop: 6 }}>{b.description}</div>
              <div style={{ fontSize: 12, marginTop: 10, opacity: 0.8 }}>{has ? "Owned" : "Locked"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

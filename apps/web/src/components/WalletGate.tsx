"use client";

import { useEffect, useState } from "react";

export function WalletGate({ children }: { children: React.ReactNode }) {
  const [pubkey, setPubkey] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("x1academy_pubkey");
    if (stored) setPubkey(stored);
  }, []);

  if (!pubkey) {
    return (
      <div style={{ padding: 16, borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)" }}>
        <h3>Connect Wallet (MVP stub)</h3>
        <p style={{ opacity: 0.85 }}>
          For now, enter any string as your “pubkey”. In Step 4 we&apos;ll wire Backpack + signature auth.
        </p>
        <input
          placeholder="Paste pubkey…"
          style={{ width: "100%", padding: 10, borderRadius: 10, marginTop: 8 }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const v = (e.target as HTMLInputElement).value.trim();
              if (v.length > 0) {
                localStorage.setItem("x1academy_pubkey", v);
                setPubkey(v);
              }
            }
          }}
        />
      </div>
    );
  }

  return <>{children}</>;
}

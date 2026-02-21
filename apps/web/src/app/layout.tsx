import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "X1 Academy",
  description: "Learn X1 + Xen by playing stories, quizzes, and puzzles."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
          background: "#0b0b10",
          color: "#f4f4f6"
        }}
      >
        <div style={{ maxWidth: 980, margin: "0 auto", padding: 18 }}>
          <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <a href="/" style={{ color: "inherit", textDecoration: "none", fontWeight: 900, letterSpacing: 0.2 }}>
              X1 Academy
            </a>
            <nav style={{ display: "flex", gap: 12, opacity: 0.9 }}>
              <a href="/curriculum" style={{ color: "inherit" }}>
                Curriculum
              </a>
            </nav>
          </header>
          {children}
          <footer style={{ marginTop: 28, opacity: 0.65, fontSize: 12 }}>
            MVP: off-chain badges • Phase 2+: on-chain attestations/NFTs
          </footer>
        </div>
      </body>
    </html>
  );
}

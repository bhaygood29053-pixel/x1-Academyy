import { BadgeShelf } from "@/components/BadgeShelf";
import { WalletGate } from "@/components/WalletGate";
import { loadBadges, loadLessonIndex } from "@/lib/content";

export default async function HomePage() {
  const [lessons, badgesFile] = await Promise.all([loadLessonIndex(), loadBadges()]);
  const owned: string[] = [];

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ margin: 0 }}>Learn X1 + Xen by playing</h1>
      <p style={{ marginTop: 0, opacity: 0.85 }}>Stories, quizzes, puzzles, and badge rewards. Start with Track A.</p>

      <WalletGate>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href="/curriculum" style={btnStyle()}>
            Open Curriculum
          </a>
          <a href={`/lesson/${lessons[0]?.slug || "what-is-x1"}`} style={btnStyle(true)}>
            Start Lesson 1
          </a>
        </div>

        <BadgeShelf badges={badgesFile.badges} owned={owned} />
      </WalletGate>
    </div>
  );
}

function btnStyle(primary = false): React.CSSProperties {
  return {
    padding: "10px 14px",
    borderRadius: 12,
    textDecoration: "none",
    color: "#0b0b10",
    background: primary ? "#f4f4f6" : "rgba(244,244,246,0.82)",
    fontWeight: 800
  };
}

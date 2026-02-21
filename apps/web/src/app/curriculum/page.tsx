import { loadLessonIndex } from "@/lib/content";

export default async function CurriculumPage() {
  const lessons = await loadLessonIndex();

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Curriculum</h2>
      <div style={{ display: "grid", gap: 10 }}>
        {lessons.map((l) => (
          <a
            key={l.lesson_id}
            href={`/lesson/${l.slug}`}
            style={{
              padding: 12,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.14)",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            <div style={{ fontWeight: 900 }}>{l.title}</div>
            <div style={{ fontSize: 13, opacity: 0.8, marginTop: 6 }}>
              {l.track} • {l.difficulty} • ~{l.estimated_minutes} min
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

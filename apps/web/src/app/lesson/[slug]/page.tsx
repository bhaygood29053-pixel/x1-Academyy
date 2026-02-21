import { loadLessonIndex, loadLessonMarkdown } from "@/lib/content";

export default async function LessonPage({ params }: { params: { slug: string } }) {
  const lessons = await loadLessonIndex();
  const lesson = lessons.find((l) => l.slug === params.slug);
  if (!lesson) return <div>Lesson not found.</div>;

  const md = await loadLessonMarkdown(lesson.content_file);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <h2 style={{ marginTop: 0 }}>{lesson.title}</h2>
      <div style={{ opacity: 0.8, fontSize: 13 }}>
        {lesson.track} • {lesson.difficulty} • ~{lesson.estimated_minutes} min
      </div>

      <article
        style={{
          padding: 14,
          borderRadius: 14,
          border: "1px solid rgba(255,255,255,0.14)",
          whiteSpace: "pre-wrap",
          lineHeight: 1.45
        }}
      >
        {md}
      </article>

      <a
        href={`/quiz/${lesson.slug}`}
        style={{
          padding: "10px 14px",
          borderRadius: 12,
          fontWeight: 900,
          width: "fit-content",
          background: "#f4f4f6",
          color: "#0b0b10",
          textDecoration: "none"
        }}
      >
        Take Quiz
      </a>
    </div>
  );
}

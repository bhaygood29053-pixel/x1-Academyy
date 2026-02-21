import { QuizRunner } from "@/components/QuizRunner";
import { loadLessonIndex, loadQuestionBank } from "@/lib/content";

export default async function QuizPage({ params }: { params: { slug: string } }) {
  const lessons = await loadLessonIndex();
  const lesson = lessons.find((l) => l.slug === params.slug);
  if (!lesson) return <div>Lesson not found.</div>;

  const bank = await loadQuestionBank(lesson.question_bank_file);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <h2 style={{ marginTop: 0 }}>Quiz — {lesson.title}</h2>

      <QuizRunner
        bank={bank}
        onSubmit={(r) => {
          if (typeof window !== "undefined") {
            localStorage.setItem(`x1academy_result_${lesson.lesson_id}`, JSON.stringify(r));
            window.location.href = `/results/${lesson.slug}`;
          }
        }}
      />
    </div>
  );
}

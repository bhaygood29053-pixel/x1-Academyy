import type { Question } from "@/lib/types";

export type AnswerMap = Record<string, string | boolean | string[]>;

export function scoreQuiz(questions: Question[], answers: AnswerMap) {
  let earned = 0;
  let possible = 0;

  const details = questions.map((q) => {
    possible += q.points;
    const user = answers[q.id];
    const ok = isCorrect(q, user);
    if (ok) earned += q.points;
    return { id: q.id, ok, points: q.points };
  });

  const percent = possible === 0 ? 0 : Math.round((earned / possible) * 100);
  return { earned, possible, percent, details };
}

function isCorrect(q: Question, user: unknown): boolean {
  if (user === undefined || user === null) return false;

  if (q.type === "true_false") {
    return user === q.answer;
  }

  if (q.type === "short") {
    if (typeof user !== "string") return false;
    const target = String(q.answer).trim().toLowerCase();
    return user.trim().toLowerCase() === target;
  }

  if (q.type === "mcq") {
    if (typeof user !== "string") return false;
    return user === q.answer;
  }

  if (q.type === "multi") {
    if (!Array.isArray(user) || !Array.isArray(q.answer)) return false;
    const u = [...user].sort().join("|");
    const a = [...q.answer].sort().join("|");
    return u === a;
  }

  return false;
}

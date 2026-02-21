"use client";

import { useMemo, useState } from "react";
import type { Question, QuestionBank } from "@/lib/types";
import { scoreQuiz, type AnswerMap } from "@/lib/scoring";

export function QuizRunner({ bank, onSubmit }: { bank: QuestionBank; onSubmit: (r: ReturnType<typeof scoreQuiz>) => void }) {
  const questions = useMemo(() => shuffle([...bank.questions]), [bank.lesson_id]);
  const [answers, setAnswers] = useState<AnswerMap>({});

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {questions.map((q) => (
        <QuestionCard key={q.id} q={q} value={answers[q.id]} onChange={(v) => setAnswers((a) => ({ ...a, [q.id]: v }))} />
      ))}

      <button
        style={{ padding: "10px 14px", borderRadius: 12, fontWeight: 700 }}
        onClick={() => {
          const result = scoreQuiz(questions, answers);
          onSubmit(result);
        }}
      >
        Submit Quiz
      </button>

      <div style={{ fontSize: 12, opacity: 0.75 }}>Passing score: {bank.pass_percent}%</div>
    </div>
  );
}

function QuestionCard({ q, value, onChange }: { q: Question; value: unknown; onChange: (v: unknown) => void }) {
  return (
    <div style={{ padding: 12, borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)" }}>
      <div style={{ fontWeight: 700 }}>{q.prompt}</div>
      <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}>{q.points} pts</div>

      {(q.type === "mcq" || q.type === "multi") && (
        <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
          {(q.options || []).map((opt) => {
            const checked = q.type === "mcq" ? value === opt : Array.isArray(value) && value.includes(opt);
            return (
              <label key={opt} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input
                  type={q.type === "mcq" ? "radio" : "checkbox"}
                  name={q.id}
                  checked={checked}
                  onChange={(e) => {
                    if (q.type === "mcq") return onChange(opt);
                    const next = new Set<string>(Array.isArray(value) ? value : []);
                    if (e.target.checked) next.add(opt);
                    else next.delete(opt);
                    onChange([...next]);
                  }}
                />
                <span>{opt}</span>
              </label>
            );
          })}
        </div>
      )}

      {q.type === "true_false" && (
        <div style={{ marginTop: 10, display: "flex", gap: 12 }}>
          {[true, false].map((b) => (
            <label key={String(b)} style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input type="radio" name={q.id} checked={value === b} onChange={() => onChange(b)} />
              <span>{String(b)}</span>
            </label>
          ))}
        </div>
      )}

      {q.type === "short" && (
        <div style={{ marginTop: 10 }}>
          <input
            value={typeof value === "string" ? value : ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Type your answer…"
            style={{ width: "100%", padding: 10, borderRadius: 10 }}
          />
        </div>
      )}
    </div>
  );
}

function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

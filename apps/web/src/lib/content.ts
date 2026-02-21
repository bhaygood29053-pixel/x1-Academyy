import type { BadgesFile, LessonIndexItem, QuestionBank } from "@/lib/types";

export async function loadLessonIndex(): Promise<LessonIndexItem[]> {
  const res = await fetch(`${baseUrl()}/content/lessons/index.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load lesson index");
  return (await res.json()) as LessonIndexItem[];
}

export async function loadLessonMarkdown(contentFile: string): Promise<string> {
  const res = await fetch(`${baseUrl()}/content/${contentFile.replace(/^\/*/, "")}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load lesson content: ${contentFile}`);
  return await res.text();
}

export async function loadQuestionBank(qbFile: string): Promise<QuestionBank> {
  const res = await fetch(`${baseUrl()}/content/${qbFile.replace(/^\/*/, "")}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load question bank: ${qbFile}`);
  return (await res.json()) as QuestionBank;
}

export async function loadBadges(): Promise<BadgesFile> {
  const res = await fetch(`${baseUrl()}/content/badges/badges.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load badges");
  return (await res.json()) as BadgesFile;
}

function baseUrl() {
  if (typeof window !== "undefined") return "";
  return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
}

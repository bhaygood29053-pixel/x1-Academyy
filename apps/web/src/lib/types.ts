export type Difficulty = "beginner" | "intermediate" | "advanced";

export type LessonIndexItem = {
  lesson_id: string;
  track: string;
  title: string;
  slug: string;
  difficulty: Difficulty;
  estimated_minutes: number;
  prerequisites: string[];
  badge_unlocks: string[];
  content_file: string;
  question_bank_file: string;
  video_sources?: {
    youtube?: string;
  };
  checkpoints?: Array<{
    id: string;
    type: "mcq" | "short" | "match" | "order";
    prompt: string;
    options?: string[];
    answer?: string | string[];
  }>;
};

export type Question = {
  id: string;
  type: "mcq" | "multi" | "true_false" | "short";
  prompt: string;
  points: number;
  options?: string[];
  answer: string | boolean | string[];
  explanation?: string;
  tags?: string[];
  difficulty?: "easy" | "medium" | "hard";
};

export type QuestionBank = {
  lesson_id: string;
  version: string;
  pass_percent: number;
  questions: Question[];
};

export type BadgeDef = {
  badge_id: string;
  name: string;
  description: string;
  icon: string;
  requirements: {
    type: "complete_lessons" | "score_threshold" | "streak_days";
    lesson_ids?: string[];
    min_score_percent?: number;
    days?: number;
  };
};

export type BadgesFile = {
  version: string;
  badges: BadgeDef[];
};

export type ProgressSnapshot = {
  pubkey?: string;
  xp_total: number;
  level: number;
  completed_lesson_ids: string[];
  awarded_badge_ids: string[];
};

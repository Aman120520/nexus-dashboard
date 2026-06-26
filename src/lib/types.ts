export type MilestoneStatus = "not_started" | "in_progress" | "completed";

export type TechCategory =
  | "typescript"
  | "nextjs"
  | "tailwind"
  | "shadcn"
  | "graphql";

export interface Milestone {
  id: string;
  code: string;
  title: string;
  description: string;
  status: MilestoneStatus;
  categories: TechCategory[];
  startedAt: string | null;
  completedAt: string | null;
}

export interface ProgressSummary {
  total: number;
  completed: number;
  inProgress: number;
  notStarted: number;
  percentComplete: number;
}

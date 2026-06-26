import type { Milestone, ProgressSummary } from "@/lib/types";

export function summarizeProgress(items: Milestone[]): ProgressSummary {
  const total = items.length;
  const completed = items.filter((m) => m.status === "completed").length;
  const inProgress = items.filter((m) => m.status === "in_progress").length;
  const notStarted = items.filter((m) => m.status === "not_started").length;
  const percentComplete = total === 0 ? 0 : Math.round((completed / total) * 100);

  return { total, completed, inProgress, notStarted, percentComplete };
}

"use client";

import { useMilestones } from "@/hooks/useMilestones";
import { summarizeProgress } from "@/lib/progress";
import { categoryMeta } from "@/lib/display";
import { StatCard } from "@/components/StatCard";
import { ProgressBar } from "@/components/ProgressBar";
import type { TechCategory } from "@/lib/types";

const categories = Object.keys(categoryMeta) as TechCategory[];

export default function StatsPage() {
  const { milestones } = useMilestones();
  const summary = summarizeProgress(milestones);

  const coverage = categories.map((category) => ({
    category,
    label: categoryMeta[category].label,
    count: milestones.filter((m) => m.categories.includes(category)).length,
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Stats</h1>
        <p className="mt-1 text-sm text-zinc-500">
          A breakdown of your tracked milestones.
        </p>
      </div>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Total milestones" value={summary.total} />
        <StatCard label="Completed" value={summary.completed} />
        <StatCard label="In progress" value={summary.inProgress} />
        <StatCard label="Overall" value={`${summary.percentComplete}%`} />
      </section>

      <section className="rounded-2xl bg-zinc-50 p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-zinc-600">Overall completion</p>
          <p className="text-sm font-semibold text-zinc-900">
            {summary.percentComplete}%
          </p>
        </div>
        <div className="mt-3">
          <ProgressBar value={summary.percentComplete} />
        </div>
      </section>

      <section className="rounded-2xl bg-zinc-50 p-5">
        <h2 className="text-sm font-semibold text-zinc-600">Coverage by tag</h2>
        <ul className="mt-4 space-y-2">
          {coverage.map((item) => (
            <li
              key={item.category}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-zinc-700">{item.label}</span>
              <span className="font-medium text-zinc-900">
                {item.count} milestone{item.count === 1 ? "" : "s"}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

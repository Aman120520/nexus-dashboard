"use client";

import { useMilestones } from "@/hooks/useMilestones";
import { summarizeProgress } from "@/lib/progress";
import { StatCard } from "@/components/StatCard";
import { ProgressBar } from "@/components/ProgressBar";
import { MilestoneItem } from "@/components/MilestoneItem";
import { AddMilestoneForm } from "@/components/AddMilestoneForm";

export function DashboardClient() {
  const {
    milestones,
    addMilestone,
    setStatus,
    updateMilestone,
    removeMilestone,
    resetMilestones,
  } = useMilestones();

  const summary = summarizeProgress(milestones);

  function handleReset() {
    if (window.confirm("Reset to the default milestones? This clears your changes.")) {
      resetMilestones();
    }
  }

  return (
    <div className="space-y-8">
      <section className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Training Progress</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Track your milestones — add your own, click to update status. Saved in
            your browser.
          </p>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="shrink-0 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-600 hover:bg-zinc-50"
        >
          Reset
        </button>
      </section>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard
          label="Completed"
          value={summary.completed}
          hint={`of ${summary.total} milestones`}
        />
        <StatCard label="In progress" value={summary.inProgress} />
        <StatCard label="Not started" value={summary.notStarted} />
        <StatCard label="Overall" value={`${summary.percentComplete}%`} />
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white p-5">
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

      <section className="space-y-4">
        <AddMilestoneForm onAdd={addMilestone} />

        {milestones.length === 0 ? (
          <p className="rounded-xl border border-dashed border-zinc-200 bg-white p-8 text-center text-sm text-zinc-400">
            No milestones yet. Add your first one above.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {milestones.map((milestone) => (
              <MilestoneItem
                key={milestone.id}
                milestone={milestone}
                onStatusChange={setStatus}
                onUpdate={updateMilestone}
                onRemove={removeMilestone}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import { StatusControl } from "@/components/StatusControl";
import { TechBadge } from "@/components/TechBadge";
import { MilestoneForm } from "@/components/MilestoneForm";
import type { MilestoneFormValues } from "@/components/MilestoneForm";
import type { Milestone, MilestoneStatus } from "@/lib/types";

export function MilestoneItem({
  milestone,
  onStatusChange,
  onUpdate,
  onRemove,
}: {
  milestone: Milestone;
  onStatusChange: (id: string, status: MilestoneStatus) => void;
  onUpdate: (id: string, values: MilestoneFormValues) => void;
  onRemove: (id: string) => void;
}) {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <article className="rounded-xl border border-zinc-200 bg-white p-5">
        <MilestoneForm
          submitLabel="Save"
          initialValues={{
            title: milestone.title,
            description: milestone.description,
            categories: milestone.categories,
          }}
          onSubmit={(values) => {
            onUpdate(milestone.id, values);
            setEditing(false);
          }}
          onCancel={() => setEditing(false)}
        />
      </article>
    );
  }

  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-wide text-zinc-400">
            {milestone.code}
          </p>
          <h3 className="mt-1 text-base font-semibold text-zinc-900">
            {milestone.title}
          </h3>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="rounded-md px-2 py-1 text-xs font-medium text-zinc-400 hover:text-zinc-700"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => onRemove(milestone.id)}
            aria-label={`Delete ${milestone.title}`}
            className="rounded-md px-2 text-lg leading-none text-zinc-300 hover:text-red-500"
          >
            ×
          </button>
        </div>
      </div>

      {milestone.description ? (
        <p className="mt-2 text-sm text-zinc-600">{milestone.description}</p>
      ) : null}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {milestone.categories.map((category) => (
            <TechBadge key={category} category={category} />
          ))}
        </div>
        <StatusControl
          value={milestone.status}
          onChange={(status) => onStatusChange(milestone.id, status)}
        />
      </div>
    </article>
  );
}

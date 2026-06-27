"use client";

import { useState } from "react";
import { MilestoneForm } from "@/components/MilestoneForm";
import type { MilestoneFormValues } from "@/components/MilestoneForm";

export function AddMilestoneForm({
  onAdd,
}: {
  onAdd: (values: MilestoneFormValues) => void;
}) {
  const [open, setOpen] = useState(false);

  function handleSubmit(values: MilestoneFormValues) {
    onAdd(values);
    setOpen(false);
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-5 py-4 text-sm font-medium text-zinc-500 hover:border-violet-300 hover:text-violet-600"
      >
        + Add milestone
      </button>
    );
  }

  return (
    <div className="rounded-2xl bg-zinc-50 p-5">
      <MilestoneForm
        submitLabel="Add"
        onSubmit={handleSubmit}
        onCancel={() => setOpen(false)}
      />
    </div>
  );
}

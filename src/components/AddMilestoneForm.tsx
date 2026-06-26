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
        className="w-full rounded-xl border border-dashed border-zinc-300 bg-white px-5 py-4 text-sm font-medium text-zinc-500 hover:border-zinc-400 hover:text-zinc-700"
      >
        + Add milestone
      </button>
    );
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5">
      <MilestoneForm
        submitLabel="Add"
        onSubmit={handleSubmit}
        onCancel={() => setOpen(false)}
      />
    </div>
  );
}

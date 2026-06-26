"use client";

import { useState } from "react";
import { categoryMeta } from "@/lib/display";
import type { TechCategory } from "@/lib/types";

const allCategories = Object.keys(categoryMeta) as TechCategory[];

export interface MilestoneFormValues {
  title: string;
  description: string;
  categories: TechCategory[];
}

const emptyValues: MilestoneFormValues = {
  title: "",
  description: "",
  categories: [],
};

export function MilestoneForm({
  initialValues = emptyValues,
  submitLabel,
  onSubmit,
  onCancel,
}: {
  initialValues?: MilestoneFormValues;
  submitLabel: string;
  onSubmit: (values: MilestoneFormValues) => void;
  onCancel: () => void;
}) {
  const [title, setTitle] = useState(initialValues.title);
  const [description, setDescription] = useState(initialValues.description);
  const [selected, setSelected] = useState<TechCategory[]>(initialValues.categories);

  function toggleCategory(category: TechCategory) {
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!title.trim()) return;

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      categories: selected,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium text-zinc-700" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Learn React Server Components"
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-500"
          autoFocus
        />
      </div>

      <div>
        <label className="text-sm font-medium text-zinc-700" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What does done look like?"
          rows={2}
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-500"
        />
      </div>

      <div>
        <p className="text-sm font-medium text-zinc-700">Tags</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {allCategories.map((category) => {
            const active = selected.includes(category);
            return (
              <button
                key={category}
                type="button"
                onClick={() => toggleCategory(category)}
                className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${
                  active
                    ? "bg-zinc-900 text-white ring-zinc-900"
                    : "bg-white text-zinc-600 ring-zinc-200 hover:ring-zinc-300"
                }`}
              >
                {categoryMeta[category].label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="submit"
          disabled={!title.trim()}
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-40"
        >
          {submitLabel}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-800"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

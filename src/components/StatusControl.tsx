"use client";

import { statusMeta } from "@/lib/display";
import type { MilestoneStatus } from "@/lib/types";

const order: MilestoneStatus[] = ["not_started", "in_progress", "completed"];

export function StatusControl({
  value,
  onChange,
}: {
  value: MilestoneStatus;
  onChange: (status: MilestoneStatus) => void;
}) {
  return (
    <div className="inline-flex rounded-lg border border-zinc-200 bg-white p-0.5">
      {order.map((status) => {
        const active = status === value;
        return (
          <button
            key={status}
            type="button"
            onClick={() => onChange(status)}
            className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
              active
                ? "bg-violet-50 text-violet-600 shadow-sm"
                : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            {statusMeta[status].label}
          </button>
        );
      })}
    </div>
  );
}

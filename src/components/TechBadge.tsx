import { categoryMeta } from "@/lib/display";
import type { TechCategory } from "@/lib/types";

export function TechBadge({ category }: { category: TechCategory }) {
  const meta = categoryMeta[category];

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${meta.badgeClass}`}
    >
      {meta.label}
    </span>
  );
}

import type { MilestoneStatus, TechCategory } from "@/lib/types";

interface BadgeMeta {
  label: string;
  badgeClass: string;
}

export const statusMeta: Record<MilestoneStatus, BadgeMeta> = {
  not_started: {
    label: "Not started",
    badgeClass: "bg-zinc-100 text-zinc-600 ring-zinc-200",
  },
  in_progress: {
    label: "In progress",
    badgeClass: "bg-amber-100 text-amber-700 ring-amber-200",
  },
  completed: {
    label: "Completed",
    badgeClass: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  },
};

export const categoryMeta: Record<TechCategory, BadgeMeta> = {
  typescript: {
    label: "TypeScript",
    badgeClass: "bg-blue-100 text-blue-700 ring-blue-200",
  },
  nextjs: {
    label: "Next.js",
    badgeClass: "bg-zinc-900 text-white ring-zinc-700",
  },
  tailwind: {
    label: "Tailwind CSS",
    badgeClass: "bg-sky-100 text-sky-700 ring-sky-200",
  },
  shadcn: {
    label: "shadcn/ui",
    badgeClass: "bg-violet-100 text-violet-700 ring-violet-200",
  },
  graphql: {
    label: "GraphQL",
    badgeClass: "bg-pink-100 text-pink-700 ring-pink-200",
  },
};

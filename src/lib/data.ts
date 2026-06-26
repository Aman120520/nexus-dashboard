import type { Milestone } from "@/lib/types";

export const milestones: Milestone[] = [
  {
    id: "m1",
    code: "M1",
    title: "TypeScript fundamentals",
    description:
      "Type components, props, and API responses confidently. Interfaces vs types, generics, utility types.",
    status: "in_progress",
    categories: ["typescript"],
    startedAt: "2026-06-26",
    completedAt: null,
  },
  {
    id: "m2",
    code: "M2",
    title: "Next.js rendering modes",
    description:
      "Build a Next.js app demonstrating SSR, SSG, and ISR using the App Router and data fetching patterns.",
    status: "in_progress",
    categories: ["nextjs"],
    startedAt: "2026-06-26",
    completedAt: null,
  },
  {
    id: "m3",
    code: "M3",
    title: "Tailwind + shadcn/ui",
    description:
      "Reproduce a UI screen from an existing Wesence project using Tailwind and customised shadcn/ui components.",
    status: "not_started",
    categories: ["tailwind", "shadcn"],
    startedAt: null,
    completedAt: null,
  },
  {
    id: "m4",
    code: "M4",
    title: "GraphQL query and mutation",
    description:
      "Write and execute a GraphQL query and mutation in a Next.js context. Fragments and integration patterns.",
    status: "not_started",
    categories: ["graphql", "nextjs"],
    startedAt: null,
    completedAt: null,
  },
  {
    id: "m5",
    code: "M5",
    title: "End-to-end mini project",
    description:
      "A small end-to-end feature using the full stack: TypeScript, Next.js, Tailwind, shadcn/ui, and GraphQL.",
    status: "not_started",
    categories: ["typescript", "nextjs", "tailwind", "shadcn", "graphql"],
    startedAt: null,
    completedAt: null,
  },
];

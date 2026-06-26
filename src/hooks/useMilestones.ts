"use client";

import { useEffect, useState } from "react";
import { milestones as seedMilestones } from "@/lib/data";
import type { Milestone, MilestoneStatus, TechCategory } from "@/lib/types";

const STORAGE_KEY = "nexus-dashboard:milestones";

export interface NewMilestoneInput {
  title: string;
  description: string;
  categories: TechCategory[];
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function loadMilestones(): Milestone[] {
  if (typeof window === "undefined") return seedMilestones;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Milestone[]) : seedMilestones;
  } catch {
    return seedMilestones;
  }
}

function nextCode(items: Milestone[]): string {
  const numbers = items
    .map((m) => parseInt(m.code.replace(/\D/g, ""), 10))
    .filter((n) => !Number.isNaN(n));
  const max = numbers.length > 0 ? Math.max(...numbers) : 0;
  return `M${max + 1}`;
}

function applyStatus(milestone: Milestone, status: MilestoneStatus): Milestone {
  return {
    ...milestone,
    status,
    startedAt: status === "not_started" ? null : milestone.startedAt ?? today(),
    completedAt: status === "completed" ? today() : null,
  };
}

export function useMilestones() {
  const [milestones, setMilestones] = useState<Milestone[]>(seedMilestones);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setMilestones(loadMilestones());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(milestones));
  }, [milestones, hydrated]);

  function addMilestone(input: NewMilestoneInput) {
    setMilestones((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        code: nextCode(prev),
        title: input.title,
        description: input.description,
        status: "not_started",
        categories: input.categories,
        startedAt: null,
        completedAt: null,
      },
    ]);
  }

  function setStatus(id: string, status: MilestoneStatus) {
    setMilestones((prev) =>
      prev.map((m) => (m.id === id ? applyStatus(m, status) : m)),
    );
  }

  function updateMilestone(id: string, input: NewMilestoneInput) {
    setMilestones((prev) =>
      prev.map((m) =>
        m.id === id
          ? {
              ...m,
              title: input.title,
              description: input.description,
              categories: input.categories,
            }
          : m,
      ),
    );
  }

  function removeMilestone(id: string) {
    setMilestones((prev) => prev.filter((m) => m.id !== id));
  }

  function resetMilestones() {
    setMilestones(seedMilestones);
  }

  return {
    milestones,
    hydrated,
    addMilestone,
    setStatus,
    updateMilestone,
    removeMilestone,
    resetMilestones,
  };
}

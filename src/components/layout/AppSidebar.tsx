"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, ChartIcon } from "@/components/subscription/icons";

const items = [
  { href: "/", label: "Dashboard", Icon: HomeIcon },
  { href: "/stats", label: "Stats", Icon: ChartIcon },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 px-6 py-8 lg:block">
      <nav className="space-y-1">
        {items.map(({ href, label, Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold ${
                active
                  ? "text-violet-600"
                  : "text-zinc-700 hover:bg-zinc-50"
              }`}
            >
              {active ? (
                <span className="absolute -left-6 top-1.5 h-7 w-1 rounded-full bg-violet-500" />
              ) : null}
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

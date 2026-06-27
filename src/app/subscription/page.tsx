import { TopNav } from "@/components/subscription/TopNav";
import { Sidebar } from "@/components/subscription/Sidebar";
import {
  SubscriptionStatusCard,
  TicketsCard,
  TariffCard,
  tariffPlans,
} from "@/components/subscription/cards";
import { GlobeIcon } from "@/components/subscription/icons";

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-purple-500 to-indigo-600">
      <TopNav />

      <div className="px-3 sm:px-6">
        <div className="mx-auto flex max-w-[1400px] overflow-hidden rounded-t-[2.5rem] bg-white">
          <Sidebar />

          <main className="flex-1 px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-500">
              Active
            </p>
            <h1 className="mt-1 text-4xl font-bold text-zinc-900">Subscription</h1>
            <p className="mt-3 max-w-xl text-zinc-500">
              In this lesson, you will learn to ask questions about the past,
              listen to audio, and talk about your last vacation.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <SubscriptionStatusCard />
              </div>
              <TicketsCard />
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900">Tariff plan</h2>
                <p className="mt-3 max-w-md text-zinc-500">
                  In this lesson, you will learn to ask questions about the past,
                  you will listen to audio and talk about your last vacation.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <GlobeIcon className="h-5 w-5" />
                <span>Promotion for the entire month of October.</span>
                <span className="rounded-md bg-violet-500 px-2 py-0.5 text-xs font-semibold text-white">
                  -10%
                </span>
              </div>
            </div>

            <div className="mt-10 grid items-start gap-5 sm:grid-cols-3">
              {tariffPlans.map((plan) => (
                <TariffCard key={plan.id} plan={plan} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

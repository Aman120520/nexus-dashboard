import {
  ArrowLeftIcon,
  ArrowRightIcon,
  LockIcon,
  HelpIcon,
} from "@/components/subscription/icons";

function ProgressTrack({ percent }: { percent: number }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200">
      <div
        className="h-full rounded-full bg-violet-500"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

function CircleButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-400 hover:bg-white">
      {children}
    </button>
  );
}

export function SubscriptionStatusCard() {
  return (
    <div className="rounded-3xl bg-zinc-50 p-6">
      <div className="flex items-start justify-between">
        <div className="flex gap-2">
          <CircleButton>
            <ArrowLeftIcon className="h-4 w-4" />
          </CircleButton>
          <CircleButton>
            <ArrowRightIcon className="h-4 w-4" />
          </CircleButton>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-zinc-900">Total: 197 days</p>
          <p className="text-sm text-zinc-400">until 08/15/24</p>
        </div>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="text-xl font-bold text-zinc-900">1 month</p>
          <p className="mt-1 text-sm text-violet-500">17 days left out of 30</p>
          <div className="mt-2">
            <ProgressTrack percent={57} />
          </div>
        </div>
        <div>
          <p className="text-xl font-bold text-zinc-900">6 months</p>
          <p className="mt-1 text-sm text-violet-500">170 days left out of 180</p>
          <div className="mt-2 flex items-center gap-2">
            <ProgressTrack percent={94} />
            <LockIcon className="h-4 w-4 shrink-0 text-zinc-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TicketsCard() {
  return (
    <div className="flex items-center justify-between rounded-3xl bg-zinc-50 p-6">
      <div>
        <p className="text-xl font-bold text-zinc-900">3 tickets</p>
        <p className="mt-1 text-sm text-zinc-400">Indefinitely</p>
      </div>
      <button className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800">
        Buy more
      </button>
    </div>
  );
}

interface TariffPlan {
  id: string;
  title: string;
  days: string;
  discount: string;
  costPerClass: string;
  costPerMonth: string;
  price: string;
  originalPrice: string;
  popular?: boolean;
}

export const tariffPlans: TariffPlan[] = [
  {
    id: "1m",
    title: "1 month",
    days: "30 days",
    discount: "-37%",
    costPerClass: "100 ₴",
    costPerMonth: "3000 ₴",
    price: "3000 ₴",
    originalPrice: "4800 ₴",
  },
  {
    id: "3m",
    title: "3 months",
    days: "90 days",
    discount: "-73%",
    costPerClass: "90 ₴",
    costPerMonth: "2700 ₴",
    price: "8100 ₴",
    originalPrice: "14,400 ₴",
    popular: true,
  },
  {
    id: "6m",
    title: "6 months",
    days: "180 days",
    discount: "-50%",
    costPerClass: "80 ₴",
    costPerMonth: "2400 ₴",
    price: "14 400 ₴",
    originalPrice: "28,800 ₴",
  },
];

function PlanRow({
  label,
  value,
  bold,
  withHelp,
}: {
  label: string;
  value: string;
  bold?: boolean;
  withHelp?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <dt className="flex items-center gap-1 text-zinc-500">
        {label}
        {withHelp ? <HelpIcon className="h-4 w-4 text-zinc-300" /> : null}
      </dt>
      <dd className={bold ? "font-bold text-zinc-900" : "text-zinc-900"}>
        {value}
      </dd>
    </div>
  );
}

export function TariffCard({ plan }: { plan: TariffPlan }) {
  return (
    <div
      className={`overflow-hidden rounded-3xl bg-white ${
        plan.popular
          ? "border-2 border-violet-400 shadow-2xl sm:-translate-y-4"
          : "border border-zinc-200"
      }`}
    >
      {plan.popular ? (
        <div className="bg-violet-500 py-2.5 text-center text-sm font-semibold text-white">
          Popular choice
        </div>
      ) : null}

      <div className="p-7">
        <h3 className="text-2xl font-bold text-zinc-900">{plan.title}</h3>
        <p className="mt-1 text-sm text-zinc-400">{plan.days}</p>

        <dl className="mt-6 space-y-3 text-sm">
          <PlanRow label="Discount this month" value={plan.discount} bold />
          <PlanRow label="Cost per class" value={plan.costPerClass} withHelp />
          <PlanRow label="Cost per month" value={plan.costPerMonth} />
        </dl>

        <div className="mt-6 flex items-end gap-2">
          <span className="text-4xl font-extrabold text-zinc-900">
            {plan.price}
          </span>
          <span className="pb-1 text-sm text-zinc-400 line-through">
            {plan.originalPrice}
          </span>
        </div>

        <button className="mt-6 w-full rounded-full border border-zinc-200 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-50">
          Subscribe
        </button>
      </div>
    </div>
  );
}

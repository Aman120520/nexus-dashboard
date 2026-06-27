import {
  MenuIcon,
  ClockIcon,
  HeartIcon,
  TicketIcon,
  MailIcon,
  HelpIcon,
} from "@/components/subscription/icons";

type SidebarItem = {
  label: string;
  Icon: (props: { className?: string }) => React.JSX.Element;
  active?: boolean;
};

const items: SidebarItem[] = [
  { label: "Schedule", Icon: ClockIcon },
  { label: "My Classes", Icon: HeartIcon },
  { label: "Subscription", Icon: TicketIcon, active: true },
  { label: "Class Newsletter", Icon: MailIcon },
];

const usefulLinks = [
  "About Levels",
  "About Directions",
  "How to Attend a Class",
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 px-6 py-8 lg:block">
      <button className="mb-8 text-zinc-400 hover:text-zinc-700">
        <MenuIcon className="h-6 w-6" />
      </button>

      <nav className="space-y-1">
        {items.map(({ label, Icon, active }) => (
          <a
            key={label}
            href="#"
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
          </a>
        ))}
      </nav>

      <div className="mt-10">
        <div className="flex justify-center">
          <div className="relative h-28 w-28">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-200 to-rose-200" />
            <div className="absolute left-1 top-2 h-6 w-9 rounded-lg rounded-bl-none bg-white shadow-sm" />
            <div className="absolute right-0 top-0 h-5 w-7 rounded-lg rounded-br-none bg-white shadow-sm" />
            <div className="absolute bottom-3 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-400 to-rose-400" />
          </div>
        </div>
        <p className="mt-3 text-center text-sm leading-relaxed text-zinc-500">
          Take the English level test and attend a class. Check your level
        </p>
        <button className="mt-4 w-full rounded-full border border-zinc-300 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50">
          Take the Test
        </button>
      </div>

      <div className="mt-10">
        <p className="text-sm font-bold text-zinc-900">Useful Links</p>
        <ul className="mt-3 space-y-3 text-sm text-zinc-500">
          {usefulLinks.map((link) => (
            <li key={link} className="flex items-center gap-2">
              <HelpIcon className="h-4 w-4 text-zinc-400" />
              {link}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

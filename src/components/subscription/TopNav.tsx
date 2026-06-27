import {
  LogoMark,
  HeadsetIcon,
  GiftIcon,
  BellIcon,
  ChevronDownIcon,
} from "@/components/subscription/icons";

const navLinks = ["Courses", "Intensives", "Skills"];

export function TopNav() {
  return (
    <header className="flex items-center justify-between px-6 py-5 sm:px-10">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2 text-white">
          <LogoMark className="h-6 w-8" />
          <span className="text-xl font-extrabold tracking-wide">ИНГЛЕКС</span>
        </div>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-semibold text-white/90 hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-5 text-white">
        <HeadsetIcon className="hidden h-6 w-6 sm:block" />
        <GiftIcon className="hidden h-6 w-6 sm:block" />
        <BellIcon className="hidden h-6 w-6 sm:block" />
        <button className="flex items-center gap-1.5">
          <span className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-300 to-rose-400 ring-2 ring-white/40" />
          <ChevronDownIcon className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}

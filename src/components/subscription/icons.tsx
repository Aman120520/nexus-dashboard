type IconProps = { className?: string };

function Svg({
  className,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export const MenuIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const ChevronDownIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M6 9l6 6 6-6" />
  </Svg>
);

export const ArrowLeftIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M15 18l-6-6 6-6" />
  </Svg>
);

export const ArrowRightIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M9 6l6 6-6 6" />
  </Svg>
);

export const LockIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </Svg>
);

export const ClockIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
);

export const HeartIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M12 20s-7-4.5-7-9.5a4 4 0 0 1 7-2.6 4 4 0 0 1 7 2.6c0 5-7 9.5-7 9.5z" />
  </Svg>
);

export const TicketIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 2 2 0 0 0 0-4z" />
    <path d="M14 7v10" />
  </Svg>
);

export const MailIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </Svg>
);

export const HeadsetIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
    <rect x="3" y="13" width="4" height="6" rx="1" />
    <rect x="17" y="13" width="4" height="6" rx="1" />
    <path d="M20 19a3 3 0 0 1-3 3h-2" />
  </Svg>
);

export const GiftIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <rect x="4" y="9" width="16" height="11" rx="1" />
    <path d="M2 9h20M12 9v11M12 9S10 4 7.5 5.5 9 9 12 9zM12 9s2-5 4.5-3.5S15 9 12 9z" />
  </Svg>
);

export const BellIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" />
    <path d="M10 19a2 2 0 0 0 4 0" />
  </Svg>
);

export const GlobeIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
  </Svg>
);

export const InfoIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-4M12 8h.01" />
  </Svg>
);

export const HelpIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9.5a2.5 2.5 0 0 1 4.5 1.5c0 1.5-2 2-2 3M12 17h.01" />
  </Svg>
);

export const HomeIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M4 11l8-7 8 7" />
    <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />
  </Svg>
);

export const ChartIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M4 20V4M4 20h16" />
    <path d="M8 16v-4M12 16V8M16 16v-6" />
  </Svg>
);

export const LogoMark = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 24" fill="currentColor">
    <path d="M2 12c3 7 25 7 28 0-3 9-11 11-14 11S5 21 2 12z" />
  </svg>
);

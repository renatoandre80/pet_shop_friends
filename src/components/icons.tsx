type IconProps = {
  className?: string;
};

/* Ícones SVG autorais e leves — evitam dependência de bibliotecas externas
   e mantêm o bundle da landing page pequeno. */

export function PawIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <ellipse cx="12" cy="15.5" rx="5.2" ry="4.3" />
      <ellipse cx="5.6" cy="9.7" rx="2.4" ry="3" />
      <ellipse cx="18.4" cy="9.7" rx="2.4" ry="3" />
      <ellipse cx="9" cy="5.2" rx="2.1" ry="2.7" transform="rotate(-18 9 5.2)" />
      <ellipse cx="15" cy="5.2" rx="2.1" ry="2.7" transform="rotate(18 15 5.2)" />
    </svg>
  );
}

export function BathIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 12h18" />
      <path d="M4 12v4a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4" />
      <path d="M7 12V6a2 2 0 0 1 2-2c1.2 0 1.8.8 2 1.6" />
      <path d="M9 19v1.5M15 19v1.5" />
      <circle cx="17.5" cy="5.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="15" cy="3.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="19" cy="3.2" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function StethoscopeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 3v5a4 4 0 0 0 8 0V3" />
      <path d="M9 12v2a6 6 0 0 0 12 0v-2.5" />
      <circle cx="21" cy="9.5" r="1.8" />
      <circle cx="5" cy="3" r="1" fill="currentColor" stroke="none" />
      <circle cx="13" cy="3" r="1" fill="currentColor" stroke="none" />
      <path d="M9 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

export function HotelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 10.5 12 4l9 6.5" />
      <path d="M5 9.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
      <path d="M9 20v-5a3 3 0 0 1 6 0v5" />
    </svg>
  );
}

export function ShopIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 8h16l-1 12a2 2 0 0 1-2 1.8H7A2 2 0 0 1 5 20L4 8Z" />
      <path d="M8 8V6a4 4 0 1 1 8 0v2" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5 14.8 9l6.9.6-5.2 4.6 1.6 6.8L12 17.3 5.9 21l1.6-6.8-5.2-4.6L9.2 9 12 2.5Z" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4.5 4h3.3l1.4 4.6-2.2 1.8a12.6 12.6 0 0 0 6.6 6.6l1.8-2.2 4.6 1.4v3.3a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3 6.1 1.5 1.5 0 0 1 4.5 4Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V11H8v3h2.5v7h3v-7h2.3l.4-3h-2.7V9.6c0-.4.3-.6.5-.6Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.1a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.1 8.1 0 1 1 12 20.1Zm4.4-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.3-.6-2.2-1.2-3-2.6-.2-.3 0-.5.1-.6l.5-.6c.1-.2.1-.4 0-.5l-.6-1.4c-.2-.4-.4-.3-.6-.3h-.5c-.2 0-.5.1-.7.4-.2.3-.9 1-.9 2.3s.9 2.6 1.1 2.8c1.3 1.8 2.8 2.8 4.8 3.4.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3 4.5 6v6c0 4.5 3.3 7.4 7.5 9 4.2-1.6 7.5-4.5 7.5-9V6L12 3Z" />
      <path d="m9 12 2 2 4-4.2" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 20.5s-7.6-4.6-9.8-9.1C.9 8 2.3 4.6 5.6 3.8c1.9-.5 3.8.2 5 1.8 1.2-1.6 3.1-2.3 5-1.8 3.3.8 4.7 4.2 3.4 7.6-2.2 4.5-9.8 9.1-9.8 9.1Z" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.8 19c.6-3 2.9-5 6.2-5s5.6 2 6.2 5" />
      <circle cx="17" cy="8.5" r="2.4" />
      <path d="M16 11.2c2.3.4 3.9 2 4.3 4" />
    </svg>
  );
}

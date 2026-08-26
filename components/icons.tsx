export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className}>
      <defs>
        <linearGradient id="markGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0a830" />
          <stop offset="100%" stopColor="#2fa8ad" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="19" fill="none" stroke="url(#markGrad)" strokeWidth="2.4" />
      <path
        d="M20 9c-4 4-4 9 0 11 4 2 4 7 0 11"
        stroke="url(#markGrad)"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function KubidehIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12h16M8 6l2 6-2 6M16 6l-2 6 2 6"
        stroke="#f0a830"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function JoojehIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="#5fd0d1" strokeWidth="1.8" />
      <path d="M12 6v12M6 12h12" stroke="#5fd0d1" strokeWidth="1.8" />
    </svg>
  );
}

export function SearchIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#faf6ee">
      <path d="M17.5 12.5c0-2.5 2-3.7 2.1-3.8-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9s-2-.9-3.3-.8c-1.7 0-3.2 1-4.1 2.5-1.7 3-.4 7.5 1.3 10 .8 1.2 1.8 2.5 3 2.5 1.2-.1 1.7-.8 3.1-.8s1.9.8 3.2.7c1.3 0 2.2-1.2 3-2.4.6-.9.9-1.4 1.4-2.5-3.6-1.4-3.5-4-3.5-4.4z" />
    </svg>
  );
}

export function GooglePlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#faf6ee">
      <path d="M4 3l14 9-14 9V3z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v6h3v-6h2.2l.8-3H14v-1.5c0-.55.45-1 1-1H16V8z" />
    </svg>
  );
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M14 4v10.5a3 3 0 1 1-2.4-2.94" />
      <path d="M14 4c.4 2.2 2 4 4.5 4.3" />
    </svg>
  );
}

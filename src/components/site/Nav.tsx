import { useEffect, useState } from "react";

const faviconUrl = "/favicon.ico";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "What We Do" },
  { id: "ceo", label: "CEO" },
  { id: "services", label: "Services" },
  { id: "clients", label: "Clients" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--ee-navy)]/90 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" className="flex items-center gap-3 group">
          <LogoMark />
          <span className="font-display text-lg font-semibold leading-none text-white">
            egypt elite
            <span className="block text-sm font-bold text-[color:var(--ee-pink)]">2030</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="pointer-events-none absolute inset-0 scale-0 rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-100 hover:scale-100" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center rounded-full bg-[color:var(--ee-pink)] px-5 py-2 text-sm font-semibold text-white shadow-[var(--shadow-ee)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </li>
        </ul>

        <button
          className="md:hidden rounded-md p-2 text-white"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[color:var(--ee-navy)]/95 px-6 py-4 animate-[ee-fade-in_0.3s_ease-out]">
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-white/85 hover:bg-white/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={faviconUrl}
      alt="Egypt Elite 2030 logo"
      className={`h-9 w-9 rounded-md object-cover ${className}`}
    />
  );
}

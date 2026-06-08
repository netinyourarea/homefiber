import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Wifi } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Assistance" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="container mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-red grid place-items-center shadow-glow-red">
            <Wifi className="w-4 h-4 text-primary-foreground" />
          </span>
          <span className="font-display text-lg md:text-xl tracking-tight font-semibold leading-tight">
            Home <span className="text-primary">Fiber</span>{" "}
            <span className="text-amber font-serif-italic font-normal">Connection</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm rounded-full text-muted-foreground hover:text-foreground transition-colors [&.active]:bg-primary/15 [&.active]:text-primary"
              activeProps={{ className: "active" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:8884784101"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          <Phone className="w-4 h-4" /> (888) 478-4101
        </a>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/40 px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block text-base">
              {l.label}
            </Link>
          ))}
          <a href="tel:8884784101" className="block text-primary font-semibold">
            (888) 478-4101 · Get Assistance
          </a>
        </div>
      )}
    </header>
  );
}

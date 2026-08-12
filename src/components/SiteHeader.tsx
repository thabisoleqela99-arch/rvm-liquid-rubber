import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-deep/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="RVM Liquid Rubber Logo"
            className="h-16 w-auto object-contain py-1"
          />
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-white">
              RVM Liquid Rubber
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              The Rubber Genie
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:+27792859461" className="btn-primary text-sm">
            <Phone className="size-4" aria-hidden="true" />
            Get a quote
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-deep px-5 pb-5 md:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-muted-foreground"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:+27792859461" className="btn-primary mt-3 text-sm">
              <Phone className="size-4" aria-hidden="true" />
              Get a quote
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
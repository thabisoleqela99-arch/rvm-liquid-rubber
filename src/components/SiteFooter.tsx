import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-display text-foreground font-bold text-base">
            RVM Liquid Rubber
          </p>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            ✨ Your local liquid rubber genie at your service
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Greater Johannesburg, Gauteng · <a href="tel:0792859461" className="hover:text-foreground">079 285 9461</a> · <a href="mailto:info@rvmconsulting.co.za" className="hover:text-foreground">info@rvmconsulting.co.za</a>
          </p>
        </div>

        <div className="flex flex-wrap gap-5 items-center">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/services" className="hover:text-foreground transition-colors">
            Services
          </Link>
          <Link to="/our-works" className="hover:text-foreground transition-colors">
            Our Works
          </Link>
          <Link to="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
      </div>

      <div className="border-t border-border/50 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} RVM Trading and Consulting. All rights reserved.
      </div>
    </footer>
  );
}
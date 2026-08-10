import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HardHat, MapPin, Users } from "lucide-react";
import heroRoof from "@/assets/hero-roof.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About R.V.M Waterproofing — Johannesburg Roof Specialists" },
      {
        name: "description",
        content:
          "R.V.M Waterproofing is a Johannesburg-based roof waterproofing team serving commercial properties and private homeowners across Gauteng.",
      },
      { property: "og:title", content: "About R.V.M Waterproofing" },
      {
        property: "og:description",
        content:
          "A Johannesburg roof waterproofing team trusted by body corporates, businesses and homeowners.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: HardHat,
    title: "Prep before product",
    copy: "Most failures come from bad surface preparation. We never skip it to save a day.",
  },
  {
    icon: Award,
    title: "Guarantee in writing",
    copy: "Every completed system leaves with a signed guarantee certificate and photo record.",
  },
  {
    icon: Users,
    title: "Two markets, one standard",
    copy: "A townhouse balcony gets the same care as a 4 000 m² warehouse roof.",
  },
  {
    icon: MapPin,
    title: "Local and reachable",
    copy: "We are Johannesburg based, so callbacks happen in days, not months.",
  },
];

function AboutPage() {
  return (
    <div>
      <section className="border-b border-border bg-gradient-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow">About us</p>
            <h1 className="mt-4 text-4xl uppercase sm:text-5xl">Built on Highveld weather</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              R.V.M Waterproofing was started to fix a simple problem: too many Johannesburg roofs
              were being patched instead of properly sealed. Our crews specialise in waterproofing
              only, and that focus shows in the work.
            </p>
            <p className="mt-4 text-muted-foreground">
              We work for property managers, body corporates, factories and retail landlords, as
              well as homeowners who just want the ceiling stain to stop coming back after every
              summer storm.
            </p>
          </div>
          <img
            src={heroRoof}
            alt="R.V.M Waterproofing crew at work on a Johannesburg rooftop"
            loading="lazy"
            width={1600}
            height={1008}
            className="h-72 w-full rounded-lg object-cover shadow-lift lg:h-96"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl uppercase">How we work</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-lg border border-border bg-card p-6 shadow-card">
              <v.icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-base uppercase">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-deep">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl uppercase">Want a quote on your roof?</h2>
          <div className="mt-6">
            <Link to="/contact" className="btn-primary">
              Contact R.V.M
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

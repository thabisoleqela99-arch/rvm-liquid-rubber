import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Droplets, Home, Layers, ShieldCheck, Wrench, Bath, Hammer, HardHat } from "lucide-react";

import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceResidential from "@/assets/service-residential.jpg";

import job1Before from "@/assets/Job1-Before.jpg";
import job1After from "@/assets/Job1-After.jpg";
import job2Before from "@/assets/Job2-Before.jpg";
import job2After from "@/assets/Job2-After.jpg";
import job3Before from "@/assets/Job3-Before.jpg";
import job3After from "@/assets/Job3-After.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Waterproofing, Plumbing, Tiling & Refurbishments | RVM Liquid Rubber" },
      {
        name: "description",
        content:
          "SABS-tested liquid rubber waterproofing (10-year guarantee), damp sealing, plumbing, tiling, and bathroom refurbishments in Johannesburg by RVM Trading and Consulting.",
      },
      { property: "og:title", content: "Waterproofing & Renovation Services — RVM Liquid Rubber" },
      {
        property: "og:description",
        content:
          "10-year liquid rubber guarantee, interior remodeling, plumbing, tiling, and consultant-verified structural modifications.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const coreServices = [
  {
    icon: Droplets,
    title: "Liquid Rubber Waterproofing",
    copy: "Insurance-compliant, SABS-tested liquid rubber application for flat concrete, sheet metal, and parapet walls. Backed by our official 10-year guarantee.",
  },
  {
    icon: Wrench,
    title: "Plumbing & Leak Repairs",
    copy: "Full sanitary installation, pipework repairs, leak detection, and drainage systems for residential and commercial facilities.",
  },
  {
    icon: Bath,
    title: "Bathroom & Toilet Refurbishments",
    copy: "Complete bathroom overhauls including waterproofing under-tile membranes, fixture upgrades, shower sealing, and layout redesigns.",
  },
  {
    icon: Hammer,
    title: "Tiling & Wall Finishes",
    copy: "Precision interior and exterior tiling, floor leveling, rising damp treatment, and durable protective wall coatings.",
  },
  {
    icon: Building2,
    title: "Interior Remodeling",
    copy: "Focused structural modifications and interior updates. Structural walls or load-bearing pillars are verified by engineering consultants.",
  },
  {
    icon: HardHat,
    title: "Site Safety & Quality Control",
    copy: "Full compliance with personal protective equipment (harnesses, helmets, goggles) and mandatory site safety checks before job execution.",
  },
];

const projectGallery = [
  {
    id: "job-1",
    title: "Project 1: Roof Restoration & Waterproofing",
    description: "Complete repair, sealing, and protective coat application.",
    beforeImage: job1Before,
    afterImage: job1After,
  },
  {
    id: "job-2",
    title: "Project 2: Tile & Structural Leak Fix",
    description: "Full leak prevention and seal coat restoration.",
    beforeImage: job2Before,
    afterImage: job2After,
  },
  {
    id: "job-3",
    title: "Project 3: Full Roof Paint & Weatherproofing",
    description: "Long-lasting surface coating and sealing overhaul.",
    beforeImage: job3Before,
    afterImage: job3After,
  },
];

function ServicesPage() {
  return (
    <div>
      <section className="border-b border-border bg-gradient-deep">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">RVM Trading and Consulting t/a RVM Liquid Rubber</p>
          <h1 className="mt-4 max-w-3xl text-4xl uppercase sm:text-5xl">
            Waterproofing &amp; Interior Remodeling
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            From SABS-tested 10-year liquid rubber waterproofing to plumbing, tiling, and consultant-approved interior modifications across Gauteng.
          </p>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((s) => (
            <div key={s.title} className="rounded-lg border border-border bg-card p-6 shadow-card">
              <s.icon className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-lg uppercase font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mandatory Site Assessment Banner */}
      <section className="border-y border-border bg-deep py-12">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="eyebrow">Accurate Pricing Policy</p>
          <h2 className="mt-2 text-2xl uppercase sm:text-3xl">Site Visits Preferred Before Final Quotation</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            To ensure zero unexpected costs, our team conducts thorough on-site assessments prior to providing final quotes. For weight-bearing wall alterations, we consult certified structural engineers.
          </p>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-3xl uppercase">Recent Before &amp; After Results</h2>
            <p className="mt-2 text-muted-foreground">
              Real transformations across our waterproofing and restoration jobs in Johannesburg.
            </p>
          </div>
          <div className="mt-10 grid gap-8 grid-cols-1 lg:grid-cols-3">
            {projectGallery.map((item) => (
              <div key={item.id} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-xl uppercase text-card-foreground font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground mb-4">{item.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="block text-xs font-bold uppercase text-red-500 mb-2">Before</span>
                    <img
                      src={item.beforeImage}
                      alt={`${item.title} before repair`}
                      className="h-64 w-full rounded-lg object-cover border border-border shadow-sm"
                    />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-emerald-500 mb-2">After</span>
                    <img
                      src={item.afterImage}
                      alt={`${item.title} after repair`}
                      className="h-64 w-full rounded-lg object-cover border border-border shadow-sm"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <h2 className="text-3xl uppercase">Ready for a site assessment?</h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          Contact our team today to schedule an on-site inspection for waterproofing, plumbing, tiling, or bathroom refurbishments.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="tel:0792859461" className="btn-primary">
            Call 079 285 9461
          </a>
          <Link to="/contact" className="btn-outline">
            Get a quote
          </Link>
        </div>
      </section>
    </div>
  );
}
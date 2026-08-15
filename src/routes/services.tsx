import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Droplets, Home, Layers, ShieldCheck, Wrench, Bath, Hammer, HardHat, Paintbrush } from "lucide-react";

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
      { title: "Services — Waterproofing, Painting, Roofing & Refurbishments | RVM Trading and Consulting" },
      {
        name: "description",
        content:
          "SABS-tested liquid rubber waterproofing with 10-year guarantees, interior remodeling, ceiling repairs, exterior painting, and structural refurbishments across Johannesburg.",
      },
      { property: "og:title", content: "Waterproofing & Renovation Services — RVM Trading and Consulting" },
      {
        property: "og:description",
        content:
          "Official 10-year liquid rubber guarantee, interior remodeling, plumbing, tiling, ceiling installation, and structural property refurbishments.",
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
    title: "10-Year Guaranteed Liquid Rubber Waterproofing",
    copy: "SABS-tested, highly elastic liquid rubber membrane application for flat concrete slabs, sheet metal roofs, parapet walls, and box gutters. Includes high-pressure surface cleaning, flashing repairs, and multi-layer coating backed by a written 10-year warranty.",
  },
  {
    icon: Home,
    title: "Roof Sealing & Leak Isolation",
    copy: "Comprehensive roof restoration and leak detection for residential and commercial structures. We isolate thermal expansion cracks, seal rusted sheet joints, treat tile alignment, and apply protective weather-barrier roof coatings.",
  },
  {
    icon: Paintbrush,
    title: "Exterior & Interior Wall Painting",
    copy: "Complete surface preparation, crack sealing, and high-durability weather-resistant painting. Designed to protect exterior masonry from harsh Gauteng weather while delivering flawless interior color coat applications.",
  },
  {
    icon: Hammer,
    title: "Structural Remodeling & Patio Overhauls",
    copy: "Full property remodeling including patio tile laying, stair paving, bulkhead construction, wall re-plastering, and layout modernizations. All load-bearing pillar and structural wall modifications are verified by engineering consultants.",
  },
  {
    icon: Layers,
    title: "Ceiling Installation & Water Damage Repair",
    copy: "Complete tear-down and replacement of water-damaged ceiling boards, structural brandering repairs, flush-plastered rhino board installations, skim coat finishing, cornice fitting, and integrated downlight cutouts.",
  },
  {
    icon: Bath,
    title: "Bathroom & Toilet Refurbishments",
    copy: "Complete bathroom overhauls including under-tile liquid waterproofing membranes, precision wall and floor tiling, floor leveling, sanitary fixture installation, and custom shower enclosures.",
  },
  {
    icon: Wrench,
    title: "Plumbing & Sanitary Installations",
    copy: "Sanitary fixture fitting, pipework rerouting, rising damp treatment, drainage system upgrades, and non-destructive water leak detection.",
  },
  {
    icon: HardHat,
    title: "Site Safety & Quality Compliance",
    copy: "Rigorous quality control and full safety compliance on all work sites. Technicians operate with full personal protective equipment (harnesses, helmets, eye protection) and mandatory risk inspections prior to execution.",
  },
];

const projectGallery = [
  {
    id: "job-1",
    title: "Project 1: Roof Restoration & Liquid Rubber Coating",
    description: "High-pressure clean, joint sealing, and multi-layer 10-year guaranteed liquid rubber waterproofing.",
    beforeImage: job1Before,
    afterImage: job1After,
  },
  {
    id: "job-2",
    title: "Project 2: Tile & Structural Leak Remediation",
    description: "Targeted leak isolation, surface prep, and protective weatherproofing seal coat restoration.",
    beforeImage: job2Before,
    afterImage: job2After,
  },
  {
    id: "job-3",
    title: "Project 3: Full Exterior Overhaul & Roof Coating",
    description: "Long-lasting protective surface coating, waterproofing, and structural exterior painting.",
    beforeImage: job3Before,
    afterImage: job3After,
  },
];

function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-gradient-deep">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">RVM Trading and Consulting t/a RVM Liquid Rubber</p>
          <h1 className="mt-4 max-w-3xl text-4xl uppercase sm:text-5xl font-black">
            Waterproofing &amp; Comprehensive Remodeling Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Delivering 10-year guaranteed liquid rubber waterproofing, roof leak isolation, interior remodeling, ceiling board repairs, and full property refurbishments across Gauteng.
          </p>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((s) => (
            <div key={s.title} className="rounded-lg border border-border bg-card p-6 shadow-card flex flex-col justify-between">
              <div>
                <s.icon className="size-7 text-primary" aria-hidden="true" />
                <h2 className="mt-4 text-lg uppercase font-bold tracking-tight">{s.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mandatory Site Assessment Banner */}
      <section className="border-y border-border bg-deep py-12">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="eyebrow">Accurate Pricing &amp; Engineering Standards</p>
          <h2 className="mt-2 text-2xl uppercase sm:text-3xl font-bold">On-Site Inspection Required Before Quotation</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
            To guarantee precise pricing and eliminate hidden costs, our team conducts thorough physical site assessments prior to delivering itemized quotes. For weight-bearing wall alterations and structural pillar modifications, we consult certified structural engineers.
          </p>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-3xl uppercase font-black">Recent Before &amp; After Results</h2>
            <p className="mt-2 text-muted-foreground">
              Real transformations across our roof waterproofing, painting, and structural restoration jobs in Greater Johannesburg.
            </p>
          </div>
          <div className="mt-10 grid gap-8 grid-cols-1 lg:grid-cols-3">
            {projectGallery.map((item) => (
              <div key={item.id} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-xl uppercase text-card-foreground font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground mb-4">{item.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="block text-xs font-bold uppercase text-amber-500 mb-2">Before</span>
                    <img
                      src={item.beforeImage}
                      alt={`${item.title} before repair`}
                      className="h-64 w-full rounded-lg object-cover border border-border shadow-sm"
                    />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-primary mb-2">After</span>
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

          <div className="mt-12 text-center">
            <Link to="/our-works" className="btn-outline">
              Explore Complete Portfolio Showcase
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <h2 className="text-3xl uppercase font-black">Ready for an On-Site Assessment?</h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          Contact our team today to schedule an inspection for waterproofing, roof sealing, ceiling restoration, painting, or interior remodeling.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a href="tel:0792859461" className="btn-primary">
            Call 079 285 9461
          </a>
          <Link to="/contact" className="btn-outline">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Droplets, Home, Layers, ShieldCheck, Wrench } from "lucide-react";

// Standard Assets Imports
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
      { title: "Waterproofing Services — R.V.M Waterproofing Johannesburg" },
      {
        name: "description",
        content:
          "Torch-on membranes, acrylic coatings, leak detection, gutter and damp repairs for commercial and residential roofs in Johannesburg.",
      },
      { property: "og:title", content: "Waterproofing Services in Johannesburg" },
      {
        property: "og:description",
        content:
          "Full roof waterproofing scope for commercial buildings and private homes across Gauteng.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const commercial = [
  "Torch-on bitumen membrane systems (double layer)",
  "Liquid-applied and fibre-reinforced acrylic coatings",
  "Box gutter, parapet and expansion joint sealing",
  "Roof sheet re-screwing, sealing and rust treatment",
  "Planned maintenance contracts and annual inspections",
  "Leak detection reports for insurance and body corporates",
];

const residential = [
  "Tile roof sealing, ridge and valley repairs",
  "Flat roof and balcony waterproofing",
  "Gutter cleaning, repair and replacement",
  "Rising and penetrating damp treatment",
  "Skylight, chimney and flashing repairs",
  "Emergency leak callouts during storm season",
];

const systems = [
  {
    icon: Layers,
    title: "Torch-on membrane",
    copy: "Heat-welded bitumen sheets for flat concrete slabs. Best long-term option for commercial roofs.",
  },
  {
    icon: Droplets,
    title: "Acrylic coatings",
    copy: "Flexible, UV-stable coatings over prepared surfaces — ideal for sheet metal and tile roofs.",
  },
  {
    icon: Wrench,
    title: "Targeted repairs",
    copy: "Cracks, flashings, joints and drainage points fixed before they undermine the whole roof.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance plans",
    copy: "Yearly checks, clean-outs and touch-ups so the guarantee stays intact.",
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
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 max-w-2xl text-4xl uppercase sm:text-5xl">
            Every roof type, properly sealed
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            We work on commercial buildings and private homes with the same materials, the same crew
            and the same written guarantee.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {systems.map((s) => (
            <div key={s.title} className="rounded-lg border border-border bg-card p-6 shadow-card">
              <s.icon className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-base uppercase">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE & AFTER GALLERY SECTION */}
      <section className="border-t border-border bg-deep py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-3xl uppercase">Recent Before &amp; After Results</h2>
            <p className="mt-2 text-muted-foreground">
              Real transformations across our roofing and waterproofing jobs in Johannesburg.
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

      {/* GENERIC COMMERCIAL & RESIDENTIAL SECTION */}
      <section className="border-y border-border bg-deep">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2">
          <article>
            <img
              src={serviceCommercial}
              alt="Commercial flat roof with new waterproof coating"
              loading="lazy"
              width={900}
              height={700}
              className="h-56 w-full rounded-lg object-cover shadow-card"
            />
            <div className="mt-6 flex items-center gap-3">
              <Building2 className="size-5 text-primary" aria-hidden="true" />
              <h2 className="text-xl uppercase">Commercial &amp; industrial</h2>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {commercial.map((c) => (
                <li key={c} className="border-b border-border pb-2">
                  {c}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <img
              src={serviceResidential}
              alt="Repaired residential tile roof in Johannesburg"
              loading="lazy"
              width={900}
              height={700}
              className="h-56 w-full rounded-lg object-cover shadow-card"
            />
            <div className="mt-6 flex items-center gap-3">
              <Home className="size-5 text-primary" aria-hidden="true" />
              <h2 className="text-xl uppercase">Private homes</h2>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {residential.map((c) => (
                <li key={c} className="border-b border-border pb-2">
                  {c}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl uppercase">Not sure which system you need?</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Send us a photo of the problem area and we will tell you what it needs before we visit.
        </p>
        <div className="mt-8">
          <Link to="/contact" className="btn-primary">
            Get a quote
          </Link>
        </div>
      </section>
    </div>
  );
}
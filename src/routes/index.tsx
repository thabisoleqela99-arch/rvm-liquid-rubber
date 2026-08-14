import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, CheckCircle2, Droplets, Hammer, Phone, ShieldCheck, Wrench } from "lucide-react";

import { ProjectCarousel } from "@/components/ProjectCarousel";

import heroRoof from "@/assets/hero-roof.jpg";
import serviceTorchOn from "@/assets/service-torch-on.jpg";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RVM Liquid Rubber — Waterproofing & Home Improvement Specialists" },
      {
        name: "description",
        content:
          "RVM Liquid Rubber offers roof waterproofing, home improvement, and structural repair services across Johannesburg. Liquid rubber coatings, damp proofing, and property maintenance.",
      },
      { property: "og:title", content: "RVM Liquid Rubber — Johannesburg Waterproofing & Home Improvement" },
      {
        property: "og:description",
        content:
          "Liquid rubber roof waterproofing, home improvement, leak detection, and maintenance for residential and commercial properties in Johannesburg.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "RVM Liquid Rubber",
          email: "info@rvmconsulting.co.za",
          telephone: "079 285 9461",
          description:
            "Roof waterproofing, home improvement, and structural maintenance specialists in Johannesburg, South Africa.",
          areaServed: "Johannesburg, Gauteng, South Africa",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Johannesburg",
            addressRegion: "Gauteng",
            addressCountry: "ZA",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Droplets,
    title: "Liquid Rubber Membrane",
    copy: "Seamless, elastic liquid rubber application ideal for flat roofs, parapets, and box gutters.",
    image: serviceTorchOn,
  },
  {
    icon: Hammer,
    title: "Home Improvement",
    copy: "Comprehensive property repairs, repainting, structural fixes, and roof overhauls for long-term protection.",
    image: serviceResidential,
  },
  {
    icon: Building2,
    title: "Commercial & Private",
    copy: "Warehouses, offices, housing complexes, and private homes — scheduled work with minimal disruption.",
    image: serviceCommercial,
  },
];

const extras = [
  { icon: Wrench, title: "Leak Detection", copy: "We trace the source, not just the stain." },
  {
    icon: ShieldCheck,
    title: "Guaranteed Work",
    copy: "Written guarantee on every completed waterproofing and home improvement job.",
  },
  {
    icon: Droplets,
    title: "Damp & Maintenance",
    copy: "Rising damp treatment, acrylic coatings, and ongoing residential maintenance.",
  },
];

const areas = [
  "Sandton",
  "Randburg",
  "Roodepoort",
  "Midrand",
  "Soweto",
  "Bedfordview",
  "Alberton",
  "Fourways",
  "Rosebank",
  "Kempton Park",
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroRoof}
          alt="RVM Liquid Rubber technician applying protective coating on a Johannesburg rooftop"
          width={1600}
          height={1008}
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-deep opacity-80" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
          <p className="eyebrow">Johannesburg · Gauteng</p>
          <h1 className="mt-4 max-w-3xl text-4xl uppercase sm:text-5xl md:text-6xl">
            Waterproofing &amp; Home Improvement
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            RVM Liquid Rubber seals, restores, and improves roofs and properties across Johannesburg — delivered with expert craftsmanship and written guarantees.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 items-center">
            <a href="tel:0792859461" className="btn-primary">
              <Phone className="size-4" aria-hidden="true" />
              Call 079 285 9461
            </a>
            <a
              href="mailto:info@rvmconsulting.co.za"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              info@rvmconsulting.co.za
            </a>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["15+", "Years on Jo'burg roofs"],
              ["24/7", "Emergency callouts"],
              ["100%", "Written guarantees"],
              ["Full", "Home improvement scope"],
            ].map(([stat, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl text-primary">{stat}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Video Demonstration Section */}
      <section className="border-t border-border bg-deep py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="eyebrow">On the job</p>
            <h2 className="mt-3 text-3xl uppercase sm:text-4xl">See Our Work in Action</h2>
            <p className="mt-2 text-muted-foreground">
              Watch our team complete high-quality liquid rubber waterproofing and structural repairs.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-sm overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <video controls playsInline className="w-full h-auto object-contain bg-black">
                <source src="/roofing-video.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Service Card Grid (What We Do) */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-3 text-3xl uppercase sm:text-4xl">Waterproofing &amp; Home Improvement</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-card transition-shadow hover:shadow-lift"
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={900}
                height={700}
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <s.icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg uppercase">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/services" className="btn-outline">
            See the full service list
          </Link>
        </div>
      </section>

      {/* Rolling Portfolio Showcase Carousel */}
      <ProjectCarousel />

      {/* Extras */}
      <section className="border-y border-border bg-deep">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-3">
          {extras.map((e) => (
            <div key={e.title} className="flex gap-4">
              <e.icon className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="text-base uppercase">{e.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-3 text-3xl uppercase sm:text-4xl">Four steps, no guesswork</h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Site inspection", "We assess the property, photograph problem areas, and test for damp."],
            ["02", "Written quote", "Itemised scope of work, materials, timeline, and guarantee details."],
            ["03", "Execution", "Surface prep, structural fixes, liquid rubber coating, and finishing."],
            ["04", "Sign-off", "Quality testing, handover pack, and guarantee certificate."],
          ].map(([num, title, copy]) => (
            <li key={num} className="rounded-lg border border-border bg-card p-6 shadow-card">
              <span className="font-display text-sm text-primary">{num}</span>
              <h3 className="mt-3 text-base uppercase">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Areas */}
      <section className="border-t border-border bg-deep">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="eyebrow">Service areas</p>
          <h2 className="mt-3 text-2xl uppercase sm:text-3xl">Across greater Johannesburg</h2>
          <ul className="mt-8 flex flex-wrap gap-2">
            {areas.map((a) => (
              <li
                key={a}
                className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-lg border border-border bg-gradient-accent p-10 text-center shadow-lift">
          <h2 className="text-3xl uppercase text-primary-foreground sm:text-4xl">
            Upgrade &amp; Protect Your Property
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Book a free property inspection now for waterproofing, repairs, and home improvements.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="tel:0792859461"
              className="inline-flex items-center justify-center rounded-sm bg-deep px-6 py-3 font-semibold text-deep-foreground transition-transform hover:-translate-y-0.5"
            >
              Call 079 285 9461
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-sm border border-deep-foreground px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Book an inspection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
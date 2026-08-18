import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, CheckCircle2, Droplets, Hammer, Phone, ShieldCheck, Wrench, ShieldAlert } from "lucide-react";

import { ProjectCarousel } from "@/components/ProjectCarousel";

import heroRoof from "@/assets/hero-roof.jpg";
import serviceTorchOn from "@/assets/service-torch-on.jpg";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RVM Liquid Rubber — Waterproofing & Damp Removal Specialists in Johannesburg" },
      {
        name: "description",
        content:
          "Your local liquid rubber genie at your service. RVM offers 10-year guaranteed roof waterproofing, permanent damp removal, rising damp treatment, and home improvement across Johannesburg.",
      },
      { property: "og:title", content: "RVM Liquid Rubber — Waterproofing & Advanced Damp Removal" },
      {
        property: "og:description",
        content:
          "Liquid rubber roof waterproofing, specialized damp removal, rising damp sealing, leak detection, and property maintenance across Johannesburg. Your local liquid rubber genie at your service.",
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
          slogan: "Your local liquid rubber genie at your service",
          email: "info@rvmconsulting.co.za",
          telephone: "079 285 9461",
          description:
            "Roof waterproofing, permanent damp removal, rising damp treatment, and structural home improvement specialists in Johannesburg, South Africa.",
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
    title: "Liquid Rubber Waterproofing",
    copy: "Seamless, elastic liquid rubber application ideal for flat concrete roofs, parapets, sheet metal, and box gutters. Backed by a 10-year written guarantee.",
    image: serviceTorchOn,
  },
  {
    icon: ShieldAlert,
    title: "Advanced Damp Removal & Proofing",
    copy: "Permanent rising damp treatment, chemical barrier injection, wall plaster stripping, anti-fungal sealing, and moisture barrier coatings to eliminate peeling paint.",
    image: serviceResidential,
  },
  {
    icon: Hammer,
    title: "Home Improvement & Remodeling",
    copy: "Comprehensive property overhauls, exterior wall repainting, ceiling board repairs, and structural alterations verified by engineering consultants.",
    image: serviceCommercial,
  },
];

const extras = [
  { icon: Wrench, title: "Non-Destructive Leak Detection", copy: "We trace subterranean pipe leaks and thermal roof moisture, finding the root cause." },
  {
    icon: ShieldCheck,
    title: "10-Year Written Guarantee",
    copy: "Official written guarantee on completed liquid rubber waterproofing and specialized damp removal work.",
  },
  {
    icon: Droplets,
    title: "Damp & Mold Remediation",
    copy: "Complete removal of trapped wall moisture, white salt damp efflorescence, and toxic black mold spore treatments.",
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
          {/* Slogan Banner */}
          <div className="inline-block rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 mb-6">
            <p className="eyebrow text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">
              ✨ Your local liquid rubber genie at your service
            </p>
          </div>

          <h1 className="mt-2 max-w-3xl text-4xl uppercase sm:text-5xl md:text-6xl font-black">
            Waterproofing, Damp Removal &amp; Home Improvement
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Stop peeling paint, blistering plaster, and roof leaks for good. RVM Liquid Rubber banishes rising damp and protects Johannesburg properties with written 10-year guarantees.
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
              ["15+", "Years on Jo'burg properties"],
              ["100%", "Permanent damp removal"],
              ["10-Year", "Written guarantees"],
              ["Full", "Property restoration scope"],
            ].map(([stat, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl text-primary font-bold">{stat}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Special Damp Problem Awareness Banner */}
      <section className="border-t border-border bg-card py-10">
        <div className="mx-auto max-w-6xl px-5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Johannesburg Moisture Notice</span>
            <h3 className="text-xl font-bold uppercase mt-1">Is damp destroying your walls or bubbling your paint?</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
              Gauteng's heavy rain cycles cause severe rising damp and lateral moisture penetration in ground-floor walls. Painting over it won't work — we neutralize the salt and install permanent moisture barriers.
            </p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Book Damp Inspection
          </Link>
        </div>
      </section>

      {/* Video Demonstration Section */}
      <section className="border-t border-border bg-deep py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="eyebrow">Your local liquid rubber genie at your service</p>
            <h2 className="mt-3 text-3xl uppercase sm:text-4xl font-black">See Our Work in Action</h2>
            <p className="mt-2 text-muted-foreground">
              Watch our team complete high-quality liquid rubber roof waterproofing, damp removal, and structural repairs.
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
        <h2 className="mt-3 text-3xl uppercase sm:text-4xl font-black">Waterproofing, Damp Removal &amp; Remodeling</h2>
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
                <h3 className="mt-4 text-lg uppercase font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.copy}</p>
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
                <h3 className="text-base uppercase font-bold">{e.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-3 text-3xl uppercase sm:text-4xl font-black">Four steps to banish damp &amp; leaks</h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Damp & Roof inspection", "We assess the property, photograph problem areas, and test wall moisture levels."],
            ["02", "Written quote", "Itemised scope of work, damp-proofing materials, timeline, and guarantee details."],
            ["03", "Execution", "Plaster removal, chemical damp barriers, liquid rubber application, and protective painting."],
            ["04", "Sign-off", "Moisture re-testing, handover pack, and 10-year written guarantee certificate."],
          ].map(([num, title, copy]) => (
            <li key={num} className="rounded-lg border border-border bg-card p-6 shadow-card">
              <span className="font-display text-sm text-primary font-bold">{num}</span>
              <h3 className="mt-3 text-base uppercase font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Areas */}
      <section className="border-t border-border bg-deep">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="eyebrow">Service areas</p>
          <h2 className="mt-3 text-2xl uppercase sm:text-3xl font-black">Across greater Johannesburg</h2>
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
          <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/90 mb-2">
            Your local liquid rubber genie at your service
          </p>
          <h2 className="text-3xl uppercase text-primary-foreground sm:text-4xl font-black">
            Banish Leaks &amp; Damp From Your Property
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90 leading-relaxed">
            Book an on-site moisture and roof assessment now. Eliminate damp, peeling paint, and water leaks permanently.
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
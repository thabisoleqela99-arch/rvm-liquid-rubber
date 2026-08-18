import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, HeartHandshake, HardHat, Phone, Users, Sparkles, Building2, ShieldAlert, Droplets } from "lucide-react";

// Asset Import
import ownerPic from "../assets/Owner-Picture.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Your Local Liquid Rubber Genie at Your Service | RVM Liquid Rubber" },
      {
        name: "description",
        content:
          "Your local liquid rubber genie at your service. Learn about RVM Trading and Consulting t/a RVM Liquid Rubber. Driven owner-managed business with a hands-on approach, dedicated to safety, SABS-tested liquid rubber waterproofing, permanent damp removal, site prayer, and community outreach nationwide.",
      },
      { property: "og:title", content: "About RVM Liquid Rubber — Waterproofing & Damp Removal Specialists" },
      {
        property: "og:description",
        content:
          "Your local liquid rubber genie at your service. Driven owner-managed business with a hands-on approach. High safety standards, 10-year guarantees, rising damp elimination, structural integrity, and community initiatives across South Africa.",
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
    title: "Strict Safety & Compliance",
    copy: "Safety equipment is non-negotiable. Full crew compliance with harnesses, helmets, goggles, and heavy-duty tool operation on every project site.",
  },
  {
    icon: ShieldCheck,
    title: "10-Year Guarantee & SABS Products",
    copy: "We exclusively utilize insurance-compliant, SABS-tested liquid rubber formulas backed by our 10-year waterproofing warranty.",
  },
  {
    icon: ShieldAlert,
    title: "Permanent Damp & Moisture Removal",
    copy: "Specialized chemical damp proofing, plaster stripping, salt efflorescence treatment, and anti-fungal barrier sealers for properties across South Africa.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Values & Integrity",
    copy: "Our work environment is anchored in trust, mutual respect, site safety checks, and daily prayer at job sites before work begins.",
  },
];

const communityProjects = [
  "Doorway to Dignity community support & outreach initiatives",
  "Local feeding schemes and emergency food distribution support",
  "Church venue refurbishments, structural waterproofing, and damp repair",
];

function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-gradient-deep">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="inline-block rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 mb-4">
            <p className="eyebrow text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">
              ✨ Your local liquid rubber genie at your service
            </p>
          </div>
          <h1 className="mt-2 max-w-3xl text-4xl uppercase sm:text-5xl font-black">
            Craftsmanship, Safety &amp; Purpose
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            RVM Trading and Consulting (trading as <strong>RVM Liquid Rubber</strong>) is a driven owner-managed business with a hands-on approach, delivering premium 10-year guaranteed waterproofing, specialized damp removal, plumbing, tiling, and interior refurbishments across South Africa.
          </p>
        </div>
      </section>

      {/* Visual Showcase & Company Overview Section */}
      <section className="border-b border-border bg-card py-16">
        <div className="mx-auto max-w-6xl px-5 grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Single Uncropped Owner Image Column */}
          <div className="w-full flex justify-center items-center">
            <img 
              src={ownerPic} 
              alt="RVM Management Team" 
              className="w-full h-auto rounded-xl object-contain border border-border shadow-card max-h-[600px]"
            />
          </div>

          {/* Details Column */}
          <div>
            <p className="eyebrow text-primary font-bold">About Our Practice</p>
            <h2 className="mt-3 text-3xl uppercase font-black">Hand-Applied Quality &amp; Total Damp Protection</h2>
            
            <p className="mt-4 text-muted-foreground leading-relaxed">
              <strong>RVM Trading and Consulting</strong> (trading as <strong>RVM Liquid Rubber</strong>) is your local liquid rubber genie at your service — a driven owner-managed business with a hands-on approach delivering premium waterproofing, rising damp elimination, plumbing, tiling, and interior refurbishments for residential and commercial properties nationwide.
            </p>

            <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Waterproofing &amp; Damp Expertise:</strong> We specialize in high-durability liquid rubber waterproofing painted directly by hand for maximum coverage, backed by a 10-year written guarantee. Driven by proven industry expertise, we eradicate persistent rising damp, peeling paint, and wall moisture using SABS / BAA tested sealers and chemical barriers.
              </p>
              
              <p>
                <strong className="text-foreground">Safety &amp; Compliance:</strong> Fully compliant with height-safety regulations, equipped with proper harnesses, helmets, safety goggles, and professional machinery for seamless interior and exterior remodeling.
              </p>

              <p>
                <strong className="text-foreground">Driven by Integrity:</strong> Every project starts with dedication and care—our experienced, trusted teams go above and beyond to protect your home, ensure quality craftsmanship, and make a positive community impact. The business is driven on the principles of kingdom business beliefs.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Approach & Scope Limits */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-primary font-bold">Operational Standards</p>
            <h2 className="mt-3 text-3xl uppercase font-black">Honest Pricing &amp; Certified Scope</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We focus on interior remodeling, permanent rising damp removal, bathroom updates, tiling, plumbing, and structural roof waterproofing for residential and commercial spaces nationwide rather than building ground-up houses from scratch.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To ensure complete pricing accuracy and eliminate surprise costs, we prioritize thorough <strong>on-site assessments</strong> prior to issuing final itemized quotes. As a driven owner-managed business with a hands-on approach, our leadership is actively involved on site. If an interior modification involves weight-bearing pillars or structural walls, we bring in certified structural consultants to verify safety before execution.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-8 shadow-card">
            <h3 className="text-xl uppercase font-bold text-primary mb-4">Our Core Scope</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary shrink-0" />
                Roof &amp; wall liquid rubber waterproofing (10-Year Guarantee)
              </li>
              <li className="flex items-center gap-2">
                <ShieldAlert className="size-4 text-primary shrink-0" />
                Permanent damp removal, chemical DPC injection &amp; salt treatment
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary shrink-0" />
                Plumbing, tiling, bathroom &amp; toilet refurbishments
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary shrink-0" />
                Interior remodeling &amp; consultant-approved wall modifications
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary shrink-0" />
                Strict site safety gear compliance &amp; insurance-tested materials
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="border-y border-border bg-deep py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="eyebrow text-primary font-bold">What Drives Us</p>
            <h2 className="mt-3 text-3xl uppercase font-black">Company Values &amp; Workplace Culture</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-border bg-card p-6 shadow-card">
                <v.icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-base uppercase font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="eyebrow text-primary font-bold">Giving Back</p>
            <h2 className="mt-3 text-3xl uppercase font-black">Community &amp; Outreach Initiatives</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We believe business success should directly uplift surrounding communities. Beyond commercial operations, RVM Liquid Rubber actively participates in social development, community venue refurbishments, and moisture protection for local facilities.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {communityProjects.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <HeartHandshake className="size-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-gradient-accent p-8 text-primary-foreground shadow-lift">
            <Users className="size-8 text-primary-foreground mb-4" />
            <h3 className="text-2xl uppercase font-black">Build with Purpose</h3>
            <p className="mt-2 text-sm text-primary-foreground/90 leading-relaxed">
              When you hire RVM Liquid Rubber, you support safe workplace practices, ethical craftsmanship, and local community feeding and dignity programs.
            </p>
            <div className="mt-6">
              <Link to="/contact" className="btn-primary bg-deep text-deep-foreground hover:bg-deep/90">
                Book a site assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-deep py-16 text-center">
        <div className="mx-auto max-w-4xl px-5">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Your local liquid rubber genie at your service
          </p>
          <h2 className="text-3xl uppercase font-black">Need a Professional Damp or Roof Assessment?</h2>
          <p className="mt-3 text-muted-foreground">
            Contact <strong>Ralf Naidoo (079 285 9461)</strong> or <strong>Earl Takka (079 797 3960)</strong>, or email <strong>info@rvmconsulting.co.za</strong> to schedule an on-site visit.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a href="tel:0792859461" className="btn-primary">
              <Phone className="size-4" aria-hidden="true" />
              Call Ralf
            </a>
            <a href="tel:0797973960" className="btn-primary">
              <Phone className="size-4" aria-hidden="true" />
              Call Earl
            </a>
            <Link to="/contact" className="btn-outline">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
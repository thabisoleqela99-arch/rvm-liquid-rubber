import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, HeartHandshake, HardHat, Phone, Users, Sparkles, Building2 } from "lucide-react";

// Asset Import
import ownerPic from "../assets/Owner-Picture.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — RVM Trading and Consulting t/a RVM Liquid Rubber" },
      {
        name: "description",
        content:
          "Learn about RVM Trading and Consulting t/a RVM Liquid Rubber. Dedicated to safety, SABS-tested waterproofing, interior remodeling, site prayer, and community outreach in Gauteng.",
      },
      { property: "og:title", content: "About RVM Liquid Rubber & Consulting" },
      {
        property: "og:description",
        content:
          "High safety standards, 10-year guarantees, structural integrity, and community initiatives like Doorway to Dignity across Johannesburg.",
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
    copy: "We exclusively utilize insurance-compliant, SABS-tested liquid rubber formulas backed by our 10-year waterproofing guarantee.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Values & Integrity",
    copy: "Our work environment is anchored in trust, mutual respect, site safety checks, and daily prayer at job sites before work begins.",
  },
  {
    icon: Building2,
    title: "Consultant-Verified Engineering",
    copy: "For structural modifications and load-bearing walls, we work directly with engineering consultants to guarantee structural integrity before cutting.",
  },
];

const communityProjects = [
  "Doorway to Dignity community support & outreach initiatives",
  "Local feeding schemes and emergency food distribution support",
  "Church venue refurbishments, structural waterproofing, and painting",
  "Local youth development and skills upliftment programs",
];

function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-gradient-deep">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">RVM Trading and Consulting</p>
          <h1 className="mt-4 max-w-3xl text-4xl uppercase sm:text-5xl">
            Craftsmanship, Safety &amp; Purpose
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            RVM Trading and Consulting (trading as <strong>RVM Liquid Rubber</strong>) delivers premium waterproofing, plumbing, tiling, and interior refurbishments across greater Johannesburg.
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
              alt="RVM Owner / Management" 
              className="w-full h-auto rounded-xl object-contain border border-border shadow-card max-h-[600px]"
            />
          </div>

          {/* Details Column */}
          <div>
            <p className="eyebrow">About Our Practice</p>
            <h2 className="mt-3 text-3xl uppercase">Hand-Applied Quality &amp; Total Protection</h2>
            
            <p className="mt-4 text-muted-foreground leading-relaxed">
              <strong>RVM Trading and Consulting</strong> (trading as <strong>RVM Liquid Rubber</strong>) delivers premium waterproofing, dam sealing, plumbing, tiling, and interior refurbishments for residential and commercial properties across greater Johannesburg and surrounding areas.
            </p>

            <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Our Expertise &amp; Standards:</strong> We specialize in high-durability liquid rubber waterproofing painted directly by hand for maximum coverage, backed by a 10-year guarantee. All products used are eco-friendly, fume-free, and SABS / BAA tested to meet full insurance standards.
              </p>
              
              <p>
                <strong className="text-foreground">Safety &amp; Compliance:</strong> Fully compliant with height-safety regulations, equipped with proper harnesses, helmets, safety goggles, and professional machinery for seamless interior and exterior remodeling.
              </p>

              <p>
                <strong className="text-foreground">Driven by Integrity:</strong> Every project starts with dedication and care—our experienced, trusted teams go above and beyond to protect your home, ensure quality craftsmanship, and make a positive community impact.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Approach & Scope Limits */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Operational Standards</p>
            <h2 className="mt-3 text-3xl uppercase">Honest Pricing &amp; Certified Scope</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We focus on interior remodeling, bathroom updates, tiling, plumbing, and structural waterproofing for residential and commercial spaces rather than building ground-up houses from scratch.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To ensure complete pricing accuracy, we prioritize thorough <strong>on-site assessments</strong> prior to issuing final itemized quotes. If an interior modification involves weight-bearing pillars or structural walls, we bring in certified structural consultants to verify safety before execution.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-8 shadow-card">
            <h3 className="text-xl uppercase font-semibold text-primary mb-4">Our Core Scope</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary shrink-0" />
                Roof &amp; wall liquid rubber waterproofing (10-Year Guarantee)
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
            <p className="eyebrow">What Drives Us</p>
            <h2 className="mt-3 text-3xl uppercase">Company Values &amp; Workplace Culture</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-border bg-card p-6 shadow-card">
                <v.icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-base uppercase font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="eyebrow">Giving Back</p>
            <h2 className="mt-3 text-3xl uppercase">Community &amp; Outreach Initiatives</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We believe business success should directly uplift surrounding communities. Beyond commercial operations, RVM Liquid Rubber actively participates in social development and venue refurbishments.
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
            <h3 className="text-2xl uppercase">Build with Purpose</h3>
            <p className="mt-2 text-sm text-primary-foreground/85">
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
          <h2 className="text-3xl uppercase">Need a Professional Site Assessment?</h2>
          <p className="mt-3 text-muted-foreground">
            Call <strong>079 285 9461</strong> or email <strong>info@rvmconsulting.co.za</strong> to schedule an on-site visit.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a href="tel:0792859461" className="btn-primary">
              <Phone className="size-4" aria-hidden="true" />
              Call 079 285 9461
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
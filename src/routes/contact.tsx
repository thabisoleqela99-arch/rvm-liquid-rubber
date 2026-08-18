import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle2, User } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & Request a Quote — Your Local Liquid Rubber Genie at Your Service" },
      {
        name: "description",
        content:
          "Your local liquid rubber genie at your service. Contact Ralf Naidoo (079 285 9461) or Earl Takka (079 797 3960) for 10-year guaranteed roof waterproofing, damp removal, painting, and remodeling across South Africa.",
      },
      { property: "og:title", content: "Contact RVM Liquid Rubber — Waterproofing & Damp Removal" },
      {
        property: "og:description",
        content:
          "Chat directly on WhatsApp or submit a formal quote request for liquid rubber waterproofing, damp proofing, leak detection, and property refurbishments across South Africa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

export function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Default WhatsApp link pointing to Ralf Naidoo
  const whatsappNumber = "27792859461";
  const defaultMessage = encodeURIComponent(
    "Hi RVM, I would like to request an on-site assessment and quote for my property."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero Header */}
      <section className="border-b border-border bg-gradient-deep py-16 text-center">
        <div className="mx-auto max-w-4xl px-5">
          <div className="inline-block rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 mb-4">
            <p className="eyebrow text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">
              ✨ Your local liquid rubber genie at your service
            </p>
          </div>
          <h1 className="mt-2 text-4xl font-black uppercase sm:text-5xl">Contact RVM</h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Request an itemized quotation online or message us directly for immediate assistance with roof waterproofing, damp removal, or property refurbishments nationwide.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Left Column: Direct WhatsApp & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Business Featured Card */}
            <div className="rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 p-6 shadow-card relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#25D366] text-black shrink-0">
                  <MessageCircle className="size-7 fill-current" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30">
                    Fastest Response
                  </span>
                  <h2 className="text-xl font-bold uppercase mt-1">Chat on WhatsApp</h2>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    Connect directly with our team to share photos of wall damp, roof leaks, or request quick callouts.
                  </p>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2.5 w-full rounded-lg bg-[#25D366] px-5 py-3.5 text-sm font-bold text-black hover:bg-[#20bd5a] transition-all shadow-md hover:-translate-y-0.5"
              >
                <MessageCircle className="size-5 fill-current" />
                Start WhatsApp Chat
              </a>
            </div>

            {/* Direct Contacts Info Cards */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-6">
              <h2 className="text-lg font-bold uppercase border-b border-border pb-3">Direct Contacts</h2>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <User className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Ralf Naidoo</p>
                  <a href="tel:0792859461" className="text-base font-bold hover:text-primary transition-colors">
                    079 285 9461
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <User className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Earl Takka</p>
                  <a href="tel:0797973960" className="text-base font-bold hover:text-primary transition-colors">
                    079 797 3960
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Email Inquiry</p>
                  <a href="mailto:info@rvmconsulting.co.za" className="text-base font-bold hover:text-primary transition-colors">
                    info@rvmconsulting.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Service Coverage</p>
                  <p className="text-sm font-medium">Nationwide Across South Africa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Clock className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Working Hours</p>
                  <p className="text-sm font-medium">Mon – Sat: 07:30 – 17:30</p>
                  <p className="text-xs text-primary font-semibold mt-0.5">24/7 Emergency Leak Response</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Web Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-border bg-card p-8 shadow-card">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                Your local liquid rubber genie at your service
              </p>
              <h2 className="text-2xl font-bold uppercase">Request a Formal Quote</h2>
              <p className="text-sm text-muted-foreground mt-1 mb-6 leading-relaxed">
                Fill in your project details below and our technical estimators will contact you to schedule an on-site inspection.
              </p>

              {formSubmitted ? (
                <div className="rounded-lg border border-primary/30 bg-primary/10 p-8 text-center space-y-3">
                  <CheckCircle2 className="size-12 text-primary mx-auto" />
                  <h3 className="text-xl font-bold uppercase">Quote Request Received!</h3>
                  <p className="text-sm text-muted-foreground">
                    Thank you. One of our specialists will reach out to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="079 123 4567"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase mb-1.5">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase mb-1.5">City / Province</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Johannesburg, Cape Town, Durban"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase mb-1.5">Service Required</label>
                    <select className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none">
                      <option value="damp">Damp Removal &amp; Moisture Proofing</option>
                      <option value="roofing">Roof Waterproofing &amp; Liquid Rubber</option>
                      <option value="remodelling">Remodeling &amp; Structural Repairs</option>
                      <option value="painting">Interior &amp; Exterior Painting</option>
                      <option value="ceiling">Ceiling Repairs &amp; Installation</option>
                      <option value="refurbishment">Full Property Refurbishment</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase mb-1.5">Project Details</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe the leak, wall damp issues, roof type, or scope of home improvement needed..."
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2"
                  >
                    <Send className="size-4" /> Submit Quote Request
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
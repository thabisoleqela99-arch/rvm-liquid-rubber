import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Send, MessageCircle, Clock, CheckCircle2, Facebook, Instagram } from "lucide-react";

// Glob asset importer to safely load images regardless of casing or extension
const assets = import.meta.glob("../assets/**/*.{jpg,jpeg,JPG,JPEG,png,PNG}", { eager: true, import: "default" }) as Record<string, string>;
const getAsset = (filePath: string) => assets[`../assets/${filePath}`] || "";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & Request a Quote — Your Local Liquid Rubber Genie at Your Service" },
      {
        name: "description",
        content:
          "Your local liquid rubber genie at your service. Contact Rylf Naidoo (079 285 9461) or Earl Takka (079 797 3960) for 10-year guaranteed roof waterproofing, damp removal, painting, and remodeling across South Africa.",
      },
      { property: "og:title", content: "Contact RVM Liquid Rubber — Waterproofing & Damp Removal" },
      {
        property: "og:description",
        content:
          "Connect on WhatsApp, Facebook, Instagram, or TikTok, or submit a formal quote request for liquid rubber waterproofing, damp proofing, leak detection, and property refurbishments across South Africa.",
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

  // Dynamic asset fetching
  const rylfPic = getAsset("Ralf.png");
  const earlPic = getAsset("Earl.jpeg");

  // Direct WhatsApp link
  const rylfWhatsapp = "https://wa.me/27792859461?text=" + encodeURIComponent("Hi Rylf, I would like to request an on-site assessment and quote.");

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
            Request an itemized quotation online or connect with us directly via phone, WhatsApp, Facebook, Instagram, or TikTok for assistance nationwide.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Left Column: Direct Contacts & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contacts Info Card */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-6 shadow-card">
              <h2 className="text-lg font-bold uppercase border-b border-border pb-3">Direct Contacts</h2>

              {/* Rylf Naidoo */}
              <div className="flex items-center gap-4">
                {rylfPic ? (
                  <img
                    src={rylfPic}
                    alt="Rylf Naidoo"
                    className="size-12 rounded-full object-cover border-2 border-primary/40 shrink-0"
                  />
                ) : (
                  <div className="size-12 rounded-full bg-primary/10 text-primary border-2 border-primary/40 shrink-0 flex items-center justify-center text-xs font-bold">
                    RN
                  </div>
                )}
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Rylf Naidoo</p>
                  <a href="tel:0792859461" className="text-base font-bold hover:text-primary transition-colors">
                    079 285 9461
                  </a>
                </div>
              </div>

              {/* Earl Takka */}
              <div className="flex items-center gap-4">
                {earlPic ? (
                  <img
                    src={earlPic}
                    alt="Earl Takka"
                    className="size-12 rounded-full object-cover border-2 border-primary/40 shrink-0"
                  />
                ) : (
                  <div className="size-12 rounded-full bg-primary/10 text-primary border-2 border-primary/40 shrink-0 flex items-center justify-center text-xs font-bold">
                    ET
                  </div>
                )}
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

            {/* Social & Messaging Channels Card */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
              <h2 className="text-lg font-bold uppercase border-b border-border pb-3">Connect With Us</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Follow our latest project transformations, video demonstrations, and chat directly with our team:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {/* WhatsApp Button */}
                <a
                  href={rylfWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-black transition-all group"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="size-6 mb-1 fill-current" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
                </a>

                {/* Facebook Button */}
                <a
                  href="https://www.facebook.com/profile.php?id=61551126262606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg border border-[#1877F2]/40 bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all group"
                  title="Visit Facebook Page"
                >
                  <Facebook className="size-6 mb-1 fill-current" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Facebook</span>
                </a>

                {/* Instagram Button */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg border border-[#E4405F]/40 bg-[#E4405F]/10 text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all group"
                  title="Follow on Instagram"
                >
                  <Instagram className="size-6 mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Instagram</span>
                </a>

                {/* TikTok Button */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg border border-foreground/30 bg-foreground/5 text-foreground hover:bg-foreground hover:text-background transition-all group"
                  title="Follow on TikTok"
                >
                  <svg className="size-6 mb-1 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.05a8.16 8.16 0 0 0 4.91 1.62v-3.98a4.85 4.85 0 0 1-1-.02z"/>
                  </svg>
                  <span className="text-[10px] font-bold uppercase tracking-wider">TikTok</span>
                </a>
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
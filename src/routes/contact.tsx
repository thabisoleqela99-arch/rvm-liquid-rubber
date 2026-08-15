import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & Request a Quote — RVM Trading and Consulting" },
      {
        name: "description",
        content:
          "Get in touch with RVM for roof waterproofing, painting, remodeling, and repairs in Johannesburg. Chat directly on WhatsApp or submit a quote request.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

export function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // RVM WhatsApp Business number: 079 285 9461 -> International format: 27792859461
  const whatsappNumber = "27792859461";
  const defaultMessage = encodeURIComponent(
    "Hi RVM, I would like to request an on-site assessment and quote for my property."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integrated backend form logic goes here
    setFormSubmitted(true);
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero Header */}
      <section className="border-b border-border bg-gradient-deep py-16 text-center">
        <div className="mx-auto max-w-4xl px-5">
          <p className="eyebrow">Get In Touch</p>
          <h1 className="mt-3 text-4xl font-black uppercase sm:text-5xl">Contact RVM</h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Request an itemized quotation online or message us directly on WhatsApp for immediate assistance.
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
                  <p className="text-sm text-muted-foreground mt-1">
                    Connect directly with our team to share photo inquiries, roof measurements, or request quick callouts.
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

            {/* Standard Contact Info Cards */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-6">
              <h2 className="text-lg font-bold uppercase border-b border-border pb-3">Contact Details</h2>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Phone className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Phone Callouts</p>
                  <a href="tel:0792859461" className="text-base font-bold hover:text-primary transition-colors">
                    079 285 9461
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
                  <p className="text-sm font-medium">Greater Johannesburg & Gauteng Area</p>
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
              <h2 className="text-2xl font-bold uppercase">Request a Formal Quote</h2>
              <p className="text-sm text-muted-foreground mt-1 mb-6">
                Fill in your project details below and our technical estimators will contact you to schedule a site inspection.
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
                      <label className="block text-xs font-semibold uppercase mb-1.5">Suburb / Location</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sandton, Roodepoort"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase mb-1.5">Service Required</label>
                    <select className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none">
                      <option value="roofing">Roof Waterproofing & Liquid Rubber</option>
                      <option value="remodelling">Remodeling & Structural Repairs</option>
                      <option value="painting">Interior & Exterior Painting</option>
                      <option value="ceiling">Ceiling Repairs & Installation</option>
                      <option value="refurbishment">Full Property Refurbishment</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase mb-1.5">Project Details</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe the leak, roof type, or scope of home improvement needed..."
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
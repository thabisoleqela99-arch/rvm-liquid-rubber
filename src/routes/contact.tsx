import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact R.V.M Waterproofing — Free Roof Inspection in Johannesburg" },
      {
        name: "description",
        content:
          "Request a free roof waterproofing inspection or quote in Johannesburg. Commercial and residential enquiries welcome, with 24/7 emergency leak callouts.",
      },
      { property: "og:title", content: "Contact R.V.M Waterproofing" },
      {
        property: "og:description",
        content: "Book a free roof inspection or quote anywhere in greater Johannesburg.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="border-b border-border bg-gradient-deep">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-4xl uppercase sm:text-5xl">Free roof inspection</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Tell us about the roof and we will come look at it. Commercial site visits and
            residential quotes across greater Johannesburg.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1.2fr_1fr]">
        <form
          className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <h2 className="text-xl uppercase">Request a quote</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm">
              <span className="text-muted-foreground">Name</span>
              <input
                required
                name="name"
                className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 outline-none focus:border-primary"
              />
            </label>
            <label className="text-sm">
              <span className="text-muted-foreground">Phone</span>
              <input
                required
                name="phone"
                type="tel"
                className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 outline-none focus:border-primary"
              />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="text-muted-foreground">Email</span>
              <input
                required
                name="email"
                type="email"
                className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 outline-none focus:border-primary"
              />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="text-muted-foreground">Property type</span>
              <select
                name="type"
                className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 outline-none focus:border-primary"
              >
                <option>Private home</option>
                <option>Townhouse / complex</option>
                <option>Office or retail</option>
                <option>Industrial / warehouse</option>
              </select>
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="text-muted-foreground">Suburb</span>
              <input
                name="suburb"
                className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 outline-none focus:border-primary"
              />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="text-muted-foreground">What is happening on the roof?</span>
              <textarea
                required
                name="message"
                rows={4}
                className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 outline-none focus:border-primary"
              />
            </label>
          </div>
          <button type="submit" className="btn-primary mt-6">
            Send enquiry
          </button>
          {sent ? (
            <p className="mt-4 text-sm text-primary">
              Thanks — your enquiry is noted. Call us directly for urgent leaks.
            </p>
          ) : null}
        </form>

        <aside className="space-y-6">
          <div className="rounded-lg border border-border bg-card p-6 shadow-card">
            <h2 className="text-base uppercase">Get in touch</h2>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  Phone / WhatsApp
                  <br />
                  <span className="text-foreground">Add your number</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  Email
                  <br />
                  <span className="text-foreground">Add your email address</span>
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>Johannesburg, Gauteng — serving the greater Jo&apos;burg area</span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>Mon–Fri 07:00–17:00, Sat 08:00–13:00. Emergency leaks 24/7.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-gradient-accent p-6 shadow-lift">
            <h2 className="text-base uppercase text-primary-foreground">Storm damage?</h2>
            <p className="mt-2 text-sm text-primary-foreground/85">
              Emergency callouts get priority — phone us instead of using the form.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}

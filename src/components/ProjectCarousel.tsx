import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

// Dynamically retrieve all project images from src/assets
const assets = import.meta.glob("../assets/**/*.{jpg,jpeg,JPG,JPEG,png,PNG}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getAsset = (filePath: string) => assets[`../assets/${filePath}`] || "";

// Curated list of small showcase cards for the homepage marquee
const marqueeItems = [
  { title: "Roof Waterproofing", type: "After", cat: "Roofing", src: getAsset("Roofing/Project 1/Roofing-After-1.jpeg") },
  { title: "Patio & Bulkhead", type: "After", cat: "Remodeling", src: getAsset("Remodelling/Remodelling-After-1.jpeg") },
  { title: "Exterior Painting", type: "After", cat: "Painting", src: getAsset("Painting/Project 1/Painting-After-1.jpeg") },
  { title: "Water Damage Repair", type: "Before", cat: "Ceiling", src: getAsset("Ceiling/Project 1/Ceiling-Before-1.jpeg") },
  { title: "Ceiling Installation", type: "After", cat: "Ceiling", src: getAsset("Ceiling/Project 1/Ceiling-After-1.jpeg") },
  { title: "Roof Coating Prep", type: "Before", cat: "Roofing", src: getAsset("Roofing/Project 1/Roofing-Before-1.jpeg") },
  { title: "Full Refurbishment", type: "After", cat: "Refurbishment", src: getAsset("Refurbishments/Project 1/Refurbishment-After-1.jpeg") },
  { title: "Major Renovation", type: "After", cat: "Major Projects", src: getAsset("Major Works/Big-Project-After-1.jpeg") },
  { title: "Interior Repainting", type: "After", cat: "Painting", src: getAsset("Painting/Project 2/Paint-After-1.jpeg") },
  { title: "Masonry Remodel", type: "After", cat: "Remodeling", src: getAsset("Remodelling/Project 4/Remodelling-After-1.jpeg") },
];

export function ProjectCarousel() {
  // Duplicate the array so the marquee loop connects seamlessly
  const doubledItems = [...marqueeItems, ...marqueeItems];

  return (
    <section className="border-y border-border bg-deep/50 py-16 overflow-hidden">
      <style>{`
        @keyframes continuousMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: continuousMarquee 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-5 mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Recent Transformations</p>
          <h2 className="mt-2 text-2xl uppercase sm:text-3xl font-black">Our Work Showcase</h2>
        </div>
        <Link to="/our-works" className="btn-outline text-xs flex items-center gap-2">
          View All Completed Works <ArrowRight className="size-4" />
        </Link>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge blur overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee-track flex gap-5">
          {doubledItems.map((item, idx) => (
            <Link
              key={idx}
              to="/our-works"
              className="group relative shrink-0 w-64 rounded-xl border border-border bg-card overflow-hidden shadow-card transition-all hover:scale-[1.02] hover:border-primary/50"
            >
              {/* Image Container */}
              <div className="relative h-40 w-full bg-black/40 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white ${
                    item.type === "Before" ? "bg-amber-600/90" : "bg-primary/90"
                  }`}
                >
                  {item.type}
                </span>
                <span className="absolute bottom-2 right-2 text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-black/70 text-white/90 border border-white/10">
                  {item.cat}
                </span>
              </div>

              {/* Title Bar */}
              <div className="p-3 bg-card border-t border-border/60">
                <p className="text-xs font-bold uppercase truncate group-hover:text-primary transition-colors">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
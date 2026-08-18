import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  Hammer, Paintbrush, Home, Building2, Layers, Wrench, Phone, 
  ArrowRight, CheckCircle2, History, ChevronLeft, ChevronRight, 
  Maximize2, X, ChevronDown, ChevronUp, ShieldAlert
} from "lucide-react";

export const Route = createFileRoute("/our-works")({
  head: () => ({
    meta: [
      { title: "Our Works & Completed Projects — Your Local Liquid Rubber Genie at Your Service" },
      {
        name: "description",
        content:
          "Your local liquid rubber genie at your service. Explore our gallery of completed waterproofing, permanent damp removal, roofing, remodeling, painting, ceiling, and refurbishment projects across South Africa.",
      },
      { property: "og:title", content: "Our Works & Completed Projects — RVM Liquid Rubber" },
      {
        property: "og:description",
        content:
          "Explore our gallery of 10-year guaranteed liquid rubber waterproofing, rising damp elimination, roof restoration, and property remodeling projects across South Africa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/our-works" },
    ],
    links: [{ rel: "canonical", href: "/our-works" }],
  }),
  component: OurWorksPage,
});

// Recursively imports all image formats across all asset subfolders
const assets = import.meta.glob("../assets/**/*.{jpg,jpeg,JPG,JPEG,png,PNG}", { eager: true, import: "default" }) as Record<string, string>;
const getAsset = (filePath: string) => assets[`../assets/${filePath}`] || "";

// Category list order with Major Projects last
const categories = [
  { id: "remodelling", label: "Remodeling", icon: Hammer },
  { id: "painting", label: "Painting & Damp", icon: Paintbrush },
  { id: "roofing", label: "Roofing & Waterproofing", icon: Home },
  { id: "ceiling", label: "Ceiling", icon: Layers },
  { id: "refurbishment", label: "Refurbishment", icon: Wrench },
  { id: "major-projects", label: "Major Projects", icon: Building2 },
];

function RemodelProjectCard({ project }: { project: any }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Combine Before & After into one master list for seamless scrolling
  const allImages = [
    ...project.beforeImages.map((src: string, i: number) => ({
      src,
      type: "before" as const,
      label: `Before (${i + 1}/${project.beforeImages.length})`,
    })),
    ...project.afterImages.map((src: string, i: number) => ({
      src,
      type: "after" as const,
      label: `After (${i + 1}/${project.afterImages.length})`,
    })),
  ];

  const currentItem = allImages[activeImgIndex] || allImages[0];

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImgIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImgIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const jumpToType = (type: "before" | "after") => {
    const targetIndex = allImages.findIndex((img) => img.type === type);
    if (targetIndex !== -1) {
      setActiveImgIndex(targetIndex);
    }
  };

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-card transition-all">
      {/* Collapsed Header / Summary Bar */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-5 bg-deep/50 hover:bg-deep/80 cursor-pointer flex flex-wrap items-center justify-between gap-4 transition-colors"
      >
        <div className="flex items-center gap-4">
          <img 
            src={project.beforeImages[0] || project.afterImages[0]} 
            alt={project.title}
            className="w-16 h-16 object-cover rounded-lg border border-border shrink-0" 
          />
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
              {project.location}
            </span>
            <h3 className="text-lg font-bold uppercase mt-1">{project.title}</h3>
          </div>
        </div>

        <button
          type="button"
          className="btn-outline py-2 px-4 text-xs flex items-center gap-2"
        >
          {isExpanded ? (
            <>Hide Project <ChevronUp className="size-4" /></>
          ) : (
            <>View Project <ChevronDown className="size-4" /></>
          )}
        </button>
      </div>

      {/* Expanded Project Details */}
      {isExpanded && (
        <div className="border-t border-border">
          {/* Controls Bar */}
          <div className="p-4 bg-background/50 border-b border-border flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                currentItem.type === "before" ? "bg-amber-600/20 text-amber-500 border border-amber-500/30" : "bg-primary/20 text-primary border border-primary/30"
              }`}>
                {currentItem.label}
              </span>
            </div>

            {/* Jump Buttons */}
            <div className="flex items-center gap-1 bg-background p-1 rounded-lg border border-border">
              <button
                onClick={() => jumpToType("before")}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  currentItem.type === "before"
                    ? "bg-amber-600 text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <History className="size-3.5" />
                Before
              </button>
              <button
                onClick={() => jumpToType("after")}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  currentItem.type === "after"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <CheckCircle2 className="size-3.5" />
                After
              </button>
            </div>
          </div>

          {/* Main Card Photo display */}
          <div className="relative bg-black/50 p-4 flex justify-center items-center min-h-[350px] max-h-[500px] group">
            <img
              src={currentItem.src}
              alt={`${project.title} photo ${activeImgIndex + 1}`}
              className="w-full h-auto max-h-[460px] object-contain rounded-lg shadow-md cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            />

            {allImages.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all opacity-80 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all opacity-80 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}

            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute top-6 right-6 flex items-center gap-1.5 bg-black/70 hover:bg-black text-white text-xs px-3 py-1.5 rounded-lg border border-white/20 transition-all"
            >
              <Maximize2 className="size-3.5" /> Enlarge View
            </button>
          </div>

          {/* Combined Thumbnails */}
          <div className="p-3 border-t border-border bg-background/50 flex gap-2 overflow-x-auto">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImgIndex(idx)}
                className={`relative shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                  activeImgIndex === idx ? "border-primary scale-105" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img.src} alt={`Thumbnail ${idx + 1}`} className="w-16 h-12 object-cover" />
                <span className={`absolute bottom-0 inset-x-0 text-[8px] font-bold text-center py-0.5 text-white capitalize ${
                  img.type === "before" ? "bg-amber-600/90" : "bg-primary/90"
                }`}>
                  {img.type}
                </span>
              </button>
            ))}
          </div>

          {/* Description */}
          <div className="p-5 border-t border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
          </div>
        </div>
      )}

      {/* Lightbox / Fullscreen Overlay */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white rounded-full bg-black/50 hover:bg-black/80 transition-colors z-10"
            aria-label="Close enlarged view"
          >
            <X className="size-6" />
          </button>

          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentItem.src}
              alt="Enlarged image"
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg"
            />

            <div className="mt-4 flex items-center justify-between w-full text-white/80 text-sm px-2">
              <span className="capitalize">{currentItem.label}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="size-5" /> Previous
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1"
                >
                  Next <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function OurWorksPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const projectData = {
    remodelling: [
      {
        id: "remodel-1",
        title: "Patio, Bulkhead & Exterior Remodel",
        location: "South Africa",
        description:
          "Complete structural refurbishment including patio tile laying, stair paving, ceiling and bulkhead plastering, and protective dark exterior painting.",
        beforeImages: [
          getAsset("Remodelling/Remodelling-Before-1.jpeg"),
          getAsset("Remodelling/Remodelling-Before-2.jpeg"),
          getAsset("Remodelling/Remodelling-Before-3.jpeg"),
        ],
        afterImages: [
          getAsset("Remodelling/Remodelling-After-1.jpeg"),
          getAsset("Remodelling/Remodelling-After-2.jpeg"),
          getAsset("Remodelling/Remodelling-After-3.jpeg"),
          getAsset("Remodelling/Remodelling-After-4.jpeg"),
          getAsset("Remodelling/Remodelling-After-5.jpeg"),
          getAsset("Remodelling/Remodelling-After-6.jpeg"),
          getAsset("Remodelling/Remodelling-After-7.jpeg"),
        ],
      },
      {
        id: "remodel-2",
        title: "Ceiling Repair & Bathroom Remodel",
        location: "South Africa",
        description:
          "Full tear-down and replacement of damaged ceiling boards, cornices, downlight installation, along with modern wall tiling and interior finishing.",
        beforeImages: [
          getAsset("Remodelling/Project 2/Ceiling-Before-1.jpeg"),
          getAsset("Remodelling/Project 2/Ceiling-Before-2.jpeg"),
          getAsset("Remodelling/Project 2/Ceiling-Before-3.jpeg"),
          getAsset("Remodelling/Project 2/Ceiling-Before-4.jpeg"),
          getAsset("Remodelling/Project 2/Ceiling-Before-5.jpeg"),
          getAsset("Remodelling/Project 2/Ceiling-Before-6.jpeg"),
        ],
        afterImages: [
          getAsset("Remodelling/Project 2/Ceiling-After-1.jpeg"),
          getAsset("Remodelling/Project 2/Ceiling-After-2.jpeg"),
          getAsset("Remodelling/Project 2/Ceiling-After-3.jpeg"),
          getAsset("Remodelling/Project 2/Ceiling-After-4.jpeg"),
          getAsset("Remodelling/Project 2/Ceiling-After-5.jpeg"),
          getAsset("Remodelling/Project 2/Ceiling-After-6.jpeg"),
          getAsset("Remodelling/Project 2/Ceiling-After-7.jpeg"),
          getAsset("Remodelling/Project 2/Ceiling-After-8.jpeg"),
        ],
      },
      {
        id: "remodel-3",
        title: "Interior & Wall Structure Remodel",
        location: "South Africa",
        description:
          "Comprehensive structural preparation, wall repair, and interior remodeling to modernize room layouts and surface finishes.",
        beforeImages: [
          getAsset("Remodelling/Project 3/Remodelling-Before-1.jpeg"),
          getAsset("Remodelling/Project 3/Remodelling-Before-2.jpeg"),
          getAsset("Remodelling/Project 3/Remodelling-Before-3.jpeg"),
          getAsset("Remodelling/Project 3/Remodelling-Before-4.jpeg"),
          getAsset("Remodelling/Project 3/Remodelling-Before-5.jpeg"),
        ],
        afterImages: [
          getAsset("Remodelling/Project 3/Remodelling-After-1.jpeg"),
        ],
      },
      {
        id: "remodel-4",
        title: "Structural Masonry & Surface Remodel",
        location: "South Africa",
        description:
          "Targeted surface restoration and structural remodeling, overcoming weathered foundations to deliver clean, modern exterior and interior finishes.",
        beforeImages: [
          getAsset("Remodelling/Project 4/Remodelling-Before-1.jpeg"),
          getAsset("Remodelling/Project 4/Remodelling-Before-2.jpeg"),
          getAsset("Remodelling/Project 4/Remodelling-Before-3.jpeg"),
        ],
        afterImages: [
          getAsset("Remodelling/Project 4/Remodelling-After-1.jpeg"),
          getAsset("Remodelling/Project 4/Remodelling-After-2.jpeg"),
          getAsset("Remodelling/Project 4/Remodelling-After-3.jpeg"),
        ],
      },
      {
        id: "remodel-5",
        title: "Property Refurbishment & Interior Overhaul",
        location: "South Africa",
        description:
          "Complete property remodeling and restoration focused on restoring surface structural integrity and delivering a pristine, contemporary final finish.",
        beforeImages: [
          getAsset("Remodelling/Project 5/Remodelling-Before-1.jpeg"),
          getAsset("Remodelling/Project 5/Remodelling-Before-2.jpeg"),
        ],
        afterImages: [
          getAsset("Remodelling/Project 5/Remodelling-After-1.jpeg"),
          getAsset("Remodelling/Project 5/Remodelling-After-2.jpeg"),
        ],
      },
    ],
    painting: [
      {
        id: "paint-1",
        title: "Exterior & Interior Wall Painting with Damp Treatment",
        location: "South Africa",
        description:
          "Full surface preparation, rising damp chemical treatment, crack filling, damp-resistant priming, and high-durability weather-resistant coat application.",
        beforeImages: [
          getAsset("Painting/Project 1/Painting-Before-1.jpeg"),
          getAsset("Painting/Project 1/Painting-Before-2.jpeg"),
          getAsset("Painting/Project 1/Painting-Before-3.jpeg"),
          getAsset("Painting/Project 1/Painting-Before-4.jpeg"),
          getAsset("Painting/Project 1/Painting-Before-5.jpeg"),
        ],
        afterImages: [
          getAsset("Painting/Project 1/Painting-After-1.jpeg"),
          getAsset("Painting/Project 1/Painting-After-2.jpeg"),
          getAsset("Painting/Project 1/Painting-After-3.jpeg"),
          getAsset("Painting/Project 1/Painting-After-4.jpeg"),
          getAsset("Painting/Project 1/Painting-After-5.jpeg"),
        ],
      },
      {
        id: "paint-2",
        title: "Residential Wall & Surface Painting",
        location: "South Africa",
        description:
          "Professional interior and exterior painting restoration using premium protective paint and moisture barrier primers to renew faded and weathered surfaces.",
        beforeImages: [
          getAsset("Painting/Project 2/Paint-Before-1.jpeg"),
          getAsset("Painting/Project 2/Paint-Before-2.jpeg"),
          getAsset("Painting/Project 2/Paint-Before-3.jpeg"),
        ],
        afterImages: [
          getAsset("Painting/Project 2/Paint-After-1.jpeg"),
          getAsset("Painting/Project 2/Paint-After-2.jpeg"),
        ],
      },
      {
        id: "paint-3",
        title: "Interior Wall Preparation & Damp Barrier Coating",
        location: "South Africa",
        description:
          "Precision wall priming, salt efflorescence treatment, and premium color coat painting for interior living spaces, eliminating stains and delivering an even finish.",
        beforeImages: [
          getAsset("Painting/Project 3/Painting-Before-1.jpeg"),
          getAsset("Painting/Project 3/Painting-Before-2.jpeg"),
          getAsset("Painting/Project 3/Painting-Before-3.jpeg"),
          getAsset("Painting/Project 3/Painting-Before-4.jpeg"),
        ],
        afterImages: [
          getAsset("Painting/Project 3/Painting-After-1.jpeg"),
          getAsset("Painting/Project 3/Painting-After-2.jpeg"),
        ],
      },
    ],
    roofing: [
      {
        id: "roofing-1",
        title: "10-Year Guaranteed Liquid Rubber Roof Waterproofing",
        location: "South Africa",
        description:
          "Full roof restoration including high-pressure surface cleaning, repair of damaged flashing, and application of multi-layer RVM liquid rubber waterproofing with a 10-year warranty.",
        beforeImages: [
          getAsset("Roofing/Project 1/Roofing-Before-1.jpeg"),
          getAsset("Roofing/Project 1/Roofing-Before-2.jpeg"),
          getAsset("Roofing/Project 1/Roofing-Before-3.jpeg"),
        ],
        afterImages: [
          getAsset("Roofing/Project 1/Roofing-After-1.jpeg"),
          getAsset("Roofing/Project 1/Roofing-After-2.jpeg"),
          getAsset("Roofing/Project 1/Roofing-After-3.jpeg"),
          getAsset("Roofing/Project 1/Roofing-After-4.jpeg"),
          getAsset("Roofing/Project 1/Roofing-After-5.jpeg"),
        ],
      },
      {
        id: "roofing-2",
        title: "Residential Roof Coating & Leak Prevention",
        location: "South Africa",
        description:
          "Comprehensive leak isolation, structural tile/sheet sealing, and application of protective weather-barrier roof coating.",
        beforeImages: [
          getAsset("Roofing/Project 2/Roofing-Before-1.jpeg"),
          getAsset("Roofing/Project 2/Roofing-Before-2.jpeg"),
          getAsset("Roofing/Project 2/Roofing-Before-3.jpeg"),
          getAsset("Roofing/Project 2/Roofing-Before-4.jpeg"),
          getAsset("Roofing/Project 2/Roofing-Before-5.jpeg"),
          getAsset("Roofing/Project 2/Roofing-Before-6.jpeg"),
          getAsset("Roofing/Project 2/Roofing-Before-7.jpeg"),
        ],
        afterImages: [
          getAsset("Roofing/Project 2/Roofing-After-1.jpeg"),
          getAsset("Roofing/Project 2/Roofing-After-2.jpeg"),
          getAsset("Roofing/Project 2/Roofing-After-3.jpeg"),
        ],
      },
      {
        id: "roofing-3",
        title: "Commercial Roof Surface Coating",
        location: "South Africa",
        description:
          "Targeted roof substrate sealing and multi-layer liquid coating to restore weather barrier integrity and eliminate water pooling.",
        beforeImages: [
          getAsset("Roofing/Project 3/Roof-Coating-Before-1.jpeg"),
          getAsset("Roofing/Project 3/Roof-Coating-Before-2.jpeg"),
          getAsset("Roofing/Project 3/Roof-Coating-Before-3.jpeg"),
        ],
        afterImages: [
          getAsset("Roofing/Project 3/Roof-Coating-After-1.jpeg"),
          getAsset("Roofing/Project 3/Roof-Coating-After-2.jpeg"),
        ],
      },
      {
        id: "roofing-4",
        title: "Roof Sealing & Waterproof Refurbishment",
        location: "South Africa",
        description:
          "Comprehensive joint sealing, waterproofing application, and protective roof painting to ensure long-term structural weather protection.",
        beforeImages: [
          getAsset("Roofing/Project 4/Roof-Coating-Before-1.jpeg"),
          getAsset("Roofing/Project 4/Roof-Coating-Before-2.jpeg"),
          getAsset("Roofing/Project 4/Roof-Coating-Before-3.jpeg"),
          getAsset("Roofing/Project 4/Roof-Coating-Before-4.jpeg"),
        ],
        afterImages: [
          getAsset("Roofing/Project 4/Roof-Coating-After-1.jpeg"),
          getAsset("Roofing/Project 4/Roof-Coating-After-2.jpeg"),
          getAsset("Roofing/Project 4/Roof-Coating-After-3.jpeg"),
        ],
      },
      {
        id: "roofing-5",
        title: "Residential Roof Refurbishment & Coating",
        location: "South Africa",
        description:
          "Full roof restoration including leak repair and weatherproofing application for long-lasting structural defense.",
        beforeImages: [
          getAsset("Roofing/Project 5/Roofing-Before-1.jpeg"),
        ],
        afterImages: [
          getAsset("Roofing/Project 5/Roofing-After-1.jpeg"),
        ],
      },
    ],
    ceiling: [
      {
        id: "ceiling-1",
        title: "Water Damage Repair & Ceiling Replacement",
        location: "South Africa",
        description:
          "Complete removal of water-damaged ceiling boards, structural brandering repair, new rhino board installation, skim plastering, and cornicing.",
        beforeImages: [
          getAsset("Ceiling/Project 1/Ceiling-Before-1.jpeg"),
          getAsset("Ceiling/Project 1/Ceiling-Before-2.jpeg"),
          getAsset("Ceiling/Project 1/Ceiling-Before-3.jpeg"),
          getAsset("Ceiling/Project 1/Ceiling-Before-4.jpeg"),
          getAsset("Ceiling/Project 1/Ceiling-Before-5.jpeg"),
        ],
        afterImages: [
          getAsset("Ceiling/Project 1/Ceiling-After-1.jpeg"),
          getAsset("Ceiling/Project 1/Ceiling-After-2.jpeg"),
          getAsset("Ceiling/Project 1/Ceiling-After-3.jpeg"),
          getAsset("Ceiling/Project 1/Ceiling-After-4.jpeg"),
        ],
      },
      {
        id: "ceiling-2",
        title: "Flush Plaster Ceiling Installation & Lighting",
        location: "South Africa",
        description:
          "Precision board alignment, skim coat plastering, modern cornice fitting, and integrated downlight layout for living quarters.",
        beforeImages: [
          getAsset("Ceiling/Project 2/Ceiling-Before-1.jpeg"),
          getAsset("Ceiling/Project 2/Ceiling-Before-2.jpeg"),
          getAsset("Ceiling/Project 2/Ceiling-Before-3.jpeg"),
        ],
        afterImages: [
          getAsset("Ceiling/Project 2/Ceiling-After-1.jpeg"),
          getAsset("Ceiling/Project 2/Ceiling-After-2.jpeg"),
          getAsset("Ceiling/Project 2/Ceiling-After-3.jpeg"),
        ],
      },
      {
        id: "ceiling-3",
        title: "Interior Ceiling Board Restoration",
        location: "South Africa",
        description:
          "Structural ceiling framework reinforcement, board replacement, seamless skim coat plastering, and decorative cornice finishing.",
        beforeImages: [
          getAsset("Ceiling/Project 3/Ceiling-Before-1.jpeg"),
          getAsset("Ceiling/Project 3/Ceiling-Before-2.jpeg"),
        ],
        afterImages: [
          getAsset("Ceiling/Project 3/Ceiling-After-1.jpeg"),
          getAsset("Ceiling/Project 3/Ceiling-After-2.jpeg"),
          getAsset("Ceiling/Project 3/Ceiling-After-3.jpeg"),
        ],
      },
    ],
    refurbishment: [
      {
        id: "refurbishment-1",
        title: "Comprehensive Property Refurbishment & Damp Proofing",
        location: "South Africa",
        description:
          "Complete property revitalization involving exterior wall repairs, rising damp elimination, surface preparation, modern plastering, and weather-resistant protective finishing.",
        beforeImages: [
          getAsset("Refurbishments/Project 1/Refurbishment-Before-1.jpeg"),
          getAsset("Refurbishments/Project 1/Refurbishment-Before-2.jpeg"),
          getAsset("Refurbishments/Project 1/Refurbishment-Before-3.jpeg"),
        ],
        afterImages: [
          getAsset("Refurbishments/Project 1/Refurbishment-After-1.jpeg"),
          getAsset("Refurbishments/Project 1/Refurbishment-After-2.jpeg"),
          getAsset("Refurbishments/Project 1/Refurbishment-After-3.jpeg"),
        ],
      },
    ],
    "major-projects": [
      {
        id: "major-1",
        title: "Full Residential & Commercial Renovation",
        location: "South Africa",
        description:
          "Extensive multi-phase structural overhaul including ground excavation, plumbing & drainage restructuring, rising damp treatment, custom kitchen cabinet fitting, floor tiling, ceiling installation, and full interior/exterior repainting.",
        beforeImages: [
          getAsset("Major Works/Big-Project-Before-1.jpeg"),
          getAsset("Major Works/Big-Project-Before-2.jpeg"),
          getAsset("Major Works/Big-Project-Before-3.jpeg"),
          getAsset("Major Works/Big-Project-Before-4.jpeg"),
          getAsset("Major Works/Big-Project-Before-5.jpeg"),
          getAsset("Major Works/Big-Project-Before-6.jpeg"),
          getAsset("Major Works/Big-Project-Before-7.jpeg"),
          getAsset("Major Works/Big-Project-Before-8.jpeg"),
          getAsset("Major Works/Big-Project-Before-9.jpeg"),
          getAsset("Major Works/Big-Project-Before-10.jpeg"),
          getAsset("Major Works/Big-Project-Before-11.jpeg"),
        ],
        afterImages: [
          getAsset("Major Works/Big-Project-After-1.jpeg"),
          getAsset("Major Works/Big-Project-After-2.jpeg"),
          getAsset("Major Works/Big-Project-After-3.jpeg"),
          getAsset("Major Works/Big-Project-After-4.jpeg"),
          getAsset("Major Works/Big-Project-After-5.jpeg"),
          getAsset("Major Works/Big-Project-After-6.jpeg"),
          getAsset("Major Works/Big-Project-After-7.jpeg"),
          getAsset("Major Works/Big-Project-After-8.jpeg"),
          getAsset("Major Works/Big-Project-After-9.jpeg"),
          getAsset("Major Works/Big-Project-After-10.jpeg"),
        ],
      },
    ],
  };

  const filteredCategories =
    activeCategory === "all" ? categories : categories.filter((cat) => cat.id === activeCategory);

  return (
    <div>
      <section className="border-b border-border bg-gradient-deep py-16">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <div className="inline-block rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 mb-4">
            <p className="eyebrow text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">
              ✨ Your local liquid rubber genie at your service
            </p>
          </div>
          <h1 className="mt-2 text-4xl font-black uppercase sm:text-5xl">Our Works</h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Explore our completed craftsmanship across 6 core divisions—from 10-year guaranteed roof waterproofing and permanent damp removal to complete interior and patio remodeling.
          </p>
        </div>
      </section>

      <section className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur py-4">
        <div className="mx-auto max-w-6xl px-5 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-card"
                : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
                }`}
              >
                <Icon className="size-4" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 space-y-20">
        {filteredCategories.map((cat) => {
          const Icon = cat.icon;
          const projects = projectData[cat.id as keyof typeof projectData] || [];

          return (
            <div key={cat.id} className="scroll-mt-24" id={cat.id}>
              <div className="flex items-center gap-3 border-b border-border pb-4 mb-8">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold uppercase tracking-wide">{cat.label}</h2>
                  <p className="text-xs text-muted-foreground">
                    {projects.length} {projects.length === 1 ? "Project Showcase" : "Projects Showcase"}
                  </p>
                </div>
              </div>

              {projects.length > 0 ? (
                <div className="grid gap-6 lg:grid-cols-1">
                  {projects.map((proj) => (
                    <RemodelProjectCard key={proj.id} project={proj} />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-border bg-card/50 p-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    Project photos for {cat.label} will be loaded next.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-deep py-16 text-center">
        <div className="mx-auto max-w-4xl px-5">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Your local liquid rubber genie at your service
          </p>
          <h2 className="text-3xl uppercase font-black">Ready to Banish Leaks &amp; Damp From Your Property?</h2>
          <p className="mt-3 text-muted-foreground">
            Contact us today for a professional on-site moisture/roof assessment and itemized quotation.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a href="tel:0792859461" className="btn-primary">
              <Phone className="size-4" aria-hidden="true" />
              Call Ralf (079 285 9461)
            </a>
            <a href="tel:0797973960" className="btn-primary">
              <Phone className="size-4" aria-hidden="true" />
              Call Earl (079 797 3960)
            </a>
            <Link to="/contact" className="btn-outline flex items-center gap-2">
              Request a Quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
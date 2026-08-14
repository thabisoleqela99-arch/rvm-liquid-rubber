import { useState } from "react";
import { X, Layers } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "Roofing" | "Painting" | "Refurbishment" | "Remodelling" | "Ceiling" | "Big Projects";
  coverImage: string;
  beforeImages: string[];
  afterImages: string[];
}

// Map your public folder images here (adjust image filenames to match your exact files)
const projectsData: Project[] = [
  {
    id: "roofing-1",
    title: "Roof Waterproofing & Sealing",
    category: "Roofing",
    coverImage: "/Roofing/after-1.jpg",
    beforeImages: ["/Roofing/before-1.jpg"],
    afterImages: ["/Roofing/after-1.jpg"],
  },
  {
    id: "painting-1",
    title: "Exterior Wall & Roof Coating",
    category: "Painting",
    coverImage: "/Painting/after-1.jpg",
    beforeImages: ["/Painting/before-1.jpg"],
    afterImages: ["/Painting/after-1.jpg"],
  },
  {
    id: "refurbishment-1",
    title: "Bathroom & Tile Refurbishment",
    category: "Refurbishment",
    coverImage: "/Refurbishment/after-1.jpg",
    beforeImages: ["/Refurbishment/before-1.jpg"],
    afterImages: ["/Refurbishment/after-1.jpg"],
  },
  {
    id: "remodelling-1",
    title: "Interior Space Remodelling",
    category: "Remodelling",
    coverImage: "/Remodelling/after-1.jpg",
    beforeImages: ["/Remodelling/before-1.jpg"],
    afterImages: ["/Remodelling/after-1.jpg"],
  },
  {
    id: "ceiling-1",
    title: "Ceiling Repair & Restoration",
    category: "Ceiling",
    coverImage: "/Ceiling/after-1.jpg",
    beforeImages: ["/Ceiling/before-1.jpg"],
    afterImages: ["/Ceiling/after-1.jpg"],
  },
  {
    id: "big-projects-1",
    title: "Commercial Site Overhaul",
    category: "Big Projects",
    coverImage: "/Big Projects/after-1.jpg",
    beforeImages: ["/Big Projects/before-1.jpg"],
    afterImages: ["/Big Projects/after-1.jpg"],
  },
];

export function ProjectCarousel() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Duplicate dataset so the marquee scrolls infinitely without gaps
  const doubleProjects = [...projectsData, ...projectsData];

  return (
    <section className="w-full bg-card border-y border-border py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 mb-8 text-center">
        <p className="eyebrow">Portfolio Showcase</p>
        <h2 className="text-3xl uppercase font-bold text-foreground">Featured Project Gallery</h2>
        <p className="text-sm text-muted-foreground mt-2">
          Click on any project to open the full Before &amp; After photo folder.
        </p>
      </div>

      {/* Infinite Scroll Track */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
          {doubleProjects.map((project, idx) => (
            <div
              key={`${project.id}-${idx}`}
              onClick={() => setActiveProject(project)}
              className="w-80 shrink-0 cursor-pointer rounded-xl border border-border bg-background p-4 shadow-card hover:border-primary transition-all hover:scale-[1.02]"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-lg bg-muted">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    // Fallback preview if image name differs
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <span className="absolute top-3 left-3 rounded-md bg-deep/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary border border-border">
                  {project.category}
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-base font-semibold uppercase text-foreground leading-tight">
                  {project.title}
                </h3>
                <Layers className="size-4 text-primary shrink-0 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal / Full Folder View */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl border border-border bg-card p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase text-primary">{activeProject.category}</span>
                <h3 className="text-2xl uppercase font-bold text-foreground">{activeProject.title}</h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X className="size-6" />
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Before Images */}
              <div>
                <h4 className="mb-3 font-bold uppercase text-red-500 text-sm flex items-center gap-2">
                  <span className="size-2 rounded-full bg-red-500"></span> Before Work
                </h4>
                <div className="space-y-3">
                  {activeProject.beforeImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Before"
                      className="w-full rounded-lg border border-border object-cover max-h-72"
                    />
                  ))}
                </div>
              </div>

              {/* After Images */}
              <div>
                <h4 className="mb-3 font-bold uppercase text-emerald-500 text-sm flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500"></span> After Completion
                </h4>
                <div className="space-y-3">
                  {activeProject.afterImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="After"
                      className="w-full rounded-lg border border-border object-cover max-h-72"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
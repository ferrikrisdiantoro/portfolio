"use client";

import { useState } from "react";
import { projects as projectsData, type Project } from "@/lib/projects";
import ProjectModal from "@/components/ProjectModal";
import ProjectTile from "@/components/ProjectTile";
import Footer from "@/components/Footer";
import { FilterIcon } from "hugeicons-react";

/* prettier category labels */
const categoryLabels: Record<string, string> = {
  All: "All",
  "computer-vision": "Machine Learning: Vision",
  "data-science": "Data Science",
  "mlops-automation": "MLOps & Automation",
  "nlp-genai": "NLP & GenAI",
  "recommender-system": "Recommender System",
  "web-application": "Web Application",
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // 12 proyek terkuat tampil dulu; sisanya (termasuk proyek kuliah lama) di balik tombol
  const [showAll, setShowAll] = useState(false);
  const INITIAL = 12;

  const categories = [
    "All",
    ...Array.from(new Set(projectsData.map((p) => p.category))),
  ];

  const filteredProjects = projectsData.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <>
      {/* ─── Header ─── */}
      <section className="pt-28 pb-0 md:pt-36">
        <div className="container-main">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 font-jakarta">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-jakarta leading-tight mb-4">
            All Projects<span className="text-primary">.</span>
          </h1>
          <p className="text-text-muted text-base md:text-lg max-w-2xl leading-relaxed mb-10">
            Client work, my own products, and earlier research. Client names are
            kept confidential; some images are UI illustrations with sample data.
          </p>

          {/* ── Filter Tabs ── */}
          <div className="flex flex-wrap gap-2 pb-8 border-b border-gray-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setSelectedCategory(cat); setShowAll(false); }}
                className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 font-jakarta ${selectedCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                  }`}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Project Grid ─── */}
      <section className="section-warm py-14 md:py-20 border-b border-warm-border">
        <div className="container-main">
          {/* Results count */}
          <p className="text-sm text-text-muted mb-8 font-jakarta">
            Showing{" "}
            <span className="font-bold text-gray-900">
              {filteredProjects.length}
            </span>{" "}
            project{filteredProjects.length !== 1 && "s"}
            {selectedCategory !== "All" && (
              <>
                {" "}in{" "}
                <span className="font-bold text-primary">
                  {categoryLabels[selectedCategory] || selectedCategory}
                </span>
              </>
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAll ? filteredProjects : filteredProjects.slice(0, INITIAL)).map((project, index) => (
              <ProjectTile key={project.title} project={project} priority={index < 3} onOpen={() => setSelectedProject(project)} />
            ))}
          </div>

          {!showAll && filteredProjects.length > INITIAL && (
            <div className="text-center mt-10">
              <button type="button" onClick={() => setShowAll(true)} className="btn-primary text-sm">
                Show all {filteredProjects.length} projects
              </button>
              <p className="text-xs text-text-muted mt-3">Includes earlier research and academic projects.</p>
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <FilterIcon size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-text-muted font-jakarta">
                No projects found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <Footer />
    </>
  );
}
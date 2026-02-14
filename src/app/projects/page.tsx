"use client";

import { useState } from "react";
import Image from "next/image";
import projectsData from "@/data/projects.json";
import ProjectModal from "@/components/ProjectModal";
import Footer from "@/components/Footer";
import {
  ArrowRight01Icon,
  SourceCodeIcon,
  FilterIcon,
} from "hugeicons-react";

/* prettier category labels */
const categoryLabels: Record<string, string> = {
  All: "All",
  "computer-vision": "Computer Vision",
  "data-science": "Data Science",
  "mlops-automation": "MLOps & Automation",
  "nlp-genai": "NLP & GenAI",
  "recommender-system": "Recommender System",
  "web-application": "Web Application",
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

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
            A collection of my work spanning AI, automation, full-stack
            development, and more.
          </p>

          {/* ── Filter Tabs ── */}
          <div className="flex flex-wrap gap-2 pb-8 border-b border-gray-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
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
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer group"
              >
                {/* Image — matches home h-56 */}
                <div className="relative w-full h-56 overflow-hidden">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <SourceCodeIcon size={40} className="text-gray-300" />
                    </div>
                  )}
                  {/* Type badge — exactly like home */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-bold px-3 py-1 rounded-full font-jakarta shadow-sm">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content — exactly like home */}
                <div className="p-5">
                  <h3 className="text-base font-bold font-jakarta mb-2 text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md font-jakarta"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-primary group-hover:text-white flex items-center justify-center text-gray-400 transition-all flex-shrink-0 ml-3">
                      <ArrowRight01Icon size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
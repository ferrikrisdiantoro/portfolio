"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import projectsData from "@/data/projects.json";

export default function ProjectsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#0f172a] text-[#e2e8f0] font-sans">
      {/* Interactive Network Background */}
      <ParticleBackground />

      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "glass-card border-b border-slate-700/50" : "bg-transparent border-b-0"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                Ferri Krisdiantoro
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  Home
                </Link>

                <Link
                  href="/projects"
                  className="text-white bg-slate-800/50 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  Portfolio
                </Link>
                <Link
                  href="/#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-32 pb-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">Portfolio</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          A collection of my work in Automation, AI, and Software Development.
          Explore how I solve real-world problems with code.
        </p>
      </section>

      {/* Filter Section */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {["All", ...Array.from(new Set(projectsData.map((p) => p.category)))].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                  : "bg-slate-800/50 text-gray-400 hover:bg-slate-700 hover:text-white border border-slate-700"
                  }`}
              >
                {category === "All"
                  ? "All Projects"
                  : category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
                }
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden border border-slate-700 glass-card hover:border-blue-500/30 transition-all duration-300 flex flex-col"
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-slate-800 relative overflow-hidden">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-600">
                      <i className="fa-solid fa-code text-4xl"></i>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition transform hover:scale-110"
                        title="View Live Demo"
                      >
                        <i className="fa-solid fa-external-link-alt"></i>
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition transform hover:scale-110"
                        title="View Code"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-blue-400 mt-1 uppercase tracking-wide">
                        {project.type}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded border border-slate-700">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-sm text-gray-500 bg-slate-900/50">
        <p>&copy; 2024 Ferri Krisdiantoro. All rights reserved.</p>
      </footer>
    </main>
  );
}
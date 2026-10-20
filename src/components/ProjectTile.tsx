"use client";

import Image from "next/image";
import { ArrowRight01Icon, SourceCodeIcon } from "hugeicons-react";
import type { Project } from "@/lib/projects";

/** Kartu proyek yang dipakai di Beranda dan halaman Projects. Membuka detail saat diklik. */
export default function ProjectTile({ project, onOpen, priority = false }: { project: Project; onOpen: () => void; priority?: boolean }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="text-left w-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300 cursor-pointer group flex flex-col"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-warm-bg">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <SourceCodeIcon size={40} className="text-gray-300" />
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-bold px-3 py-1 rounded-full font-jakarta shadow-sm">
            {project.type}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold font-jakarta mb-2 text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-text-muted mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-1.5 min-w-0">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md font-jakarta">
                {t}
              </span>
            ))}
          </div>
          <span className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-primary group-hover:text-white flex items-center justify-center text-gray-400 transition-all flex-shrink-0 ml-3">
            <ArrowRight01Icon size={14} />
          </span>
        </div>
      </div>
    </button>
  );
}

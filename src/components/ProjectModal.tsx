"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    longDescription?: string;
    tech: string[];
    features?: string[];
    type: string;
    category: string;
    link: string;
    thumbnail?: string;
    gallery?: string[];
    youtubeUrl?: string;
    demoLink?: string;
    githubLink?: string;
}

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const [activeMedia, setActiveMedia] = useState<"video" | number>("video");

    // Lock body scroll when modal is open
    useEffect(() => {
        if (project) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [project]);

    // Init state based on what's available
    useEffect(() => {
        if (project) {
            if (project.youtubeUrl) {
                setActiveMedia("video");
            } else {
                setActiveMedia(0);
            }
        }
    }, [project]);

    if (!project) return null;

    const galleryImages = project.gallery && project.gallery.length > 0
        ? project.gallery
        : (project.thumbnail ? [project.thumbnail] : []);

    const hasVideo = !!project.youtubeUrl;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-6xl h-[90vh] bg-[#0f172a] border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-800 bg-[#0f172a] z-10 shrink-0">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 pr-4 leading-tight">
                            {project.title}
                        </h2>
                        <p className="text-sm text-slate-400 mt-1">{project.type}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:bg-red-500/20 hover:text-red-400 transition-all duration-300"
                    >
                        <i className="fa-solid fa-times text-xl w-6 h-6 flex items-center justify-center"></i>
                    </button>
                </div>

                {/* Scrollable Body */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar bg-[#020617]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-full">

                        {/* Left Column: Media (Video + Gallery) - Spans 7 cols */}
                        <div className="lg:col-span-8 bg-black flex flex-col border-r border-slate-800">

                            {/* Main Media Viewport */}
                            <div className="aspect-video w-full bg-black relative flex items-center justify-center overflow-hidden group">
                                {activeMedia === "video" && project.youtubeUrl ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${project.youtubeUrl}?autoplay=1&rel=0&modestbranding=1`}
                                        title="Project Demo"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                ) : (
                                    <div className="relative w-full h-full">
                                        {galleryImages.length > 0 && typeof activeMedia === 'number' ? (
                                            <Image
                                                src={galleryImages[activeMedia]}
                                                alt={`Gallery ${activeMedia + 1}`}
                                                fill
                                                className="object-contain"
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center h-full text-slate-600">
                                                <i className="fa-solid fa-image text-5xl mb-4 opacity-50"></i>
                                                <p>Select media to view</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Thumbnails Strip */}
                            <div className="p-4 bg-[#0f172a] border-t border-slate-800">
                                <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar items-center">

                                    {/* Video Thumbnail Button */}
                                    {hasVideo && (
                                        <button
                                            onClick={() => setActiveMedia("video")}
                                            className={`relative w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 group ${activeMedia === "video"
                                                ? "border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] scale-105 z-10"
                                                : "border-slate-700 opacity-60 hover:opacity-100 hover:border-slate-500"
                                                }`}
                                        >
                                            <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                                                <Image
                                                    src={`https://img.youtube.com/vi/${project.youtubeUrl}/mqdefault.jpg`}
                                                    alt="Video"
                                                    fill
                                                    className="object-cover opacity-60"
                                                />
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                                                        <i className="fa-solid fa-play text-xs ml-0.5"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 rounded text-[9px] font-bold text-white">VIDEO</div>
                                        </button>
                                    )}

                                    {/* Image Thumbnails */}
                                    {galleryImages.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveMedia(idx)}
                                            className={`relative w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${activeMedia === idx
                                                ? "border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] scale-105 z-10"
                                                : "border-slate-700 opacity-60 hover:opacity-100 hover:border-slate-500"
                                                }`}
                                        >
                                            <Image src={img} alt="thumb" fill className="object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Details - Spans 5 cols */}
                        <div className="lg:col-span-4 p-6 md:p-8 bg-[#0f172a] flex flex-col gap-8 h-full">

                            {/* Description */}
                            <div className="prose prose-invert max-w-none">
                                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2 border-b border-slate-700/50 pb-2">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                                        <i className="fa-solid fa-circle-info"></i>
                                    </span>
                                    About Project
                                </h3>
                                <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-line">
                                    {project.longDescription || project.description}
                                </p>
                            </div>

                            {/* Key Features */}
                            {project.features && project.features.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2 border-b border-slate-700/50 pb-2">
                                        <span className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                        Key Features
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-sm text-slate-300 group">
                                                <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                                    <i className="fa-solid fa-check text-[10px]"></i>
                                                </div>
                                                <span className="group-hover:text-white transition-colors">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2 border-b border-slate-700/50 pb-2">
                                    <span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                                        <i className="fa-solid fa-layer-group"></i>
                                    </span>
                                    Built With
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 text-xs font-semibold bg-slate-800/80 text-slate-300 rounded-md border border-slate-700 hover:border-blue-500/50 hover:text-white hover:bg-slate-700 transition-all cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg font-bold text-center transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                                    >
                                        <i className="fa-solid fa-rocket"></i> Live Demo
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold text-center transition-all transform hover:-translate-y-1 border border-slate-700 flex items-center justify-center gap-2"
                                    >
                                        <i className="fa-brands fa-github"></i> Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
    Cancel01Icon,
    InformationCircleIcon,
    StarIcon,
    Layers01Icon,
    Rocket01Icon,
    SourceCodeIcon,
    CheckmarkCircle02Icon,
} from "hugeicons-react";

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

    const galleryImages =
        project.gallery && project.gallery.length > 0
            ? project.gallery
            : project.thumbnail
                ? [project.thumbnail]
                : [];

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
                className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-white z-10 shrink-0">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 pr-4 leading-tight font-jakarta">
                            {project.title}
                        </h2>
                        <div className="flex items-center gap-2 mt-1.5">
                            <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full font-jakarta">
                                {project.type}
                            </span>
                            <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full font-jakarta">
                                {project.category}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-all duration-200"
                    >
                        <Cancel01Icon size={20} />
                    </button>
                </div>

                {/* Scrollable Body */}
                <div className="flex-1 overflow-y-auto lg:overflow-hidden bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-12 lg:h-full">
                        {/* Left Column: Media */}
                        <div className="lg:col-span-8 bg-gray-50 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-200 lg:sticky lg:top-0 lg:h-[calc(90vh-80px)] lg:overflow-hidden">
                            {/* Main Media Viewport */}
                            <div className="aspect-video w-full bg-gray-100 relative flex items-center justify-center overflow-hidden group">
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
                                        {galleryImages.length > 0 && typeof activeMedia === "number" ? (
                                            <Image
                                                src={galleryImages[activeMedia]}
                                                alt={`Gallery ${activeMedia + 1}`}
                                                fill
                                                className="object-contain"
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                                <SourceCodeIcon size={48} className="mb-4 opacity-50" />
                                                <p className="text-sm">Select media to view</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Thumbnails Strip */}
                            <div className="p-4 bg-white border-t border-gray-200">
                                <div className="flex gap-3 overflow-x-auto pb-2 items-center">
                                    {/* Video Thumbnail */}
                                    {hasVideo && (
                                        <button
                                            onClick={() => setActiveMedia("video")}
                                            className={`relative w-28 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 group ${activeMedia === "video"
                                                ? "border-primary shadow-sm scale-105 z-10"
                                                : "border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-400"
                                                }`}
                                        >
                                            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                                                <Image
                                                    src={`https://img.youtube.com/vi/${project.youtubeUrl}/mqdefault.jpg`}
                                                    alt="Video"
                                                    fill
                                                    className="object-cover opacity-60"
                                                />
                                                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                                                        <i className="fa-solid fa-play text-xs ml-0.5"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 rounded text-[9px] font-bold text-white">
                                                VIDEO
                                            </div>
                                        </button>
                                    )}

                                    {/* Image Thumbnails */}
                                    {galleryImages.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveMedia(idx)}
                                            className={`relative w-28 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 ${activeMedia === idx
                                                ? "border-primary shadow-sm scale-105 z-10"
                                                : "border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-400"
                                                }`}
                                        >
                                            <Image src={img} alt="thumb" fill className="object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Details */}
                        <div className="lg:col-span-4 p-6 md:p-8 bg-white flex flex-col gap-8 lg:overflow-y-auto lg:h-[calc(90vh-80px)]">
                            {/* Description */}
                            <div className="prose prose-gray max-w-none">
                                <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2 border-b border-gray-100 pb-2 font-jakarta">
                                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <InformationCircleIcon size={16} className="text-primary" />
                                    </span>
                                    About Project
                                </h3>
                                <div className="text-gray-600 leading-relaxed text-sm">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {project.longDescription || project.description}
                                    </ReactMarkdown>
                                </div>
                            </div>

                            {/* Key Features */}
                            {project.features && project.features.length > 0 && (
                                <div>
                                    <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2 border-b border-gray-100 pb-2 font-jakarta">
                                        <span className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                                            <StarIcon size={16} className="text-amber-500" />
                                        </span>
                                        Key Features
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-sm text-gray-600 group">
                                                <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                                    <CheckmarkCircle02Icon size={12} />
                                                </div>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2 border-b border-gray-100 pb-2 font-jakarta">
                                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Layers01Icon size={16} className="text-primary" />
                                    </span>
                                    Built With
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 text-xs font-semibold bg-gray-100 text-gray-600 rounded-lg border border-gray-200 font-jakarta"
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
                                        className="flex-1 py-3 px-4 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white rounded-xl font-bold text-center transition-all shadow-md font-jakarta text-sm flex items-center justify-center gap-2"
                                    >
                                        <Rocket01Icon size={16} />
                                        Live Demo
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 px-4 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-bold text-center transition-all border border-gray-200 font-jakarta text-sm flex items-center justify-center gap-2"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                        Source Code
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

'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  link: string
  image?: string
  technologies?: string[]
  demoLink?: string
}

export default function ProjectCard({
  title,
  description,
  link,
  image,
  technologies = [],
  demoLink
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative bg-white rounded-lg border border-gray-100 hover:border-[#30E3CA]/30 transition-all duration-300 overflow-hidden hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image section */}
      <div className="relative h-44 bg-[#E4F9F5] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-[#11999E] text-4xl font-light">
              {title.charAt(0)}
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-[#40514E]/80 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
          <div className="flex space-x-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-[#40514E] rounded-md hover:bg-[#E4F9F5] transition-colors duration-200 text-sm font-medium"
            >
              Code
            </a>
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#30E3CA] text-white rounded-md hover:bg-[#11999E] transition-colors duration-200 text-sm font-medium"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-[#40514E] mb-2 group-hover:text-[#11999E] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        {
          technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-[#E4F9F5] text-[#11999E] text-xs rounded font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          )
        }

        {/* Action buttons */}
        <div className="flex space-x-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-3 py-2 border border-[#30E3CA] text-[#11999E] rounded-md hover:bg-[#E4F9F5] transition-colors duration-200 text-sm font-medium"
          >
            View Code
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-3 py-2 bg-[#30E3CA] text-white rounded-md hover:bg-[#11999E] transition-colors duration-200 text-sm font-medium"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
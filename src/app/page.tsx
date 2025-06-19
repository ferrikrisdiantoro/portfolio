'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import projects from '@/data/projects.json'
import skills from '@/data/skills.json'
import { Boxes, Folder, Timer, Award, Briefcase, Layers, ArrowRight } from 'lucide-react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRefs = useRef<Array<HTMLElement | null>>([])
  const heroRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Mouse tracking for neural network effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({ 
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            const index = parseInt(target.dataset.section!, 10)
            setVisibleSections(prev => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.1, rootMargin: '100px' }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })
    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: '4', label: 'ML Models Deployed', icon: <Boxes className="w-6 h-6 text-[#FF9B45]" /> },
    { number: '20+', label: 'Projects Completed', icon: <Folder className="w-6 h-6 text-[#FF9B45]" /> },
    { number: '2+', label: 'Years Experience', icon: <Timer className="w-6 h-6 text-[#FF9B45]" /> },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        @keyframes slideProgress {
          from { width: 0%; }
          to { width: var(--progress-width); }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .float {
          animation: float 6s ease-in-out infinite;
        }

        .neural-dot {
          animation: pulse 2s ease-in-out infinite;
        }

        .skill-progress {
          animation: slideProgress 1.5s ease-out forwards;
          animation-delay: var(--delay);
        }

        .gradient-text {
          background: linear-gradient(135deg, #00ADB5, #EEEEEE);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-card {
          backdrop-filter: blur(10px);
          background: rgba(238, 238, 238, 0.1);
          border: 1px solid rgba(238, 238, 238, 0.2);
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }

        .neural-network {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.3;
        }

        .hero-loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-loading {
          opacity: 0;
          transform: translateY(20px);
        }
      `}</style>

      <Layout>
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="min-h-screen relative flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#EEEEEE' }}
        >
          {/* Neural Network Background */}
          <div className="neural-network">
            <svg width="100%" height="100%" viewBox="0 0 1000 800">
              {/* Animated connection lines */}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00ADB5" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#393E46" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              {/* Network nodes */}
              {[...Array(12)].map((_, i) => (
                <circle
                  key={i}
                  cx={100 + (i % 4) * 250}
                  cy={150 + Math.floor(i / 4) * 200}
                  r="4"
                  fill="#00ADB5"
                  className="neural-dot"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
              
              {/* Connection lines */}
              {[...Array(8)].map((_, i) => (
                <line
                  key={i}
                  x1={100 + (i % 3) * 250}
                  y1={150 + Math.floor(i / 3) * 200}
                  x2={350 + (i % 3) * 250}
                  y2={350 + Math.floor(i / 3) * 200}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  opacity="0.6"
                />
              ))}
            </svg>
          </div>

          <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${
            isLoaded ? 'hero-loaded' : 'hero-loading'
            }`}>
            
            {/* Status Badge */}
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full mb-8 border border-[#222831] bg-[#EEEEEE] backdrop-blur-md transition-all duration-800 ${
                isLoaded ? 'fade-in-up' : 'opacity-0'
              }`}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-[#222831] dark:text-[#222831]">
                Available for ML Projects
              </span>
            </div>

            {/* Main Headline */}
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-800 ${
              isLoaded ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.4s', color: '#393E46' }}>
              Machine Learning
              <br />
              <span className="gradient-text">Engineer</span>
            </h1>

            {/* Subtitle */}
            <p className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-800 ${
              isLoaded ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.6s', color: '#393E46' }}>
              Building intelligent systems that learn, adapt, and solve complex problems through data-driven insights.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-800 ${
              isLoaded ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.8s' }}>
              <Link 
                href="/projects" 
                className="px-8 py-4 rounded-lg font-semibold text-white bg-[#00ADB5] hover:bg-[#EEEEEE] hover:text-[#00ADB5] hover-lift transition-all duration-300 hover:shadow-lg"
              >
                View Projects
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 rounded-lg font-semibold border-2 text-[#EEEEEE] border-[#393E46] bg-[rgba(57,62,70,0.5)] hover:bg-white hover:text-[#00ADB5] transition-all duration-300 hover-lift"
              >
                Get In Touch
              </Link>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center transition-all duration-800 ${
              isLoaded ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '1s' }}>
              {stats.map((stat, index) => (
                <div key={stat.label} className="hover-lift">
                  <div className="text-2xl mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm" style={{ color: '#393E46' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          ref={el => { sectionRefs.current[0] = el }}
          data-section="0"
          className="py-20 bg-[#222831]"
        >
          <div className="max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className={`text-center mb-16 transition-all duration-800 ${
              visibleSections.has(0) ? 'fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl font-bold text-[#EEEEEE] mb-4">
                Technical Skills
              </h2>
              <p className="text-xl text-[#EEEEEE]/70 max-w-2xl mx-auto">
                Core technologies and frameworks I use to build ML solutions
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`bg-[#EEEEEE] rounded-lg p-6 shadow-md hover:shadow-xl transform hover-lift transition-all duration-300 ${
                    visibleSections.has(0)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  >
                  {/* Icon + Name + Level */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-14 h-14 flex items-center justify-center bg-[#00ADB5]/20 rounded-full">
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-10 h-10"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#222831]">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-[#393E46]">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-[#00ADB5]">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-[#222831] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#00ADB5] rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          ref={el => { sectionRefs.current[1] = el }}
          data-section="1"
          className="py-20 bg-[#EEEEEE]"
          >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: Text & CTA */}
              <div className={`space-y-6 transition-all duration-800 ${
                visibleSections.has(1) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <h2 className="text-4xl font-bold text-[#222831]">
                  About Me
                </h2>
                <p className="text-lg text-[#393E46] leading-relaxed">
                  I'm a Machine Learning Engineer with over 3 years of experience crafting 
                  scalable ML systems in computer vision, NLP, and predictive analytics.
                </p>
                <p className="text-lg text-[#393E46] leading-relaxed">
                  I combine strong theoretical foundations with hands‑on MLOps skills 
                  to deploy robust, production-ready models.
                </p>

                {/* Learn More Button with hover-trigger */}
                <a
                  href="/about"
                  className="group inline-block px-6 py-3 bg-[#00ADB5] text-white rounded-md font-medium transform transition-all duration-300 hover:scale-105 hover:bg-[#00A5AA]"
                >
                  <span className="flex items-center">
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Right: Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[ 
                  { icon: <Layers className="w-6 h-6 text-[#00ADB5]" />, title: 'Focus Areas', items: ['Deep Learning', 'Computer Vision', 'NLP'] },
                  { icon: <Briefcase className="w-6 h-6 text-[#00ADB5]" />, title: 'Industries', items: ['Healthcare', 'Finance', 'E‑commerce'] },
                  { icon: <Award className="w-6 h-6 text-[#00ADB5]" />, title: 'Certifications', items: ['AWS ML Specialty', 'TensorFlow Dev', 'Google Cloud ML'] },
                ].map((card, idx) => (
                  <div
                    key={card.title}
                    className={`group bg-white rounded-xl p-6 shadow transition-all duration-500 transform ${
                      visibleSections.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    } hover:scale-105 hover:shadow-lg`}
                    style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
                  >
                    <div className="flex items-center mb-4 space-x-3">
                      <div className="p-2 bg-[#00ADB5]/20 rounded-full transition-colors duration-300 group-hover:bg-[#393E46]">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-[#222831] group-hover:text-[#00ADB5] transition-colors">
                        {card.title}
                      </h3>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-[#393E46] text-sm">
                      {card.items.map(item => (
                        <li key={item} className="transition-colors duration-300 group-hover:text-[#222831]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          ref={el => { sectionRefs.current[2] = el }}
          data-section="2"
          className="py-20 bg-[#222831]"
        >
          <div className="max-w-6xl mx-auto px-6">
            {/* Heading */}
            <div className={`text-center mb-16 transition-all duration-800 ${
              visibleSections.has(2) ? 'fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl font-bold text-[#EEEEEE] mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-[#EEEEEE]/80 max-w-2xl mx-auto">
                Real-world ML solutions that demonstrate my expertise and impact
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {projects.map((project, index) => (
                <a
                  key={project.title}
                  href={project.link}
                  className={`group block bg-white rounded-2xl overflow-hidden shadow-md transform transition-all duration-500
                              ${visibleSections.has(2) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} 
                              hover:shadow-xl hover:-translate-y-2`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  {/* Thumbnail */}
                  <div className="relative w-full h-48">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold uppercase rounded-full p-2 bg-[#00ADB5]/20 text-[#00ADB5] mb-3">
                      {project.type}
                    </span>
                    <h3 className="text-lg font-bold text-[#222831] mb-2 group-hover:text-[#00ADB5] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#393E46] mb-4 leading-relaxed">
                      {project.description.split(' ').slice(0, 18).join(' ')}...
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 5).map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-[10px] font-medium uppercase bg-[#222831] text-[#EEEEEE] rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-[#00ADB5] font-medium transition-colors duration-300 group-hover:text-[#11999E]">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* View All */}
            <div className={`text-center transition-all duration-800 ${
              visibleSections.has(2) ? 'fade-in-up' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '0.8s' }}>
              <a
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-[#00ADB5] text-white rounded-lg font-semibold transform transition-all duration-300 hover:bg-[#11999E] hover:scale-105"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section 
          ref={el => { sectionRefs.current[3] = el }}
          data-section="3"
          className="py-20 bg-[#EEEEEE]"
          >
          <div className={`max-w-4xl mx-auto px-6 text-center transition-all duration-800 ${
            visibleSections.has(3) ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#393E46' }}>
              Let's Build Something Amazing
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#393E46' }}>
              Ready to leverage machine learning for your business? Let's discuss how we can solve your challenges with intelligent solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-lg bg-[#00ADB5] font-semibold text-[#EEEEEE] hover:bg-[#EEEEEE] hover:text-[#00ADB5] hover:border hover-lift transition-all duration-300"
              >
                Start a Project
              </Link>
              <a
                href="mailto:your.email@example.com"
                className="px-8 py-4 rounded-lg text-[#EEEEEE] font-semibold border-2 hover-lift transition-all duration-300"
                style={{ 
                  color: '#393E46', 
                  borderColor: '#222831'
                }}
              >
                Send Email
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
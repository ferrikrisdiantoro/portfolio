'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import projects from '@/data/projects.json'
import { ArrowRight, ExternalLink, Github, Brain, Code, Database, Cpu } from 'lucide-react'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState(new Set())
  const projectRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  // Intersection Observer untuk animasi scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            const index = parseInt(target.dataset.index!, 10)
            setVisibleProjects(prev => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })
    return () => observer.disconnect()
  }, [])

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Brain className="w-5 h-5" /> },
    { id: 'computer-vision', name: 'Computer Vision', icon: <Cpu className="w-5 h-5" /> },
    { id: 'nlp', name: 'NLP', icon: <Code className="w-5 h-5" /> },
    { id: 'data-science', name: 'Data Science', icon: <Database className="w-5 h-5" /> }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .float {
          animation: float 6s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #00ADB5, #EEEEEE);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }

        .project-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 173, 181, 0.15);
        }
      `}</style>

      <Layout>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-[#EEEEEE] relative overflow-hidden">
          {/* Floating Background Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#00ADB5] rounded-full opacity-10 float" 
               style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-[#393E46] rounded-full opacity-10 float" 
               style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-[#00ADB5] rounded-full opacity-5 float" 
               style={{ animationDelay: '4s' }}></div>

          <div className={`max-w-6xl mx-auto px-6 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#393E46]">
              ML <span className="gradient-text">Projects</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-[#393E46]">
              Showcasing real-world machine learning solutions that solve complex problems 
              through <span className="font-semibold text-[#00ADB5]">intelligent algorithms</span> and 
              <span className="font-semibold text-[#00ADB5]"> data-driven insights</span>
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover-lift ${
                    selectedCategory === category.id
                      ? 'bg-[#00ADB5] text-white shadow-lg'
                      : 'bg-white text-[#393E46] border border-[#393E46] hover:bg-[#393E46] hover:text-white'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="mr-2 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="py-20 bg-[#222831]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.title}
                  ref={el => { projectRefs.current[index] = el }}
                  data-index={index}
                  className={`project-card bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-500 ${
                    visibleProjects.has(index)
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#00ADB5] text-white rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#222831] hover:text-[#00ADB5] transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-[#393E46] mb-4 leading-relaxed">
                      {project.description.split(' ').slice(0, 18).join(' ')}...
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-[#EEEEEE] text-[#393E46] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-[#00ADB5] text-white rounded-lg text-sm font-medium hover:bg-[#393E46] transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 border border-[#393E46] text-[#393E46] rounded-lg text-sm font-medium hover:bg-[#393E46] hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4 opacity-50">🔍</div>
                <h3 className="text-2xl font-semibold mb-2 text-[#EEEEEE]">
                  No projects found
                </h3>
                <p className="text-[#EEEEEE]/70">
                  Try selecting a different category
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-[#EEEEEE]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#393E46] mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-[#393E46] mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate on your next machine learning project. 
              From concept to deployment, I'll help you leverage AI to solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-[#00ADB5] text-white rounded-lg font-semibold hover:bg-[#393E46] hover-lift transition-all duration-300 flex items-center justify-center"
              >
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="px-8 py-4 border-2 border-[#393E46] text-[#393E46] rounded-lg font-semibold hover:bg-[#393E46] hover:text-white hover-lift transition-all duration-300"
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
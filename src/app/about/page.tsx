'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { 
  Code, 
  Brain, 
  Target, 
  Award, 
  BookOpen, 
  Users, 
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Calendar,
  MapPin
} from 'lucide-react'

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set())
  const sectionRefs = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
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
      { threshold: 0.1, rootMargin: '50px' }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })
    return () => observer.disconnect()
  }, [])

  const experience = [
    {
      title: "Cohort Machine Learning Engineer",
      company: "DBS Indonesia x Dicoding",
      period: "feb 2025 - july 2025",
      description: "Led development of computer vision models for autonomous systems, achieving 95% accuracy in object detection."
    },
    {
      title: "ML Engineer",
      company: "DataTech Solutions",
      period: "2022 - 2023",
      description: "Built NLP pipelines for sentiment analysis and recommendation systems serving 1M+ users daily."
    },
    {
      title: "Junior Data Scientist",
      company: "StartupXYZ",
      period: "2021 - 2022",
      description: "Developed predictive analytics models that increased customer retention by 30%."
    }
  ]

  const achievements = [
    { icon: <Award className="w-6 h-6" />, title: "AWS ML Specialty Certified", year: "2023" },
    { icon: <Award className="w-6 h-6" />, title: "TensorFlow Developer Certificate", year: "2022" },
    { icon: <Award className="w-6 h-6" />, title: "Google Cloud ML Engineer", year: "2022" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Published 5 ML Research Papers", year: "2021-2023" }
  ]

  const skills = [
    { category: "Machine Learning", items: ["Deep Learning", "Computer Vision", "NLP", "MLOps"] },
    { category: "Programming", items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
    { category: "Data & Analytics", items: ["SQL", "Pandas", "NumPy", "Spark"] }
  ]

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
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
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

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-4px);
        }

        .gradient-text {
          background: linear-gradient(135deg, #00ADB5, #393E46);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .timeline-line {
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #00ADB5, #393E46);
        }

        .timeline-dot {
          position: absolute;
          left: 14px;
          top: 24px;
          width: 14px;
          height: 14px;
          background: #00ADB5;
          border: 3px solid #EEEEEE;
          border-radius: 50%;
          z-index: 1;
        }
      `}</style>

      <Layout>
        {/* Hero Section */}
        <section 
          className="pt-32 pb-20 bg-[#EEEEEE] relative overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: Profile Image */}
              <div className={`relative transition-all duration-800 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}>
                <div className="relative w-80 h-80 mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ADB5] to-[#393E46] rounded-full opacity-20 animate-pulse"></div>
                  <div className="relative w-full h-full bg-[#222831] rounded-full overflow-hidden border-4 border-[#00ADB5]">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <Users className="w-32 h-32 text-[#EEEEEE]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Intro */}
              <div className={`space-y-6 transition-all duration-800 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                <div className="inline-flex items-center px-4 py-2 bg-[#00ADB5]/10 rounded-full border border-[#00ADB5]/20">
                  <MapPin className="w-4 h-4 text-[#00ADB5] mr-2" />
                  <span className="text-sm font-medium text-[#393E46]">Based in Jakarta, Indonesia</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-[#222831]">
                  Hello, I'm <span className="gradient-text">Ferri Krisdiantoro</span>
                </h1>
                
                <p className="text-xl text-[#393E46] leading-relaxed">
                  A passionate Machine Learning Engineer with 2+ years of experience in building 
                  intelligent systems that solve real-world problems.
                </p>
                
                <p className="text-lg text-[#393E46] leading-relaxed">
                  I specialize in computer vision, natural language processing, and MLOps, 
                  helping businesses leverage AI to drive innovation and growth.
                </p>

                {/* Social Links & CTA */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="/resume.pdf"
                    className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white rounded-lg font-semibold hover:bg-[#393E46] transition-colors duration-300 hover-lift"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                  
                  <div className="flex gap-2">
                    <a href="mailto:alex@example.com" className="p-3 bg-[#222831] text-[#EEEEEE] rounded-lg hover:bg-[#00ADB5] transition-colors duration-300 hover-lift">
                      <Mail className="w-5 h-5" />
                    </a>
                    <a href="https://github.com" className="p-3 bg-[#222831] text-[#EEEEEE] rounded-lg hover:bg-[#00ADB5] transition-colors duration-300 hover-lift">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com" className="p-3 bg-[#222831] text-[#EEEEEE] rounded-lg hover:bg-[#00ADB5] transition-colors duration-300 hover-lift">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          ref={el => { sectionRefs.current[0] = el }}
          data-section="0"
          className="py-20 bg-[#222831]"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className={`text-center mb-16 transition-all duration-800 ${
              visibleSections.has(0) ? 'fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl font-bold text-[#EEEEEE] mb-4">Professional Experience</h2>
              <p className="text-xl text-[#EEEEEE]/70 max-w-2xl mx-auto">
                My journey in machine learning and artificial intelligence
              </p>
            </div>

            <div className="relative">
              <div className="timeline-line"></div>
              
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-16 pb-12 transition-all duration-800 ${
                    visibleSections.has(0) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="timeline-dot"></div>
                  
                  <div className="bg-[#EEEEEE] rounded-xl p-6 hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-[#222831]">{exp.title}</h3>
                      <span className="text-sm font-medium text-[#00ADB5] bg-[#00ADB5]/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-[#393E46] mb-3">{exp.company}</p>
                    <p className="text-[#393E46] leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          ref={el => { sectionRefs.current[1] = el }}
          data-section="1"
          className="py-20 bg-[#EEEEEE]"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className={`text-center mb-16 transition-all duration-800 ${
              visibleSections.has(1) ? 'fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl font-bold text-[#222831] mb-4">Core Competencies</h2>
              <p className="text-xl text-[#393E46] max-w-2xl mx-auto">
                Technologies and methodologies I leverage to build intelligent solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <div
                  key={skillGroup.category}
                  className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover-lift transition-all duration-300 ${
                    visibleSections.has(1) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-bold text-[#222831] mb-4 pb-2 border-b-2 border-[#00ADB5]">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map(skill => (
                      <li key={skill} className="text-[#393E46] flex items-center">
                        <div className="w-2 h-2 bg-[#00ADB5] rounded-full mr-3"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section
          ref={el => { sectionRefs.current[2] = el }}
          data-section="2"
          className="py-20 bg-[#222831]"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className={`text-center mb-16 transition-all duration-800 ${
              visibleSections.has(2) ? 'fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl font-bold text-[#EEEEEE] mb-4">Achievements & Certifications</h2>
              <p className="text-xl text-[#EEEEEE]/70 max-w-2xl mx-auto">
                Recognition and credentials that validate my expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-[#EEEEEE] rounded-xl p-6 hover-lift transition-all duration-300 ${
                    visibleSections.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#00ADB5]/20 rounded-full text-[#00ADB5]">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#222831] text-lg">{achievement.title}</h3>
                      <p className="text-[#393E46]">{achievement.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={el => { sectionRefs.current[3] = el }}
          data-section="3"
          className="py-20 bg-[#EEEEEE]"
        >
          <div className={`max-w-4xl mx-auto px-6 text-center transition-all duration-800 ${
            visibleSections.has(3) ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl font-bold text-[#222831] mb-6">
              Ready to Collaborate?
            </h2>
            <p className="text-xl text-[#393E46] mb-8 max-w-2xl mx-auto">
              I'm always excited to work on challenging projects and explore new opportunities in machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="px-8 py-4 bg-[#00ADB5] text-white rounded-lg font-semibold hover:bg-[#393E46] transition-colors duration-300 hover-lift inline-flex items-center justify-center"
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-[#222831] text-[#222831] rounded-lg font-semibold hover:bg-[#222831] hover:text-[#EEEEEE] transition-all duration-300 hover-lift"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import {
  Location04Icon,
  ArrowRight01Icon,
  UserIcon,
  Briefcase01Icon,
  Calendar03Icon,
  Download04Icon,
  SentIcon,
  SourceCodeSquareIcon,
  FlashIcon,
  AiBrain01Icon,
  Settings02Icon,
  CheckmarkCircle02Icon,
  ArrowUpRight01Icon,
} from "hugeicons-react";

export default function About() {
  const experiences = [
    {
      company: "DBS Indonesia x Dicoding",
      role: "Cohort Machine Learning Engineer",
      period: "Feb 2025 - July 2025",
      description:
        "Led development of computer vision models for autonomous systems, achieving 95% accuracy in object detection. Collaborated with a team of 5 to integrate models into edge devices.",
      tags: ["Computer Vision", "TensorFlow", "Edge AI"],
    },
    {
      company: "DataTech Solutions",
      role: "ML Engineer",
      period: "2022 - 2023",
      description:
        "Built NLP pipelines for sentiment analysis and recommendation systems serving 1M+ users daily. Optimized inference latency by 40%.",
      tags: ["NLP", "Python", "Docker"],
    },
    {
      company: "StartupXYZ",
      role: "Junior Data Scientist",
      period: "2021 - 2022",
      description:
        "Developed predictive analytics models that increased customer retention by 30%. Created automated dashboards for executive reporting.",
      tags: ["Scikit-learn", "SQL", "Tableau"],
    },
  ];

  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "SQL"],
      icon: SourceCodeSquareIcon,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      category: "Frameworks",
      items: ["Next.js", "React", "Node.js", "FastAPI"],
      icon: FlashIcon,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      category: "AI / ML",
      items: ["TensorFlow", "LangChain", "OpenAI", "Scikit-learn"],
      icon: AiBrain01Icon,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      category: "Tools",
      items: ["n8n", "Power Platform", "Docker", "Git"],
      icon: Settings02Icon,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  const stats = [
    { value: "15+", label: "Projects Completed" },
    { value: "10+", label: "Happy Clients" },
    { value: "3+", label: "Years Experience" },
    { value: "95%", label: "Client Satisfaction" },
  ];

  return (
    <>
      {/* ─── Hero Banner ─── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-main">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 font-jakarta">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-jakarta leading-tight mb-4">
            About Me<span className="text-primary">.</span>
          </h1>
          <p className="text-text-muted text-base md:text-lg max-w-2xl leading-relaxed">
            I&apos;m Ferri Krisdiantoro — an AI &amp; Automation Engineer based
            in Indramayu, West Java. I specialize in building intelligent systems
            that save time and drive results.
          </p>
        </div>
      </section>

      {/* ─── Bio Section ─── */}
      <section className="section-warm py-16 md:py-20 border-y border-warm-border">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden sticky top-28">
                {/* Gradient header strip */}
                <div className="h-24 bg-gradient-to-br from-primary via-primary to-primary-dark relative">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-2 right-4 w-16 h-16 border border-white/40 rounded-full"></div>
                    <div className="absolute bottom-0 left-4 w-10 h-10 border border-white/30 rounded-full"></div>
                  </div>
                </div>

                <div className="px-6 pb-6 -mt-10 relative">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-2xl bg-white border-4 border-white shadow-lg flex items-center justify-center mx-auto">
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <UserIcon size={32} className="text-primary" />
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <h2 className="text-lg font-bold font-jakarta text-gray-900">
                      Ferri Krisdiantoro
                    </h2>
                    <p className="text-sm text-primary font-semibold font-jakarta">
                      AI &amp; Automation Engineer
                    </p>
                    <div className="flex items-center justify-center gap-1.5 text-xs text-text-muted mt-1.5">
                      <Location04Icon size={13} className="text-primary" />
                      Indramayu, West Java, ID
                    </div>
                  </div>

                  {/* Mini stats */}
                  <div className="grid grid-cols-2 gap-2 mt-5">
                    {stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 rounded-xl p-3 text-center"
                      >
                        <p className="text-lg font-bold text-gray-900 font-jakarta">
                          {stat.value}
                        </p>
                        <p className="text-[10px] text-text-muted font-jakarta leading-tight">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-col gap-2">
                    <a
                      href="/resume.pdf"
                      className="btn-primary text-sm py-2.5 px-4 inline-flex items-center justify-center gap-2"
                    >
                      <Download04Icon size={16} />
                      Download CV
                    </a>
                    <Link
                      href="/contact"
                      className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors font-jakarta inline-flex items-center justify-center gap-1.5 py-2.5 bg-gray-50 rounded-xl hover:bg-primary/5"
                    >
                      <SentIcon size={14} />
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold font-jakarta mb-6 text-gray-900 leading-snug">
                Building the bridge between
                <span className="text-primary"> AI</span> and real-world
                <span className="text-primary"> impact</span>
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                <p>
                  I&apos;m passionate about leveraging AI, machine learning, and
                  automation to solve real-world challenges. My journey spans
                  from developing computer vision models and NLP pipelines to
                  architecting full-stack automation systems with tools like n8n
                  and Power Platform.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating
                  solutions that not only work perfectly but are elegant and
                  scalable. Every project I take on is an opportunity to push the
                  boundaries of what technology can achieve.
                </p>
                <p>
                  When I&apos;m not coding, I&apos;m exploring new AI research
                  papers, contributing to open-source projects, and helping
                  businesses automate their workflows to save hundreds of hours
                  monthly.
                </p>
              </div>

              {/* Highlight boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-white rounded-2xl p-5 border border-gray-200">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <AiBrain01Icon size={18} className="text-primary" />
                  </div>
                  <h4 className="text-sm font-bold font-jakarta text-gray-900 mb-1">
                    AI-First Approach
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Every solution I build starts with understanding how AI can
                    amplify the result.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-gray-200">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center mb-3">
                    <FlashIcon size={18} className="text-amber-600" />
                  </div>
                  <h4 className="text-sm font-bold font-jakarta text-gray-900 mb-1">
                    Automation Expert
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Saving businesses 100+ hours monthly with intelligent
                    workflow automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Experience ─── */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 font-jakarta">
              Career
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-jakarta">
              Experience
            </h2>
            <p className="text-text-muted mt-2 max-w-md mx-auto text-sm">
              My professional journey in tech.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block"></div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative flex gap-6 group">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 relative z-10">
                      <Briefcase01Icon
                        size={20}
                        className="text-primary group-hover:text-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white rounded-2xl p-6 md:p-7 border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold font-jakarta text-gray-900 leading-snug">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-primary font-jakarta">
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs text-text-muted font-jakarta bg-gray-50 px-3 py-1.5 rounded-lg flex-shrink-0">
                        <Calendar03Icon size={13} />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg font-jakarta"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Skills & Tools ─── */}
      <section className="section-warm py-20 md:py-28 border-y border-warm-border">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 font-jakarta">
              Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-jakarta">
              Skills &amp; Tools
            </h2>
            <p className="text-text-muted mt-2 max-w-md mx-auto text-sm">
              Technologies I work with daily.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((group, idx) => {
              const CategoryIcon = group.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${group.bg} flex items-center justify-center mb-4`}
                  >
                    <CategoryIcon size={22} className={group.color} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4 font-jakarta">
                    {group.category}
                  </h3>
                  <div className="space-y-2">
                    {group.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600 font-jakarta"
                      >
                        <CheckmarkCircle02Icon
                          size={14}
                          className={group.color}
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-40 h-40 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-60 h-60 border-2 border-white rounded-full"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold font-jakarta mb-4 text-white">
                Interested in working together?
              </h2>
              <p className="text-lg text-white/80 max-w-lg mx-auto mb-8">
                I&apos;m always open to new projects, collaborations, and
                opportunities.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold font-jakarta px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors text-base"
              >
                <SentIcon size={18} />
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
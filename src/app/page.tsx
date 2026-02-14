"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import projects from "@/data/projects.json";
import testimonials from "@/data/testimonials.json";
import {
  Location04Icon,
  ArrowRight01Icon,
  SentIcon,
  SourceCodeIcon,
  Rocket01Icon,
  Clock01Icon,
  StarIcon,
} from "hugeicons-react";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  const roles = ["AI Engineer", "Automation Architect", "Full-Stack Dev", "Power Platform Expert"];

  const techRow1 = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  ];

  const techRow2 = [
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
    { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  ];

  return (
    <>
      {/* ─── Bento Hero ─── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">

            {/* ── Main Intro (spans 2 cols, 2 rows) ── */}
            <div className="col-span-2 row-span-2 bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden group min-h-[320px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/15 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full font-jakarta mb-5 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Available for work
                </div>
                <h1 className="text-3xl md:text-5xl font-bold font-jakarta leading-[1.15] mb-4">
                  Ferri
                  <br />
                  Krisdiantoro<span className="text-white/50">.</span>
                </h1>
                <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-sm">
                  I turn complex problems into <span className="text-white font-medium">intelligent automations</span> and <span className="text-white font-medium">AI-powered systems</span>.
                </p>
              </div>
              <div className="relative z-10 flex gap-3 mt-6">
                <Link href="/projects" className="bg-white hover:bg-orange-50 text-primary font-semibold text-sm px-5 py-2.5 rounded-xl transition-all font-jakarta inline-flex items-center gap-2">
                  See my work
                  <ArrowRight01Icon size={16} />
                </Link>
                <Link href="/contact" className="bg-white/20 hover:bg-white/30 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all border border-white/20 font-jakarta backdrop-blur-sm">
                  Say hello
                </Link>
              </div>
            </div>

            {/* ── Stat: Projects ── */}
            <div className="col-span-1 bg-white rounded-3xl p-6 border border-gray-200 flex flex-col justify-center hover:border-primary/40 hover:shadow-md transition-all group">
              <Rocket01Icon size={24} className="text-primary mb-2" />
              <div className="text-4xl md:text-5xl font-bold font-jakarta text-gray-900 group-hover:text-primary transition-colors">40+</div>
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mt-1.5 font-jakarta">Projects shipped</div>
            </div>

            {/* ── Stat: Hours Saved ── */}
            <div className="col-span-1 bg-white rounded-3xl p-6 border border-gray-200 flex flex-col justify-center hover:border-primary/40 hover:shadow-md transition-all group">
              <Clock01Icon size={24} className="text-primary mb-2" />
              <div className="text-4xl md:text-5xl font-bold font-jakarta text-gray-900 group-hover:text-primary transition-colors">100+</div>
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mt-1.5 font-jakarta">Hrs saved / month</div>
            </div>

            {/* ── Stat: Experience ── */}
            <div className="col-span-1 bg-white rounded-3xl p-6 border border-gray-200 flex flex-col justify-center hover:border-primary/40 hover:shadow-md transition-all group">
              <StarIcon size={24} className="text-primary mb-2" />
              <div className="text-4xl md:text-5xl font-bold font-jakarta text-gray-900 group-hover:text-primary transition-colors">5+</div>
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mt-1 font-jakarta">Years experience</div>
            </div>

            {/* ── Location Card ── */}
            <div className="col-span-1 bg-white rounded-3xl p-6 border border-gray-200 flex flex-col justify-center hover:border-primary/40 hover:shadow-md transition-all group">
              <Location04Icon size={24} className="text-primary mb-2" />
              <div className="text-2xl md:text-3xl font-bold font-jakarta text-gray-900 group-hover:text-primary transition-colors leading-tight">Indramayu</div>
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mt-1.5 font-jakarta">West Java, ID</div>
            </div>

            {/* ── Roles Marquee ── */}
            <div className="col-span-2 bg-warm-bg rounded-3xl overflow-hidden border border-warm-border flex items-center relative">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-warm-bg to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-warm-bg to-transparent z-10 pointer-events-none"></div>
              <div className="flex gap-8 animate-marquee whitespace-nowrap py-5 px-6">
                {[...roles, ...roles, ...roles].map((role, i) => (
                  <span key={i} className="text-sm font-bold font-jakarta text-gray-500 flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Quick Links ── */}
            <div className="col-span-2 bg-white rounded-3xl p-5 border border-gray-200 flex items-center justify-center gap-3 hover:border-primary/40 transition-all">
              <a href="https://github.com/ferrikrisdiantoro" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all text-lg">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/ferrikrisdiantoro" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all text-lg">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://fastwork.id/user/ferrikrisdiantoro" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all text-sm font-bold font-jakarta">
                FW
              </a>
              <a href="https://wa.me/6285351168279" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all text-lg">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="mailto:ferryk935@gmail.com" className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all text-lg">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Featured Projects ─── */}
      <section className="section-warm py-20 md:py-28 border-y border-warm-border">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 font-jakarta">Portfolio</p>
              <h2 className="text-3xl md:text-4xl font-bold font-jakarta">Featured Projects</h2>
              <p className="text-text-muted mt-2 max-w-md text-sm">Some of my recent work spanning AI, automation, and full-stack development.</p>
            </div>
            <Link href="/projects" className="mt-6 md:mt-0 btn-primary text-sm">
              View all projects
              <ArrowRight01Icon size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group cursor-pointer">
                {/* Image */}
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
                  {/* Type badge on image */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-bold px-3 py-1 rounded-full font-jakarta shadow-sm">
                      {project.type}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold font-jakarta mb-2 text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">{project.title}</h3>
                  <p className="text-sm text-text-muted mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="tag">{t}</span>
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
        </div>
      </section>

      {/* ─── Tech Stack Marquee ─── */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 font-jakarta">Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold font-jakarta">Tech Stack</h2>
            <p className="text-text-muted mt-2 max-w-md mx-auto text-sm">Technologies and tools I use to bring ideas to life.</p>
          </div>

          {/* Marquee rows */}
          <div className="space-y-4 relative">
            {/* Row 1 — scrolls left */}
            <div className="overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
              <div className="flex gap-4 animate-marquee-slow whitespace-nowrap py-2">
                {[...techRow1, ...techRow1, ...techRow1].map((tech, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 hover:bg-primary/5 border border-gray-200 hover:border-primary/30 rounded-2xl px-5 py-3.5 transition-all duration-300 flex-shrink-0 group cursor-default">
                    <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                    <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 font-jakarta transition-colors">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 — scrolls right */}
            <div className="overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
              <div className="flex gap-4 animate-marquee-slow-reverse whitespace-nowrap py-2">
                {[...techRow2, ...techRow2, ...techRow2].map((tech, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 hover:bg-primary/5 border border-gray-200 hover:border-primary/30 rounded-2xl px-5 py-3.5 transition-all duration-300 flex-shrink-0 group cursor-default">
                    <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                    <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 font-jakarta transition-colors">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="section-warm py-20 md:py-28 border-y border-warm-border">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 font-jakarta">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold font-jakarta">What Clients Say</h2>
            <p className="text-text-muted mt-2 max-w-md mx-auto text-sm">Real feedback from verified clients on Fastwork.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-sm text-gray-700 leading-relaxed mb-5">&ldquo;{t.content}&rdquo;</p>
                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-sm font-bold font-jakarta text-gray-900">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.role}</p>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full font-jakarta">{t.platform}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-40 h-40 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-60 h-60 border-2 border-white rounded-full"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold font-jakarta mb-4 text-white">
                Let&apos;s Build Something Great
              </h2>
              <p className="text-lg text-white/80 max-w-lg mx-auto mb-8">
                Have a project in mind? Looking for an AI &amp; Automation partner?
                I&apos;d love to hear from you.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold font-jakarta px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors text-base">
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
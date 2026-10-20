"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import ProjectTile from "@/components/ProjectTile";
import { featuredProjects, type Project } from "@/lib/projects";
import testimonials from "@/data/testimonials.json";
import {
  Location04Icon,
  ArrowRight01Icon,
  SentIcon,
  Rocket01Icon,
  Clock01Icon,
  StarIcon,
} from "hugeicons-react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const services = [
    {
      title: "WhatsApp AI agents",
      body: "An assistant on your WhatsApp number that answers customers, qualifies leads, sends quotes and payment links, and hands over to a human when needed.",
      stack: [["WhatsApp", "whatsapp.svg"], ["n8n", "n8n.svg"], ["LangChain", "langchain.svg"], ["Xendit", "xendit.svg"]],
      examples: "cooperative member platform, window-blinds retailer, medical-supply distributor",
    },
    {
      title: "Business automation & integrations",
      body: "Connect the systems you already use so reports, stock, and orders move on their own instead of being copied by hand.",
      stack: [["n8n", "n8n.svg"], ["Odoo", "odoo.svg"], ["Mokapos", "mokapos.svg"], ["Telegram", "telegram.svg"]],
      examples: "Odoo × Shopee sync, nightly POS sales report to WhatsApp, ad ROAS monitor",
    },
    {
      title: "Web apps & dashboards",
      body: "Admin panels, booking and catalog sites, and internal tools that replace spreadsheets, with roles, approvals, and PDF invoices.",
      stack: [["Next.js", "next.svg"], ["Supabase", "supabase.svg"], ["PostgreSQL", "postgre.svg"], ["Tailwind", "tailwind-css.svg"]],
      examples: "scaffolding rental system, Australian car subscription site, franchise POS",
    },
    {
      title: "Computer vision",
      body: "Camera-based detection and measurement that runs on-site, from safety compliance to quality control on the production line.",
      stack: [["YOLO", "ultralytics.svg"], ["PyTorch", "pytorch.svg"], ["Roboflow", "robflow.svg"], ["Python", "python.svg"]],
      examples: "PPE compliance VMS, spray-nozzle inspector, activity recognition",
    },
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
                  I build <span className="text-white font-medium">WhatsApp AI agents</span>, <span className="text-white font-medium">business automations</span>, and <span className="text-white font-medium">web apps</span> for small and mid-size businesses.
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
            <div className="col-span-1 bg-white rounded-3xl p-4 md:p-6 border border-gray-200 flex flex-col justify-center min-w-0 hover:border-primary/40 hover:shadow-md transition-all group">
              <Rocket01Icon size={24} className="text-primary mb-2" />
              <div className="text-3xl md:text-5xl font-bold font-jakarta text-gray-900 group-hover:text-primary transition-colors">100+</div>
              <div className="text-[11px] md:text-xs font-semibold text-text-muted uppercase tracking-wider mt-1.5 font-jakarta">Deliverables shipped</div>
            </div>

            {/* ── Stat: Hours Saved ── */}
            <div className="col-span-1 bg-white rounded-3xl p-4 md:p-6 border border-gray-200 flex flex-col justify-center min-w-0 hover:border-primary/40 hover:shadow-md transition-all group">
              <Clock01Icon size={24} className="text-primary mb-2" />
              <div className="text-3xl md:text-5xl font-bold font-jakarta text-gray-900 group-hover:text-primary transition-colors">70+</div>
              <div className="text-[11px] md:text-xs font-semibold text-text-muted uppercase tracking-wider mt-1.5 font-jakarta">Client projects</div>
            </div>

            {/* ── Stat: Experience ── */}
            <div className="col-span-1 bg-white rounded-3xl p-4 md:p-6 border border-gray-200 flex flex-col justify-center min-w-0 hover:border-primary/40 hover:shadow-md transition-all group">
              <StarIcon size={24} className="text-primary mb-2" />
              <div className="text-3xl md:text-5xl font-bold font-jakarta text-gray-900 group-hover:text-primary transition-colors">2+</div>
              <div className="text-[11px] md:text-xs font-semibold text-text-muted uppercase tracking-wider mt-1 font-jakarta">Years with clients</div>
            </div>

            {/* ── Location Card ── */}
            <div className="col-span-1 bg-white rounded-3xl p-4 md:p-6 border border-gray-200 flex flex-col justify-center min-w-0 hover:border-primary/40 hover:shadow-md transition-all group">
              <Location04Icon size={24} className="text-primary mb-2" />
              <div className="text-xl md:text-3xl font-bold font-jakarta text-gray-900 group-hover:text-primary transition-colors leading-tight break-words">Indramayu</div>
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mt-1.5 font-jakarta">West Java, ID</div>
            </div>

            {/* ── Fokus layanan (statis, bukan marquee) ── */}
            <div className="col-span-2 bg-warm-bg rounded-3xl border border-warm-border flex flex-wrap items-center gap-2 p-4 md:px-6">
              {["WhatsApp AI agents", "n8n & ERP automation", "Web apps", "Computer vision"].map((r) => (
                <span key={r} className="text-xs md:text-sm font-bold font-jakarta text-gray-600 bg-white border border-warm-border rounded-full px-3 py-1.5">{r}</span>
              ))}
            </div>

            {/* ── Quick Links ── */}
            <div className="col-span-2 bg-white rounded-3xl p-4 md:p-5 border border-gray-200 flex flex-wrap items-center justify-center gap-2 md:gap-3 hover:border-primary/40 transition-all">
              <a aria-label="GitHub" href="https://github.com/ferrikrisdiantoro" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all text-lg">
                <i className="fa-brands fa-github"></i>
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com/in/ferrikrisdiantoro" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all text-lg">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a aria-label="Fastwork" href="https://fastwork.id/user/ferrikrisdiantoro" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all text-sm font-bold font-jakarta">
                FW
              </a>
              <a aria-label="WhatsApp" href="https://wa.me/6285351168279" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all text-lg">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a aria-label="Email" href="mailto:ferryk935@gmail.com" className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all text-lg">
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
              <p className="text-text-muted mt-2 max-w-md text-sm">Recent client and product work across AI agents, automation, and full-stack apps. Client names are kept confidential.</p>
            </div>
            <Link href="/projects" className="mt-6 md:mt-0 btn-primary text-sm">
              View all projects
              <ArrowRight01Icon size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <ProjectTile key={project.title} project={project} priority={idx < 3} onOpen={() => setSelectedProject(project)} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── What I build ─── */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 font-jakarta">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold font-jakarta">What I build</h2>
            <p className="text-text-muted mt-2 max-w-xl text-sm">The four kinds of work clients hire me for most, with real examples from the projects above.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((sv) => (
              <div key={sv.title} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold font-jakarta text-gray-900 mb-2">{sv.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-4">{sv.body}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {sv.stack.map(([name, icon]) => (
                    <span key={name} className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 font-jakarta">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/svg/${icon}`} alt="" width={16} height={16} className="w-4 h-4 object-contain" />
                      {name}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500"><span className="font-semibold text-gray-700">Examples:</span> {sv.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="section-warm py-20 md:py-28 border-y border-warm-border">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 font-jakarta">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold font-jakarta">What Clients Say</h2>
            <p className="text-text-muted mt-2 max-w-md mx-auto text-sm">
              Reviews left by buyers on Fastwork.{" "}
              <a href="https://fastwork.id/user/ferrikrisdiantoro" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">See all reviews</a>
            </p>
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
                    <p className="text-sm font-bold font-jakarta text-gray-900">{t.name.includes(" ") ? t.name : "Fastwork buyer"}</p>
                    <p className="text-xs text-text-muted">Verified purchase</p>
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
                Got a process that eats your team&apos;s time?
              </h2>
              <p className="text-lg text-white/80 max-w-lg mx-auto mb-8">
                Send me a short description of how it works today. I&apos;ll reply
                with how I&apos;d automate it and a rough estimate.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold font-jakarta px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors text-base">
                <SentIcon size={18} />
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      <Footer />
    </>
  );
}
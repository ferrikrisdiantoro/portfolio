"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  SentIcon,
  Mail01Icon,
  SmartPhone01Icon,
  Location04Icon,
  Clock01Icon,
  ArrowUpRight01Icon,
  CheckmarkCircle02Icon,
} from "hugeicons-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactCards = [
    {
      icon: Mail01Icon,
      label: "Email",
      value: "ferryk935@gmail.com",
      href: "mailto:ferryk935@gmail.com",
      desc: "Drop me a line anytime",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: SmartPhone01Icon,
      label: "WhatsApp",
      value: "+62 853 5116 8279",
      href: "https://wa.me/6285351168279",
      desc: "Quick response, usually within 1 hour",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: Location04Icon,
      label: "Location",
      value: "Indramayu, West Java",
      href: null,
      desc: "Indonesia · Open to remote work worldwide",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Clock01Icon,
      label: "Working Hours",
      value: "Mon - Sat, 9AM - 6PM",
      href: null,
      desc: "WIB (GMT+7) · Flexible for different timezones",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  const socials = [
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      href: "https://github.com/ferrikrisdiantoro",
      hoverBg: "hover:bg-gray-900",
    },
    {
      name: "LinkedIn",
      icon: "fa-brands fa-linkedin-in",
      href: "https://linkedin.com/in/ferrikrisdiantoro",
      hoverBg: "hover:bg-blue-600",
    },
    {
      name: "Fastwork",
      icon: null,
      text: "FW",
      href: "https://fastwork.id/user/ferrikrisdiantoro",
      hoverBg: "hover:bg-primary",
    },
    {
      name: "WhatsApp",
      icon: "fa-brands fa-whatsapp",
      href: "https://wa.me/6285351168279",
      hoverBg: "hover:bg-green-500",
    },
  ];

  return (
    <>
      {/* ─── Header ─── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 font-jakarta">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold font-jakarta leading-tight mb-4">
              Get in Touch<span className="text-primary">.</span>
            </h1>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Have a project in mind, need AI consultation, or just want to say hello?
              I&apos;d love to hear from you. Let&apos;s build something great together.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Contact Info Cards ─── */}
      <section className="section-warm py-14 md:py-16 border-y border-warm-border">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              const inner = (
                <div className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group h-full">
                  <div className={`w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center mb-4`}>
                    <Icon size={20} className={card.color} />
                  </div>
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider font-jakarta mb-1">
                    {card.label}
                  </p>
                  <p className="text-sm font-bold text-gray-900 font-jakarta mb-1.5 flex items-center gap-1">
                    {card.value}
                    {card.href && (
                      <ArrowUpRight01Icon size={12} className="text-gray-400 group-hover:text-primary transition-colors" />
                    )}
                  </p>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
              return card.href ? (
                <a key={idx} href={card.href} target="_blank" rel="noopener noreferrer" className="block">
                  {inner}
                </a>
              ) : (
                <div key={idx}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Form + Social ─── */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Left: Why Work With Me + Socials */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="lg:sticky lg:top-28">
                <h3 className="text-xl font-bold font-jakarta text-gray-900 mb-6">
                  Why work with me?
                </h3>
                <div className="space-y-4 mb-10">
                  {[
                    "Quick response time — usually within hours",
                    "Experience with 15+ production projects",
                    "End-to-end: from concept to deployment",
                    "Flexible rates & transparent pricing",
                    "Open to remote work worldwide",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                        <CheckmarkCircle02Icon size={12} className="text-primary" />
                      </div>
                      <p className="text-sm text-gray-600 font-jakarta leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider font-jakarta mb-4">
                    Connect with me
                  </p>
                  <div className="flex gap-3">
                    {socials.map((s, idx) => (
                      <a
                        key={idx}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 ${s.hoverBg} hover:text-white transition-all text-sm`}
                        title={s.name}
                      >
                        {s.icon ? (
                          <i className={s.icon}></i>
                        ) : (
                          <span className="text-xs font-bold font-jakarta">{s.text}</span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability badge */}
                <div className="mt-8 bg-green-50 rounded-2xl p-5 border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-sm font-bold text-green-800 font-jakarta">Available for work</p>
                  </div>
                  <p className="text-xs text-green-700 leading-relaxed">
                    Currently accepting new projects and freelance opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-xl font-bold font-jakarta text-gray-900 mb-1">
                    Send a Message
                  </h2>
                  <p className="text-sm text-text-muted">
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-4">
                      <CheckmarkCircle02Icon size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold font-jakarta text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-sm text-text-muted">Thank you for reaching out. I&apos;ll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 font-jakarta">
                          Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-gray-400 font-jakarta"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 font-jakarta">
                          Email <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-gray-400 font-jakarta"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 font-jakarta">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-gray-400 font-jakarta"
                        placeholder="Project inquiry, collaboration, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 font-jakarta">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-gray-400 resize-none font-jakarta"
                        placeholder="Tell me about your project, timeline, and budget..."
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full py-4 text-sm inline-flex items-center justify-center gap-2 text-base"
                    >
                      <SentIcon size={18} />
                      Send Message
                    </button>
                    <p className="text-xs text-text-muted text-center">
                      I typically respond within 24 hours.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
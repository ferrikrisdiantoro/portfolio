"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
        : 'bg-white/50 backdrop-blur-sm'
      }`}>
      <div className="container-main flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="font-jakarta font-bold text-xl text-gray-900 hover:text-primary transition-colors tracking-tight">
          Ferri<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-jakarta ${pathname === item.href
                  ? 'text-primary bg-primary-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-4 btn-primary text-sm py-2 px-5">
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 rounded-xl text-base font-semibold font-jakarta transition-colors ${pathname === item.href
                  ? 'text-primary bg-orange-50'
                  : 'text-gray-700 hover:bg-gray-50'
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-4 btn-primary w-full text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </nav>
  );
}
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#EEEEEE] backdrop-blur-sm shadow-sm border-b border-gray-100' 
        : 'bg-[#393E46]'
    }`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <span className={`text-2xl font-semibold transition-colors duration-200 ${
              isScrolled ? 'text-[#393E46]' : 'text-[#EEEEEE]'
            }`}>
              Ferri Krisdiantoro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  pathname === item.href
                    ? isScrolled
                      ? 'bg-[#EEEEEE] text-[#00ADB5]'
                      : 'bg-[#00ADB5] text-[#EEEEEE]'
                    : isScrolled 
                      ? 'text-[#393E46] hover:bg-[#222831] hover:text-[#EEEEEE]' 
                      : 'text-[#EEEEEE] hover:text-[#222831] hover:bg-[#EEEEEE]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors duration-200 ${
              isScrolled ? 'text-[#393E46] hover:bg-[#E4F9F5]' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-200 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-200 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`w-full h-0.5 bg-current transform transition-all duration-200 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
        }`}>
          <div className="mt-2 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100 p-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  pathname === item.href
                    ? 'bg-[#E4F9F5] text-[#11999E]'
                    : 'text-[#393E46] hover:bg-[#E4F9F5] hover:text-[#11999E]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
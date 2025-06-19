'use client'

import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/yourusername',
      icon: <Github className="w-5 h-5" />
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/yourusername',
      icon: <Linkedin className="w-5 h-5" />
    },
    { 
      name: 'Kaggle', 
      url: 'https://kaggle.com/yourusername',
      // simple Kaggle “K” logo SVG
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 2H8C5.79 2 4 3.79 4 6v12c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm-1 13.5H9v-3h6v3zm0-5H9v-3h6v3z"/>
        </svg>
      )
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <footer className="bg-[#222831] text-[#EEEEEE]">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#00ADB5] rounded-full" />
            <span className="text-2xl font-bold text-[#EEEEEE]">
              Ferri Krisdiantoro
            </span>
          </div>
          <p className="text-sm text-[#EEEEEE]/70 max-w-xs">
            Crafting data-driven experiences with clean code and modern ML solutions.
          </p>
          <div className="flex space-x-3">
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#393E46] rounded flex items-center justify-center hover:bg-[#00ADB5] transition-colors"
                title={link.name}
              >
                <span className="text-[#EEEEEE]">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-[#00ADB5] font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm text-[#EEEEEE]/80">
            {quickLinks.map(link => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="hover:text-[#00ADB5] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[#00ADB5] font-semibold mb-4">Contact</h3>
          <div className="space-y-2 text-sm text-[#EEEEEE]/80">
            <p>Jakarta, Indonesia</p>
            <a 
              href="mailto:ferryk935@gmail.com" 
              className="hover:text-[#00ADB5] transition-colors"
            >
              ferryk935@gmail.com
            </a>
            <p>Open to ML projects</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#393E46]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-[#EEEEEE]/70">
          <p>© {currentYear} Portfolio.</p>
        </div>
      </div>
    </footer>
  )
}

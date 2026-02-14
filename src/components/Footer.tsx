import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-main py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-jakarta font-bold text-xl text-gray-900 tracking-tight">
              Ferri<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-text-muted mt-2 leading-relaxed max-w-xs">
              AI & Automation Engineer turning complex problems into intelligent systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold font-jakarta uppercase tracking-wider text-gray-400 mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              <li><Link href="/projects" className="text-sm text-gray-600 hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-bold font-jakarta uppercase tracking-wider text-gray-400 mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="https://github.com/ferrikrisdiantoro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all text-sm">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/ferrikrisdiantoro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all text-sm">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://fastwork.id/user/ferrikrisdiantoro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all text-xs font-bold font-jakarta">
                FW
              </a>
              <a href="https://wa.me/6285351168279" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all text-sm">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="mailto:ferryk935@gmail.com" className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all text-sm">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-text-light">
            © {new Date().getFullYear()} Ferri Krisdiantoro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

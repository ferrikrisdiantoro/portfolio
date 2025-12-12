import Link from "next/link";
import Image from "next/image";
import ParticleBackground from "@/components/ParticleBackground";
import projects from "@/data/projects.json";
import testimonials from "@/data/testimonials.json";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Interactive Network Background */}
      <ParticleBackground />

      {/* Navbar */}
      <nav className="fixed w-full z-50 glass-card border-b-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                Ferri Krisdiantoro
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  Home
                </a>

                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  Portfolio
                </Link>
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        <div className="text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-card border border-blue-500/30 text-blue-400 text-sm font-semibold tracking-wide">
            🚀 Top Rated Automation Expert
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Automating Your Business with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 ml-2">
              Intelligent Workflows
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Stop wasting time on manual tasks. I build custom{" "}
            <b>n8n Workflows</b>, <b>Power Apps</b>, and{" "}
            <b>Machine Learning Models</b> to help you save 100+ hours/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 animate-pulse"
            >
              <i className="fa-solid fa-calendar-check"></i> Book Consultation
            </a>
            <Link
              href="/projects"
              className="px-8 py-4 glass-card hover:bg-slate-700/50 text-white rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-code-branch"></i> View Case Studies
            </Link>
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-16 pt-8 border-t border-slate-700/50">
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
              Powering Solutions With
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {/* n8n */}
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-diagram-project text-pink-500"></i>{" "}
                <span className="font-bold">n8n</span>
              </div>
              {/* Python */}
              <div className="flex items-center gap-2">
                <i className="fa-brands fa-python text-blue-400"></i>{" "}
                <span className="font-bold">Python</span>
              </div>
              {/* Power Platform */}
              <div className="flex items-center gap-2">
                <i className="fa-brands fa-microsoft text-purple-500"></i>{" "}
                <span className="font-bold">Power Apps</span>
              </div>
              {/* OpenAI */}
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-robot text-green-400"></i>{" "}
                <span className="font-bold">OpenAI</span>
              </div>
              {/* TensorFlow */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white">TF</div>
                <span className="font-bold">TensorFlow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How I Can Help You</h2>
            <p className="text-gray-400">
              Specialized services tailored for efficiency and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: n8n */}
            <div className="glass-card p-8 rounded-xl skill-badge relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 rounded-bl-full -mr-4 -mt-4 transition group-hover:bg-pink-500/20"></div>
              <div className="w-14 h-14 n8n-gradient rounded-lg flex items-center justify-center mb-6 text-2xl text-white shadow-lg">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Workflow Automation</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Connect WhatsApp, Google Sheets, Email, and CRM seamlessly. Build
                AI Agents that handle customer support 24/7 using n8n.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>
                  <i className="fa-solid fa-check text-pink-500 mr-2"></i>{" "}
                  WhatsApp Auto-Reply Bots
                </li>
                <li>
                  <i className="fa-solid fa-check text-pink-500 mr-2"></i> Auto
                  Invoice Generator
                </li>
                <li>
                  <i className="fa-solid fa-check text-pink-500 mr-2"></i> CRM
                  Data Sync
                </li>
              </ul>
            </div>

            {/* Service 2: Power Apps */}
            <div className="glass-card p-8 rounded-xl skill-badge relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-bl-full -mr-4 -mt-4 transition group-hover:bg-purple-500/20"></div>
              <div className="w-14 h-14 powerapps-gradient rounded-lg flex items-center justify-center mb-6 text-2xl text-white shadow-lg">
                <i className="fa-solid fa-mobile-screen"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Corporate Power Apps</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Digitize manual forms into professional mobile apps. Perfect for
                HR, Inventory, and Field Inspections within Microsoft 365
                ecosystem.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>
                  <i className="fa-solid fa-check text-purple-500 mr-2"></i>{" "}
                  Leave Request Systems
                </li>
                <li>
                  <i className="fa-solid fa-check text-purple-500 mr-2"></i>{" "}
                  Inventory Management
                </li>
                <li>
                  <i className="fa-solid fa-check text-purple-500 mr-2"></i>{" "}
                  Approval Workflows
                </li>
              </ul>
            </div>

            {/* Service 3: ML */}
            <div className="glass-card p-8 rounded-xl skill-badge relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full -mr-4 -mt-4 transition group-hover:bg-blue-500/20"></div>
              <div className="w-14 h-14 ml-gradient rounded-lg flex items-center justify-center mb-6 text-2xl text-white shadow-lg">
                <i className="fa-solid fa-brain"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Machine Learning & AI</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Custom Python-based models to predict sales, analyze sentiment,
                or process data. Turn raw data into actionable insights.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>
                  <i className="fa-solid fa-check text-blue-500 mr-2"></i>{" "}
                  Predictive Analytics
                </li>
                <li>
                  <i className="fa-solid fa-check text-blue-500 mr-2"></i> NLP &
                  Text Analysis
                </li>
                <li>
                  <i className="fa-solid fa-check text-blue-500 mr-2"></i>{" "}
                  Custom AI Models
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Meet Your Automation Partner
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Hi, I&apos;m Ferri Krisdiantoro. I bridge the gap between complex AI
                technology and business efficiency. With 3+ years of experience and
                24+ successful projects, I help businesses save hundreds of hours by
                automating boring tasks using n8n, Python, and Power Platform.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-2">
                  Let&apos;s Talk <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl rotate-6 opacity-50 blur-lg"></div>
                <Image
                  src="https://placehold.co/400x400/1e293b/FFF?text=Ferri+Krisdiantoro"
                  alt="Ferri Krisdiantoro"
                  fill
                  className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-slate-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 border-y border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-white mb-1">24+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              Projects Completed
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              Success Rate
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-1">3+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-1">10k+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              Hours Automated
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Recent Work</h2>
            <p className="text-gray-400">
              Real problems solved with automation and code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Recent Projects Grid */}
            {(() => {
              const recentProjects = [...projects].reverse().slice(0, 4);
              return recentProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl overflow-hidden border border-slate-700 glass-card hover:border-blue-500/30 transition-all duration-300 flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="aspect-video bg-slate-800 relative overflow-hidden">
                    {project.thumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-600">
                        <i className="fa-solid fa-code text-4xl"></i>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition transform hover:scale-110"
                          title="View Live Demo"
                        >
                          <i className="fa-solid fa-external-link-alt"></i>
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition transform hover:scale-110"
                          title="View Code"
                        >
                          <i className="fa-brands fa-github"></i>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-blue-400 mt-1 uppercase tracking-wide">
                          {project.type}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded border border-slate-700">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ));
            })()}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
            >
              View All Projects <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
            <p className="text-gray-400">Trusted by 24+ Businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review) => (
              <div key={review.id} className="glass-card p-8 rounded-xl relative">
                <div className="flex text-yellow-400 mb-4 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fa-solid fa-star ${i < Math.floor(review.rating)
                        ? ""
                        : i < review.rating
                          ? "fa-star-half-stroke"
                          : "text-slate-600"
                        }`}
                    ></i>
                  ))}
                  <span className="ml-2 text-slate-400 text-xs">
                    {review.rating.toFixed(1)}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  &quot;{review.content}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {review.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {review.role} via {review.platform}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-slate-900 to-black"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-gray-400 mb-10">
            Let&apos;s discuss how we can remove manual work from your daily
            operations. I am currently available for new projects on Upwork and
            Fastwork.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="mailto:ferryk935@gmail.com"
              className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-envelope"></i> Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/ferrikrisdiantoro/"
              target="_blank"
              className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold transition flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01ea7f9b28a8951dca"
              target="_blank"
              className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-lg font-bold transition flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-upwork"></i> Upwork Profile
            </a>
            <a
              href="https://fastwork.id/user/ferrikrisdiantoro"
              target="_blank"
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-bold transition flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-briefcase"></i> Fastwork
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-sm text-gray-500">
        <p>&copy; 2024 Ferri Krisdiantoro. All rights reserved.</p>
      </footer>
    </main>
  );
}
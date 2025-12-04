'use client'

import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import { Mail, MessageCircle, Send, Clock, CheckCircle, Globe } from 'lucide-react'

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'ferryk936@gmail.com',
      description: 'Drop me a line anytime',
      action: 'mailto:ferryk936@gmail.com'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'Connect with me',
      description: 'Professional networking',
      action: 'https://linkedin.com/in/ferrikrisdiantoro'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Location',
      value: 'Jakarta, Indonesia',
      description: 'Available for remote work',
      action: '#'
    }
  ]

  const projectTypes = [
    'Computer Vision Project',
    'Natural Language Processing',
    'Predictive Analytics',
    'Deep Learning Model',
    'MLOps Implementation',
    'Data Science Consulting',
    'Other ML Project'
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .gradient-text {
          background: linear-gradient(135deg, #00ADB5, #EEEEEE);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-4px);
        }

        .glass-card {
          backdrop-filter: blur(10px);
          background: rgba(238, 238, 238, 0.1);
          border: 1px solid rgba(238, 238, 238, 0.2);
        }
      `}</style>

      <Layout>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-[#EEEEEE] relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#00ADB5] opacity-10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#393E46] opacity-10 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#00ADB5] opacity-5 rounded-full"></div>

          <div className={`max-w-5xl mx-auto px-6 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            <div className={`transition-all duration-800 ${isVisible ? 'fade-in-up' : 'opacity-0'
              }`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#222831]">
                Let's Build
                <br />
                <span className="gradient-text">Intelligence Together</span>
              </h1>

              <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-[#393E46]">
                Ready to transform your data into actionable insights? Let's discuss how machine learning can solve your business challenges.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <a
                  key={method.title}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover-lift border border-gray-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  style={{
                    transitionDelay: `${0.2 + index * 0.1}s`,
                    transition: 'all 0.8s ease-out'
                  }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-[#00ADB5]/10 rounded-full mb-4 mx-auto group-hover:bg-[#00ADB5]/20 transition-colors duration-300">
                    <div className="text-[#00ADB5] group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#222831] group-hover:text-[#00ADB5] transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="font-medium mb-1 text-[#00ADB5]">{method.value}</p>
                  <p className="text-sm text-[#393E46]">{method.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-[#222831]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Form */}
              <div className={`transition-all duration-800 ${isVisible ? 'slide-in-left' : 'opacity-0 -translate-x-8'
                }`}>
                <div className="bg-[#EEEEEE] rounded-2xl p-8 shadow-xl">
                  <h2 className="text-3xl font-bold mb-2 text-[#222831]">Start Your ML Project</h2>
                  <p className="text-[#393E46] mb-8">Tell me about your data challenges and goals</p>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <div>
                          <p className="font-medium text-green-800">Message sent successfully!</p>
                          <p className="text-sm text-green-600">I'll get back to you within 24 hours.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#222831]">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#222831]">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-[#222831]">
                        Project Type
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none transition-all duration-200"
                      >
                        <option className="text-[#222831]" value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#222831]">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Describe your project, data, and objectives..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-[#00ADB5] text-white rounded-lg font-semibold shadow-lg hover:bg-[#00ADB5]/90 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Info Side */}
              <div className={`space-y-8 transition-all duration-800 ${isVisible ? 'slide-in-right' : 'opacity-0 translate-x-8'
                }`}>
                <div>
                  <h3 className="text-3xl font-bold text-[#EEEEEE] mb-6">
                    Why Work With Me?
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#00ADB5]/20 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-[#00ADB5]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#EEEEEE] mb-2">Quick Response</h4>
                        <p className="text-[#EEEEEE]/70">I respond to all inquiries within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#00ADB5]/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-[#00ADB5]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#EEEEEE] mb-2">Proven Results</h4>
                        <p className="text-[#EEEEEE]/70">4+ ML models deployed in production</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#00ADB5]/20 rounded-full flex items-center justify-center">
                        <Globe className="w-6 h-6 text-[#00ADB5]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#EEEEEE] mb-2">End-to-End Solutions</h4>
                        <p className="text-[#EEEEEE]/70">From data preprocessing to model deployment</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-[#EEEEEE] mb-4">Available Hours</h4>
                  <div className="space-y-3 text-[#EEEEEE]/80">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Response Time</span>
                      <span>Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Consultation</span>
                      <span>Free initial discussion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#EEEEEE]">{
          <div className={`max-w-4xl mx-auto px-6 text-center transition-all duration-800 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
            <h2 className="text-4xl font-bold mb-6 text-[#222831]">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-[#393E46]">
              Let's discuss how machine learning can unlock insights and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ml.engineer@example.com"
                className="px-8 py-4 bg-[#00ADB5] text-white rounded-lg font-semibold hover:bg-[#00ADB5]/90 hover-lift shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me Directly
              </a>
              <a
                href="#"
                className="px-8 py-4 border-2 border-[#222831] text-[#222831] rounded-lg font-semibold hover:bg-[#222831] hover:text-[#EEEEEE] hover-lift transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        }
        </section>
      </Layout>
    </>
  )
}
'use client'

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </>
  )
}
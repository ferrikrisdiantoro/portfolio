'use client'

import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import LoadingScreen from './LoadingScreen'

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
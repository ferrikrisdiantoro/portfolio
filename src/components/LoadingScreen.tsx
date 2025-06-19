'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => {
      clearTimeout(timer)
      clearInterval(progressTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        {/* Simple Loading Icon */}
        <div className="mb-6">
          <div className="w-12 h-12 mx-auto relative">
            <div 
              className="absolute inset-0 rounded-full border-3 border-transparent animate-spin"
              style={{
                borderTopColor: '#30E3CA',
                borderRightColor: '#11999E'
              }}
            ></div>
          </div>
        </div>

        {/* Clean Text */}
        <div className="mb-4">
          <p className="text-lg font-medium" style={{color: '#40514E'}}>
            Loading...
          </p>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-48 mx-auto">
          <div 
            className="rounded-full h-1 overflow-hidden"
            style={{backgroundColor: '#E4F9F5'}}
          >
            <div 
              className="h-full rounded-full transition-all duration-200 ease-out"
              style={{ 
                width: `${progress}%`,
                backgroundColor: '#30E3CA'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
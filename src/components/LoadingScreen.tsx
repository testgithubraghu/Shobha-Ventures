// src/components/LoadingScreen.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SKYLINE = [34, 58, 44, 72, 50, 64, 38] // bar heights in px

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  const name = 'SHOBHA VENTURES'
  const ease = [0.76, 0, 0.24, 1] as const

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[100] overflow-hidden">
          {/* Left gate */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-dark-900"
            exit={{ x: '-100%' }}
            transition={{ duration: 1, ease, delay: 0.15 }}
          />
          {/* Right gate */}
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-dark-900"
            exit={{ x: '100%' }}
            transition={{ duration: 1, ease, delay: 0.15 }}
          />

          {/* Gold seam — flares as gates part */}
          {/* <motion.div
            className="absolute inset-y-0 left-1/2 w-px bg-gold -translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.5 } }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          /> */}

          {/* Content */}
          <motion.div
            className="relative z-10 h-full flex items-center justify-center px-6"
            exit={{ opacity: 0, transition: { duration: 0.35 } }}
          >
            <div className="text-center">
              {/* Rising skyline */}
              <div className="flex items-end justify-center gap-1.5 h-20 mb-8">
                {SKYLINE.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + i * 0.07,
                      ease: 'easeOut',
                    }}
                    style={{ height: h, transformOrigin: 'bottom' }}
                    className={`w-2 rounded-t-sm ${
                      i % 2 === 0 ? 'bg-gold' : 'bg-gold/40'
                    }`}
                  />
                ))}
              </div>

              {/* Wordmark */}
              <h2 className="font-heading text-white text-lg md:text-2xl font-bold tracking-[0.3em] mb-3 flex justify-center flex-wrap">
                {name.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.025, duration: 0.4 }}
                    className={char === ' ' ? 'w-3' : ''}
                  >
                    {char}
                  </motion.span>
                ))}
              </h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="text-gold/60 font-accent text-[11px] tracking-[0.4em] uppercase mb-10"
              >
                Design &amp; Constructions
              </motion.p>

              {/* Progress line */}
              <div className="w-52 mx-auto h-px bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold to-primary-300"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
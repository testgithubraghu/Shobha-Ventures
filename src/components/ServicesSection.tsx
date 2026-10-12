// src/components/ServicesSection.tsx
'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { services } from '@/data/services'
import { FiArrowRight, FiArrowUpRight, FiHome, FiBriefcase, FiPenTool, FiTool, FiTruck, FiCheck, FiPlus } from 'react-icons/fi'
import { IconType } from 'react-icons'

const iconMap: { [key: string]: IconType } = {
  'residential-construction': FiHome,
  'commercial-construction': FiBriefcase,
  'interior-design': FiPenTool,
  'renovation-remodeling': FiTool,
  'industrial-construction': FiTruck,
}

const AUTO_ADVANCE_MS = 5500

export default function ServicesSection() {
  const [active, setActive] = useState(0)
  const [progressKey, setProgressKey] = useState(0)
  const [paused, setPaused] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length)
      setProgressKey((k) => k + 1)
    }, AUTO_ADVANCE_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, active])

  const handleSelect = (index: number) => {
    setActive(index)
    setProgressKey((k) => k + 1)
  }

  const activeService = services[active]
  const ActiveIcon = iconMap[activeService.slug] || FiHome

  return (
    <section className="py-20 lg:py-32 bg-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-dark-900/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <ScrollReveal>
            <span className="section-subheading">What We Do</span>
            <h2 className="section-heading mb-4">
              Our <span className="text-gold italic">Services</span>
            </h2>
            <div className="gold-line mb-6" />
            <p className="text-gray-600 max-w-xl text-lg">
              From design to delivery, comprehensive construction services
              tailored to meet your specific needs.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link
              href="/services"
              className="hidden lg:inline-flex items-center gap-2 text-dark-900 font-accent font-semibold text-sm uppercase tracking-wider group border-b-2 border-gold pb-1 hover:gap-3 transition-all"
            >
              View All Services
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* ============ Desktop: Interactive Tabbed Showcase ============ */}
        <ScrollReveal delay={0.2}>
          <div
            className="hidden lg:grid grid-cols-[0.85fr_1.15fr] gap-4 items-stretch"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Tab List */}
            <div className="flex flex-col justify-center gap-1 pr-6">
              {services.map((service, index) => {
                const Icon = iconMap[service.slug] || FiHome
                const isActive = index === active
                return (
                  <button
                    key={service.id}
                    onClick={() => handleSelect(index)}
                    className={`relative text-left px-6 py-5 rounded-xl transition-all duration-500 group ${
                      isActive ? 'bg-white shadow-lg' : 'hover:bg-white/50'
                    }`}
                  >
                    {/* Progress bar (active only) */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 h-[2px] bg-gray-100 w-[calc(100%-3rem)] mx-6 rounded-full overflow-hidden">
                        <motion.span
                          key={progressKey}
                          initial={{ width: '0%' }}
                          animate={{ width: paused ? undefined : '100%' }}
                          transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
                          className="block h-full bg-gold"
                        />
                      </span>
                    )}

                    <div className="flex items-center gap-4">
                      <span
                        className={`font-heading text-sm font-bold w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                          isActive ? 'bg-gold text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-gold/10 group-hover:text-gold'
                        }`}
                      >
                        <Icon size={15} />
                      </span>
                      <div className="min-w-0">
                        <h3
                          className={`font-accent text-lg font-bold transition-colors duration-300 ${
                            isActive ? 'text-gold' : 'text-dark-900 group-hover:text-gold/70'
                          }`}
                        >
                          {service.title}
                        </h3>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.3 }}
                            className="text-gray-500 text-sm mt-1 leading-relaxed overflow-hidden"
                          >
                            {service.shortDescription}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Preview Panel */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[540px] bg-dark-900">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-dark-900/10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-900/40 via-transparent to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/30 backdrop-blur-sm flex items-center justify-center mb-6">
                        <ActiveIcon className="text-gold" size={24} />
                      </div>

                      <h3 className="font-heading text-3xl font-bold text-white mb-3">
                        {activeService.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                        {activeService.shortDescription}
                      </p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8 max-w-lg">
                        {activeService.features.slice(0, 4).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <FiCheck className="text-gold flex-shrink-0" size={13} />
                            <span className="text-white/70 text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`/services/${activeService.slug}`}
                        className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-full font-accent font-semibold text-sm uppercase tracking-wider hover:bg-primary-600 hover:gap-3 transition-all duration-300 shadow-lg shadow-gold/20"
                      >
                        Explore Service
                        <FiArrowUpRight size={16} />
                      </Link>
                    </motion.div>
                  </div>

                  {/* Index counter */}
                  <div className="absolute top-8 right-8 flex items-center gap-1.5 font-accent text-xs text-white/50">
                    <span className="text-white font-semibold">0{active + 1}</span>
                    <span>/ 0{services.length}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>

        {/* ============ Mobile: Accordion ============ */}
        <div className="lg:hidden space-y-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.slug] || FiHome
            const isOpen = mobileOpen === index
            return (
              <ScrollReveal key={service.id} delay={index * 0.08}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <button
                    onClick={() => setMobileOpen(isOpen ? -1 : index)}
                    className="w-full flex items-center gap-4 p-5 text-left"
                  >
                    <span
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        isOpen ? 'bg-gold text-white' : 'bg-gold/10 text-gold'
                      }`}
                    >
                      <Icon size={17} />
                    </span>
                    <span className="flex-grow font-heading text-base font-bold text-dark-900">
                      {service.title}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 bg-gold' : ''
                      }`}
                    >
                      <FiPlus className={isOpen ? 'text-white' : 'text-gray-500'} size={16} />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="relative h-44 mx-5 mb-5 rounded-xl overflow-hidden">
                          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent" />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed px-5 mb-4">
                          {service.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-1.5 px-5 mb-5">
                          {service.features.slice(0, 3).map((feature, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-accent font-medium text-gold bg-gold/10 px-2.5 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={`/services/${service.slug}`}
                          className="flex items-center justify-center gap-2 mx-5 mb-5 bg-dark-900 text-white py-3 rounded-lg font-accent font-semibold text-xs uppercase tracking-wider"
                        >
                          Explore Service
                          <FiArrowUpRight size={14} />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            )
          })}

          <ScrollReveal delay={services.length * 0.08}>
            <Link
              href="/services"
              className="btn-primary w-full flex items-center justify-center gap-2 group mt-4"
            >
              View All Services
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
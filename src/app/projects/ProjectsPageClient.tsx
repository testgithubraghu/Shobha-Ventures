// src/app/projects/page.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import CTASection from '@/components/CTASection'
import { projects, projectCategories } from '@/data/projects'
import { FiArrowUpRight, FiMapPin, FiLayers, FiCompass } from 'react-icons/fi'

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter((p) => p.status === activeCategory)

  const completedCount = projects.filter((p) => p.status === 'Completed').length
  const ongoingCount = projects.filter((p) => p.status === 'Ongoing').length

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden bg-dark-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 to-dark-900/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pb-14 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-subheading">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              All <span className="text-gold italic">Projects</span>
            </h1>
            <div className="gold-line mb-6" />
            <div className="flex items-center gap-6 text-white/60 text-sm font-accent">
              <span>{completedCount} Completed</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {ongoingCount} Live Right Now
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-14">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-accent text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gold text-white shadow-lg shadow-gold/30'
                      : 'bg-gray-100 text-gray-600 hover:bg-gold/10 hover:text-gold'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <Link href={`/projects/${project.id}`} className="group block h-full">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-white border border-gray-100">
                      <div className="relative h-64 overflow-hidden flex-shrink-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/10 to-transparent" />

                        <div className="absolute top-4 left-4">
                          <span
                            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-accent font-semibold uppercase tracking-wider ${
                              project.status === 'Completed'
                                ? 'bg-gold/90 text-white'
                                : 'bg-green-500/90 text-white'
                            }`}
                          >
                            {project.status === 'Ongoing' && (
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            )}
                            {project.status}
                          </span>
                        </div>

                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                          <FiArrowUpRight className="text-white" size={18} />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-heading text-xl font-bold text-white mb-1">
                            {project.title}
                          </h3>
                          <p className="text-white/70 text-sm flex items-center gap-2">
                            <FiMapPin size={14} className="text-gold flex-shrink-0" />
                            {project.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
                        <span className="flex items-center gap-1.5 text-gray-500 text-xs font-accent uppercase tracking-wide">
                          <FiLayers size={13} className="text-gold" />
                          {project.floors}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span className="text-gray-500 text-xs font-accent uppercase tracking-wide">
                          {project.plotSize}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span className="flex items-center gap-1.5 text-gray-500 text-xs font-accent uppercase tracking-wide">
                          <FiCompass size={13} className="text-gold" />
                          {project.facing}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

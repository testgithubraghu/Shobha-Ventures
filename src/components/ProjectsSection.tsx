// src/components/ProjectsSection.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { projects, projectCategories } from '@/data/projects'
import { FiArrowRight, FiArrowUpRight, FiMapPin, FiLayers, FiCompass } from 'react-icons/fi'

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter((p) => p.status === activeCategory)

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <ScrollReveal>
            <span className="section-subheading">Our Portfolio</span>
            <h2 className="section-heading mb-4">
              Completed &amp; <span className="text-gold italic">Ongoing</span> Projects
            </h2>
            <div className="gold-line mb-6" />
            <p className="text-gray-600 max-w-xl text-lg">
              Every home we build across Bangalore, from finished handovers to active
              construction sites.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-3">
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
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link href={`/projects/${project.id}`} className="group block h-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-white border border-gray-100">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-gray-200">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/10 to-transparent" />

                      {/* Status Badge */}
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

                      {/* Hover Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <FiArrowUpRight className="text-white" size={18} />
                      </div>

                      {/* Bottom Content */}
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

                    {/* Info Strip */}
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

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-16">
            <Link href="/projects" className="btn-primary inline-flex items-center gap-2 group">
              View All Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

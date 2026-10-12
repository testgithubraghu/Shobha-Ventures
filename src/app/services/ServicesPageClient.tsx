// src/app/services/page.tsx
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import CTASection from '@/components/CTASection'
import { services } from '@/data/services'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { FaDraftingCompass, FaHardHat, FaTools, FaLeaf, FaShieldAlt, FaClipboardList } from 'react-icons/fa'

const additionalServices = [
  { icon: FaDraftingCompass, title: 'Architectural Design', description: 'Custom architectural designs that balance form and function.' },
  { icon: FaHardHat, title: 'Structural Engineering', description: 'Expert structural analysis and engineering solutions.' },
  { icon: FaTools, title: 'Plumbing & Electrical', description: 'Complete MEP services for residential and commercial projects.' },
  { icon: FaLeaf, title: 'Landscaping', description: 'Beautiful landscape design and garden development.' },
  { icon: FaShieldAlt, title: 'Waterproofing', description: 'Advanced waterproofing solutions for lasting protection.' },
  { icon: FaClipboardList, title: 'Project Management', description: 'End-to-end project management and supervision.' },
]

export default function ServicesPageClient() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/85 to-dark-900/50" />

        <div className="absolute top-10 right-10 w-20 h-20 border-t border-r border-gold/30 hidden lg:block" />
        <div className="absolute bottom-10 left-10 w-20 h-20 border-b border-l border-gold/20 hidden lg:block" />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-gold to-transparent origin-left"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <div className="flex items-center gap-2 text-white/40 text-xs font-accent uppercase tracking-widest mb-5">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gold/70">Services</span>
            </div> */}

            <span className="section-subheading">What We Offer</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 leading-[1.1]">
              Our <span className="text-gradient italic">Services</span>
            </h1>
            <div className="gold-line mb-5" />
            <p className="text-white/70 text-lg max-w-xl leading-relaxed">
              Comprehensive construction and design services tailored to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <span className="section-subheading">Core Capabilities</span>
              <h2 className="section-heading mb-4">What We <span className="text-gold">Do Best</span></h2>
              <div className="gold-line mx-auto" />
            </ScrollReveal>
          </div>

          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={0.1}>
              <div
                className={`relative grid lg:grid-cols-2 gap-14 lg:gap-16 items-center py-12 lg:py-16 ${
                  index !== 0 ? 'border-t border-gray-100' : ''
                }`}
              >
                <span
                  className={`hidden xl:block absolute -top-2 font-heading text-[10rem] leading-none font-bold text-dark-900/[0.03] select-none pointer-events-none ${
                    index % 2 !== 0 ? 'right-0' : 'left-0'
                  }`}
                >
                  0{index + 1}
                </span>

                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl group"
                  >
                    <div className="aspect-[16/11] bg-gray-200">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent" />
                    <div className="absolute bottom-5 right-5 glass-effect rounded-full px-4 py-1.5 text-white text-xs font-accent tracking-widest">
                      0{index + 1} / 0{services.length}
                    </div>
                  </motion.div>
                </div>

                <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <span className="text-gold font-accent text-sm uppercase tracking-[0.25em] font-semibold">
                    Service 0{index + 1}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark-900 mt-3 mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <div className="gold-line mb-5" />
                  <p className="text-gray-600 leading-relaxed mb-7 text-[15px]">
                    {service.fullDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                    {service.features.slice(0, 6).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="btn-primary inline-flex items-center gap-2 group"
                  >
                    Learn More
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Additional Services — same cream palette, elevated card design */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <ScrollReveal>
              <span className="section-subheading">More Services</span>
              <h2 className="section-heading mb-4">Additional <span className="text-gold">Expertise</span></h2>
              <div className="gold-line mx-auto" />
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold/30 shadow-sm hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 group overflow-hidden"
                >
                  {/* Top accent line — draws in on hover */}
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[3px] bg-gradient-to-r from-gold to-primary-300 transition-all duration-500" />

                  {/* Faint index numeral watermark */}
                  <span className="absolute -top-3 -right-1 font-heading text-7xl font-bold text-dark-900/[0.04] select-none pointer-events-none">
                    0{index + 1}
                  </span>

                  <div className="relative flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:-rotate-6 group-hover:scale-105 transition-all duration-500 ease-out">
                      <service.icon className="text-gold group-hover:text-white transition-colors duration-500" size={26} />
                    </div>
                    <FiArrowUpRight
                      className="text-gray-300 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 mt-2"
                      size={20}
                    />
                  </div>

                  <h3 className="relative font-heading text-lg font-bold text-dark-900 mb-2 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="relative text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
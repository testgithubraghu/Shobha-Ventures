// src/components/CTASection.tsx
'use client'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80)' }} />
      <div className="absolute inset-0 bg-dark-900/85" />

      {/* Gold Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-gold rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-gold rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <ScrollReveal>
          <span className="section-subheading">Get Started Today</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Let&apos;s Build Something <span className="text-gold">Amazing</span> Together
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Whether it&apos;s a dream home, commercial space, or renovation project,
            we&apos;re here to make your vision a reality. Contact us for a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/919945949949?text=Hello%20Shobha%20Ventures,%20I%20would%20like%20a%20free%20consultation%20for%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-green-500 text-white px-10 py-4 rounded-lg font-accent font-semibold text-sm uppercase tracking-wider hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/30"
            >
              <FaWhatsapp size={20} />
              Free Consultation
            </motion.a>
            <motion.a
              href="tel:+919945949949"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gold text-white px-10 py-4 rounded-lg font-accent font-semibold text-sm uppercase tracking-wider hover:bg-primary-600 transition-all duration-300 shadow-lg shadow-gold/30"
            >
              <FiPhone size={18} />
              Call: +91 994 594 9949
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
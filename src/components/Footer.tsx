// src/components/Footer.tsx
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiArrowUp, FiAward, FiStar, FiClock, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { name: 'Residential Construction', href: '/services/residential-construction' },
  { name: 'Commercial Construction', href: '/services/commercial-construction' },
  { name: 'Interior Design', href: '/services/interior-design' },
  { name: 'Renovation & Remodeling', href: '/services/renovation-remodeling' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-900 relative overflow-hidden">
      {/* Gold Top Line */}
      <div className="h-1 bg-gradient-to-r from-gold via-primary-300 to-gold" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[200px]" />
      </div>

      {/* Giant watermark wordmark */}
      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-heading text-[6rem] sm:text-[9rem] lg:text-[10rem] font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap tracking-tight">
        SHOBHA VENTURES
      </span>

      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                Ready to Build Your <span className="text-gold">Dream Project?</span>
              </h3>
              <p className="text-white/60 text-lg">
                Get in touch with us today for a free consultation and estimate.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919945949949?text=Hello%20Shobha%20Ventures,%20I%20want%20to%20discuss%20a%20new%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-accent font-semibold text-sm uppercase tracking-wider hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
              >
                <FaWhatsapp size={20} />
                WhatsApp Us
              </a>
              <a
                href="tel:+919945949949"
                className="flex items-center gap-2 btn-outline border-white/30 text-white hover:bg-white hover:text-dark-900 hover:border-white"
              >
                <FiPhone size={16} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Strip */}
      <div className="border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FiAward, label: 'Licensed & Insured' },
              { icon: FiStar, label: '5.0 Google Rating' },
              { icon: FiClock, label: '10+ Years Experience' },
              { icon: FiCheckCircle, label: 'On-Time Delivery' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <badge.icon className="text-gold" size={16} />
                </div>
                <span className="text-white/60 text-xs sm:text-sm font-accent">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                  <img
    src="/images/logo.png"
    alt="Shobha Ventures"
    className="h-12 md:h-14 w-auto object-contain"
  />
              </motion.div>
             
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premier Design & Construction company in Bangalore. Building dreams with excellence, quality, and passion since inception.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: FaFacebookF, href: 'https://www.facebook.com/people/Shobha-Ventures/pfbid0riqw8vbePj6uXJjaeCyXBFNtRuUiRLpPamsvFdVf7uhUkYmvkxrAWJf6BeNCNhVel/?rdid=vf6c807qxpiUNHJk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Uqw3sXAWk%2F' },
                { icon: FaInstagram, href: 'https://www.instagram.com/shobhaventures?igsh=MWR4emhtMXl6b2p6Mg%3D%3D' },
                // { icon: FaLinkedinIn, href: '#' },
                // { icon: FaYoutube, href: '#' },
                { icon: FaWhatsapp, href: 'https://wa.me/919945949949' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3, rotate: -6 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-gold border border-white/10 hover:border-gold transition-colors duration-300"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {/* Quick Links */}
          <div className="md:pl-6 lg:pl-10">
            <h4 className="text-white font-heading text-lg font-semibold mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold mt-2" />
            </h4>
            <ul className="space-y-3 mt-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gold/40 rounded-full group-hover:bg-gold transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading text-lg font-semibold mb-6 relative">
              Our Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold mt-2" />
            </h4>
            <ul className="space-y-3 mt-4">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gold/40 rounded-full group-hover:bg-gold transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading text-lg font-semibold mb-6 relative">
              Contact Info
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold mt-2" />
            </h4>
            <div className="space-y-4 mt-4">
              <a
                href="tel:+919945949949"
                className="flex items-start gap-3 text-white/60 hover:text-gold transition-colors duration-300 group"
              >
                <FiPhone className="text-gold mt-1 flex-shrink-0" size={16} />
                <div className="text-sm">
                  <p>+91 994 594 9949</p>
                  <p>+91 973 125 9082</p>
                </div>
              </a>
              <a
                href="mailto:shobhaventures1@gmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors duration-300"
              >
                <FiMail className="text-gold flex-shrink-0" size={16} />
                <span className="text-sm">shobhaventures1@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <FiMapPin className="text-gold mt-1 flex-shrink-0" size={16} />
                <p className="text-sm">
                  No.1721, Muddinapalya Main Rd,<br />
                  Sir M Vishweshwaraiah Layout,<br />
                  8th Block, Bangalore - 560091
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Shobha Ventures. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
          >
            <FiArrowUp size={18} />
          </motion.button>
          
        </div>
      </div>
    </footer>
  )
}
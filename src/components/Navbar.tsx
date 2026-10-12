// src/components/Navbar.tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top Bar */}
      

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark-900/95 backdrop-blur-lg shadow-2xl shadow-black/20 py-3'
            : 'bg-transparent py-5'
        }`}
        style={{ top: isScrolled ? 0 : undefined }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
            <motion.div
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  className="relative"
>
  <img
    src="/images/logo.png"
    alt="Shobha Ventures"
    className="h-12 md:h-14 w-auto object-contain"
  />
</motion.div>

            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full p-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-5 py-2 font-accent text-sm font-medium rounded-full group"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-pill"
                        className="absolute inset-0 bg-gold rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    )}
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive ? 'text-dark-900 font-semibold' : 'text-white/80 group-hover:text-gold'
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://wa.me/919945949949?text=Hello%20Shobha%20Ventures,%20I%20am%20interested%20in%20your%20construction%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 btn-primary text-xs"
              >
                <FaWhatsapp size={16} />
                Get Quote
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 border border-white/15 flex items-center justify-center text-white hover:text-gold hover:border-gold/50 hover:bg-gold/10 transition-colors"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isMobileMenuOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-dark-900 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9953C' fill-opacity='0.6'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                }}
              />

              <div className="relative flex-1 overflow-y-auto p-6 sm:p-8 pt-6">
                {/* Drawer Header */}
                <div className="flex items-center justify-between mb-10">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                      <img
    src="/images/logo.png"
    alt="Shobha Ventures"
    className="h-12 md:h-14 w-auto object-contain"
  />
                  </Link>

                  <motion.button
                    whileHover={{ scale: 1.08, rotate: 90 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/50 hover:bg-gold/10 transition-colors flex-shrink-0"
                    aria-label="Close menu"
                  >
                    <FiX size={18} />
                  </motion.button>
                </div>

                {/* Mobile Links */}
                <nav className="space-y-1.5">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.06, duration: 0.4 }}
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center gap-4 px-4 py-3.5 font-accent text-sm font-semibold rounded-xl transition-all duration-300 group ${
                            isActive
                              ? 'text-white bg-gold shadow-lg shadow-gold/20'
                              : 'text-white/70 hover:text-gold hover:bg-white/5'
                          }`}
                        >
                          <span
                            className={`font-heading text-xs font-bold w-6 flex-shrink-0 ${
                              isActive ? 'text-white/70' : 'text-white/25 group-hover:text-gold/60'
                            }`}
                          >
                            0{index + 1}
                          </span>
                          <span className="flex-1">{link.name}</span>
                          <FiArrowRight
                            size={15}
                            className={`flex-shrink-0 transition-all duration-300 ${
                              isActive
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                            }`}
                          />
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Mobile Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.4 }}
                  className="mt-10 pt-8 border-t border-white/10 space-y-3"
                >
                  <a href="tel:+919945949949" className="flex items-center gap-3 group">
                    <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                      <FiPhone size={14} className="text-gold group-hover:text-white transition-colors duration-300" />
                    </span>
                    <span className="text-white/60 group-hover:text-white transition-colors text-sm">+91 994 594 9949</span>
                  </a>
                  <a href="mailto:shobhaventures1@gmail.com" className="flex items-center gap-3 group">
                    <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                      <FiMail size={14} className="text-gold group-hover:text-white transition-colors duration-300" />
                    </span>
                    <span className="text-white/60 group-hover:text-white transition-colors text-sm break-all">shobhaventures1@gmail.com</span>
                  </a>
                </motion.div>

                {/* WhatsApp CTA */}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.4 }}
                  href="https://wa.me/919945949949?text=Hello%20Shobha%20Ventures,%20I%20am%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full mt-8 bg-green-500 text-white py-3.5 rounded-xl font-accent font-semibold text-sm hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp size={18} />
                  Chat on WhatsApp
                </motion.a>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75, duration: 0.4 }}
                  className="flex items-center gap-3 mt-8"
                >
                  <motion.a
                    whileHover={{ scale: 1.1, y: -3, rotate: -6 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.facebook.com/people/Shobha-Ventures/pfbid0riqw8vbePj6uXJjaeCyXBFNtRuUiRLpPamsvFdVf7uhUkYmvkxrAWJf6BeNCNhVel/?rdid=vf6c807qxpiUNHJk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Uqw3sXAWk%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-gold border border-white/10 hover:border-gold transition-colors duration-300"
                  >
                    <FaFacebookF size={15} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -3, rotate: -6 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.instagram.com/shobhaventures?igsh=MWR4emhtMXl6b2p6Mg%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-gold border border-white/10 hover:border-gold transition-colors duration-300"
                  >
                    <FaInstagram size={15} />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
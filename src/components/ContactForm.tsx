// src/components/ContactForm.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiSend, FiCheck } from 'react-icons/fi'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build WhatsApp message
    const message = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`
    const url = `https://wa.me/919945949949?text=${message}`
    window.open(url, '_blank')
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleWhatsAppDirect = () => {
    const message = `Hello Shobha Ventures, my name is ${formData.name || 'a potential client'}. I am interested in ${formData.service || 'your construction services'}. ${formData.message || 'Please provide more details.'}`
    const url = `https://wa.me/919945949949?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="group">
          <label className="block text-sm font-accent font-semibold text-dark-900 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gold focus:ring-0 outline-none transition-colors duration-300 font-body text-sm bg-white"
          />
        </div>

        {/* Phone */}
        <div className="group">
          <label className="block text-sm font-accent font-semibold text-dark-900 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gold focus:ring-0 outline-none transition-colors duration-300 font-body text-sm bg-white"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-accent font-semibold text-dark-900 mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gold focus:ring-0 outline-none transition-colors duration-300 font-body text-sm bg-white"
        />
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-accent font-semibold text-dark-900 mb-2">
          Service Required *
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gold focus:ring-0 outline-none transition-colors duration-300 font-body text-sm bg-white"
        >
          <option value="">Select a service</option>
          <option value="Residential Construction">Residential Construction</option>
          <option value="Commercial Construction">Commercial Construction</option>
          <option value="Interior Design">Interior Design</option>
          <option value="Renovation & Remodeling">Renovation & Remodeling</option>
          <option value="Architectural Design">Architectural Design</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-accent font-semibold text-dark-900 mb-2">
          Project Details
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your project requirements, budget, timeline..."
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gold focus:ring-0 outline-none transition-colors duration-300 font-body text-sm bg-white resize-none"
        />
      </div>

      {/* Submit Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-accent font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
            isSubmitted
              ? 'bg-green-500 text-white'
              : 'bg-gold text-white hover:bg-primary-600 hover:shadow-lg hover:shadow-gold/30'
          }`}
        >
          {isSubmitted ? (
            <>
              <FiCheck size={18} />
              Sent Successfully!
            </>
          ) : (
            <>
              <FiSend size={16} />
              Send via WhatsApp
            </>
          )}
        </motion.button>

        <motion.button
          type="button"
          onClick={handleWhatsAppDirect}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg font-accent font-semibold text-sm uppercase tracking-wider hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
        >
          <FaWhatsapp size={18} />
          Chat Directly
        </motion.button>
      </div>
    </motion.form>
  )
}
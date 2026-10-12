// src/components/WhatsAppButton.tsx
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiX, FiSend } from 'react-icons/fi'
import { trackLead } from '@/lib/trackLead'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const phoneNumber = '919945949949'
  const defaultMessage = 'Hello Shobha Ventures, I am interested in your construction services. Please provide more details.'

const handleSend = () => {
  const text = message || defaultMessage
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
  trackLead('whatsapp', 'floating_button')
  window.open(url, '_blank')
  setMessage('')
  setIsOpen(false)
}

  const quickMessages = [
    'I want to build a new house',
    'I need interior design services',
    'I want a renovation quote',
    'I need commercial construction',
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-dark-900 p-4 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors"
              >
                <FiX size={18} />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-gold font-heading font-bold text-lg">SV</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Shobha Ventures</h3>
                  <p className="text-green-400 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Online now
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-gray-50">
              {/* Welcome Message */}
              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm mb-3 max-w-[85%]">
                <p className="text-sm text-gray-700">
                  👋 Hello! Welcome to Shobha Ventures. How can we help you with your construction needs?
                </p>
                <span className="text-[10px] text-gray-400 mt-1 block">Just now</span>
              </div>

              {/* Quick Messages */}
              <div className="space-y-2 mb-3">
                <p className="text-xs text-gray-500 font-medium">Quick messages:</p>
                {quickMessages.map((msg, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      setMessage(msg)
                    }}
                    className="block w-full text-left text-xs bg-white border border-gold/30 text-dark-900 px-3 py-2 rounded-lg hover:bg-gold/5 hover:border-gold transition-all duration-200"
                  >
                    {msg}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:border-gold transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSend}
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                >
                  <FiSend size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <FiX size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <FaWhatsapp size={28} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        )}
      </motion.button>

      {/* Tooltip */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          
        </motion.div>
      )}
    </div>
  )
}
// src/components/StatsCounter.tsx
'use client'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { FiLayers, FiCalendar, FiSmile, FiUsers } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'

const stats = [
  { number: 20, suffix: '+', label: 'Projects Completed', icon: FiLayers },
  { number: 10, suffix: '+', label: 'Years Experience', icon: FiCalendar },
  { number: 20, suffix: '+', label: 'Happy Clients', icon: FiSmile },
  { number: 50, suffix: '+', label: 'Expert Workers', icon: FiUsers },
]

export default function StatsCounter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section ref={ref} className="relative py-24 bg-dark-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9953C' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gold/[0.04] rounded-full blur-[160px]" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="font-accent text-gold/80 uppercase tracking-[0.3em] text-xs font-semibold">
              Trusted Across Bangalore
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative text-center group px-6 py-8 lg:py-0 ${
                index % 2 === 0 ? 'border-r border-white/10' : ''
              } ${index < 2 ? 'border-b border-white/10 lg:border-b-0' : ''} ${
                index !== 0 ? 'lg:border-l' : ''
              } lg:border-white/10`}
            >
              {/* Icon Badge */}
              <div className="relative w-16 h-16 mx-auto mb-5">
                <div className="absolute inset-0 rounded-full border border-gold/30 group-hover:border-gold group-hover:scale-110 transition-all duration-500" />
                <div className="absolute inset-2 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                  <stat.icon className="text-gold group-hover:text-white transition-colors duration-500" size={22} />
                </div>
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2">
                {inView ? (
                  <CountUp end={stat.number} duration={2.5} delay={index * 0.2} />
                ) : (
                  0
                )}
                <span className="text-gold">{stat.suffix}</span>
              </div>

              {/* Label */}
              <p className="text-white/50 font-accent text-xs md:text-sm uppercase tracking-wider">
                {stat.label}
              </p>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                className="w-8 h-0.5 bg-gold/40 mx-auto mt-4 origin-center group-hover:w-12 group-hover:bg-gold transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

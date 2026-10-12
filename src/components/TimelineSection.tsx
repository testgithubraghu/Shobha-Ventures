'use client'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const timeline = [
  { year: '2016', title: 'Company Founded', description: 'Shobha Ventures was established with a vision to deliver quality construction in Bangalore.' },
  { year: '2018', title: 'Commercial Construction Added', description: 'Expanded from residential projects into commercial construction across the city.' },
  { year: '2020', title: 'Interior Design Division', description: 'Expanded services to include comprehensive interior design solutions.' },
  { year: '2022', title: 'Sustainable Building Practices', description: 'Began integrating eco-friendly methods, including nature-friendly mud brick construction.' },
  { year: '2024', title: '5.0 Google Rating', description: 'Earned a perfect client satisfaction rating while running multiple active sites across Bangalore.' },
  { year: 'Today', title: 'Building Across Bangalore', description: 'Currently delivering completed homes and live construction sites throughout the city.' },
]

// Newest first at the roof, oldest at the foundation — reading down the
// page traces the building down to the ground it was founded on.
const floors = [...timeline].reverse()
const ROW_H = 130
const TOTAL_H = floors.length * ROW_H

function BuildingRise() {
  const stroke = '#C6A15B'
  const draw = (delay: number, duration = 0.9) => ({
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration, delay, ease: 'easeInOut' as const },
  })

  return (
    <svg viewBox={`0 0 140 ${TOTAL_H + 50}`} className="w-full h-full" fill="none">
      {/* Roof parapet */}
      <motion.rect x="20" y="8" width="100" height="12" stroke={stroke} strokeWidth="1.5" {...draw(0.1, 0.5)} />
      {[35, 55, 75, 95, 105].map((x, i) => (
        <motion.line key={x} x1={x} y1="8" x2={x} y2="-2" stroke={stroke} strokeWidth="1" {...draw(0.8 + i * 0.03, 0.25)} />
      ))}

      {/* Full building outline */}
      <motion.rect x="20" y="20" width="100" height={TOTAL_H} stroke={stroke} strokeWidth="2" {...draw(0.15, 1.4)} />

      {/* Floor dividers, doors, and windows — one band per timeline entry */}
      {floors.map((_, i) => {
        const bandTop = 20 + i * ROW_H
        const isGround = i === floors.length - 1
        return (
          <g key={i}>
            {i > 0 && (
              <motion.line
                x1="20"
                y1={bandTop}
                x2="120"
                y2={bandTop}
                stroke={stroke}
                strokeWidth="1"
                opacity="0.55"
                {...draw(1.4 + i * 0.12, 0.4)}
              />
            )}
            {isGround ? (
              <motion.rect
                x="50"
                y={bandTop + ROW_H - 62}
                width="40"
                height="62"
                stroke={stroke}
                strokeWidth="1.5"
                {...draw(1.8 + i * 0.12, 0.4)}
              />
            ) : (
              <motion.rect
                x="50"
                y={bandTop + ROW_H / 2 - 25}
                width="40"
                height="50"
                stroke={stroke}
                strokeWidth="1.25"
                {...draw(1.8 + i * 0.12, 0.4)}
              />
            )}
          </g>
        )
      })}

      {/* Ground line + dimension marking the full 10-year span */}
      <motion.line x1="0" y1={20 + TOTAL_H} x2="140" y2={20 + TOTAL_H} stroke={stroke} strokeWidth="1.5" {...draw(2.6, 0.5)} />
      <motion.g {...draw(2.8, 0.5)}>
        <line x1="20" y1={38 + TOTAL_H} x2="120" y2={38 + TOTAL_H} stroke={stroke} strokeWidth="1" />
        <line x1="20" y1={33 + TOTAL_H} x2="20" y2={43 + TOTAL_H} stroke={stroke} strokeWidth="1" />
        <line x1="120" y1={33 + TOTAL_H} x2="120" y2={43 + TOTAL_H} stroke={stroke} strokeWidth="1" />
      </motion.g>
      <motion.text
        x="70"
        y={56 + TOTAL_H}
        fill={stroke}
        fontSize="10"
        letterSpacing="1.5"
        textAnchor="middle"
        fontWeight="600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.9 }}
        viewport={{ once: true }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        10 YEARS
      </motion.text>
    </svg>
  )
}

export default function TimelineSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="section-subheading">Our Journey</span>
            <h2 className="section-heading mb-4">
              Ten Years, <span className="text-gold italic">One Foundation</span>
            </h2>
            <div className="gold-line mx-auto" />
          </ScrollReveal>
        </div>

        <div className="flex gap-6 sm:gap-10">
          {/* The building rises floor by floor as you read down */}
          <div className="w-28 sm:w-36 flex-shrink-0" style={{ height: TOTAL_H + 50 }}>
            <BuildingRise />
          </div>

          {/* Years, aligned floor-for-floor with the drawing */}
          <div className="flex-1 divide-y divide-gray-100">
            {floors.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.08} direction="right">
                <div className="flex items-center" style={{ minHeight: ROW_H }}>
                  <div>
                    <span className="font-heading text-gold text-2xl font-bold">{item.year}</span>
                    <h3 className="font-heading text-lg font-bold text-dark-900 mt-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1.5 leading-relaxed max-w-md">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
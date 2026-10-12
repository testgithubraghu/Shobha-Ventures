// src/components/TestimonialsSection.tsx
'use client'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import ScrollReveal from './ScrollReveal'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Villa Owner, Whitefield',
    text: 'They delivered a beautiful, structurally flawless space on budget. The attention to detail was remarkable and the team was very professional throughout the project.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Apartment Owner, Electronic City',
    text: 'Great quality work, professional staff, and timely project completion. I highly recommend Shobha Ventures for any construction project.',
    rating: 5,
  },
  {
    name: 'Suresh Babu',
    role: 'Farmhouse Owner, Devanahalli',
    text: 'Very good experience working with this company. Manoj sir personally oversaw every aspect of construction. The quality exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Meena Sharma',
    role: 'Duplex Owner, JP Nagar',
    text: 'Outstanding work! From design to execution, everything was handled professionally. The use of quality materials is evident in the final output.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-dark-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold rounded-full blur-[120px]" />
      </div>

      {/* Gold Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Giant watermark quote mark */}
      <span className="absolute top-10 left-1/2 -translate-x-1/2 font-heading text-[16rem] leading-none text-white/[0.02] select-none pointer-events-none hidden lg:block">
        &ldquo;
      </span>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="section-subheading">Testimonials</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              What Our <span className="text-gold italic">Clients</span> Say
            </h2>
            <div className="gold-line mx-auto mb-6" />

            {/* Google Rating */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={20} />
                ))}
              </div>
              <span className="text-white font-bold text-lg">5.0</span>
              <span className="text-white/60 text-sm">on Google (6 reviews)</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Testimonials Carousel */}
        <ScrollReveal delay={0.15}>
          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={28}
              centeredSlides={false}
              loop={true}
              autoplay={{ delay: 5500, disableOnInteraction: false }}
              pagination={{ clickable: true, el: '.testimonial-pagination' }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              className="!pb-4 !overflow-visible"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full flex flex-col bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-gold/30 hover:bg-white/[0.06] transition-all duration-500 group"
                  >
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[3px] rounded-t-2xl bg-gradient-to-r from-gold to-primary-300 transition-all duration-500" />

                    {/* Quote Icon */}
                    <FaQuoteLeft className="text-gold/30 text-3xl mb-4 group-hover:text-gold/60 transition-colors" />

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-gold" size={13} />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-white/80 leading-relaxed mb-8 flex-grow">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                      <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-500">
                        <span className="text-gold group-hover:text-white font-heading font-bold text-lg transition-colors duration-500">
                          {testimonial.name[0]}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                        <p className="text-white/40 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="testimonial-pagination flex items-center justify-center gap-2 mt-10" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

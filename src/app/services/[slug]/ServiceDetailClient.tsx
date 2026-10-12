'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import CTASection from '@/components/CTASection'
import { services } from '@/data/services'
import { FiArrowLeft, FiArrowRight, FiCheck, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function ServiceDetailClient({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-dark-900 mb-4">Service Not Found</h1>
          <Link href="/services" className="btn-primary">Back to Services</Link>
        </div>
      </div>
    )
  }

  const otherServices = services.filter((s) => s.id !== service.id)

  return (
    <>
      <section className="relative h-[50vh] min-h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/services" className="inline-flex items-center gap-2 text-gold mb-6 hover:gap-3 transition-all font-accent text-sm">
              <FiArrowLeft />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              {service.title}
            </h1>
            <div className="gold-line" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="rounded-2xl overflow-hidden shadow-xl mb-10">
                  <img src={service.image} alt={service.title} className="w-full h-96 object-cover" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h2 className="text-3xl font-heading font-bold text-dark-900 mb-4">About This Service</h2>
                <div className="gold-line mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.fullDescription}</p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <h3 className="text-2xl font-heading font-bold text-dark-900 mb-6">What We Offer</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 bg-cream rounded-lg p-4"
                    >
                      <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <FiCheck className="text-gold" size={16} />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <h3 className="text-2xl font-heading font-bold text-dark-900 mb-8">Our Process</h3>
                <div className="space-y-6">
                  {service.process.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6 items-start group"
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-dark-900 rounded-xl flex items-center justify-center text-gold font-heading font-bold text-xl group-hover:bg-gold group-hover:text-white transition-all duration-300">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-heading text-lg font-bold text-dark-900 group-hover:text-gold transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <ScrollReveal direction="right">
                  <div className="bg-dark-900 rounded-2xl p-8 text-center">
                    <h3 className="text-white font-heading text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/60 text-sm mb-6">Get a free consultation and estimate for your project</p>
                    
                    <a  href={`https://wa.me/919945949949?text=Hello%20Shobha%20Ventures,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}%20services.%20Please%20provide%20more%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-3 rounded-lg font-accent font-semibold text-sm hover:bg-green-600 transition-colors"
                    >
                      <FaWhatsapp size={18} />
                      Get Free Quote
                    </a>
                    <a href="tel:+919945949949" className="block mt-3 text-gold text-sm hover:underline">
                      <FiPhone className="inline -mt-1 mr-1" size={16} /> +91 994 594 9949
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.2}>
                  <div className="bg-cream rounded-2xl p-6">
                    <h3 className="font-heading text-lg font-bold text-dark-900 mb-4">Other Services</h3>
                    <div className="space-y-3">
                      {otherServices.map((s) => (
                        <Link
                          key={s.id}
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
                        >
                          <span className="text-sm font-medium text-gray-700 group-hover:text-gold transition-colors">
                            {s.title}
                          </span>
                          <FiArrowRight className="ml-auto text-gray-400 group-hover:text-gold transition-colors" size={14} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
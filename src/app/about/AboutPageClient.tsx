// src/app/about/page.tsx
"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import StatsCounter from "@/components/StatsCounter";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import {
  FiAward,
  FiTarget,
  FiUsers,
  FiHeart,
  FiStar,
  FiPhone,
  FiMail,
  FiDollarSign,
  FiClock,
  FiHeadphones,
} from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import { trackLead } from "@/lib/trackLead";

const keyPoints = [
  {
    icon: FiAward,
    title: "Quality Materials",
    description: "Only premium-grade materials in every build.",
  },
  {
    icon: FiUsers,
    title: "Expert Team",
    description: "Skilled engineers and experienced craftsmen.",
  },
  {
    icon: FiDollarSign,
    title: "Transparent Pricing",
    description: "Clear estimates, no hidden costs.",
  },
  {
    icon: FiClock,
    title: "Timely Delivery",
    description: "Projects completed on schedule, always.",
  },
  {
    icon: FiHeadphones,
    title: "Post-Construction Support",
    description: "We stay involved well after handover.",
  },
  {
    icon: FaLeaf,
    title: "Eco-Friendly Practices",
    description: "Sustainable methods, including mud brick builds.",
  },
];

const values = [
  {
    icon: FiAward,
    title: "Quality Excellence",
    description:
      "We never compromise on quality. Every material, every finish, and every detail meets our exacting standards.",
  },
  {
    icon: FiTarget,
    title: "On-Time Delivery",
    description:
      "We understand the importance of timelines and commit to delivering projects on schedule, every time.",
  },
  {
    icon: FiUsers,
    title: "Client Focus",
    description:
      "Our clients are at the heart of everything we do. We listen, adapt, and deliver beyond expectations.",
  },
  {
    icon: FiHeart,
    title: "Passion & Integrity",
    description:
      "Built on a foundation of passion and integrity, we maintain transparency in all our dealings.",
  },
];

const timeline = [
  {
    year: "2016",
    title: "Company Founded",
    description:
      "Shobha Ventures was established with a vision to deliver quality construction in Bangalore.",
  },
  {
    year: "2018",
    title: "Commercial Construction Added",
    description:
      "Expanded from residential projects into commercial construction across the city.",
  },
  {
    year: "2020",
    title: "Interior Design Division",
    description:
      "Expanded services to include comprehensive interior design solutions.",
  },
  {
    year: "2022",
    title: "Sustainable Building Practices",
    description:
      "Began integrating eco-friendly methods, including nature-friendly mud brick construction.",
  },
  {
    year: "2024",
    title: "5.0 Google Rating",
    description:
      "Earned a perfect client satisfaction rating while running multiple active sites across Bangalore.",
  },
  {
    year: "Today",
    title: "Building Across Bangalore",
    description:
      "Currently delivering completed homes and live construction sites throughout the city.",
  },
];

export default function AboutPageClient() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />

        {/* Gold accents */}
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
            <span className="section-subheading">Know Us Better</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4">
              About <span className="text-gold italic">Us</span>
            </h1>
            <div className="gold-line mb-4" />
            <p className="text-white/70 text-lg max-w-xl">
              Building Bangalore&apos;s future with quality construction,
              innovative design, and unwavering commitment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      {/* About Content */}
<section className="py-20 lg:py-32 bg-white">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

      {/* Image — single real photo, no stock collage */}
      <ScrollReveal direction="left">
        <div className="relative lg:sticky lg:top-24">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/10 bg-dark-900">
            <div className="aspect-[4/5]">
              <img
                src="/images/about-site.jpg"
                alt="A Shobha Ventures project site in Bangalore"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
            <span className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold" />
            <span className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold" />
          </div>
        </div>
      </ScrollReveal>

      {/* Editorial content column */}
      <div>
        <ScrollReveal>
          <span className="section-subheading">Our Story</span>
          <h2 className="section-heading mb-8">
            Crafting <span className="text-gold italic">Excellence</span> Since 2016
          </h2>
        </ScrollReveal>

        {/* Drop-cap paragraph */}
        <ScrollReveal delay={0.15}>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            <span className="float-left font-heading text-dark-900 text-7xl leading-[0.75] font-bold pr-3 pt-1">
              F
            </span>
            ounded by <strong className="text-dark-900">Manoj.N</strong>, a
            passionate Civil Engineer, Shobha Ventures has grown from a small
            construction firm into one of Bangalore&apos;s most trusted design
            and construction companies. Based at No.1721, Muddinapalya Main
            Rd, Sir M Vishweshwaraiah Layout, 8th Block, we serve homeowners
            and businesses across{" "}
            <strong className="text-dark-900">
              Annapurneshwari Nagar, Nagarbhavi, and Vijayanagar
            </strong>
            , with projects reaching clients across Bangalore and beyond.
          </p>
        </ScrollReveal>

        {/* Credential ledger */}
        <ScrollReveal delay={0.25}>
          <div className="flex flex-wrap divide-x divide-gray-200 border-y border-gray-200 mb-10">
            {[
              { value: '2016', label: 'Established' },
              { value: '5.0', label: 'Google Rating', star: true },
              { value: '10+', label: 'Years Exp.' },
            ].map((stat, i) => (
              <div key={i} className="flex-1 min-w-[100px] px-5 py-5 first:pl-0 last:pr-0">
                <p className="font-heading font-bold text-dark-900 text-3xl flex items-center gap-1.5">
                  {stat.value}
                  {stat.star && <FiStar size={14} className="fill-gold text-gold" />}
                </p>
                <p className="text-gray-500 text-[10px] font-accent uppercase tracking-widest mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Quote */}
        <ScrollReveal delay={0.35}>
          <div className="py-2">
            <div className="w-10 h-px bg-gold mb-6" />
            <p className="font-heading text-dark-900 text-2xl italic leading-snug mb-3">
              We believe in building relationships, not just buildings.
            </p>
            <p className="text-gray-500 text-sm">
              Every project gets the same dedication and attention to detail,
              regardless of size.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>

    {/* Key Points — full-width spec list beneath the grid */}
    <ScrollReveal delay={0.5}>
      <div className="mt-20 grid sm:grid-cols-2 gap-x-12 border-t border-gray-200">
        {keyPoints.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 4 }}
            className="group flex items-start gap-4 py-6 border-b border-gray-200"
          >
            <span className="font-accent text-xs font-bold text-gold pt-1 tabular-nums">
              0{i + 1}
            </span>
            <div className="w-9 h-9 rounded-lg bg-cream flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
              <item.icon
                className="text-gold group-hover:text-white transition-colors duration-300"
                size={16}
              />
            </div>
            <div>
              <p className="text-sm font-bold text-dark-900">{item.title}</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </ScrollReveal>
  </div>
</section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="section-subheading">Why Choose Us</span>
              <h2 className="section-heading mb-4">
                Our Core <span className="text-gold">Values</span>
              </h2>
              <div className="gold-line mx-auto" />
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {values.map((value, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.15}
                direction="up"
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative h-full flex flex-col bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:shadow-gold/10 border border-transparent hover:border-gold/20 transition-all duration-500 group overflow-hidden"
                >
                  <span className="absolute -top-4 right-2 font-heading text-7xl font-bold text-dark-900/[0.03] select-none pointer-events-none">
                    0{index + 1}
                  </span>
                  <div className="relative w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 flex-shrink-0 group-hover:bg-gold group-hover:-rotate-6 group-hover:scale-105 transition-all duration-500 ease-out">
                    <value.icon
                      className="text-gold group-hover:text-white transition-colors duration-500"
                      size={28}
                    />
                  </div>
                  <h3 className="relative font-heading text-xl font-bold text-dark-900 mb-3 group-hover:text-gold transition-colors">
                    {value.title}
                  </h3>
                  <p className="relative text-gray-600 text-sm leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 lg:py-32 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative max-w-7xl lg:mx-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/20 bg-dark-900">
                  <img
                    src="../images/founder.jpeg"
                    alt="Manoj.N, Founder of Shobha Ventures"
                    className="block w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold" />
                  <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <span className="section-subheading">Meet Our Founder</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                Manoj<span className="text-gold">.N</span>
              </h2>
              <p className="text-gold font-accent text-lg uppercase tracking-wider mb-6">
                Civil Engineer & Founder
              </p>
              <div className="gold-line mb-8" />

              <p className="text-white/70 text-lg leading-relaxed mb-6">
                With a strong educational background in Civil Engineering and
                over 10 years of hands-on experience, Manoj.N and Team has led
                Shobha Ventures to become a name synonymous with quality
                construction in Bangalore.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                His personal involvement in every project ensures that the
                highest standards of quality and craftsmanship are maintained.
                Manoj believes in understanding each client&apos;s unique vision
                and translating it into reality through meticulous planning and
                execution.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+919945949949"
                  onClick={() => trackLead("call", "about_founder")}
                  className="btn-outline border-gold/50 text-gold hover:bg-gold hover:text-white"
                >
                  <FiPhone className="inline -mt-1 mr-1" size={16} /> +91 994
                  594 9949
                </a>
                <a
                  href="mailto:shobhaventures1@gmail.com"
                  onClick={() => trackLead("email", "about_founder")}
                  className="btn-outline border-white/20 text-white/70 hover:bg-white hover:text-dark-900 hover:border-white"
                >
                  <FiMail className="inline -mt-1 mr-1" size={16} /> Email
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="section-subheading">Our Journey</span>
              <h2 className="section-heading mb-4">
                Company <span className="text-gold">Timeline</span>
              </h2>
              <div className="gold-line mx-auto" />
            </ScrollReveal>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2 hidden md:block" />

            {timeline.map((item, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="flex-1 md:px-8">
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-gold/30 transition-colors duration-300 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                    >
                      <span className="text-gold font-heading text-2xl font-bold">
                        {item.year}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-dark-900 mt-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {/* Center Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

// src/components/AboutSection.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import {
  FiArrowRight,
  FiStar,
  FiShield,
  FiAward,
  FiUsers,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const features = [
  { icon: FiShield, label: "Licensed & Insured" },
  { icon: FiAward, label: "Premium Materials" },
  { icon: FiClock, label: "On-Time Delivery" },
  { icon: FiCheckCircle, label: "Transparent Pricing" },
  { icon: FiUsers, label: "Expert Team" },
  { icon: FiStar, label: "5-Star Rated" },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "5.0", label: "Google Rating" },
];

/** Small corner tick — mimics crop marks on a drafting sheet */
function CornerTick({ className = "" }: { className?: string }) {
  return <span className={`absolute w-5 h-5 border-gold ${className}`} />;
}

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Faint blueprint grid, top-right only, not a decorative blob */}
      <svg
        className="absolute top-0 right-0 w-[36rem] h-[36rem] opacity-[0.05] pointer-events-none"
        viewBox="0 0 400 400"
      >
        <defs>
          <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="#9A7B2F" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#bp-grid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <ScrollReveal>
            <span className="section-subheading">About Us</span>
            <h2 className="section-heading mb-4">
              We Build With <span className="text-gold italic">Passion</span> &amp; Precision
            </h2>
            <div className="gold-line mb-6" />
            <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
  <strong className="text-dark-900">Shobha Ventures</strong> is a premier Design &amp; Construction
  company based in Bangalore, led by{" "}
  <strong className="text-dark-900">Manoj.N</strong>, an experienced Civil Engineer with over 10
  years of hands-on experience. 
</p>
<p className="text-gray-600 text-lg max-w-xl leading-relaxed mt-4">
  From architectural design to final handover, we manage every stage in-house — quality materials,
  transparent pricing, and on-time delivery, with Manoj personally involved in every project we take on.
</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-primary flex items-center justify-center gap-2 group">
                Learn More About Us
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-outline flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Main composition: drawing + annotations */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-stretch">
          {/* Photo, framed like a drafting sheet with corner ticks */}
          <ScrollReveal direction="scale" className="lg:col-span-7">
            <motion.div
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.4 }}
              className="group relative h-full min-h-[380px] lg:min-h-[460px] overflow-hidden bg-gray-100"
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
                alt="Shobha Ventures construction site"
                className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/5 to-transparent" />

              {/* Drafting frame */}
              <div className="absolute inset-3 border border-white/25 pointer-events-none">
                <CornerTick className="-top-[2px] -left-[2px] border-t-2 border-l-2" />
                <CornerTick className="-top-[2px] -right-[2px] border-t-2 border-r-2" />
                <CornerTick className="-bottom-[2px] -left-[2px] border-b-2 border-l-2" />
                <CornerTick className="-bottom-[2px] -right-[2px] border-b-2 border-r-2" />
              </div>

              {/* Title block, like a drawing label — not a gradient hero card */}
              <div className="absolute bottom-6 left-6 bg-dark-900/90 border border-gold/40 px-4 py-3">
                <span className="font-accent text-gold text-[10px] uppercase tracking-[0.25em] font-semibold">
                  Est. 2012 &middot; Bangalore
                </span>
                <h3 className="font-heading text-white text-xl font-bold mt-1 leading-snug">
                  Building Bangalore&apos;s Future
                </h3>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right rail: dimension-style stat annotations + founder stamp */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Stat rows as leader lines, not stat pills */}
            <ScrollReveal direction="up" delay={0.15}>
              <div className="border border-gray-100 divide-y divide-gray-100">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-4">
                    <span className="relative flex-shrink-0 w-3 h-3">
                      <span className="absolute inset-0 rounded-full border-2 border-gold" />
                      <span className="absolute inset-[3px] rounded-full bg-gold" />
                    </span>
                    <span className="h-px flex-shrink-0 w-6 bg-gold/50" />
                    <span className="font-heading text-2xl font-bold text-dark-900">{stat.value}</span>
                    <span className="font-accent text-gray-500 text-[11px] uppercase tracking-wider ml-auto">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Founder credential, styled as an engineer's stamp/seal */}
            <ScrollReveal direction="up" delay={0.2} className="flex-1">
              <div className="h-full min-h-[180px] bg-dark-900 flex items-center gap-6 p-6">
                <svg viewBox="0 0 160 160" className="w-28 h-28 flex-shrink-0">
                  <circle cx="80" cy="80" r="90" fill="none" stroke="#C6A15B" strokeWidth="4" strokeDasharray="2 3" />
                  <circle cx="80" cy="80" r="34" fill="none" stroke="#C6A15B" strokeWidth="2" opacity="0.5" />
                  <defs>
                    {/* top arc: left -> right over the top, so text sits upright */}
                    <path id="stamp-top" d="M 17,80 A 64,64 0 0 1 144,80" />
                    {/* bottom arc: left -> right under the bottom, sweep flipped so text isn't mirrored */}
                    <path id="stamp-bottom" d="M 16,90 A 64,64 0 0 0 144,90" />
                  </defs>
                  <text fill="#C6A15B" fontSize="20" letterSpacing="2" fontWeight="600">
                    <textPath href="#stamp-top" startOffset="50%" textAnchor="middle">
                      MANOJ&#8226;N
                    </textPath>
                  </text>
                  <text fill="#C6A15B" fontSize="20" letterSpacing="1.5" fontWeight="600">
                    <textPath href="#stamp-bottom" startOffset="50%" textAnchor="middle">
                      CIVIL ENGINEER
                    </textPath>
                  </text>
                  <text
                    x="80"
                    y="80"
                    dominantBaseline="middle"
                    fill="#ffffff"
                    fontSize="20"
                    fontWeight="700"
                    textAnchor="middle"
                    fontFamily="serif"
                  >
                    SV
                  </text>
                  <text
                    x="80"
                    y="97"
                    dominantBaseline="middle"
                    fill="#C6A15B"
                    fontSize="7"
                    letterSpacing="1"
                    textAnchor="middle"
                  >
                    EST. 2012
                  </text>
                </svg>
                <div>
                  <p className="text-white font-bold text-sm">Founder &amp; Principal Engineer</p>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">
                    Every drawing signed and every site personally reviewed.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Pull quote, kept but de-carded */}
            <ScrollReveal direction="up" delay={0.25}>
              <p className="font-heading text-dark-900/70 text-base italic leading-snug border-l-2 border-gold pl-4">
                &ldquo;We believe in building relationships, not just buildings.&rdquo;
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Specification strip — flat, hairline-divided, drawing-note register */}
        <ScrollReveal delay={0.4}>
          <div className="mt-10 border-t border-b border-gray-100 py-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 sm:justify-center lg:border-l lg:border-gray-200 lg:first:border-l-0 lg:px-3"
                >
                  <feature.icon className="text-gold flex-shrink-0" size={16} />
                  <span className="text-dark-900 text-xs sm:text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
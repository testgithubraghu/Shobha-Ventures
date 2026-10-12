// src/components/HeroSection.tsx
"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiMapPin, FiLayers } from "react-icons/fi";
import { projects } from "@/data/projects";

const slides = projects;

function useGeometry() {
  const [tier, setTier] = useState<"desktop" | "tablet" | "mobile">("desktop");
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setTier(w <= 480 ? "mobile" : w <= 860 ? "tablet" : "desktop");
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return tier;
}

const GEOMETRY = {
  desktop: {
    stage: 440,
    card: { w: 260, h: 340 },
    offsets: [168, 300, 420],
    maxVisible: 3,
  },
  tablet: {
    stage: 400,
    card: { w: 210, h: 284 },
    offsets: [140, 250, 999],
    maxVisible: 2,
  },
  mobile: {
    stage: 357,
    card: { w: 185, h: 250 },
    offsets: [111, 999, 999],
    maxVisible: 1,
  },
};

export default function HeroSection() {
  const tier = useGeometry();
  const geo = GEOMETRY[tier];
  const [active, setActive] = useState(Math.min(2, slides.length - 1));

  // Wraps around at both ends instead of stopping — continuous loop
  const goTo = useCallback(
    (i: number) => setActive(((i % slides.length) + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(active + 1);
      if (e.key === "ArrowLeft") goTo(active - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, goTo]);

  // Auto-advance every 3 seconds, looping continuously
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getCardStyle = (i: number) => {
    // Shortest signed distance around the loop, so wrap-around animates
    // the short way instead of spinning across the whole stage.
    const raw = i - active;
    const n = slides.length;
    let d = ((raw % n) + n) % n;
    if (d > n / 2) d -= n;
    const ad = Math.abs(d);
    const sign = Math.sign(d);
    if (ad === 0)
      return { x: 0, z: 140, rotateY: 0, scale: 1, opacity: 1, zIndex: 50 };
    if (ad === 1)
      return {
        x: sign * geo.offsets[0],
        z: -40,
        rotateY: -sign * 42,
        scale: 0.86,
        opacity: ad > geo.maxVisible ? 0 : 0.92,
        zIndex: 40,
      };
    if (ad === 2)
      return {
        x: sign * geo.offsets[1],
        z: -200,
        rotateY: -sign * 46,
        scale: 0.7,
        opacity: ad > geo.maxVisible ? 0 : 0.55,
        zIndex: 30,
      };
    return {
      x: sign * geo.offsets[2],
      z: -360,
      rotateY: -sign * 48,
      scale: 0.5,
      opacity: 0,
      zIndex: 10,
    };
  };

  return (
    <section className="relative bg-dark-900 overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[620px] h-[620px] bg-gold/25 rounded-full blur-[110px]" />
        <div className="absolute -bottom-40 -right-40 w-[680px] h-[680px] bg-primary-700/25 rounded-full blur-[110px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] bg-gold/10 rounded-full blur-[130px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='56' height='56' viewBox='0 0 56 56' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M56 0H0V56' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E\")",
          maskImage:
            "radial-gradient(ellipse 90% 62% at 50% 38%, #000 18%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 62% at 50% 38%, #000 18%, transparent 72%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mt-10 lg:mt-2 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-accent font-medium text-white/70 backdrop-blur"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(201,149,60,0.8)]" />
          Design &amp; Construction Studio · Bangalore
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white"
        >
          Real homes, real progress
          <br />
          <span className="text-gradient italic">built across Bangalore.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-5 max-w-xl text-base sm:text-lg font-body font-light text-white/60 leading-relaxed"
        >
          From completed handovers to sites under construction right now
          explore exactly what Shobha Ventures is building today.
        </motion.p>
      </div>

      <div
        className="relative mx-auto max-w-5xl px-4 mt-12 sm:mt-14"
        style={{ perspective: 1600 }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 bottom-10 mx-auto h-24 max-w-2xl rounded-[100%] bg-gold/10 blur-3xl"
          aria-hidden
        />

        <div
          className="relative mx-auto"
          style={{ height: geo.stage, transformStyle: "preserve-3d" }}
        >
          {slides.map((project, i) => {
            const st = getCardStyle(i);
            const isActive = i === active;
            return (
              <motion.button
                key={project.id}
                onClick={() => goTo(i)}
                animate={{
                  x: st.x,
                  z: st.z,
                  rotateY: st.rotateY,
                  scale: st.scale,
                  opacity: st.opacity,
                }}
                transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: geo.card.w,
                  height: geo.card.h,
                  marginLeft: -geo.card.w / 2,
                  marginTop: -geo.card.h / 2,
                  zIndex: st.zIndex,
                  transformStyle: "preserve-3d",
                }}
                className={`rounded-[22px] overflow-hidden border text-left bg-dark-800 transition-shadow duration-500 ${
                  isActive
                    ? "border-gold/50 shadow-[0_40px_90px_-30px_rgba(201,149,60,0.45),0_0_0_1px_rgba(201,149,60,0.35)]"
                    : "border-white/10 shadow-[0_30px_70px_-28px_rgba(0,0,0,0.85)]"
                }`}
                aria-label={`Show ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/95 via-dark-900/25 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span
                    className={`text-[10px] font-accent font-semibold uppercase tracking-[0.15em] ${
                      project.status === "Completed"
                        ? "text-gold"
                        : "text-green-400"
                    }`}
                  >
                    {project.status}
                  </span>
                  <h3 className="font-heading text-white text-sm sm:text-base font-bold mt-1 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1.5 text-white/60 text-[11px]">
                    <span className="flex items-center gap-1 truncate">
                      <FiMapPin size={11} className="text-gold/70 flex-shrink-0" />
                      {project.location.split(",")[0]}
                    </span>
                    <span className="flex items-center gap-1 flex-shrink-0">
                      <FiLayers size={11} className="text-gold/70" />
                      {project.floors}
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="relative z-10 mt-7 flex items-center justify-center gap-6">
          <button
            onClick={() => goTo(active - 1)}
            aria-label="Previous project"
            className="w-11 h-11 grid place-items-center rounded-full border border-white/10 bg-white/5 backdrop-blur text-white/70 transition-all duration-300 hover:scale-108 hover:border-gold/50 hover:text-gold"
          >
            <FiChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-gradient-to-r from-gold to-primary-300 shadow-[0_0_14px_rgba(201,149,60,0.6)]"
                    : "w-2 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(active + 1)}
            aria-label="Next project"
            className="w-11 h-11 grid place-items-center rounded-full border border-white/10 bg-white/5 backdrop-blur text-white/70 transition-all duration-300 hover:scale-108 hover:border-gold/50 hover:text-gold"
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-primary-300 px-7 py-3.5 text-sm font-accent font-semibold text-dark-900 shadow-xl shadow-gold/20 transition-all hover:shadow-gold/40"
          >
            Start Your Project
            <FiArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={16}
            />
          </Link>

          <a
            href="https://wa.me/919945949949?text=Hello%20Shobha%20Ventures,%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-accent font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
          >
            <FaWhatsapp size={16} />
            WhatsApp Us
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-5 flex items-center justify-center gap-2 text-xs font-accent text-white/40"
        >
          <span className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" size={11} />
            ))}
          </span>
          5.0 Google Rating · 20+ Projects Delivered
        </motion.p>
      </div>
    </section>
  );
}
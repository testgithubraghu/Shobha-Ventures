"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import { projects } from "@/data/projects";
import {
  FiArrowLeft,
  FiMapPin,
  FiLayers,
  FiCompass,
  FiMaximize,
  FiUser,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { trackLead } from "@/lib/trackLead";

export default function ProjectDetailClient({ id }: { id: string }) {
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-dark-900 mb-4">
            Project Not Found
          </h1>
          <Link href="/projects" className="btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-dark-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gold mb-6 hover:gap-3 transition-all font-accent text-sm"
            >
              <FiArrowLeft />
              Back to Projects
            </Link>
            <span
              className={`flex items-center gap-1.5 w-fit px-4 py-1 rounded-full text-xs font-accent font-semibold uppercase tracking-wider mb-4 ${
                project.status === "Completed"
                  ? "bg-gold text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {project.status === "Ongoing" && (
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
              {project.status}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <FiMapPin className="text-gold" /> {project.location}
              </span>
              <span className="flex items-center gap-2">
                <FiMaximize className="text-gold" /> {project.plotSize}
              </span>
              <span className="flex items-center gap-2">
                <FiLayers className="text-gold" /> {project.floors}
              </span>
              <span className="flex items-center gap-2">
                <FiCompass className="text-gold" /> {project.facing}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-3xl font-heading font-bold text-dark-900 mb-4">
                  Project Overview
                </h2>
                <div className="gold-line mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                {project.highlight && (
                  <div className="flex items-center gap-3 bg-gold/5 border border-gold/20 rounded-xl px-5 py-4 mb-8">
                    <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-dark-900 font-medium text-sm">
                      {project.highlight}
                    </span>
                  </div>
                )}
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h3 className="text-2xl font-heading font-bold text-dark-900 mb-6">
                  Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-cream rounded-lg p-4"
                    >
                      <span className="w-2 h-2 bg-gold rounded-full" />
                      <span className="text-gray-700 font-medium text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {project.gallery.length > 0 && (
                <ScrollReveal delay={0.3}>
                  <h3 className="text-2xl font-heading font-bold text-dark-900 mb-6">
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.gallery.map((img, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-xl overflow-hidden shadow-lg"
                      >
                        <img
                          src={img}
                          alt={`${project.title} ${i + 1}`}
                          className="w-full h-100 object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </ScrollReveal>
              )}
            </div>

            <div>
              <div className="sticky top-24 space-y-8">
                <ScrollReveal direction="right">
                  <div className="bg-dark-900 rounded-2xl p-8">
                    <h3 className="text-white font-heading text-xl font-bold mb-6">
                      Project Details
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          icon: FiMapPin,
                          label: "Location",
                          value: project.location,
                        },
                        {
                          icon: FiMaximize,
                          label: "Plot Size",
                          value: project.plotSize,
                        },
                        {
                          icon: FiLayers,
                          label: "Floors",
                          value: project.floors,
                        },
                        {
                          icon: FiCompass,
                          label: "Facing",
                          value: project.facing,
                        },
                        {
                          icon: FiUser,
                          label: "Client",
                          value: project.client,
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 pb-3 border-b border-white/10 last:border-0"
                        >
                          <item.icon
                            className="text-gold flex-shrink-0"
                            size={16}
                          />
                          <div>
                            <p className="text-white/40 text-xs">
                              {item.label}
                            </p>
                            <p className="text-white text-sm font-medium">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/919945949949?text=Hello%20Shobha%20Ventures,%20I%20saw%20your%20project%20"${encodeURIComponent(project.title)}"%20and%20I%20am%20interested%20in%20similar%20work.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackLead("whatsapp", "project_detail")}
                      className="flex items-center justify-center gap-2 w-full mt-6 bg-green-500 text-white py-3 rounded-lg font-accent font-semibold text-sm hover:bg-green-600 transition-colors"
                    >
                      <FaWhatsapp size={18} />
                      Discuss Similar Project
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {relatedProjects.length > 0 && (
            <div className="mt-20">
              <ScrollReveal>
                <h3 className="text-3xl font-heading font-bold text-dark-900 mb-8">
                  Other <span className="text-gold italic">Projects</span>
                </h3>
              </ScrollReveal>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedProjects.map((p, i) => (
                  <ScrollReveal key={p.id} delay={i * 0.15}>
                    <Link href={`/projects/${p.id}`}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="group rounded-2xl overflow-hidden shadow-lg"
                      >
                        <div className="relative h-80 overflow-hidden">
                          <img
                            src={p.image}
                            alt={p.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <h4 className="text-white font-heading font-bold">
                              {p.title}
                            </h4>
                            <p className="text-white/60 text-xs">
                              {p.location}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}

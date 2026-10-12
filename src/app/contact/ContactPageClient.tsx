// src/app/contact/page.tsx
"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { trackLead } from "@/lib/trackLead";

const contactInfo = [
  {
    icon: FiPhone,
    title: "Phone",
    details: ["+91 994 594 9949", "+91 973 125 9082"],
    link: "tel:+919945949949",
    accent: "gold",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    details: ["+91 994 594 9949", "Available 24/7"],
    link: "https://wa.me/919945949949",
    accent: "green",
  },
  {
    icon: FiMail,
    title: "Email",
    details: ["shobhaventures1@gmail.com"],
    link: "mailto:shobhaventures1@gmail.com",
    accent: "gold",
  },
  {
    icon: FiMapPin,
    title: "Office Address",
    details: [
      "No.1721, Muddinapalya Main Rd,",
      "Sir M Vishweshwaraiah Layout,",
      "8th Block, Bangalore - 560091",
    ],
    link: "https://maps.google.com/?q=Shobha+Ventures+Bangalore",
    accent: "gold",
  },
];

export default function ContactPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/60" />

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
            <span className="section-subheading">Get In Touch</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4">
              Contact <span className="text-gold italic">Us</span>
            </h1>
            <div className="gold-line mb-4" />
            <p className="text-white/70 text-lg max-w-xl">
              Ready to start your project? Get in touch with us for a free
              consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-10 items-stretch">
            {contactInfo.map((info, index) => {
              const isGreen = info.accent === "green";
              return (
                <ScrollReveal
                  key={index}
                  delay={index * 0.1}
                  className="h-full"
                >
                  <motion.a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    onClick={() =>
                      trackLead(
                        info.title === "WhatsApp"
                          ? "whatsapp"
                          : info.title === "Phone"
                            ? "call"
                            : info.title === "Email"
                              ? "email"
                              : "call",
                        "contact_page",
                      )
                    }
                    whileHover={{ y: -8 }}
                    className={`relative h-full flex flex-col bg-white rounded-2xl p-7 shadow-xl transition-all duration-500 group border overflow-hidden ${
                      isGreen
                        ? "border-gray-100 hover:border-green-400/40 hover:shadow-2xl hover:shadow-green-500/10"
                        : "border-gray-100 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10"
                    }`}
                  >
                    <div
                      className={`absolute top-0 left-0 w-0 group-hover:w-full h-[3px] transition-all duration-500 ${
                        isGreen
                          ? "bg-green-500"
                          : "bg-gradient-to-r from-gold to-primary-300"
                      }`}
                    />
                    <span className="absolute -top-3 -right-1 font-heading text-6xl font-bold text-dark-900/[0.04] select-none pointer-events-none">
                      0{index + 1}
                    </span>

                    <div
                      className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-all duration-500 ease-out group-hover:-rotate-6 group-hover:scale-105 ${
                        isGreen
                          ? "bg-green-500/10 group-hover:bg-green-500"
                          : "bg-gold/10 group-hover:bg-gold"
                      }`}
                    >
                      <info.icon
                        size={22}
                        className={`transition-colors duration-500 ${
                          isGreen
                            ? "text-green-500 group-hover:text-white"
                            : "text-gold group-hover:text-white"
                        }`}
                      />
                    </div>
                    <h3 className="relative font-heading text-xl font-bold text-dark-900 mb-2 leading-tight group-hover:text-gold transition-colors duration-300">
                      {info.title}
                    </h3>
                    <div className="relative flex flex-col gap-1 flex-grow justify-center">
                      {info.details.map((detail, i) => (
                        <p
                          key={i}
                          className="text-gray-600 font-semibold font-body text-sm leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                    <FiArrowUpRight
                      size={16}
                      className="absolute top-7 right-7 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </motion.a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <ScrollReveal>
                <span className="section-subheading">Send Us a Message</span>
                <h2 className="section-heading mb-4">
                  Let&apos;s <span className="text-gold">Talk</span>
                </h2>
                <div className="gold-line mb-6" />
                <p className="text-gray-600 mb-8">
                  Fill in the form below and we&apos;ll get back to you within
                  24 hours. Or simply WhatsApp us for a faster response.
                </p>
              </ScrollReveal>

              <ContactForm />
            </div>

            {/* Map & Info */}
            <div>
              <ScrollReveal direction="right">
                <div className="rounded-2xl overflow-hidden shadow-xl mb-8 h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.52!3d12.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMuddinapalya%20Main%20Rd%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-dark-900 rounded-2xl p-8">
                  <h3 className="text-white font-heading text-xl font-bold mb-6">
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    {[
                      { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
                      { day: "Saturday", time: "9:00 AM - 5:00 PM" },
                      { day: "Sunday", time: "By Appointment" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between pb-3 border-b border-white/10 last:border-0"
                      >
                        <span className="text-white/60 text-sm flex items-center gap-2">
                          <FiClock className="text-gold" size={14} />
                          {item.day}
                        </span>
                        <span className="text-white font-medium text-sm">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-3 font-accent">
                      Follow Us
                    </p>
                    <div className="flex gap-3">
                      {[FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp].map(
                        (Icon, i) => (
                          <a
                            key={i}
                            href="#"
                            className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-gold hover:bg-gold/10 transition-all"
                          >
                            <Icon size={16} />
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

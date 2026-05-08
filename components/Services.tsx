"use client";

import { motion } from "framer-motion";
import { Camera, Mic, Video } from "lucide-react";

const services = [
  {
    id: "Event Reporting",
    icon: Camera,
    title: "Event Reporting",
    description:
      "On-the-ground coverage of your event delivered with broadcast-quality polish and real-time storytelling.",
  },
  {
    id: "Brand Inquiries",
    icon: Mic,
    title: "Brand Inquiries",
    description:
      "Strategic content partnerships and brand integrations crafted for credibility-first audiences.",
  },
  {
    id: "Livestream Hosting",
    icon: Video,
    title: "Livestream Hosting",
    description:
      "Engaging live hosted content that keeps viewers watching, reacting, and coming back.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface ServicesProps {
  openModal: (service: string) => void;
}

export default function Services({ openModal }: ServicesProps) {
  return (
    <section id="services" className="py-24 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red mb-3">
            Services
          </p>
          <h2
            className="font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase text-brand-white leading-none"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 700 }}
          >
            Book Madison
          </h2>
        </motion.div>

        {/* Cards — hairline grid trick */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border"
        >
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                variants={cardVariants}
                className="bg-brand-black p-8 flex flex-col gap-6 group hover:bg-brand-gray-dark transition-colors duration-200"
              >
                {/* Icon */}
                <div className="w-10 h-10 border border-brand-border flex items-center justify-center group-hover:border-brand-red transition-colors duration-200">
                  <Icon className="w-4 h-4 text-brand-red" strokeWidth={1.5} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3
                    className="font-display text-2xl uppercase text-brand-white leading-none"
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 600 }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-sm text-brand-gray leading-relaxed">{svc.description}</p>
                </div>

                {/* CTA */}
                <button
                  onClick={() => openModal(svc.id)}
                  className="text-xs font-semibold uppercase tracking-widest text-brand-red hover:text-brand-red-hover transition-colors duration-200 text-left flex items-center gap-1.5"
                >
                  Get a Quote
                  <span className="text-base leading-none">→</span>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

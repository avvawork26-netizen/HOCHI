"use client";

// Place blondie.jpg in /public/

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const socials = [
  { icon: FaTiktok, href: "https://tiktok.com/@missbreakingnews", label: "TikTok" },
  { icon: FaInstagram, href: "https://instagram.com/missbreakingnews", label: "Instagram" },
  { icon: FaFacebookF, href: "https://www.facebook.com/madison.adams.604977/", label: "Facebook" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/madison-adams-7163131b3", label: "LinkedIn" },
  { icon: FaYoutube, href: "https://youtube.com/@missbreakingnewz", label: "YouTube" },
  { icon: FaXTwitter, href: "https://x.com/madisonadams", label: "X" },
];

const stats = [
  { value: "60M+", label: "Views" },
  { value: "10M+", label: "Likes" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

interface HeroProps {
  openModal: (service: string) => void;
}

export default function Hero({ openModal }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 pb-24 border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red"
            >
              South Florida · TV Reporter
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-[clamp(4rem,10vw,8rem)] leading-[0.88] uppercase text-brand-white"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 700 }}
            >
              MADISON
              <br />
              ADAMS
            </motion.h1>

            {/* Red divider */}
            <motion.div
              variants={itemVariants}
              className="w-16 h-[3px] bg-brand-red"
            />

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-brand-gray max-w-sm leading-relaxed"
            >
              Breaking stories, building brands.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-10 mt-2">
              {stats.map((s) => (
                <div key={s.label}>
                  <p
                    className="font-display text-4xl text-brand-white"
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 700 }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Social icons */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 mt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-brand-gray hover:text-brand-white transition-colors duration-200 text-lg"
                >
                  <Icon />
                </a>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-2">
              <button
                onClick={() => openModal("")}
                className="px-7 py-3 bg-brand-red text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-red-hover transition-colors duration-200"
              >
                Book Me
              </button>
              <a
                href="https://missbreakingnews.com/mediakit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 border border-brand-border text-white text-xs font-bold uppercase tracking-widest hover:border-white transition-colors duration-200"
              >
                Media Kit
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden bg-brand-gray-dark">
              <Image
                src="/blondie.jpg"
                alt="Madison Adams — Freelance TV News Reporter"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />

              {/* Dark overlay at bottom for editorial feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent pointer-events-none" />

              {/* LIVE badge — top left */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-brand-red px-2.5 py-1">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse-live" />
                <span
                  className="text-white text-[10px] font-bold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 700 }}
                >
                  LIVE
                </span>
              </div>

              {/* ON AIR badge — top right */}
              <div className="absolute top-4 right-4 bg-brand-black/80 border border-brand-border px-2.5 py-1">
                <span
                  className="text-brand-gray text-[10px] font-bold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 700 }}
                >
                  ON AIR
                </span>
              </div>
            </div>

            {/* Side accent line */}
            <div className="absolute -left-4 top-8 bottom-8 w-[2px] bg-brand-red hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

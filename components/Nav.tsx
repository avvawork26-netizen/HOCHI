"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Bookings", href: "#services" },
  { label: "Portfolio", href: "#mediakit" },
  { label: "Support", href: "https://missbreakingnews.com/support", external: true },
  { label: "Blondie", href: "https://missbreakingnews.com/blondie", external: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-brand-black/80 border-b border-brand-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-display font-700 text-xl tracking-widest text-brand-white uppercase"
          style={{ fontFamily: "var(--font-barlow)", fontWeight: 700, letterSpacing: "0.18em" }}
        >
          MADISON ADAMS
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-xs font-body font-semibold uppercase tracking-widest text-brand-gray hover:text-brand-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile — just show name, no hamburger per brief */}
        <div className="md:hidden flex items-center gap-4">
          {links.slice(0, 2).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] font-semibold uppercase tracking-widest text-brand-gray hover:text-brand-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}

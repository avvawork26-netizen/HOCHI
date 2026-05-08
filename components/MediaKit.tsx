"use client";

import { motion } from "framer-motion";

const niches = [
  "LUXURY",
  "TRAVEL & EVENTS",
  "ENTERTAINMENT",
  "NEWS & POLITICS",
  "PEOPLE & BLOGS",
];

export default function MediaKit() {
  return (
    <section id="mediakit" className="py-24 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red mb-3">
              Media Kit
            </p>
            <h2
              className="font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase text-brand-white leading-none mb-8"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 700 }}
            >
              The Numbers
              <br />
              Don&rsquo;t Lie.
            </h2>

            {/* Stats row */}
            <div className="flex gap-12 mb-10">
              {[
                { val: "60M+", label: "Total Views" },
                { val: "10M+", label: "Total Likes" },
                { val: "6+", label: "Platforms" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="font-display text-4xl text-brand-white"
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 700 }}
                  >
                    {s.val}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-brand-gray mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://missbreakingnews.com/mediakit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-brand-red text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-red-hover transition-colors duration-200"
            >
              View Full Media Kit
            </a>
          </motion.div>

          {/* Right — niches */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="border-t border-brand-border pt-10 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gray mb-6">
              Content Niches
            </p>
            <p className="text-sm text-brand-gray leading-loose tracking-wide">
              {niches.join(" / ")}
            </p>

            {/* Pull quote */}
            <blockquote className="mt-10 border-l-2 border-brand-red pl-5">
              <p className="text-brand-gray text-sm leading-relaxed italic">
                &ldquo;Whether breaking news or brand storytelling, Madison brings
                the energy of live TV to every piece of content she touches.&rdquo;
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

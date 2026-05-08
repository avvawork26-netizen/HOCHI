"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const SERVICE_OPTIONS = [
  "Event Reporting",
  "Brand Inquiries",
  "Livestream Hosting",
  "Other",
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  preSelectedService,
}: BookingModalProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(preSelectedService || SERVICE_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);

  // Sync pre-selected service when modal opens
  useEffect(() => {
    if (isOpen) {
      setService(preSelectedService || SERVICE_OPTIONS[0]);
    }
  }, [isOpen, preSelectedService]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Booking Inquiry] ${service} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:MadisonAdams.inquiries@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full bg-brand-gray-dark border border-brand-border text-brand-white text-sm px-4 py-3 placeholder-brand-gray focus:outline-none focus:border-brand-red transition-colors duration-200";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backdropFilter: "blur(8px)", background: "rgba(8,8,8,0.85)" }}
          onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-brand-black border border-brand-border"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-brand-border">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-red mb-1">
                  Inquire
                </p>
                <h3
                  className="font-display text-2xl uppercase text-brand-white leading-none"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 700 }}
                >
                  Book Madison
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-brand-gray hover:text-white transition-colors duration-200 p-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 py-8 flex flex-col gap-4">
              <input
                required
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Company / Organization"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className={inputClass}
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={inputClass + " cursor-pointer"}
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <textarea
                required
                placeholder="Tell me about your project, event, or campaign..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className={inputClass + " resize-none"}
              />

              <button
                type="submit"
                className="mt-2 w-full py-3.5 bg-brand-red text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-red-hover transition-colors duration-200"
              >
                Send Inquiry
              </button>

              <p className="text-[10px] text-brand-gray text-center">
                This will open your email client to send directly to Madison.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MediaKit from "@/components/MediaKit";
import BreakingTicker from "@/components/BreakingTicker";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState("");

  const openModal = (service: string) => {
    setPreSelectedService(service);
    setModalOpen(true);
  };

  return (
    <main className="relative bg-brand-black min-h-screen pb-12">
      <Nav />
      <Hero openModal={openModal} />
      <Services openModal={openModal} />
      <MediaKit />
      <BreakingTicker />
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preSelectedService={preSelectedService}
      />
    </main>
  );
}

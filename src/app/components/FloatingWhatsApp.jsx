"use client";

import { SiWhatsapp } from "react-icons/si";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/923209060485"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Chat"
      className="
        fixed bottom-6 right-6 z-[9999]
        w-14 h-14
        bg-green-500 hover:bg-green-600
        text-white
        flex items-center justify-center
        rounded-full
        shadow-lg
        transition-transform duration-300
        hover:scale-110
      "
    >
      <SiWhatsapp size={28} />
    </a>
  );
};

export default FloatingWhatsApp;

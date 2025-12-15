"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  /* ------------------ THEME ------------------ */
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-[#0b1120] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={500}
            height={500}
            priority
            className="h-18 md:h-24 w-auto object-contain"
          />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-7">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              offset={-100}
              duration={600}
              spy={true}
              onSetActive={() => setActiveSection(item.id)}
              className={`relative cursor-pointer font-medium text-[16px] transition-colors
                ${
                  activeSection === item.id
                    ? "text-green-600 dark:text-green-400 font-semibold after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-green-400"
                    : "text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400"
                }`}
            >
              {item.label}
            </Link>
          ))}

          {/* THEME BUTTON (ICON ONLY) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-3 text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/923209060485"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="ml-3 text-green-500 hover:text-green-600 transition-colors"
          >
            <SiWhatsapp size={22} />
          </a>
        </nav>

        {/* MOBILE ICONS */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-gray-700 dark:text-gray-200 hover:text-green-600 transition-colors"
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>

          <a
            href="https://wa.me/923209060485"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-green-500 hover:text-green-600 transition-colors"
          >
            <SiWhatsapp size={22} />
          </a>

          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-[#0b1120] border-t border-gray-200 dark:border-gray-700 px-6 py-5 overflow-hidden transition-colors"
          >
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  offset={-100}
                  duration={600}
                  spy={true}
                  onSetActive={() => setActiveSection(item.id)}
                  onClick={closeMenu}
                  className={`font-medium text-[18px] transition-colors
                    ${
                      activeSection === item.id
                        ? "text-green-400 font-semibold"
                        : "text-gray-700 dark:text-gray-200 hover:text-green-400"
                    }`}
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="https://wa.me/923209060485"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-400 hover:text-green-500 transition-colors mt-4"
              >
                <SiWhatsapp size={22} />
                <span className="text-[16px] font-medium">
                  +92 320 9060485
                </span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

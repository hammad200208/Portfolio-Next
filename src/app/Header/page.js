"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
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
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#0b1120] transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-5">

        {/* DESKTOP */}
        <div className="hidden md:flex items-center justify-between">

          {/* LOGO (LEFT) */}
          <Image
            src="/Made with insMind-Hammad2.png"
            alt="Logo"
            width={400}
            height={400}
            priority
            className="h-18 w-auto  object-contain"
          />

          {/* NAV + THEME (RIGHT) */}
          <div className="flex items-center space-x-8">

            {/* NAV LINKS */}
            <nav className="flex items-center space-x-7">
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
            </nav>

            {/* THEME BUTTON */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              {theme === "light" ? <FiMoon size={22} /> : <FiSun size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden items-center justify-between">
          <Image
            src="/Made with insMind-Hammad2.png"
            alt="Logo"
            width={300}
            height={300}
            className="h-12 w-auto object-contain"
          />

          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-gray-700 dark:text-gray-200"
            >
              {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>

            <button onClick={toggleMenu} aria-label="Toggle menu">
              {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
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
            className="md:hidden bg-white dark:bg-[#0b1120] border-t border-gray-200 dark:border-gray-700 px-6 py-5"
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
                  className={`font-medium text-[18px]
                    ${
                      activeSection === item.id
                        ? "text-green-400 font-semibold"
                        : "text-gray-700 dark:text-gray-200 hover:text-green-400"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

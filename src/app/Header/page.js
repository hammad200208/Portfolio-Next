"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 70;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white text-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo2.png"
            alt="MH Logo"
            width={500}
            height={500}
            className="h-12 md:h-20 w-auto object-contain"
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              className={`cursor-pointer font-medium text-[16px] transition 
                ${
                  activeSection === item.id
                    ? "text-green-700 font-semibold"
                    : "text-gray-700"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <FiMenu
            size={30}
            className="text-green-700 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
          <nav className="flex flex-col space-y-5">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                offset={-70}
                duration={500}
                spy={true}
                onClick={closeMenu}
                className={`font-medium text-[18px] transition 
                  ${
                    activeSection === item.id
                      ? "text-green-700 font-semibold"
                      : "text-gray-700"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

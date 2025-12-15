"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-gray-900 dark:bg-[#0b1120] text-white py-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center space-y-4">
        {/* Social Links */}
        <div className="flex space-x-4 sm:space-x-6 text-lg sm:text-xl">
          <a
            href="https://www.facebook.com/profile.php?id=100016414639249"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-hammad-778b03258"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/hammad200208"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Mohammad Hammad. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

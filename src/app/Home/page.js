"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-40 bg-white dark:bg-[#0b1120] text-black dark:text-gray-200 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* LEFT SIDE */}
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-gray-100">
          Hi,<br />
          I&apos;m{" "}
          <span className="text-blue-600 dark:text-green-400">
            Hammad
          </span>
          <br />
          MERN Stack Developer.
        </h1>

        {/* BUTTONS */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-block bg-blue-600 dark:bg-green-500 text-white px-8 py-4 rounded-lg shadow-md
                       hover:bg-blue-700 dark:hover:bg-green-600 transition-colors duration-300 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>

          <motion.a
            href="/CV.pdf"
            download
            className="inline-block px-7 py-4 rounded-lg border-2 border-blue-600 dark:border-green-400
                       text-blue-600 dark:text-green-400 font-medium
                       hover:bg-blue-50 dark:hover:bg-green-900/20
                       transition-colors duration-300 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* SOCIAL ICONS */}
        <motion.div
          className="flex gap-5 mt-6 text-xl text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="https://www.linkedin.com" className="hover:text-blue-600 dark:hover:text-green-400">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/923209060485" className="hover:text-green-600">
            <FaWhatsapp />
          </a>
          <a href="https://github.com" className="hover:text-gray-900 dark:hover:text-white">
            <FaGithub />
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE */}
<motion.div
  className="flex-1 flex justify-center mt-12 md:mt-0"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  viewport={{ once: true }}
>
  {mounted && (
    <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
      <svg
        viewBox="0 0 479 467"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full"
      >
        <defs>
          <mask id="mask0" maskType="alpha">
            <path
              d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
              fill="#fff"
            />
          </mask>
        </defs>

        <g mask="url(#mask0)">
          {/* ✅ ROTATING BACKGROUND ONLY */}
          <motion.rect
            width="100%"
            height="100%"
            className="fill-blue-600 dark:fill-green-500"
            animate={{ rotate: 360 }}
            transformOrigin="50% 50%"
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* ✅ IMAGE (STATIC) */}
          <image
            xlinkHref="/bg3.png"
            x="12%"
            y="10%"
            width="75%"
            height="90%"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
      </svg>
    </div>
  )}
</motion.div>

    </motion.section>
  );
};

export default Home;

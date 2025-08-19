"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaBriefcase } from "react-icons/fa";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-white text-black transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Side */}
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          Hi,<br />
          I&apos;m <span className="text-blue-600">Hammad</span><br />
          Web Developer
        </h1>

        <motion.a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.a>

        <motion.div
          className="flex gap-4 mt-4 text-gray-700 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="#" className="hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-blue-600">
            <FaBriefcase />
          </a>
          <a href="#" className="hover:text-blue-600">
            <FaGithub />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
          <svg
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 w-full h-full"
          >
            <defs>
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                  fill="#fff"
                />
              </mask>
            </defs>
            <g mask="url(#mask0)">
              {/* Blue background */}
              <rect width="100%" height="100%" fill="#2563eb" />

              {/* Smaller image inside blob */}
              <image
                href="/bg.png"
                x="12%"      // shift right
                y="10%"       // shift down
                width="75%"  // smaller width
                height="90%" // smaller height
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
          </svg>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;

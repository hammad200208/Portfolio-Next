"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.section
      id="about"
      className="section px-6 py-20 bg-white dark:bg-[#0b1120] text-gray-900 dark:text-gray-200 text-center md:text-left max-w-5xl mx-auto transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="px-4 rounded-2xl bg-blue-600 dark:bg-[#00cc5d] backdrop-blur-md shadow-lg dark:shadow-black/20">
            <Image
              src="/about2.png"
              alt="About"
              width={288}
              height={288}
              className="w-52 md:w-62 rounded-xl object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-blue-600 dark:text-green-400 mb-4 text-center md:text-left">
            About Me
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I&apos;m a passionate MERN Stack developer with experience in building responsive, interactive, and full-stack web applications. Skilled in MongoDB, Express.js, React.js, and Node.js, I focus on writing clean, efficient code and delivering seamless user experiences.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I love solving problems and bringing ideas to life through code.
            Let&apos;s work together to create something amazing!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.section
      id="about"
      className="px-6 pb-10 bg-white dark:bg-[#0b1120] text-gray-900 dark:text-gray-200 max-w-5xl mx-auto transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="px-4 rounded-2xl bg-blue-600 dark:bg-[#00cc5d] shadow-lg">
            <Image
              src="/about.png"
              alt="About"
              width={300}
              height={300}
              className="w-100 rounded-xl object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-blue-600 dark:text-green-400 mb-4">
            About Me
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I’m a MERN Stack Developer focused on building fast, responsive, and
            user-friendly web applications. I specialize in transforming ideas
            and designs into clean, scalable, and high-performance solutions
            using modern web technologies.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            I enjoy solving real-world problems, improving user experience, and
            writing maintainable code that delivers real value.
          </p>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-900 text-center">
              <h3 className="text-xl font-bold text-blue-600 dark:text-green-400">
                1+
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-900 text-center">
              <h3 className="text-xl font-bold text-blue-600 dark:text-green-400">
                10+
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Projects Completed
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-900 text-center">
              <h3 className="text-xl font-bold text-blue-600 dark:text-green-400">
                MERN
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Stack Specialist
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

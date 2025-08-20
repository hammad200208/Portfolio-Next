"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Planto Project",
    image: "/work1.PNG",
    description: "Modern Plants Project built with React and Tailwind CSS.",
    link: "https://github.com/hammad200208/Planto-Project.git",
  },
  {
    title: "Bootstrap Portfolio Project",
    image: "/work2.PNG",
    description:
      "Landing page for a portfolio built with HTML, Bootstrap, and JavaScript.",
    link: "https://github.com/hammad200208/Bootsrap-Project.git",
  },
  {
    title: "Rock Paper Scissors Game",
    image: "/work3.PNG",
    description: "Interactive game with score tracking using Vanilla JS.",
    link: "https://github.com/hammad200208/Rock-Paper-Scissor-Game.git",
  },
];

const Work = () => {
  return (
    <motion.section
      id="work"
      className="py-20 px-6 bg-white text-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-semibold text-blue-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Work
        </motion.h2>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

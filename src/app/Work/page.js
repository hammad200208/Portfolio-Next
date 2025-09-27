"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Planto Project",
    image: "/work1.PNG",
    description: "A modern plant shop website where users can order plants online. Built with React and Tailwind CSS.",
    code: "https://github.com/hammad200208/Planto-Project.git",
    tags: ["React", "Tailwind", "API"],
  },
  {
    title: "Child Book Ai",
    image: "/child.png",
    description: "AI-powered website where users can generate children’s storybooks using prompts. Built with React and AI integration.",
    code: "https://github.com/hammad200208/CHILDBOOKAI",
    tags: ["React", "Tailwind", "API"],
  },
     {
    title: "University Website",
    image: "/university.png",
    description:
      "Fully responsive university website built with HTML, CSS, and JavaScript.",
    code: "https://github.com/hammad200208/Html-Css-Project",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Crumble Landing Page",
    image: "/crumble.png",
    description: "Landing page built with React and Tailwind CSS.",
    code: "https://github.com/hammad200208/Crumble-Project",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Traveling Landing Page",
    image: "/travel.png",
    description:
      "Responsive travel landing page built with Bootstrap. Includes gallery, features, and booking sections.",
    code: "https://github.com/hammad200208/Traveling-Landing-Page",
    tags: ["HTML", "Bootstrap", "CSS"],
  },

  {
    title: "Rock Paper Scissors Game",
    image: "/work3.PNG",
    description: "Interactive game with score tracking using Vanilla JS.",
    code: "https://github.com/hammad200208/Rock-Paper-Scissor-Game.git",
    tags: ["HTML", "CSS", "JavaScript"],
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
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image with hover zoom */}
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Only Code Button */}
                <div>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

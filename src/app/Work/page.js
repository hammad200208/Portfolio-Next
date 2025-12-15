"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Planto Project",
    image: "/work1.PNG",
    description:
      "A modern plant shop website where users can order plants online. Built with React and Tailwind CSS.",
    code: "https://planto-project-9814.vercel.app/",
    tags: ["React", "Tailwind", "API"],
  },
  {
    title: "Resumen Ai",
    image: "/resume.png",
    description:
      "An AI-powered resume builder built with the MERN stack and Tailwind CSS. It helps users generate, edit, and download professional resumes instantly with smart AI suggestions and a modern, responsive design.",
    code: "https://airesume-ruddy.vercel.app/",
    tags: ["Next", "Tailwind", "API"],
  },
  {
    title: "Child Book Ai",
    image: "/child.png",
    description:
      "AI-powered website where users can generate children’s storybooks using prompts. Built with React and AI integration.",
    code: "https://childbook-ai-pink.vercel.app/",
    tags: ["React", "Tailwind", "API"],
  },
  {
    title: "Kashaf Textile Hub",
    image: "/kashaf.png",
    description:
      "Kashaf Textile Hub is a women-led textile & design startup. The Hub aims to help art & design graduates (especially women) who previously lacked access to equipment, industry exposure, mentorship, or a safe professional space.",
    code: "https://github.com/hammad200208/Kashaf-Textile-Hub",
    tags: ["Next", "Tailwind", "API"],
  },
  {
    title: "Crumble Landing Page",
    image: "/crumble.png",
    description: "Landing page built with React and Tailwind CSS.",
    code: "https://github.com/hammad200208/Crumble-Project",
    tags: ["React", "Tailwind"],
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
      className="py-20 px-6 bg-gray-50 dark:bg-[#0b1120] text-gray-900 dark:text-gray-200 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-semibold text-blue-600 dark:text-green-400 mb-12"
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
              className="bg-white dark:bg-gray-900 shadow-md dark:shadow-black/20 rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 group flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image with hover zoom */}
              <div className="w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3 min-h-[60px]">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Only Code Button */}
                <div className="mt-auto">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 dark:bg-green-500 text-white rounded-lg text-sm hover:bg-blue-700 dark:hover:bg-green-600 transition"
                  >
                    View
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

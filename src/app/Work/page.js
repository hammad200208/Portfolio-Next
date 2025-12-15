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
      "An AI-powered resume builder built with the MERN stack and Tailwind CSS.",
    code: "https://airesume-ruddy.vercel.app/",
    tags: ["Next", "Tailwind", "API"],
  },
  {
    title: "Child Book Ai",
    image: "/child.png",
    description:
      "AI-powered website where users can generate children’s storybooks.",
    code: "https://childbook-ai-pink.vercel.app/",
    tags: ["React", "Tailwind", "API"],
  },
  {
    title: "Kashaf Textile Hub",
    image: "/kashaf.png",
    description:
      "Women-led textile & design startup platform.",
    code: "https://github.com/hammad200208/Kashaf-Textile-Hub",
    tags: ["Next", "Tailwind"],
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
      "Fully responsive university website.",
    code: "https://github.com/hammad200208/Html-Css-Project",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Traveling Landing Page",
    image: "/travel.png",
    description:
      "Responsive travel landing page.",
    code: "https://github.com/hammad200208/Traveling-Landing-Page",
    tags: ["HTML", "Bootstrap"],
  },
  {
    title: "Rock Paper Scissors Game",
    image: "/work3.PNG",
    description: "Interactive game with Vanilla JS.",
    code: "https://github.com/hammad200208/Rock-Paper-Scissor-Game.git",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const Work = () => {
  return (
    <motion.section
      id="work"
      className="w-full block py-20 px-6 bg-gray-50 dark:bg-[#0b1120] text-gray-900 dark:text-gray-200 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* HEADING */}
        <motion.h2
          className="text-3xl font-semibold text-blue-600 dark:text-green-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Work
        </motion.h2>

        {/* ✅ MOBILE-FIRST GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-900 shadow-md dark:shadow-black/20 rounded-xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              {/* IMAGE */}
              <div className="w-full h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 text-left flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                {/* TAGS */}
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

                {/* BUTTON */}
                <div className="mt-auto">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 dark:bg-green-500 text-white rounded-lg text-sm hover:bg-blue-700 dark:hover:bg-green-600 transition"
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

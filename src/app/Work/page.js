"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Dental Clinic Management System",
    image: "/dental.png",
    description:
      "Developed a full-stack desktop application for dental clinic management using React.js, Electron, and SQLite, enabling fully offline operation with no cloud dependency or recurring costs. Designed a relational database schema connecting patients, visits, and appointments through foreign keys, with a secure IPC bridge handling all communication between the React frontend and Electron backend. Implemented appointment scheduling, automated billing with PDF invoice generation, real-time dashboard analytics, and a full backup/restore system for data portability.",
    code: "https://www.linkedin.com/posts/mohammad-hammad-778b03258_reactjs-electron-sqlite-activity-7473437323855142913-WI8Y?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD-GHIwBo5sS6m9mDPuHqo4eK1DvK8r7ZBA",
    tags: ["React", "Tailwind", "Electron", "SQLite"],
  },
  {
    title: "Planto",
    image: "/work1.PNG",
    description:
      "A modern plant shop website where users can order plants online. Built with React and Tailwind CSS.",
    code: "https://planto-project-9814.vercel.app/",
    tags: ["React", "Tailwind", "API"],
  },
  {
    title: "Planto Dashboard",
    image: "/work4.png",
    description:
      "Dashboard of planto website where users can accept or reject orders plants online. Built with React and Tailwind CSS.",
    code: "https://planto-dashboard.vercel.app/",
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

        {/* ✅ ALTERNATING LAYOUT */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* IMAGE */}
              <div className="w-full lg:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg dark:shadow-black/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={350}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="w-full lg:w-1/2 text-left">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 dark:bg-green-500 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-green-600 transition duration-300"
                >
                  View Project
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

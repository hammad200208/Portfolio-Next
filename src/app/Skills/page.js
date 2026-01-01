"use client";

import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import {
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "HTML5", level: "95%", width: 95, icon: <FaHtml5 className="text-orange-600 text-3xl" /> },
  { name: "CSS3", level: "90%", width: 90, icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
  { name: "Bootstrap", level: "85%", width: 85, icon: <SiBootstrap className="text-purple-600 text-3xl" /> },
  { name: "Tailwind CSS", level: "80%", width: 80, icon: <SiTailwindcss className="text-cyan-500 text-3xl" /> },
  { name: "JavaScript", level: "85%", width: 85, icon: <FaJs className="text-yellow-500 text-3xl" /> },
  { name: "React.js", level: "80%", width: 80, icon: <SiReact className="text-blue-500 text-3xl" /> },
  { name: "Next.js", level: "75%", width: 75, icon: <SiNextdotjs className="text-black dark:text-white text-3xl" /> },
  { name: "Node.js", level: "75%", width: 75, icon: <SiNodedotjs className="text-green-600 text-3xl" /> },
  { name: "Express.js", level: "70%", width: 70, icon: <SiExpress className="text-gray-700 dark:text-gray-300 text-3xl" /> },
  { name: "MongoDB", level: "70%", width: 70, icon: <SiMongodb className="text-green-700 text-3xl" /> },
  { name: "Mongoose", level: "65%", width: 65, icon: <SiMongoose className="text-red-600 text-3xl" /> },
  {
    name: "Git & GitHub",
    level: "70%",
    width: 70,
    icon: (
      <div className="flex gap-2 text-3xl">
        <SiGit className="text-red-600" />
        <SiGithub className="text-gray-900 dark:text-white" />
      </div>
    ),
  },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="w-full py-20 px-6 bg-gray-50 dark:bg-[#0b1120] transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-600 dark:text-green-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="
                bg-white dark:bg-gray-900
                rounded-xl p-6
                flex flex-col items-center gap-4
                shadow-md dark:shadow-black/30
                hover:shadow-2xl dark:hover:shadow-black/50
                transition-all duration-300
              "
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              {/* CIRCLE */}
              <div className="w-24 h-24">
                <CircularProgressbar
                  value={skill.width}
                  text={skill.level}
                  styles={buildStyles({
                    pathColor: "#2563eb",
                    textColor: "#1e3a8a",
                    trailColor: "#e5e7eb",
                  })}
                />
              </div>

              {/* LABEL */}
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-200">
                {skill.icon}
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

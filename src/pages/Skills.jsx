import React from "react";
import { motion } from "motion/react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiMongodb } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      level: "98%",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      level: "95%",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      level: "98%",
    },
    {
      name: "React",
      icon: <FaReact />,
      level: "80%",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: "75%",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      level: "80%",
    }
  ];

  return (
    <section
      id="skills"
      className="bg-[#111111] text-white py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
            My Expertise
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Skills
            </span>
          </h2>

          <div className="w-20 h-1 bg-purple-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Technologies and tools I use to create modern, responsive
            and interactive web applications.
          </p>
        </motion.div>


        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="group bg-[#181818] border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300"
            >

              {/* Icon + Name */}
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="text-4xl text-purple-500 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {skill.name}
                  </h3>

                </div>

                <span className="text-purple-400 font-semibold">
                  {skill.level}
                </span>

              </div>


              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-800 rounded-full mt-6 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2 + index * 0.08,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                ></motion.div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;
import React from "react";
import { motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#111111] text-white py-20 sm:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* ================= HEADING ================= */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-purple-400 font-semibold tracking-widest uppercase text-sm">
            Get To Know Me
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Me
            </span>
          </h2>

          <div className="w-20 h-1 bg-purple-500 mx-auto mt-5 rounded-full"></div>
        </motion.div>


        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ================= PHOTO ================= */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="relative w-64 h-80 sm:w-72 sm:h-96">

              {/* Purple Glow */}
              <div className="absolute inset-0 bg-purple-600/30 blur-3xl"></div>

              {/* Image */}
              <div className="relative w-full h-full p-[5px] rounded-2xl bg-gradient-to-br from-purple-400 via-purple-600 to-pink-500 shadow-[0_0_50px_rgba(168,85,247,0.25)]">

                <img
                  src="/Myimage.png"
                  alt="Ram Lala Kumar"
                  className="w-full h-full object-cover rounded-2xl border-4 border-[#111111]"
                />

              </div>

              {/* Small Decorative Box */}
              <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-xl bg-purple-600/20 border border-purple-500/40 backdrop-blur-md"></div>

            </div>

          </motion.div>


          {/* ================= ABOUT TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-purple-400 font-medium text-lg mb-2">
              Who I Am
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
              I'm{" "}
              <span className="text-purple-500">
                Ram Lala Kumar
              </span>
              , a Frontend Developer.
            </h3>

            <p className="text-gray-400 mt-6 leading-8 text-base sm:text-lg">
              I'm a passionate Frontend Developer who enjoys creating
              modern, responsive and user-friendly web applications.
              I love turning ideas into clean and interactive digital
              experiences.
            </p>

            <p className="text-gray-400 mt-4 leading-8">
              I work with technologies like React, JavaScript and
              Tailwind CSS. I also enjoy working with APIs and building
              real-world projects to improve my development skills.
            </p>


            {/* ================= SKILLS ================= */}
            <div className="mt-8">

              <h4 className="text-xl font-semibold mb-5">
                My Skills
              </h4>

              <div className="flex flex-wrap gap-3">

                {/* HTML */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-purple-500 transition">
                  <FaHtml5 className="text-orange-500" />
                  <span>HTML</span>
                </div>

                {/* CSS */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-purple-500 transition">
                  <FaCss3Alt className="text-blue-500" />
                  <span>CSS</span>
                </div>

                {/* JavaScript */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-purple-500 transition">
                  <FaJs className="text-yellow-400" />
                  <span>JavaScript</span>
                </div>

                {/* React */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-purple-500 transition">
                  <FaReact className="text-cyan-400" />
                  <span>React</span>
                </div>

                {/* Tailwind */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-purple-500 transition">
                  <SiTailwindcss className="text-cyan-400" />
                  <span>Tailwind</span>
                </div>

                {/* Git */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-purple-500 transition">
                  <FaGitAlt className="text-orange-600" />
                  <span>Git</span>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-purple-500 transition">
                  <FaGithub />
                  <span>GitHub</span>
                </div>

              </div>

            </div>


            {/* ================= BUTTON ================= */}
            <div className="mt-8">

              <a
                href="/resume.pdf"
                download
                className="inline-block px-7 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 hover:scale-105 transition-all duration-300 font-semibold shadow-lg shadow-purple-500/20"
              >
                Download Resume
              </a>

            </div>

          </motion.div>

        </div>


        {/* ================= STATS ================= */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="text-center p-6 rounded-xl bg-[#181818] border border-gray-800 hover:border-purple-500 transition">
            <h3 className="text-3xl font-bold text-purple-500">
              10+
            </h3>
            <p className="text-gray-400 mt-2">
              Projects
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-[#181818] border border-gray-800 hover:border-purple-500 transition">
            <h3 className="text-3xl font-bold text-purple-500">
              5+
            </h3>
            <p className="text-gray-400 mt-2">
              Technologies
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-[#181818] border border-gray-800 hover:border-purple-500 transition">
            <h3 className="text-3xl font-bold text-purple-500">
              100%
            </h3>
            <p className="text-gray-400 mt-2">
              Passion
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-[#181818] border border-gray-800 hover:border-purple-500 transition">
            <h3 className="text-3xl font-bold text-purple-500">
              ∞
            </h3>
            <p className="text-gray-400 mt-2">
              Learning
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
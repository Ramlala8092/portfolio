import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "motion/react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] bg-[#111111] text-white flex items-center overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* ================= LEFT - TEXT ================= */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Ram Lala Kumar
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
              Frontend Developer
              <span className="text-purple-500 ml-2 animate-pulse">
                |
              </span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg max-w-xl mt-6 leading-8 mx-auto md:mx-0">
              I create modern, responsive and interactive web experiences
              using React, JavaScript, Tailwind CSS and modern web
              technologies.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">

              <a
                href="#projects"
                className="px-7 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 hover:scale-105 transition-all duration-300 font-semibold"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-lg border border-purple-500 hover:bg-purple-600 hover:scale-105 transition-all duration-300 font-semibold"
              >
                Contact Me
              </a>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center md:justify-start gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-700 hover:border-purple-500 hover:bg-purple-600 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-700 hover:border-purple-500 hover:bg-purple-600 transition-all duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>

            </div>

          </motion.div>


          {/* ================= RIGHT - IMAGE ================= */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 80, scale: 0.8 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              y: [0, -12, 0],
            }}
            transition={{
              duration: 1,
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >

            <div className="relative">

              {/* PURPLE GLOW */}
              <div className="absolute inset-0 rounded-full bg-purple-600 blur-3xl opacity-30"></div>

              {/* IMAGE */}
              <div
                className="
                  relative
                  w-56 h-56
                  sm:w-64 sm:h-64
                  md:w-72 md:h-72
                  lg:w-80 lg:h-80
                  rounded-full
                  p-1.5
                  bg-gradient-to-b
                  from-purple-400
                  via-purple-600
                  to-pink-500

                  shadow-[0_0_60px_rgba(168,85,247,0.6)]
                "
              >

                <img
                  src="Myimage2.jpeg"
                  alt="Ram Lala Kumar"
                  className="w-full h-full object-cover rounded-full border-4 border-[#111111]"
                />

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>

    <About />
    <Skills />
    <Projects />
    <Contact />
    </>
  );
};

export default Home;
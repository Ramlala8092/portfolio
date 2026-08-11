import React from "react";
import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const Projects = () => {
  const projects = [
    {
      title: "FoodHub",
      description:
        "A modern food delivery website with responsive UI, food categories, offers and interactive components.",
      image: "/FoodHub.png",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "#",
    },

    {
      title: "Cloths Shoping Website",
      description:
        "A responsive shoping website for shoping clothes for all person.",
      image: "Clothes.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ramlala8092/clothes-website",
    },

    {
      title: "Weather App",
      description:
        "A weather application that fetches real-time weather information using a weather API.",
      image: "Weather.png",
      tech: ["JavaScript", "API", "HTML", "CSS"],
      github: "https://github.com/Ramlala8092/weather-app",
    },

    {
      title: "Math Game",
      description:
        "A digital random digit multiplication game built with JavaScript.",
      image: "MathGame.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ramlala8092/Random-Math-Game",
    },

    {
      title: "Tomata",
      description:
        "A responsive food delivery interface with API integration, search and product cards add in carts.",
      image: "/Tomata.png",
      tech: ["HTML", "CSS", "JavaScript", "API", "LoacalStorage"],
      github: "#",
    },

    {
      title: "Alarm",
      description:
        "A clean and responsive Alarm application built using HTML, CSS and JavaScript.",
      image: "alarm.png",
      tech: ["HTML", "CSS", "JavaScript","localstorage"],
      github: "https://github.com/Ramlala8092/alarm-clock",
    },
  ];

  return (
    <section
      id="projects"
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
            My Work
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Projects
            </span>
          </h2>

          <div className="w-20 h-1 bg-purple-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Some of the projects I have built while learning and
            improving my development skills.
          </p>
        </motion.div>


        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10 }}
              className="group bg-[#181818] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300"
            >

              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">

                  <a
                    href={project.github}
                    className="w-11 h-11 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-500"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.live}
                    className="w-11 h-11 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-500"
                  >
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>


              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {project.description}
                </p>


                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                    >
                      {item}
                    </span>
                  ))}

                </div>


                {/* Buttons */}
                <div className="flex gap-3 mt-6">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 hover:border-purple-500 hover:bg-purple-600 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;
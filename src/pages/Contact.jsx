import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        {
          publicKey: "YOUR_PUBLIC_KEY",
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          setStatus("Failed to send message ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#111111] text-white py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
            Get In Touch
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Me
            </span>
          </h2>

          <div className="w-20 h-1 bg-purple-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Have a project or opportunity? Feel free to send me a message.
          </p>
        </motion.div>

        {/* Main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold">
              Let's Work Together
            </h3>

            <p className="text-gray-400 mt-5 leading-8">
              I'm always interested in new projects, opportunities and
              collaborations. If you have an idea, let's discuss it.
            </p>

            {/* Email */}
            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <MdOutlineEmail className="text-2xl text-purple-400" />
              </div>

              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="text-white">
                  ramlalakumar68@gmail.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <IoLocationOutline className="text-2xl text-purple-400" />
              </div>

              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="text-white">Noida, India</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <IoCallOutline className="text-2xl text-purple-400" />
              </div>

              <div>
                <p className="text-gray-500 text-sm">Phone</p>
                <p className="text-white">+91 8092609317</p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#181818] border border-gray-800 rounded-2xl p-6 sm:p-8"
          >
            <form ref={form} onSubmit={sendEmail}>

              {/* Name */}
              <div className="mb-5">
                <label className="block text-gray-300 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-gray-300 mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition"
                />
              </div>

              {/* Subject */}
              <div className="mb-5">
                <label className="block text-gray-300 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Enter subject"
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition"
                />
              </div>

              {/* Message */}
              <div className="mb-5">
                <label className="block text-gray-300 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-[1.02] transition"
              >
                Send Message 🚀
              </button>

              {/* Status */}
              {status && (
                <p className="text-center text-purple-400 mt-4">
                  {status}
                </p>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
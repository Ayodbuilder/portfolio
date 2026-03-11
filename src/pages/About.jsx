// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative min-h-screen flex items-center text-white overflow-hidden px-4 md:px-8 py-16">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

           {/* LEFT SIDE TEXT */}

        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30"
          animate={{ x:[0,120,-120,0], y:[0,-80,80,0] }}
          transition={{ duration:12, repeat:Infinity, ease:"easeInOut" }}
        />

        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"
          animate={{ x:[0,-150,150,0], y:[0,100,-100,0] }}
          transition={{ duration:14, repeat:Infinity, ease:"easeInOut" }}
        />

      </div>

      <motion.div
        className="relative max-w-3xl mx-auto p-6 md:p-10 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl"
        initial={{ opacity:0, y:50 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
        viewport={{ once:true }}
      >

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          About Me
        </h1>

        <p className="text-gray-300 leading-relaxed mb-6">
          I am a Full Stack Developer passionate about building modern,
          responsive, and user-friendly web applications.

          I enjoy solving real-world problems with code and creating digital
          products that combine functionality with clean design.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          My main focus is working with React, JavaScript, and modern web
          development tools to create fast and scalable applications.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
          Skills
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">

          <li>⚡ JavaScript</li>
          <li>⚡ React</li>
          <li>⚡ Node.js</li>
          <li>⚡ HTML & CSS</li>
          <li>⚡ Git & GitHub</li>
          <li>⚡ REST APIs</li>
          <li>⚡ Technical Writing</li>
          <li>⚡ Documentation</li>

        </ul>

      </motion.div>
      {/* RIGHT SIDE IMAGE */}

          <motion.div
            initial={{ opacity:0, scale:0.9 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:1 }}
            className="flex justify-center"
          >

            <img
              src="/Images/victor.png"
              alt="victor"
              className="w-60 md:w-80 rounded-2xl border border-white/10 shadow-2xl hover:scale-105 transition"
            />

          </motion.div>

    </section>
  )
}

import Skills from "../components/Skills"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center text-white overflow-hidden px-4 md:px-8">

        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30"
            animate={{ x: [0,120,-120,0], y: [0,-80,80,0] }}
            transition={{ duration:12, repeat:Infinity, ease:"easeInOut" }}
          />

          <motion.div
            className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"
            animate={{ x:[0,-150,150,0], y:[0,100,-100,0] }}
            transition={{ duration:14, repeat:Infinity, ease:"easeInOut" }}
          />

        </div>

        {/* Hero Container */}
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-10 shadow-xl">

          {/* LEFT SIDE TEXT */}

          <div>

            <motion.h1
              initial={{ opacity:0, y:-50 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:1 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            >
              Hi, I'm <span className="text-blue-500">Victor</span> 👋
            </motion.h1>

            <motion.p
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:0.5, duration:1 }}
              className="text-gray-300 mb-8 text-base md:text-lg"
            >
              I build modern, responsive web applications using React and
              Tailwind CSS. I focus on clean UI, performance, and creating
              impactful digital experiences.

              I also write technical articles to explain complex programming
              concepts in simple ways.
            </motion.p>

            <motion.div
              initial={{ opacity:0, y:30 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.8, duration:1 }}
              className="flex flex-col sm:flex-row gap-4"
            >

              <Link to="/projects">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition w-full sm:w-auto">
                  View Projects
                </button>
              </Link>

              <Link to="/contact">
                <button className="px-6 py-3 border border-gray-500 hover:border-white rounded-lg transition w-full sm:w-auto">
                  Contact Me
                </button>
              </Link>

            </motion.div>

          </div>


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

        </div>

      </section>

      <Skills />
    </>
  )
}

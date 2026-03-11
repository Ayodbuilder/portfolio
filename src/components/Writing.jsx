import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Writing = () => {
  const articles = [
    {
      title: "React Explained Like You’re 5 (No Big Grammar)",
      description: "A beginner friendly explanation of React concepts.",
      link: "https://medium.com/@olayinkavictor68/react-explained-like-youre-5-no-big-grammar-710b02410647"
    },
    {
      title: "Why Most Beginner Developers Feel Stupid (And It’s Not Their Fault)",
      description: "Exploring the psychological aspects of learning to code.",
      link: "https://medium.com/@olayinkavictor68/why-most-beginner-developers-feel-stupid-and-its-not-their-fault-0759d2a8c3af"
    },
    {
      title: "Stop Watching React Tutorials. Build This Instead.",
      description: "A practical approach to learning React by building real projects.",
      link: "https://medium.com/@olayinkavictor68/stop-watching-react-tutorials-build-this-instead-7091bfaec18b"
    },
    {
      title: "How I Solved Some Problems I Faced When Building A Dummy Responsive E-Commerce Website.",
      description: "Breaking down the challenges and solutions encountered.",
      link: "https://medium.com/@olayinkavictor68/how-i-built-a-responsive-e-commerce-website-with-html-css-and-javascript-04463f685259"
    },
    {
      title: "Anomaly in a World of Gods.",
      description: "A fictional story about a world where a human boy was an anomaly.",
      link: "https://www.wattpad.com/story/299486105"
    }
  ];

  return (
    <section className="relative min-h-screen py-12 md:py-16 px-4 md:px-8 text-white overflow-hidden">

      {/* Animated Glowing Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30"
          animate={{ x: [0, 120, -120, 0], y: [0, -80, 80, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"
          animate={{ x: [0, -150, 150, 0], y: [0, 100, -100, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

      </div>

      {/* Glass Container */}
      <motion.div
        className="relative max-w-6xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-10 text-center">
          Technical Writing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {articles.map((article, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-xl transition shadow-lg"
            >

              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {article.title}
              </h3>

              <p className="text-gray-400 mb-4 text-sm md:text-base">
                {article.description}
              </p>

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm md:text-base"
              >
                Read article →
              </a>

            </motion.div>
          ))}

        </div>

      </motion.div>

    </section>
  );
};

export default Writing;

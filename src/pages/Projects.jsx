import { useState } from "react"
import { Github } from "lucide-react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"

function Projects() {

const [selectedProject, setSelectedProject] = useState(null)

const projects = [
{
title:"Developer Portfolio",
description:"A full stack developer portfolio built with React, Tailwind and modern UI design.",
image:"/Images/portfolio.png",
github:"https://github.com/Ayodbuilder/portfolio",
live:"https://portfolio-bits-nine.vercel.app/"
},

{
title:"Loan Management System",
description:"A system that helps financial companies track loans, repayments and customers.",
image:"/Images/loan-system.png",
github:"https://github.com/Ayodbuilder/loan-system",
live:"https://loan-system.vercel.app"
},

{
title:"Task Manager App",
description:"A productivity app where users can create tasks and organize projects.",
image:"/Images/task-manager.png",
github:"https://github.com/Ayodbuilder/task-manager",
live:"https://task-manager.vercel.app"
},

{
title:"Blog Platform",
description:"A blogging platform where users can publish and manage articles.",
image:"/Images/blog.png",
github:"https://github.com/Ayodbuilder/blog-platform",
live:"https://blog-platform.vercel.app"
},

{
title:"API Documentation",
description:"A documentation platform designed for developers to understand APIs easily.",
image:"/Images/docs.png",
github:"https://github.com/Ayodbuilder/api-docs",
live:"https://api-docs.vercel.app"
},

{
title:"AI Content Assistant",
description:"An AI tool that helps users generate content and summarize text.",
image:"/Images/ai-assistant.png",
github:"https://github.com/Ayodbuilder/ai-assistant",
live:"https://ai-assistant.vercel.app"
}
]

return (

<section className="relative min-h-screen py-12 md:py-16 px-4 md:px-8 text-white overflow-hidden">

{/* Background Glow */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

<motion.div
className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30"
animate={{x:[0,120,-120,0],y:[0,-80,80,0]}}
transition={{duration:12,repeat:Infinity,ease:"easeInOut"}}
/>

<motion.div
className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"
animate={{x:[0,-150,150,0],y:[0,100,-100,0]}}
transition={{duration:14,repeat:Infinity,ease:"easeInOut"}}
/>

</div>

{/* Glass Container */}
<div className="relative max-w-6xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-10">

<h1 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
My Projects
</h1>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

{projects.map((project,index)=>(
<motion.div
key={index}
onClick={()=>setSelectedProject(project)}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.5}}
viewport={{once:true}}
className="cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-xl transition transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30 duration-300"
>

<img
src={project.image}
alt={project.title}
className="rounded-lg mb-4 h-40 md:h-48 w-full object-cover"
/>

<h2 className="text-lg md:text-xl font-semibold">
{project.title}
</h2>

<p className="text-gray-400 mt-2 text-sm md:text-base">
{project.description}
</p>

<div className="flex flex-col sm:flex-row gap-3 mt-4">

<a
href={project.github}
target="_blank"
onClick={(e)=>e.stopPropagation()}
className="bg-white text-black px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2"
>
<Github size={16}/>
View Code
</a>

<a
href={project.live}
target="_blank"
onClick={(e)=>e.stopPropagation()}
className="border border-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black text-center"
>
Visit Website
</a>

</div>

</motion.div>
))}

</div>
</div>


{/* Modal */}
<AnimatePresence>

{selectedProject && (

<motion.div
className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
onClick={()=>setSelectedProject(null)}
>

<motion.div
className="bg-gray-900 rounded-2xl max-w-xl w-full p-5 md:p-6 border border-white/10"
initial={{scale:0.8,opacity:0}}
animate={{scale:1,opacity:1}}
exit={{scale:0.8,opacity:0}}
onClick={(e)=>e.stopPropagation()}
>

<img
src={selectedProject.image}
alt={selectedProject.title}
className="rounded-lg mb-4 w-full h-48 md:h-56 object-cover"
/>

<h2 className="text-xl md:text-2xl font-bold mb-2">
{selectedProject.title}
</h2>

<p className="text-gray-400 mb-6 text-sm md:text-base">
{selectedProject.description}
</p>

<div className="flex flex-col sm:flex-row gap-4">

<a
href={selectedProject.github}
target="_blank"
className="bg-white text-black px-4 py-2 rounded-lg flex items-center justify-center gap-2"
>
<Github size={16}/>
View Code
</a>

<a
href={selectedProject.live}
target="_blank"
className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black text-center"
>
Visit Website
</a>

</div>

</motion.div>

</motion.div>

)}

</AnimatePresence>

</section>

)
}

export default Projects

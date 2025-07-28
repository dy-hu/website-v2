"use client"
import ProjectLayout from "./ProjectLayout"
import {motion} from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const ProjectList = ({projects}) => {
  return (
    <motion.div 
    variants={container}
    initial="hidden"
    animate="show"
    className="w-full max-w-full xl:max-w-4xl px-2 sm:px-4 mx-auto lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-stretch">
        {projects.map((project, index) => {
            return <ProjectLayout key={index} {...project} />
        })}
    </motion.div>
  )
}

export default ProjectList
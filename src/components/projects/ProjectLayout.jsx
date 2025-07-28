import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion";

const item = {
  hidden: {
      opacity: 0, y:100
  },
  show: {
      opacity: 1, y:0 
  }
}

const NavLink = motion(Link)

import Image from "next/image";

const ProjectLayout = ({name, description, date, demoLink, image, tags}) => {
  return (
    <NavLink 
    variants={item}
    href={demoLink}
    target="_blank"
    className='group text-sm md:text-base flex flex-col items-center justify-between w-full h-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg transition-all duration-200 cursor-pointer hover:scale-[1.03] hover:shadow-2xl hover:border-accent/60 border border-accent/20' >
        <div className='flex flex-col items-center justify-center w-full space-y-2'>

            {image && (
                <div className='w-full flex items-center justify-center mt-2'>
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg overflow-hidden border border-accent/30 shadow-glass-inset bg-background/30">
                        <Image src={image} alt={name + " project image"} width={400} height={225} className={name === "PLY Sequence Converter" || name === "Hoagie Mail" ? "object-contain w-full h-40 sm:h-48 md:h-56 lg:h-64 bg-white" : "object-cover w-full h-40 sm:h-48 md:h-56 lg:h-64"} />
                    </div>
                </div>
            )}
            <h2 className='text-foreground text-2xl font-extrabold mt-3'>{name}</h2>
            {description && (
                <p className="text-left text-white text-sm mt-2 w-full">{description}</p>
            )}
            {Array.isArray(tags) && tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {tags.map((tag, idx) => (
                    <span key={idx} className="bg-accent/20 border border-accent/40 text-accent px-2 py-1 rounded-full text-xs font-medium shadow-glass-inset">
                      {tag}
                    </span>
                  ))}
                </div>
            )}

        </div>
    </NavLink>
  )
}

export default ProjectLayout
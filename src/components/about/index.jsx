"use client"
import React from 'react'
import ItemLayout from './ItemLayout'

const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
        <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full max-w-7xl mx-auto'>
            
            <ItemLayout className='col-span-full row-span-2 flex-col items-start'>
                {/* <h2 className='text-2xl text-left w-full capitalize'>
                    Princeton CS Alum 
                </h2> */}

                <p className='text-light text-base sm:text-lg md:text-xl'>I&apos;m a software engineer at GitHub Copilot. I like volleyball, working out, and traveling, and am a recent fan of the New York Knicks. As an engineer, I like wearing multiple hats, but I am most interested in the emerging applications of artificial intelligence &amp; other impactful and tangible systems. Despite a short semester escape through Singapore, I spent most of my life in New Jersey, having graduated Magna Cum Laude with a B.A. in Computer Science from Princeton.

<br /> <br /> At school, I completed several research projects -- namely, Natural Language Processing research under Prof. Christiane Fellbaum, Cryo-EM Graphics research under Prof. Ellen Zhong, and my thesis on the path dependence of transit infrastructure under Prof. Robert Fish.

<br /> <br /> Please feel free to shoot me a message if you&apos;d like to chat! </p>
            </ItemLayout>


            <ItemLayout className='col-span-full'>
                <img className='w-full h-auto' src="https://skillicons.dev/icons?i=angular,blender,bootstrap,c,css,django,git,gitlab,html,java,js,jquery,mysql,nextjs,nodejs,npm,postgres,postman,py,react,ruby,spring,sqlite,solidity,tailwind,ts" alt="dy-hu" loading="lazy" />
            </ItemLayout>

        </div>
    </section>
  )
}

export default AboutDetails
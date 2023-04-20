import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full 
    justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            {projects.map((project, i) => (
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-center p-20 md:p-44 h-screen"
                key={i}>
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    src="https://www.soluxions-magazine.com/wp-content/uploads/2018/06/CTG-TESTING.JPG.png"
                    alt=""
                    />

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#F7AB0A]/50">
                                Case study {i + 1} of {projects.length}:
                            </span> 
                            UPS clone
                        </h4>

                        <p className="text-lg text-center md:text-left">
                        Lorem ipsum dolor sit amet. Aut quidem perspiciatis et dolor doloremque ut animi 
                        minus ex voluptatibus nihil! Sit nemo nemo vel vero debitis est quos ipsa. 
                        Hic eius odio 33 earum voluptatem et dolores dolorem quo quam laborum sit rerum quas et sint voluptas 
                        cum illum molestiae. 
                        Ea culpa nesciunt ut possimus culpa hic officiis repellat et earum incidunt.

                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  )
}
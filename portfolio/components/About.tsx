import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{ opacity:0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>

        <motion.img 
            initial={{
                x:-200,
                opacity: 0,
            }}
            transition={{
                duration:1.2
            }}
            whileInView={{ opacity: 1,x: 0 }}
            viewport={{ once: true}}
            src="https://pbs.twimg.com/profile_images/1646978345555353600/7Gb_WTHd_400x400.jpg"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Here is a {" "}
                <span className="underline decoration-[#F7AB0A]/50">little</span>{" "} 
                background
                </h4>
                <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
                Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. 
                Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. 
                Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. 
                Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. 
                </p>
        </div>
    </motion.div>
    
  )
}
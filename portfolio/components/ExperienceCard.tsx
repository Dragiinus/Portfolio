import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px] 
    md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 
    cursor-pointer transition-opacity dutation-200 overflow-hidden">
        <motion.img
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ dutation: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] 
            object-cover object-center" 
            src="https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2021/03/new_icon.png?key=986d91f3"
            alt=""
        />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Logistic Supervisor</h4>
            <p className="font-bold text-2xl mt-1">Amazon Transport</p>
            <div className="flex space-x-2 my-2">
                <img
                    className="h-10 w-10 rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt=""
                />
                <img
                    className="h-10 w-10 rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt=""
                />
                <img
                    className="h-10 w-10 rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt=""
                />
            </div>
            <p className="uppercase py-4 text-gray-300">Started work... - Ended...</p>

            <ul className="list-disc space-y-2 ml-5 text-lg">
                <li>Summary Point</li>
                <li>Summary Point</li>
                <li>Summary Point</li>
                <li>Summary Point</li>
                <li>Summary Point</li>
            </ul>

        </div>
    </article>
  )
}
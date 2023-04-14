import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name's Melvin",
            "Guy-who-loves-Coffe.tsx",
            "ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img 
            className="relartive rounded-full h-32 w-32 mx-auto"
            src="https://media.licdn.com/dms/image/D4E03AQHgRfS5E7HPnA/profile-displayphoto-shrink_800_800/0/1668516991401?e=1686787200&v=beta&t=EQJ1wtjc4tAuUEH6WqvDAwS2gk4v7oNyixSLqeQ3BTg" 
            alt="Photo de Melvin" 
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Web Developer
                </h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                <span className="ar-3">{text}</span>
                <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className="pt-5">
                    <Link href="#About">
                    <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm 
                        tracking-widest text-gray-500 transition-all 
                        hover:border-[#F7AB0A]/40 hover:text-[#FAB0A]/40">
                        About
                    </button>
                    </Link>

                    <Link href="#experience">
                    <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm 
                        tracking-widest text-gray-500 transition-all 
                        hover:border-[#F7AB0A]/40 hover:text-[#FAB0A]/40">
                        Experience
                    </button>
                    </Link>

                    <Link href="#skills">
                    <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm 
                        tracking-widest text-gray-500 transition-all 
                        hover:border-[#F7AB0A]/40 hover:text-[#FAB0A]/40">
                        Skills
                    </button>
                    </Link>

                    <Link href="#projects">
                    <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm 
                        tracking-widest text-gray-500 transition-all 
                        hover:border-[#F7AB0A]/40 hover:text-[#FAB0A]/40">
                        Projects
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
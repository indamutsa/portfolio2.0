import React from 'react'
import { motion } from 'framer-motion'
import Project from './ContactMe'

type Props = {}

export default function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
            <div className="w-full relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]">
                {projects.map((p, i) => (
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img
                            initial={{ x: -300, opacity: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            src="netflix-responsive-removebg-preview.png" alt="" height="500" width="500" />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-3xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">Case Study {i + 1} of {projects.length}:</span>  UPS clone</h4>
                            <p className=" text-lg text-center md:text-left">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur recusandae sed vel quidem nihil maiores, id tenetur aspernatur omnis voluptatum. Dolor qui perspiciatis consectetur excepturi ipsam eligendi provident blanditiis tempore.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean
}

export default function Skill({ directionLeft }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                src="https://images.unsplash.com/photo-1608228435670-11cb5a39b066?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"

            />
            <div className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black opacity-100">
                        100%
                    </p>
                </div>
            </div>
        </div>
    )
}
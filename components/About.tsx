import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({ }: Props) {
    return (
        <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center scroll-smooth" >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
            < motion.img
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                src={"https://images.unsplash.com/photo-1608228435670-11cb5a39b066?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
                alt=''
            />
            <div className="space-y-10 md:px-10">
                <h4 className="text-4xl  font-semibold">
                    Here is a <span className="underline decoration-[#f7ab0a]">little</span>  background
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tenetur beatae rerum id ad reprehenderit temporibus officia iusto, nostrum dolorem distinctio, aperiam sequi consectetur vero fugiat voluptatem? Accusantium debitis dicta non minus. Modi quia totam reprehenderit aliquid odio rem dolore corporis cum magnam, earum asperiores? Voluptatum labore id ducimus ut aut atque nam porro optio? Fugiat distinctio minima ea reiciendis eligendi maiores doloribus dolores? Accusamus similique aliquam illum cupiditate, quasi at id ex sunt cum deleniti perferendis, saepe molestias quia repellat eius placeat soluta provident mollitia fugiat harum non, ducimus inventore minima a. Quos magni eligendi libero explicabo natus iusto.
                </p>
            </div>
        </div>
    )
}
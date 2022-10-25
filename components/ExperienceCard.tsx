import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                src="https://images.pexels.com/photos/1337382/pexels-photo-1337382.jpeg?cs=srgb&dl=pexels-magda-ehlers-1337382.jpg&fm=jpg&_gl=1*1bh02ii*_ga*MTU5NzI5MjM3MC4xNjY2NzExNjE0*_ga_8JE65Q40S6*MTY2NjcxMTYxNC4xLjEuMTY2NjcxMTYzNi4wLjAuMA.."
                className="w-32 h-32 rounded-full xl:w-[200px] object-cover object-center"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                alt=""
            />
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">CEO of PAPERCT</h4>
                <p className="text-2xl font-bold mt-1">PAPERCT</p>
                <div className=" flex space-x-2 my-2">
                    <img src="https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""
                        className="h-10 w-10 rounded-full"
                    />           <img src="https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""
                        className="h-10 w-10 rounded-full"
                    />           <img src="https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""
                        className="h-10 w-10 rounded-full"
                    />
                    {/* Tech used... */}
                    {/* Tech used... */}
                    {/* Tech used ... */}
                    {/* Tech used ... */}
                    {/* Tech used ... */}
                </div>
                <p className="uppercase py-5 text-gray-500">Started work... - Ended...</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Summary points Summary pointsSummary pointsSummary points</li>
                    <li>Summary points Summary pointsSummary pointsSummary points</li>
                    <li>Summary points Summary pointsSummary pointsSummary points</li>
                    <li>Summary points Summary pointsSummary pointsSummary points</li>
                    <li>Summary points Summary pointsSummary pointsSummary points</li>
                </ul>
            </div>
        </article>
    )
}
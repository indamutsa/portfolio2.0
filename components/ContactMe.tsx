import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type Props = {}

export default function ContactMe({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href =
            `mailto:arsene@indamutsa.net?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-6xl px-10 justify-evenly items-center mx-auto">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-3xl font-semibold text-center">
                    I have got just what you need <br />
                    <span className="decoration-[#F7AB0A] underline">Let's Talk</span>
                </h4>
                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">+123456789</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">arsene@indamutsa.net</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">123 Developer Lane</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto" >
                    <div className="flex space-x-2" >
                        <input {...register("name")} placeholder="Name" className="contactInput " type="text" />
                        <input  {...register("email")} placeholder="Email" className="contactInput " type="email" />
                    </div>
                    <input  {...register("subject")} placeholder="Subject" className="contactInput " type="text" />
                    <textarea  {...register("message")} placeholder="Message" className="contactInput " />
                    <button placeholder="Name" className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg" type="submit">submit</button>

                </form>
            </div>
        </div>
    )
}
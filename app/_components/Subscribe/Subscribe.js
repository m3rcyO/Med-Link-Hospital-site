import React from 'react';
import Image from 'next/image';
import { RiMailSendLine } from "react-icons/ri";

function Subscribe() {
    return (
        <div className="bg-white h-auto m-8 rounded-lg lg:mb-20 lg:mt-20  shadow-lg lg:flex lg:max-w-5xl lg:mx-auto lg:min-h-[400px]">
            <div className="lg:w-4/5">
                <Image
                    src="https://res.cloudinary.com/dlerylpi4/image/upload/v1730880891/nurses-smiling-together-hospital_y1aexr.jpg"
                    width={600} height={800}
                    className="object-cover h-full rounded-lg lg:rounded-none"
                    alt="Nurses smiling together"
                />
            </div>
            <div className="bg-[#E0ECDE] flex flex-col justify-center items-center p-8 lg:w-4/5">
                <RiMailSendLine size={30} className="mt-5" />
                <h2 className="font-domaine font-bold text-3xl text-center py-4 lg:text-4xl">Subscribe to our latest news</h2>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border-b-[1px] font-bold font-proxima text-black bg-transparent border-slate-900 
                               focus:border-blue-500 focus:outline-none w-4/5 p-3 mb-4 lg:mt-5"
                />
                <button className="bg-customGreen text-white font-domaine px-8 py-3 font-bold rounded-full mt-4">
                    Subscribe
                </button>
            </div>
        </div>
    );
}

export default Subscribe;
import React from "react";
import { offers } from "../Fourth-data";
import Image from "next/image";
import "../../globals.css";

const Card = ({ name, imageUrl, heading, body }) => {
    return (
        <div className="relative flex flex-col items-center mb-20">
            <Image
                src={imageUrl}
                alt={name}
                width={400}
                height={250}
                className="rounded-sm object-cover w-[350px] h-[250px] mt-4 mb-4"
            />
            <div className="bg-white border-l-4 border-sky-300 absolute top-[70%] lg:top-[80%] rounded-sm left-[10px] w-[85%] mx-6 p-4 shadow-md">
                <h3 className="text-lg font-domaine font-semibold">{heading}</h3>
                <p className="font-proxima mt-2">{body}</p>
            </div>
        </div>
    );
};


const Servic = () => {
    return (
        <div className='bg-[#f5fbff] min-h-screen flex flex-col items-center gap-10 py-2'>
            <h2 className='text-3xl lg:text-4xl font-domaine font-bold text-center px-4 pt-10 text-line'> Explore our wide range of healthcare services </h2>
            <p className='text-lg lg:text-2xl font-proxima text-center px-6'>
                We offer a comprehensive suite of services to promote your well-being.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-between lg:px-8 gap-8 p-4 w-full">
                {offers.map((offer) => (
                    <Card
                        key={offer.id}
                        name={offer.name}
                        imageUrl={offer.imageUrl}
                        heading={offer.heading}
                        body={offer.body}
                    />
                ))}
            </div>


            <div className="pb-4 lg:pb-20"></div>
        </div>
    );
}

export default Servic
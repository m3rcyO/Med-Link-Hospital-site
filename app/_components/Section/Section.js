import React from 'react'
import Image from 'next/image'

import "../../globals.css"

function Section({ imageUrl, heading, description }) {
    return (
        <div className='relative flex justify-center items-center h-[60vh] lg:h-[100vh] mb-20 lg:mb-20'>
            <div className='relative w-full lg:flex lg:items-center lg:justify-center'>
                <Image src={imageUrl} width={1500} height={400} className='w-full lg:w-[1100px] lg:h-[400px] lg:object-cover' />
            </div>
            <div className='absolute w-[90%] max-w-[350px] h-auto bg-customGreen p-5 rounded-sm top-[95%] transform -translate-y-1/2 
            md:top-[85%] lg:max-w-[420px] lg:h-[320px] lg:top-[50%] lg:right-4 lg:p-10'>
                <h1 className='font-domaine text-white text-lg md:text-xl lg:text-2xl'>
                    {heading}
                </h1>
                <p className='font-proxima text-white text-sm mt-4 md:text-base'>
                    {description}
                </p>
            </div>
        </div>
    );
}








export default Section
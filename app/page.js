import React from 'react'
import Image from 'next/image'
import homePic from "./images/homePic.jpg"
import "./globals.css";
import Stats from './_components/Stats/Stats';


function page() {
  return (
    <div className='lg:flex lg:flex-row-reverse lg:h-[50%]'>

      <div className='relative lg:flex-1'>
        <Image src={homePic} className='h-full w-full object-cover' />

        <div className="absolute inset-0 bg-black opacity-50 lg:hidden"></div>
      </div>
      <div className='absolute inset-0 flex flex-col items-center justify-center gap-6 mx-2 mt-32 lg:relative lg:mt-0 lg:bg-customGreen lg:flex-1 lg:p-12 lg:w-full lg:m-0 lg:gap-8'>
        <h1 className="font-domaineBold font-[900] text-4xl mx-4 text-white lg:text-left lg:text-5xl">Consult a Doctor Anytime, Anywhere</h1>
        <p className="font-proximaBold text-[16px]  mx-2 text-white lg:text-left lg:text-lg">
          Providing clinical, financial, and emotional support through the most vulnerable and joyful life stages. Proven outcomes, greater independence, and increased quality of life for high-risk individuals.
        </p>
        <div className='hidden lg:flex gap-20 mt-10'>
          <Stats number='20+' label='Years of excellence' />
          <Stats number='56+' label='Case Completed' />
          <Stats number='100%' label='Case Satisfaction' />
        </div>
      </div>
    </div>
  );
}




export default page
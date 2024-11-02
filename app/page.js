import React from 'react'
import Image from 'next/image'
import homePic from "./images/homePic.jpg"
import "./globals.css";
import Stats from './_components/Stats/Stats';
import Section from './_components/Section/Section';
import Services from './_components/Services/Services';
import Faq from './_components/Faq/Faq';


function page() {
  return (
    <>
      <div className='lg:flex lg:flex-row-reverse lg:h-[125vh]'>

        <div className='relative lg:flex-1'>
          <Image src={homePic} className='h-full  w-full object-cover ' />

          <div className="absolute inset-0 bg-black opacity-50 lg:hidden"></div>
        </div>
        <div className='absolute inset-0 flex flex-col items-center justify-center gap-6 mx-2 mt-32 lg:relative lg:mt-0 lg:bg-customGreen lg:flex-1 lg:p-12 lg:w-full lg:m-0 lg:gap-8 lg:pb-6'>
          <h1 className="font-domaineBold font-[900] text-4xl mx-4 text-white lg:text-left lg:text-5xl">Consult a Doctor Anytime, Anywhere</h1>
          <p className="font-proximaBold text-[15px]  mx-2 text-white lg:text-left lg:text-[16px]">
            Providing clinical, financial, and emotional support through the most vulnerable and joyful life stages. Proven outcomes, greater independence, and increased quality of life for high-risk individuals.

          </p>
          <div className='hidden lg:flex gap-20 mt-10'>
            <Stats number='20+' label='Years of excellence' />
            <Stats number='56+' label='Case Completed' />
            <Stats number='100%' label='Case Satisfaction' />
          </div>
        </div>
      </div>
      <h1 className='font-domaineBold bg-[#F5fbff] text-center text-[30px] text-[#263633] p-4 lg:p-0
      lg:pt-20 lg:text-5xl lg:text-center'>See what partnering with Med-Link can do for you </h1>
      <Services className="bg-[#F5fbff]" />
      <h1 className='text-customGreen font-domaine text-4xl lg:text-6xl text-center pt-10'> Our Vision </h1>
      <Section
        imageUrl="https://res.cloudinary.com/dlerylpi4/image/upload/v1729970503/sectionPic_uhuswt.jpg"
        heading="Compassionate Care, Anytime, Anywhere"
        description="At Med-Link, we are dedicated to providing seamless access to quality healthcare by connecting patients with experienced doctors wherever they are. Our mission is to ensure that compassionate, personalized medical support is always within reach."
      />
      <Section
        imageUrl="https://res.cloudinary.com/dlerylpi4/image/upload/v1729970780/pexels-olly-3952375_j1pig9.jpg"
        heading="Committed to Your Health, Every Step of the Way"
        description="Med-Link strives to bridge the gap between patients and healthcare providers, offering reliable, convenient access to medical expertise when you need it most. We are here to support you with quality care, helping you stay healthy and informed on every step of your journey."
      />
      <Faq />

    </>
  );
}




export default page
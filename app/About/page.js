import React from 'react'
import Pager from '../_components/Pager/Pager'
import "../globals.css"
import Image from 'next/image'
import Buttons from '../_components/Buttons/Buttons'
import { RiCheckboxMultipleLine } from "react-icons/ri";
import Departments from '../_components/Departments/Departments'
import { FaQuoteLeft } from "react-icons/fa";
import Subscribe from '../_components/Subscribe/Subscribe'
import Doctors from '../_components/Doctors/Doctors'

export default function page() {
    return (
        <div className='relative'>
            <Pager />
            <div className='bg-white h-[130vh] lg:h-[130vh] lg:flex lg:px-8 lg:pt-10'>
                <div className='lg:flex-1 lg:relative'>
                    <Image src="https://res.cloudinary.com/dlerylpi4/image/upload/v1730133729/Home_wimhzk.jpg" width={600}
                        height={600} className='lg:w-[350px] lg:h-[400px] lg:object-cover' />
                    <Image src="https://res.cloudinary.com/dlerylpi4/image/upload/v1730133759/surgery_ki4i4g.jpg" width={300} height={500} className='hidden lg:block lg:absolute lg:top-40 lg:right-20' />
                </div>
                <div className='p-5 lg:flex-1'>
                    <p className='underline-text font-[600px] text-2xl font-domaine my-8'> About US </p>
                    <p className='font-proxima text-gray-500 leading-8 mb-5'>
                        Welcome to Med-Link, where quality healthcare meets accessibility. Founded on the principles of compassion, innovation, and patient-first care, Med-Link aims to bridge the gap between patients and healthcare providers worldwide. Our mission is to deliver comprehensive medical support—from primary care consultations to specialized treatments—through a seamless, digital experience.
                    </p>
                    <ul className='flex flex-col gap-3 text-gray-500 mb-6'>
                        <li>
                            <RiCheckboxMultipleLine size={25} color='green' className='inline' />
                            <p className='inline ml-4 font-proxima'>
                                Personalized care that prioritizes patient needs.
                            </p>
                        </li>
                        <li>
                            <RiCheckboxMultipleLine size={25} color='green' className='inline' />
                            <p className='inline ml-4 font-proxima'>
                                Connecting patients with trusted doctors.
                            </p>
                        </li>
                        <li>
                            <RiCheckboxMultipleLine size={25} color='green' className='inline' />
                            <p className='inline ml-4 font-proxima'>
                                Accessible, compassionate healthcare for all.
                            </p>
                        </li>
                    </ul>

                    <Buttons text="Learn More" className="mt-5" />
                </div>
            </div>
            <Departments />
            <div className='relative h-[70vh] lg:h-[91vh]'>
                <Image
                    src="https://res.cloudinary.com/dlerylpi4/image/upload/v1730300901/empty-modern-arms-crossed-corporate-physician_pfqhw8.jpg"
                    height={600}
                    width={1500}
                    className='object-cover w-full h-full'
                />

                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 lg:px-0">
                    <FaQuoteLeft color='white' size={32} className='mb-4' />
                    <p className='text-white font-domaineBold text-xl lg:text-2xl max-w-3xl'>
                        Medicine is not only a science; it is also an art. It does not consist of compounding pills and plasters; it deals with the very processes of life, which must be understood before they may be guided.
                    </p>
                    <p className='text-line-two text-white text-lg italic'>
                        Paracelsus
                    </p>
                </div>
            </div>
            <Subscribe />
            <section id='our-doctors'>
                <Doctors />
            </section>

        </div>
    )
}

import React from 'react'
import Pager from '../_components/Pager/Pager'
import "../globals.css"
import Image from 'next/image'
import Buttons from '../_components/Buttons/Buttons'
import { RiCheckboxMultipleLine } from "react-icons/ri";
import Departments from '../_components/Departments/Departments'

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
        </div>
    )
}

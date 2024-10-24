import React from 'react'
import Image from 'next/image'
import patientImg from '../../images/sectionPic.jpg'
import "../../globals.css"

function Section() {
    return (
        <div className='bg-customTeal flex flex-col justify-center items-center p-5 lg:flex-row lg:gap-5'>
            <div className='flex-1'>
                <p className='text-white text-3xl font-domaine border-b-2 border-spacing-10 border-black border-opacity-25 pb-10 lg:text-4xl lg:border-hidden'>
                    An end-to-end platform supporting members in 175+ countries</p>
                <div className='rounded-md my-7'>
                    <Image src={patientImg} width={400} height={500} alt='Patient receiving treatment'
                        className='w-[350px] rounded-md lg:w-full' />
                </div>
            </div>
            <div className='flex-1'>
                <ol className='font-domaine list-none section-list lg:flex lg:flex-col lg:gap-14 lg:mt-20 '>
                    <li className='section-text border-spacing-10 mt-8 lg:text-3xl
                    lg:border-black lg:border-t-2 lg:border-opacity-25 lg:border-spacing-5'>Unparalled access</li>
                    <li className='section-text lg:text-3xl'> Aligned benefit management </li>
                    <li className='section-text lg:text-3xl'> Health equity on a global scale </li>
                    <li className='section-text lg:text-3xl'> Improved outcomes and costs</li>
                </ol>
            </div>


        </div>
    )
}

export default Section
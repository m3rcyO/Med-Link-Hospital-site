import React from 'react'
import { FaHouse } from "react-icons/fa6";
import "../../globals.css"
import Link from 'next/link';

export default function Pager() {
    return (
        <div className='bg-[#4d9493] h-[30vh] lg:h-[65vh] flex gap-2 flex-col items-center justify-center opacity-60'>
            <p className='text-4xl lg:text-5xl text-white font-domaineBold font-extrabold'> About Us </p>
            <div className='text-white flex gap-2'>
                <FaHouse size={20} className='' />
                <Link href="/" className='cursor-pointer'>
                    Home
                </Link>
                <ul className='bullet list-disc '>
                    <li className='ml-4'> About Us </li>
                </ul>
            </div>
        </div>
    )
}

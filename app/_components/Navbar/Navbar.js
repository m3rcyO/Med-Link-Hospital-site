"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import logo from './logo.webp'
import Buttons from '../Buttons/Buttons'
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

export default function Navbar() {
    const [display, setDisplay] = useState(false);

    return (
        <div className='lg:mx-auto lg:my-6 lg:absolute lg:w-[1200px] lg:left-5 z-50'>
            <header className='bg-white px-3 py-3 relative lg:rounded-sm'>
                <div className='flex items-center justify-between'>
                    <Image src={logo} width={150} />
                    <div style={{ color: 'green' }} className='lg:hidden'>
                        {!display ? (
                            <FaBars onClick={() => setDisplay(true)} size={30} />
                        ) : (<FaXmark onClick={() => setDisplay(false)} size={30} />
                        )}
                    </div>
                    <nav className={`w-full bg-white absolute left-0 top-[62px] cursor-pointer lg:flex lg:relative
                lg:top-0 lg:items-center lg:justify-end lg:mx-auto z-50
                ${!display ? "hidden" : ""}
                    `}>
                        <ul className="flex flex-col list-none py-4 px-7 text-black font-domaine 
                    cursor-pointer lg:flex-row lg:items-center lg:py-1 gap-10">
                            <li className='hover:text-customTeal'>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li className='hover:text-customTeal'  >
                                <Link href="/About">
                                    About
                                </Link>
                            </li>
                            <li className='hover:text-customTeal'  >
                                <Link href="/services">
                                    Services
                                </Link>
                            </li>
                            <li className='hover:text-customTeal' >
                                <Link href="/contact">
                                    Testimonial
                                </Link>
                            </li>
                            <Buttons text="Contact" />
                        </ul>
                    </nav>

                </div>

            </header >
        </div>
    );
}


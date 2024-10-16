import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import logo from './logo.webp'
import Buttons from '../Buttons/Buttons'
function Navbar() {
    return (
        <nav className='bg-white lg:absolute lg:left-0 lg:top-0 lg:right-0 lg:mx-auto lg:my-5 flex items-center p-2 justify-between max-w-6xl rounded-md font-proxima text-black font-bold py-2 z-50 px-5'>

            <Image src={logo} width={150} />
            <ul className="flex list-none gap-9 items-center px-7">
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/services">
                        Services
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Testimonial
                    </Link>
                </li>
            </ul>
            <Buttons text="Contact Now" />
        </nav>
    );
}

export default Navbar;
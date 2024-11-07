import React from 'react';
import { RiCheckboxMultipleLine } from "react-icons/ri";

const Form = () => {
    return (
        <div className="bg-[#F5FBFF] min-h-screen flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg p-8">


                <div className="flex flex-col text-center lg:text-left">
                    <h2 className="text-4xl font-bold text-customGreen mb-4 font-domaine">Got a question?</h2>
                    <p className="text-gray-600 text-lg font-proxima">
                        We are here to help with any inquiries or support you may need. Reach out to us, and a member of our team will get back to you promptly.
                    </p>
                    <ul className='flex flex-col gap-3 lg:gap-5 text-gray-500 mt-5 lg:mt-7'>
                        <li>
                            <RiCheckboxMultipleLine size={25} color='green' className='inline' />
                            <p className='inline ml-4 font-proxima'>
                                Quick responses within 24 hours
                            </p>
                        </li>
                        <li>
                            <RiCheckboxMultipleLine size={25} color='green' className='inline' />
                            <p className='inline ml-4 font-proxima'>
                                Personalized assistance for your queries
                            </p>
                        </li>
                        <li>
                            <RiCheckboxMultipleLine size={25} color='green' className='inline' />
                            <p className='inline ml-4 font-proxima'>
                                Secure communication and data handling
                            </p>
                        </li>
                        <li>
                            <RiCheckboxMultipleLine size={25} color='green' className='inline' />
                            <p className='inline ml-4 font-proxima'>
                                Friendly support to help guide you
                            </p>
                        </li>
                    </ul>

                </div>

                <form className="flex flex-col gap-6 font-proxima"
                    action="https://formsubmit.co/62cd6fc98e8c614d9365d3357d536f96"
                    method="POST"
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-customTeal"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-customTeal"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        name="text"
                        className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-customTeal"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-customGreen text-white font-bold py-3 rounded-md hover:bg-customTeal transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;

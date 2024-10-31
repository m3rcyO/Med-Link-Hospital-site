import React from 'react';

function Subscribe() {
    return (
        <div className="bg-white flex flex-col items-center justify-center py-10 px-5 lg:h-[60vh]">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 text-center font-domaineBold">
                Subscribe to our Newsletter
            </h2>
            <p className="text-gray-600 lg:text-xl text-center mb-6 font-proxima">
                Stay updated with our latest news and offers. Enter your email below to subscribe.
            </p>
            <div className="relative flex items-center w-full font-proxima max-w-lg">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full py-3 pl-4 pr-28 border border-gray-300 rounded-full text-gray-700 outline-none shadow-md"
                />
                <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-customTeal text-white py-2 px-6 rounded-full">
                    Subscribe
                </button>
            </div>
        </div>
    );
}

export default Subscribe;

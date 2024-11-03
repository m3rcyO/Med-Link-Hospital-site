import React from 'react';


const Video = () => {
    return (
        <div className='relative h-screen w-full text-center text-white bg-black bg-opacity-40 '>
            <video src="https://res.cloudinary.com/dlerylpi4/video/upload/v1730558533/hospital-vid_smnozx.mp4"
                className="absolute inset-0 w-full  h-full object-cover"
                autoPlay loop muted playsInline />
            <div className="relative z-10 flex h-screen flex-col items-center justify-center text-center
             text-white bg-black bg-opacity-40 p-4 ">
                <h2 className="text-3xl lg:text-5xl font-domaine font-bold mb-4">Compassionate Care, Anytime</h2>
                <p className="text-lg lg:text-2xl font-proxima mb-6">
                    Experience seamless healthcare access with Med-Link. Connect with top doctors anytime, anywhere.
                </p>

            </div>

        </div>
    );
};

export default Video;










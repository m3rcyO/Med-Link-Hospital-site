"use client"
import React from "react";
import Image from "next/image";
import { BsArrow90DegLeft } from "react-icons/bs";
import { BsArrow90DegRight } from "react-icons/bs";
import { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import "../../globals.css"

const testimonials = [
    {
        imageUrl: "https://res.cloudinary.com/dlerylpi4/image/upload/v1730672576/patient_2_wtpb5b.jpg",
        name: "Woman smiling",
        text: "The doctors went above and beyond to ensure I received the best possible treatment. I am grateful for their dedication and would trust them with my health any day.",
        person: "Amanda Ezeh"
    },
    {
        imageUrl: "https://res.cloudinary.com/dlerylpi4/image/upload/v1730672588/patient_1_lcvvq1.jpg",
        name: "Man smiling",
        text: "The medical team provided exceptional care and attention, making me feel valued and supported throughout my treatment. Their expertise and kindness have earned my complete trust.",
        person: "Kelechi Okoro"
    },
    {
        imageUrl: "https://res.cloudinary.com/dlerylpi4/image/upload/v1730672577/patient_3_lxq2ey.jpg",
        name: "Woman smiling",
        text: "I cannot thank the medical team at Medical Institution enough for their exceptional care and expertise. From the moment I walked in, I felt reassured and supported.",
        person: "Esther Adebayo"
    }
]

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        )
    }

    const { imageUrl, text, person } = testimonials[currentIndex];

    return (
        <div className="flex flex-col lg:flex-row items-center bg-white p-8 lg:p-4 py-20 lg:h-[750px]">

            <div className="w-full lg:flex-1 flex justify-center">
                <Image
                    src={imageUrl}
                    alt={person}
                    width={700}
                    height={700}
                    className="object-cover w-full h-[400px] lg:w-[500px] lg:h-[500px]"
                />
            </div>

            <div className="w-full lg:flex-1">
                <h2 className="text-lg my-5 text-gray-400 font-semibold font-domaine">TESTIMONIALS</h2>
                <p className="text-[#160828] font-bold text-2xl lg:text-4xl mb-2 font-proximaBold">{text}</p>
                <p className="text-[#160828] text-lg font-proxima font-semibold mt-4 lg:mt-10">{person}</p>
                <div className="flex gap-2">
                    <IoStarSharp color="orange" size={20} />
                    <IoStarSharp color="orange" size={20} />
                    <IoStarSharp color="orange" size={20} />
                    <IoStarSharp color="orange" size={20} />
                    <IoStarSharp color="orange" size={20} />
                </div>
                <div className="flex justify-end gap-4 mt-4 lg:pr-10">
                    <button onClick={handlePrev} aria-label="Previous testimonial" className="p-4 bg-slate-200 rounded-full
                    hover:bg-sky-300">
                        <BsArrow90DegLeft size={24} />
                    </button>
                    <button onClick={handleNext} aria-label="Next testimonial" className="p-4 bg-slate-200 rounded-full
                    hover:bg-sky-300">
                        <BsArrow90DegRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;

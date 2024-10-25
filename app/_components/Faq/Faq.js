"use client"

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import React from 'react'

export default function Faq() {
    const [open, setOpen] = useState(null);

    const toggleFaq = (index) => {
        setOpen(open === index ? null : index);
    };

    const faqData = [
        {
            question: "What is Med-Link and how does it work?", answer: "Med-Link is an online platform that connects patients with licensed healthcare professionals. Users can search for doctors by specialty, location, or availability and schedule appointments directly through the platform. Med-Link ensures secure communication, helping patients access the care they need from trusted doctors."
        },
        {
            question: "How do I schedule an appointment with a doctor on Med-Link?", answer: "After finding a suitable doctor on Med- Link, click the “Schedule Appointment” button and select an available time slot.You will receive confirmation via email, along with details for the virtual or in-person consultation. Med-Link also provides reminders to ensure you do not miss your appointment."
        },
        {
            question: "Is my personal information safe on Med-Link?", answer: "Yes, Med-Link prioritizes patient privacy and uses industry-standard encryption to protect your data. All medical records and personal information are securely stored and accessible only to authorized healthcare professionals. Our platform complies with healthcare privacy regulations to ensure the highest level of security."
        },
        {
            question: "Can I get a prescription through Med-Link?", answer: "Many doctors on Med-Link can provide prescriptions if deemed necessary after a consultation. Prescriptions will be sent to your preferred pharmacy for easy pickup. However, please note that some medications may require an in-person visit depending on local laws and regulations."
        },
        {
            question: "What if I need to cancel or reschedule my appointment?", answer: "Med-Link allows you to cancel or reschedule your appointment up to 24 hours before the scheduled time. Simply go to your profile, locate the appointment, and select the appropriate option. If you cancel within 24 hours, please be aware that cancellation fees may apply, depending on the doctor's policy."
        },
        {
            question: "What types of doctors are available on Med-Link?", answer: "Med-Link offers access to a wide range of healthcare professionals, including general practitioners, specialists (such as dermatologists and cardiologists), therapists, and more. Each doctors profile includes their qualifications, areas of expertise, and patient reviews to help you make an informed choice."
        }
    ]
    return (
        <div className="faq-container bg-[#F1F7F6] p-4 lg:flex lg:flex-col lg:items-center">
            <h1 className="font-proxima text-2xl lg:text-4xl text-center text-customGreen font-bold m-4"> Frequently Asked Questions </h1>
            {faqData.map((item, index) => (
                <div key={index} className="faq-item font-domaine border mb-2 bg-white p-7  flex flex-col
            gap-4 shadow-sm lg:w-3/4 lg:justify-center">
                    <div className="faq-question flex  justify-between gap-4"
                        onClick={() => toggleFaq(index)}>
                        <span> {item.question}</span>
                        <span> {open === index ? <FaXmark size={22} style={{ color: 'green' }} /> : <FaPlus size={22} style={{ color: 'green' }} />} </span>
                    </div>
                    {open === index && <div className="faq-answer"> {item.answer}</div>}
                </div>
            ))}
        </div>
    );
}

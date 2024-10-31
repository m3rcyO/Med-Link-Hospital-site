import { doctors } from "../Third-Data";
import Image from "next/image";
import "../../globals.css";
import { departments } from "../Second-Data";

const Card = ({ name, imageUrl, heading, body }) => {
    return (
        <div className="w-[300px] h-[400px] bg-white m-5 mb-10 lg:mb-0 rounded-md shadow-md">
            <div className="">
                <Image src={imageUrl} alt={name} width={300} height={200}
                    className="w-[300px] h-[300px] object-cover rounded-md"
                />
            </div>
            <div className="p-5 flex flex-col items-center justify-center gap-2">
                <h2 className="text-xl font-proxima font-bold"> {heading} </h2>
                <p className="font-proxima text-gray-500"> {body} </p>
            </div>
        </div>

    )
}

const Doctors = () => {
    return (
        <div className="bg-[#F5FBFF] flex flex-col items-center justify-center py-20 ">
            <h1 className="text-line font-domaineBold text-3xl lg:text-4xl text-center mb-4"> Our Doctors  </h1>
            <p className="text-gray-500 px-2 font-proxima text-[16px] lg:text-[20px] leading-6 text-center"> Meet our dedicated team of highly skilled doctors, committed to providing exceptional care for every patient. </p>
            <div className="lg:grid lg:grid-cols-4 lg:gap-y-10 lg:gap-x-3 lg:mt-5 lg:my-8 lg:pb-20">
                {doctors.map((doctor) => (
                    <Card
                        key={doctor.id}
                        name={doctor.name}
                        imageUrl={doctor.imageUrl}
                        heading={doctor.heading}
                        body={doctor.body}
                    />

                ))}

            </div>
        </div>
    )

}

export default Doctors



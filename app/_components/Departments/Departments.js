import { departments } from "../Second-Data"
import Image from "next/image"
import "../../globals.css"

const Card = ({ name, imageUrl, heading, body }) => {
    return (
        <div className="w-[340px] h-[360px] bg-white m-5 rounded-md pb-10 shadow-md mb-10 lg:mb-0">
            <div className="">
                <Image src={imageUrl} alt="{name}" width={360} height={200} className="rounded-md w-[340px] h-[200px] object-cover" />
            </div>
            <div className="p-5 flex flex-col justify-center gap-2">
                <h2 className="text-2xl font-proxima font-bold"> {heading} </h2>
                <p className="font-proxima text-gray-500"> {body} </p>
            </div>
        </div>

    )
}

const Departments = () => {
    return (
        <div className="bg-[#F5FBFF] py-20 flex flex-col items-center justify-center ">
            <h1 className='text-line font-domaineBold text-3xl lg:text-4xl text-center mb-4'> Our Departments </h1>
            <p className="text-gray-500 px-2 font-proxima text-[16px] lg:text-[20px] leading-6 text-center "> Our departments offer specialized care across various fields to meet all your healthcare needs. </p>
            <div className="lg:grid lg:grid-cols-3 lg:gap-5 lg:mt-5 lg:my-8">
                {departments.map((department) => (
                    <Card
                        key={department.id}
                        name={department.name}
                        imageUrl={department.imageUrl}
                        heading={department.heading}
                        body={department.body}
                    />


                ))}


            </div>
        </div>
    )

}

export default Departments



















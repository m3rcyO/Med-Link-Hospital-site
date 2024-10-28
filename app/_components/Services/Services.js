import Image from "next/image";
import { services } from "../Data";

const ServiceCard = ({ name, imageUrl, heading, body }) => {
    return (
        <div className="w-[350px] lg:w-[500px] h-[200px] lg:h-[300px] bg-white m-3 flex flex-col justify-center gap-3 rounded-md p-4 shadow-md lg:items-center">
            <div className="flex gap-2 lg:flex-col lg:items-center">
                <Image src={imageUrl} width={40} height={40} className="lg:w-1/2" />
                <h3 className="proximaBold text-[16px] font-bold text-center ">{heading}</h3>
            </div>
            <p className="proxima text-[15px] text-[#64726f] lg:leading-6 lg:text-[16px] lg:w-3/4 lg:text-center">{body} </p>
        </div >
    );
};

const Services = () => {
    return (
        <div className="bg-[#F1F7F6] p-5 lg:p-10 flex flex-col items-center justify-center lg:flex-row 
        lg:h-screen">
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    name={service.name}
                    imageUrl={service.imageUrl}
                    heading={service.heading}
                    body={service.body} />
            ))}
        </div>
    );
};
export default Services
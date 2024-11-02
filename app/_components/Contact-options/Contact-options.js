import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactOptions = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-7 lg:gap-9 py-10 px-5 bg-[#f5fbff] lg:px-10">
            <div className="bg-[#EBFA9E] w-[350px] h-[110px] lg:w-[370px] lg:h-[150px]   rounded-sm flex items-center gap-4 p-4 shadow-md ">
                <div className="bg-[#084560] w-[45px] h-[45px] lg:w-[50px]  lg:h-[50px] p-2 rounded-full flex justify-center items-center ">
                    <FaEnvelope size={28} color="white" />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg lg:text-2xl font-semibold text-[#084560] font-domaine">Email Us</h2>
                    <p className="mt-0 text-[#084560] lg:text-lg font-proxima">contact@medlink.com</p>
                </div>
            </div>

            <div className="bg-[#B3E9DF] w-[350px] h-[110px] lg:w-[370px] lg:h-[150px] rounded-sm flex items-center gap-4 p-4 shadow-md">
                <div className="bg-[#084560] w-[45px] h-[45px] lg:w-[50px]  lg:h-[50px] p-2 rounded-full flex justify-center items-center">
                    <FaPhoneAlt size={28} color="white" />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg lg:text-2xl font-semibold text-[#084560] font-domaine">Call Us</h2>
                    <p className="mt-0 text-[#084560] lg:text-lg font-proxima">+234 123 456 7890</p>
                </div>
            </div>

            <div className="bg-[#FFDCB2] w-[350px] h-[110px] lg:w-[370px] lg:h-[150px] lg:rounded-sm flex items-center gap-4 p-4 shadow-md">
                <div className="bg-[#084560] w-[45px] h-[45px] lg:w-[50px]  lg:h-[50px] p-2 rounded-full flex justify-center items-center">
                    <FaMapMarkerAlt size={28} color="white" />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg lg:text-2xl font-semibold text-[#084560] font-domaine">Address</h2>
                    <p className="mt-0 lg:text-lg text-[#084560] font-proxima">123 Health St, Lagos</p>
                </div>
            </div>

        </div>
    );
};

export default ContactOptions;

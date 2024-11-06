import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 font-domaine lg:px-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5 lg:px-0">

                <div className="flex flex-col space-y-4">
                    <h3 className="text-lg font-bold text-white">About Med-Link</h3>
                    <p>
                        Connecting patients with trusted doctors to provide accessible healthcare services. Book an appointment with our expert team today.
                    </p>
                </div>


                <div className="flex flex-col space-y-4 lg:ml-12">
                    <h3 className="text-lg font-bold text-white">Quick Links</h3>
                    <ul className="space-y-2 lg:space-y-4">
                        <li><a href="/About" className="hover:text-customTeal">About Us</a></li>
                        <li><a href="/About#our-doctors" className="hover:text-customTeal">Our Doctors</a></li>
                        <li><a href="/Service" className="hover:text-customTeal">Services</a></li>
                        <li><a href="/Contact" className="hover:text-customTeal">Contact</a></li>
                    </ul>
                </div>


                <div className="space-y-4 lg:mr-20">
                    <h3 className="text-lg font-bold text-white">Contact Us</h3>
                    <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-customTeal" />
                        <p>123 Med-Link Avenue, Lagos, Nigeria</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaPhoneAlt className="text-customTeal" />
                        <p>+234 123 456 7890</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-customTeal" />
                        <p>info@medlink.com</p>
                    </div>
                </div>


                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white">Opening Hours</h3>
                    <div className="bg-gray-800 p-8 rounded-lg space-y-3">
                        <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                        <p>Sat: 9:00 AM - 4:00 PM</p>
                        <p>Sun: Closed</p>
                    </div>
                </div>
            </div>


            <div className="border-t border-gray-700 mt-10 pt-5 text-center space-y-4">
                <div className="flex justify-center space-x-4">
                    <a href="https://facebook.com" className="text-gray-400 hover:text-customTeal"><FaFacebook size={24} /></a>
                    <a href="https://twitter.com" className="text-gray-400 hover:text-customTeal"><FaTwitter size={24} /></a>
                    <a href="https://instagram.com" className="text-gray-400 hover:text-customTeal"><FaInstagram size={24} /></a>
                </div>
                <p className="text-customTeal font-bold">&copy; {new Date().getFullYear()} Med-Link. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

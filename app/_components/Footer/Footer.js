import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-customGreen text-white p-8 pt-10 font-domaine">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between px-5 lg:px-0">
                {/* About Med-Link */}
                <div className="flex-1 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-3">About Med-Link</h3>
                    <p className="text-white">
                        Med-Link connects patients with trusted doctors to provide reliable and accessible healthcare services. Visit our facility or contact us to book an appointment with our expert medical team.
                    </p>
                </div>


                <div className="flex-1 mb-6 md:mb-0 lg:ml-24">
                    <h3 className="text-xl font-bold mb-3">Quick Links</h3>
                    <ul className="text-white space-y-2">
                        <li><a href="/About" className="hover:text-customTeal">About Us</a></li>
                        <li><a href="/About#our-doctors" className="hover:text-customTeal">Our Doctors</a></li>
                        <li><a href="/services" className="hover:text-customTeal">Services</a></li>
                        <li><a href="/contact" className="hover:text-customTeal">Contact</a></li>
                    </ul>
                </div>


                <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Contact Us</h3>
                    <div className="flex items-center gap-2 lg:mb-4">
                        <FaMapMarkerAlt className="mr-2 text-customTeal" />
                        <p className="text-white">123 Med-Link Avenue, Lagos, Nigeria</p>
                    </div>
                    <div className="flex items-center gap-2 lg:mb-4 mb-2">
                        <FaPhoneAlt className="mr-2 text-customTeal" />
                        <p className="text-white">+234 123 456 7890</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="mr-2 text-customTeal" />
                        <p className="text-white">info@medlink.com</p>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-5 text-center">

                <div className="flex justify-center space-x-4 mb-3">
                    <a href="https://facebook.com" className="text-white hover:text-customTeal"><FaFacebook size={24} /></a>
                    <a href="https://twitter.com" className="text-white hover:text-customTeal"><FaTwitter size={24} /></a>
                    <a href="https://instagram.com" className="text-white hover:text-customTeal"><FaInstagram size={24} /></a>
                </div>

                <p className="text-customTeal font-bold">&copy; {new Date().getFullYear()} Med-Link. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;


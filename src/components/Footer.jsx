import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer mx-auto container px-5 md:px-10 text-white py-14">
                <nav className="max-w-[400px]">
                    <h5 className="footer-title">About Us</h5>
                    <p>We are dedicated to helping individuals navigate their career journey with expert guidance, tailored advice, and resources to achieve their professional aspirations.
                    </p>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <Link to="/" className="link link-hover">Home</Link>
                    <Link to="/allServices" className="link link-hover">Services</Link>
                    <Link to="" className="link link-hover">Contacts Us</Link>
                    <Link to="/blogs" className="link link-hover">Blog</Link>

                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <FaFacebook className="text-3xl text-blue-600"></FaFacebook>
                        <FaYoutube className="text-3xl text-red-700"></FaYoutube>
                        <FaInstagram className="text-3xl text-pink-700"></FaInstagram>
                    </div>
                </nav>
            </div>
            <div className="mx-auto  text-white max-w-md flex flex-col justify-center items-center text-center">
                <div className="border-t w-[400px]"></div>
                <p className="text-center mb-14 mt-4">Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>

        </footer>
    );
};

export default Footer;
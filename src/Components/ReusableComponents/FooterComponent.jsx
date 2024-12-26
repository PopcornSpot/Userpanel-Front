import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import Logo from "../../assets/POPFINAL.png";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6 sm:px-8 lg:px-20">

                <div className="flex flex-wrap justify-between gap-8 text-center sm:text-left">

                    <div className="flex-1 min-w-[250px]">
                        <img src={Logo} alt="PopcornSpot Logo" className="w-36 mx-auto sm:mx-0 mb-4" />
                        <p className="text-gray-300 leading-relaxed">
                            PopcornSpot is a leading platform for booking your favorite movies. Stay updated with the latest, upcoming, and trending movies.
                        </p>
                        <a
                            href="/about"
                            className="mt-4 inline-block text-orange-400 font-semibold hover:underline transition duration-300"
                        >
                            Learn more about us
                        </a>
                    </div>


                    <div className="flex-1 min-w-[200px]">
                        <h4 className="text-xl font-bold mb-4 text-orange-400">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="/" className="hover:text-orange-400 transition duration-300">Home</a></li>
                            <li><a href="/new-movies" className="hover:text-orange-400 transition duration-300">New Movies</a></li>
                            <li><a href="/upcoming-movies" className="hover:text-orange-400 transition duration-300">Upcoming Movies</a></li>
                            <li><a href="/movies" className="hover:text-orange-400 transition duration-300">Movies</a></li>
                            <li><a href="/my-tickets" className="hover:text-orange-400 transition duration-300">My Tickets</a></li>
                        </ul>
                    </div>


                    <div className="flex-1 min-w-[200px]">
                        <h4 className="text-xl font-bold mb-4 text-orange-400">Legal & Policies</h4>
                        <ul className="space-y-3">
                            <li><a href="/termsandcondition" className="hover:text-orange-400 transition duration-300">Terms of Service</a></li>
                            <li><a href="/privacy" className="hover:text-orange-400 transition duration-300">Privacy Policy</a></li>
                            <li><a href="/refund" className="hover:text-orange-400 transition duration-300">Refund Policy</a></li>
                        </ul>
                    </div>


                    <div className="flex-1 min-w-[250px]">
                        <h4 className="text-xl font-bold mb-4 text-orange-400">Contact Us</h4>
                        <div className="flex items-start gap-3 mb-4">
                            <FaPhoneAlt className="text-orange-400 w-5 h-5 mt-1" />
                            <div>
                                <p className="text-gray-300">+91 9344262658 | +91 8344024734</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 mb-4">
                            <FaEnvelope className="text-orange-400 w-5 h-5 mt-1" />
                            <div>
                                <p className="text-gray-300">popcornspot.support@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <FaMapMarkerAlt className="text-orange-400 w-5 h-5 mt-1" />
                            <div>
                                <p className="text-gray-300">Chennai, India</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 flex flex-wrap items-center justify-center lg:justify-between gap-6 text-center lg:text-left">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} <b className="text-orange-400">PopcornSpot</b>. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-orange-400 transition duration-300 text-2xl"><FaFacebook /></a>
                        <a href="#" className="text-gray-400 hover:text-orange-400 transition duration-300 text-2xl"><FaInstagram /></a>
                        <a href="#" className="text-gray-400 hover:text-orange-400 transition duration-300 text-2xl"><FaTwitter /></a>
                        <a href="#" className="text-gray-400 hover:text-orange-400 transition duration-300 text-2xl"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

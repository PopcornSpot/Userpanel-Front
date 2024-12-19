import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import Logo from "../../assets/POPFINAL.png";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6 sm:px-8 lg:px-20">

                <div className="flex flex-wrap justify-between gap-12">

                    <div className="flex-1 min-w-[280px]">
                        <img src={Logo} alt="PopcornSpot Logo" className="w-36 mb-4" />
                        <p className="text-gray-400 leading-relaxed">
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
                            <li><a href="/login" className="hover:text-orange-400 transition duration-300">Login</a></li>
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

                    <div className="flex-1 min-w-[280px]">
                        <h4 className="text-xl font-bold mb-4 text-orange-400">Newsletter</h4>
                        <p className="text-gray-400 mb-4 leading-relaxed">Subscribe to our newsletter to get the latest updates and offers.</p>
                        <form className="flex flex-wrap items-center gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 p-3 mb-2 md:mb-0 rounded-md bg-gray-800 placeholder-gray-500 text-white outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            <button
                                type="submit"
                                className="bg-orange-400 w-full md:w-auto p-3 rounded-md text-white font-semibold  hover:bg-orange-500 transition-all "
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-10 flex justify-center lg:justify-end space-x-6">
                    <a href="#" className="text-gray-400 hover:text-orange-400 transition duration-300 text-2xl"><FaFacebook /></a>
                    <a href="#" className="text-gray-400 hover:text-orange-400 transition duration-300 text-2xl"><FaInstagram /></a>
                    <a href="#" className="text-gray-400 hover:text-orange-400 transition duration-300 text-2xl"><FaTwitter /></a>
                    <a href="#" className="text-gray-400 hover:text-orange-400 transition duration-300 text-2xl"><FaLinkedin /></a>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center lg:text-left">
                    <p className="text-gray-400 mb-4 lg:mb-0">
                        © {new Date().getFullYear()} <b className="text-white">PopcornSpot</b>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

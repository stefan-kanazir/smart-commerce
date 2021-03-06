
import React from "react";
import { NavLink } from "react-router-dom";
import { IoLogoTwitter, IoMdMail, IoLogoGithub, IoLogoDribbble, IoLogoLinkedin } from "react-icons/io";

const Header = () => {
	return (
		<footer className="py-12 bg-green-900 mt-32" id="footer">
            <div className="container mx-auto">
                <NavLink to="/" className="text-xl block text-center lg:text-2xl font-semibold text-white hover:text-gray-300">
                    SmartCommerce
                </NavLink>
                <nav className="text-gray-300 border-b pb-12 mt-4 border-opacity-20">
                    <ul className="flex gap-x-10 items-center justify-center">
                        <li>
                            <a href="/#categories" className="hover:text-white hover:underline">Categories</a>
                        </li>
                        <li>
                            <a href="/#blog" className="hover:text-white hover:underline">Blog</a>
                        </li>
                        <li>
                            <a href="#footer" className="hover:text-white hover:underline">Contact</a>
                        </li>
                    </ul>
                </nav>

                {/* Second section */}
                <div className="flex flex-col items-center md:flex-row justify-between pt-6">
                    <span className="text-gray-300 text-sm mb-4 md:mb-0">©{new Date().getFullYear()} SmartCommerce. All rights reserved</span>
                    <ul className="flex gap-x-4">
                    <li>
                        <a href="https://rs.linkedin.com/in/stefan-kanazir" target="_blank" rel="noopener noreferrer">
                        <IoLogoLinkedin className="inline text-xl text-white hover:text-gray-300" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/stefan-kanazir/" target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub className="inline text-xl text-white hover:text-gray-300" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:kanazir.stefan@gmail.com" target="_blank" rel="noopener noreferrer">
                        <IoMdMail className="inline text-xl text-white hover:text-gray-300" />
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/stefan-kanazir" target="_blank" rel="noopener noreferrer">
                        <IoLogoDribbble className="inline text-xl text-white hover:text-gray-300" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/stefankanazir" target="_blank" rel="noopener noreferrer">
                        <IoLogoTwitter className="inline text-xl text-white hover:text-gray-300" />
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
		</footer>
	);
};

export default Header;
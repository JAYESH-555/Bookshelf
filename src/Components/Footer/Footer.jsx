import { BsFacebook, BsInstagram, BsLinkedin, BsTelegram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="relative left-0 bottom-0 h-[12vh] py-6 flex flex-col sm:flex-row items-center justify-between bg-gray-800 sm:px-20 shadow-t-lg">
            <section className="text-gray-300 text-sm sm:text-base hover:text-yellow-500 transition duration-300">
                Copyright © 2024 BookShelf Inc. | All rights reserved
            </section>
            <section className="flex items-center justify-center gap-4 text-2xl mt-3 sm:mt-0 text-white">
                <Link aria-label="Facebook" to="/" className="hover:text-yellow-500 transition-all duration-300">
                    <BsFacebook />
                </Link>
                <Link aria-label="LinkedIn" to="/" className="hover:text-yellow-500 transition-all duration-300">
                    <BsLinkedin />
                </Link>
                <Link aria-label="Instagram" to="/" className="hover:text-yellow-500 transition-all duration-300">
                    <BsInstagram />
                </Link>
                <Link aria-label="Twitter" to="/" className="hover:text-yellow-500 transition-all duration-300">
                    <BsTwitter />
                </Link>
                <Link aria-label="Telegram" to="/" className="hover:text-yellow-500 transition-all duration-300">
                    <BsTelegram />
                </Link>
            </section>
        </footer>
    );
}
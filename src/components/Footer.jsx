import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Logo & About */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-500">
            EventHub
          </h2>

          <p className="text-gray-900 mt-4">
            Creating unforgettable moments through
            exceptional event management services.
          </p>

          <div className="flex justify-center gap-4 mt-5">
             <a
                href="https://www.facebook.com/samraa.siraaji"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition"
              >
                <FaFacebook />
              </a>

               <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="bg-pink-600 text-white p-3 rounded-full hover:scale-110 transition"
              >
                <FaInstagramSquare />
              </a>
          <a
                href="https://wa.me/252614779074"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white p-3 rounded-full hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

               <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 text-white p-3 rounded-full hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>
      
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-500 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-900">
            <li className="hover:text-green-500 cursor-pointer">
              Home
            </li>
            <li className="hover:text-green-500 cursor-pointer">
              Events
            </li>
            <li className="hover:text-green-500 cursor-pointer">
              Categories
            </li>
            <li className="hover:text-green-500 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-500 mb-4">
            Services
          </h3>

          <ul className="space-y-2 text-gray-900">
            <li>Wedding Events</li>
            <li>Corporate Events</li>
            <li>Birthday Parties</li>
            <li>Entertainment Events</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-5 text-center text-gray-900">
        © 2026 Event Management System. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
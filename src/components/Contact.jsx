import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import Navbar from "./Navbar";



export default function Contact() {
  return (
    <div>
      <Navbar />
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto bg-gray-100 rounded-xl shadow-lg p-8">

        <h1 className="text-4xl text-gray-900 font-bold text-center mb-3">
          Contact Us
        </h1>

        <p className="text-center text-gray-800 mb-10">
          Need help with events, tickets or bookings? Contact us anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div>
            <h2 className="text-2xl text-gray-900 font-semibold mb-6">
              Contact Information
            </h2>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FiMapPin className="text-blue-600" />
                <p className="text-gray-900">Mogadishu, Somalia</p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-600" />
                <p className="text-gray-900">+252 61 1234567</p>
              </div>

              <div className="flex items-center gap-3">
                <CiMail className="text-red-500" />
                <p className="text-gray-900">support@events.com</p>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">

              <a
                href="https://wa.me/252614779074"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-gray-100 p-3 rounded-full hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.facebook.com/samraa.siraaji"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-gray-100 p-3 rounded-full hover:scale-110 transition"
              >
                <FaFacebook />
              </a>

            </div>
          </div>

          {/* Right Side */}
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 text-gray-900 rounded-lg outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 text-gray-900 rounded-lg outline-none"
            />


            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border text-gray-900 p-3 rounded-lg outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-green-600 text-gray-900 px-8 py-3 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </div>
    </div>
  );
}
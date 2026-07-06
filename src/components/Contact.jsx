import { useState, useEffect } from "react";
import axios from 'axios'
import {BackendUrl} from '../config'
import { data, useNavigate } from "react-router-dom";
import toast, {Toaster} from 'react-hot-toast'
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    await axios.post(`${BackendUrl}/api/contact`, {
        name,
        email,
        phone,
        message,
     });

      if (res.data.success) {
        toast.success("Message sent successfully");

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        toast.error("Failed to send message");
      }

    } catch (err) {
      toast.error("Server error");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto bg-gray-100 rounded-xl shadow-lg p-8">

          <h1 className="text-4xl font-bold text-center mb-3">
            Contact Us
          </h1>

          <p className="text-center mb-10">
            Need help? Contact us anytime.
          </p>

          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT SIDE */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>

              <p>📍 Mogadishu, Somalia</p>
              <p>📞 +252 61 1234567</p>
              <p>✉️ support@events.com</p>
            </div>

            {/* RIGHT SIDE FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
               type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
             />

             <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             />

             <input
               type="text"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
             />

             <textarea
               value={message}
               onChange={(e) => setMessage(e.target.value)}
             />

              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-lg"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
      <Footer />
    </div>
  );
}
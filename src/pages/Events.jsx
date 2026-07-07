import axios from "axios";
import { useEffect, useState } from "react";
import { BackendUrl } from "../config";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Events() {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const res = await axios.get(`${BackendUrl}/api/get`);

      setEvents(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);
  

   return (
    <div>
      <Navbar />
    <div className="py-8 px-6 bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
      <h1 className="text-4xl text-gray-900 font-bold text-center mb-10">
        All Events
      </h1>
        </div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {events.map((event) => (
    <div
      key={event._id}
      className="bg-gray-100 rounded-lg shadow overflow-hidden"
    >
      <img
        src={`${BackendUrl}/images/${event.image}`}
        alt={event.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        
        <h2 className="text-xl text-gray-900 font-bold">
          {event.title}
        </h2>

        <span className="inline-block bg-gray-100 text-green-600 px-3 py-1 rounded-full text-sm mt-2">
          {event.category}
        </span>
        
        <p className="text-gray-900 mt-3">
           👥 {event.guests}
        </p>

        <div className="mt-4 space-y-1 text-gray-900 ">
          <p>
            📍 {event.location}
          </p>

          <p>
            📅 {event.date}
          </p>

          <p className="font-bold text-green-600">
            ${event.price}
          </p>
         <Link to={`/details/${event._id}`}>
        <button className="w-full bg-green-500 text-gray-900 py-2 rounded-lg">
            View Details
        </button>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
   </div>

)

}
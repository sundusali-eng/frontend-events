import { Calendar, Clock, MapPin, Users, Star, Heart, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { BackendUrl } from "../config";

export default function FeatureEvent({ event }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl duration-300">
     
      {/* Image */}
      <div className="relative">
        <img
               src={`${BackendUrl}/images/${event.image}`}
               alt={event.title}
               className="w-full h-52 object-cover"
          />

        {/* <button className="absolute top-4 right-16 bg-white p-2 rounded-full">
          <Heart size={20} />
        </button>

        <button className="absolute top-4 right-4 bg-white p-2 rounded-full">
          <Share2 size={20} />
        </button> */}
      </div>

      {/* Content */}
      <div className="p-6">

        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
          {event?.category}
        </span>

        <h2 className="text-2xl font-bold mt-3">
          {event?.title}
        </h2>

        <div className="space-y-3 mt-5 text-gray-600">

          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{event?.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{event?.time}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>{event?.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={18} />
            <span>{event?.guests}</span>
          </div>

        </div>
        <div className="h-full mt-3">

           <Link to={`/details/${event._id}`}>
        <button className="w-full bg-green-500 text-gray-900 py-2 rounded-lg">
            View Details
        </button>
        </Link>
        </div>

      </div>
    </div>
  );
}
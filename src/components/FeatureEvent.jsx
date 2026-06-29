import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  Heart,
  Share2,
} from "lucide-react";

export default function FeatureEvent() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl">

        {/* Hero Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200"
            alt=""
            className="w-full h-[400px] object-cover"
          />

          <button className="absolute top-5 right-20 bg-white p-3 rounded-full shadow-lg">
            <Heart size={22} className="text-red-500" />
          </button>

          <button className="absolute top-5 right-5 bg-white p-3 rounded-full shadow-lg">
            <Share2 size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">

          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
            Wedding
          </span>

          <h1 className="text-4xl font-bold mt-4">
            Grand Wedding Ceremony
          </h1>

          <div className="flex flex-wrap gap-6 mt-6 text-gray-600">

            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <span>25 July 2026</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>6:00 PM</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Mogadishu</span>
            </div>

            <div className="flex items-center gap-2">
              <Users size={20} />
              <span>200 Guests</span>
            </div>

          </div>

          <div className="flex items-center gap-3 mt-5">
            <Star className="text-yellow-500 fill-yellow-500" />
            <span className="font-semibold">4.9 (120 Reviews)</span>
          </div>

          <div className="mt-6">
            <span className="text-4xl font-bold text-blue-600">
              $150
            </span>
            <span className="text-gray-500"> / Ticket</span>
          </div>

          {/* About */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold">
              About Event
            </h2>

            <p className="text-gray-600 mt-3 leading-8">
              Join us for a luxury wedding celebration featuring live music,
              delicious dinner, beautiful decorations and unforgettable
              memories.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">

            <div className="bg-gray-100 rounded-xl p-5 text-center">
              🍽️
              <h3 className="font-semibold mt-2">Dinner</h3>
            </div>

            <div className="bg-gray-100 rounded-xl p-5 text-center">
              🎵
              <h3 className="font-semibold mt-2">Live Music</h3>
            </div>

            <div className="bg-gray-100 rounded-xl p-5 text-center">
              📸
              <h3 className="font-semibold mt-2">Photography</h3>
            </div>

            <div className="bg-gray-100 rounded-xl p-5 text-center">
              🚗
              <h3 className="font-semibold mt-2">Parking</h3>
            </div>

          </div>

          {/* Buttons */}

          <div className="flex gap-4 mt-10">

            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold">
              Book Now
            </button>

            <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 rounded-xl font-semibold">
              Contact Organizer
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
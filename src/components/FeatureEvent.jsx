import React from 'react';
import { Link } from 'react-router-dom';

// Array-gan wuxuu ka dhigan yahay xogta ka imaan doonta Backend-kaaga (Database-ka)
const eventsData = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/0d/ac/78/0dac7853b76b01ee1d272523a3811e41.jpg",
    title: "Birthday party",
    category: "birthday party",
    date: "Aug 27, 2025",
    location: "Mogdisho",
    attending: "2 attending",
    price: 500.00
  },
  {
    id: 2,
    image: "https://i.pinimg.com/1200x/e0/ff/4c/e0ff4cce995a2ee5a82540f5ea1b9f67.jpg",
    title: "Wedding",
    category: "Wedding",
    date: "Aug 28, 2025",
    location: "Hargeysa",
    attending: "1 attending",
    price: 498.00
  },
  {
    id: 3,
    image: "https://i.pinimg.com/1200x/1c/17/ad/1c17ad5460322cace5b380690c8de93d.jpg",
    title: "Stock and Trading",
    category: "Exhibition / Trade Fair",
    date: "Aug 22, 2025",
    location: "Kismaayo",
    attending: "0 attending",
    price: 398.00
  }
];

export default function FeaturedEvents() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-24 text-gray-800 font-sans">
      
      {/* Qaybta Sare: Cinwaanka iyo Badhanka */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 mb-2">Featured Events</h2>
          <p className="text-gray-700 text-sm">Discover our handpicked selection of upcoming events</p>
        </div>
        <Link to= '/event'><button className="bg-green-600 hover:bg-green-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 self-start sm:self-auto">
          View All Events <span>→</span>
        </button>
        </Link>
      </div>

      {/* Qaybta Dhexdeeda: Grid-ka Kaararka (Cards Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.map((event) => (
          <div 
            key={event.id} 
            className="bg-gray-100 border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:border-green-500/30 transition-all shadow-xl"
          >
        
            {/* Qaybta Sare ee Kaarka (Title & Badge) */}
            <div>
              <div className="relative">
                <div>
                  <img className='w-full h-50 rounded-2xl object-cover' 
                  src={event.image} alt="" />
                 </div>
               
              <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">                  
                {event.category}
                </span>

                <h3 className="text-xl font-bold text-black tracking-wide">
                  {event.title}
                  </h3>
              </div>

              {/* Faahfaahinta (Date, Location, Attending) */}
              <div className="space-y-3 mb-6 text-sm text-gray-800">
                <div className="flex items-center gap-2.5">
                  <span className="text-green-500">📅</span>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-green-500">📍</span>
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-green-500">👥</span>
                  <span>{event.attending}</span>
                </div>
              </div>
            </div>

            {/* Qaybta Hoose ee Kaarka (Price & View Details) */}
            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="text-lg font-bold text-green-400">${event.price}</span>
              <button className="text-sm font-medium bg-gray-300 px-6 py-2 rounded-lg text-gray-800 hover:text-black transition-colors flex items-center gap-1">
                View Details <span>→</span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
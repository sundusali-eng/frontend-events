import {
  CalendarDays,
  Ticket,
  Users,
  DollarSign,
  MapPin,
  Bell,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { BackendUrl } from "../config";

export default function Dashboard() {

 
  const [events, setEvents] = useState([]);
  

useEffect(() => {
  fetchEvents();
}, []);

const fetchEvents = async () => {
  const res = await fetch(`${BackendUrl}/api/get`);
  const data = await res.json();

  setEvents(data);
};

  return (
    <div>
     <Navbar />
    <div className="flex h-screen bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white p-5">
       <Link to='/createEvent'> 
        <button className="bg-green-600 text-2xl px-6 rounded-lg py-2 font-bold text-white mb-8">CreateEvent <span>→</span>
        </button>
         </Link> 

        <nav className="space-y-4">
          <p className="bg-green-600 p-2 rounded">Dashboard</p>
         <Link to= '/event'><p className="hover:bg-gray-800 p-2 rounded">Events</p></Link>
         {/* <p className="hover:bg-gray-800 p-2 rounded"></p> */}
          <Link to='/users'> <p className="hover:bg-gray-800 p-2 rounded">Attendees</p></Link>
        <Link to='/booking'> <p className="hover:bg-gray-800 p-2 rounded">My Booking</p></Link> 
          <p className="hover:bg-gray-800 p-2 rounded">Payments</p>
          <p className="hover:bg-gray-800 p-2 rounded">Reports</p>
          <p className="hover:bg-gray-800 p-2 rounded">Settings</p>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <header className="flex items-center justify-between bg-white p-4 shadow">
          
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded w-1/3">
            <Search size={18} />
            <input
              placeholder="Search events..."
              className="bg-transparent outline-none w-full"
            />
          </div>

          <div className="flex items-center gap-4">
            <Bell />
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-6 grid grid-cols-12 gap-6">

          {/* LEFT CONTENT */}
          <div className="col-span-9">

            {/* STATS */}
            <div className="grid grid-cols-4 gap-4">
              <StatCard title="Events" value={events.length} icon={<CalendarDays />} />
              <StatCard title="Tickets" value="4,158" icon={<Ticket />} />
              <StatCard title="Attendees" value="1,158" icon={<Users />} />
              <StatCard title="Revenue" value="$24560" icon={<DollarSign />} />
            
             
            </div>

            {/* EVENTS GRID */}
            <h2 className="mt-6 font-bold text-lg">Upcoming Events</h2>
           <div className="grid grid-cols-3 gap-4 mt-3">
 
</div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-3 space-y-4">

   <div className="bg-white p-2 rounded-xl shadow">
  <div className="flex flex-col items-center">
    <img
      src="https://i.pinimg.com/736x/c5/ab/d9/c5abd92a83d23c34933e4983ee8dd340.jpg"
      alt="Profile"
      className="w-20 h-20 rounded-full border-4 border-green-500"
    />

    <h2 className="mt-3 text-xl font-bold">Admin User</h2>
    <p className="text-gray-500">Event Manager</p>

    <div className="mt-4 w-full space-y-2">
      <div className="flex justify-between">
        <span className="text-gray-500">Events</span>
        <span className="font-bold">{events.length}</span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500">Attendees</span>
        <span className="font-bold">1158</span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500">Revenue</span>
        <span className="font-bold">$24560</span>
      </div>
    </div>

    <button className="mt-5 bg-green-600 text-white px-4 py-2 rounded-lg">
      Edit Profile
    </button>
  </div>
  
</div>
       {/* <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-3">Today's Schedule</h3>
              <p>✔ Team Meeting</p>
              <p>✔ Event Setup</p>
              <p>✔ Check-in Attendees</p>
              <p>✔ Main Event</p>
            </div>     */}


          </div>

        </main>
      </div>
      </div>
    </div>
  );
}

/* SMALL COMPONENTS */

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white p-4 rounded shadow flex items-center gap-3">
      <div className="text-green-600">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="font-bold">{value}</h3>
      </div>
    </div>
  );
}

function EventCard({ title, place }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:scale-105 transition">
      <div className="h-24 bg-gray-200 rounded mb-2"></div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-500 flex items-center gap-1">
        <MapPin size={14} /> {place}
      </p>
    </div>
  );
}
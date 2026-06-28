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
import { useState, useEffect } from "react";
import { BackendUrl } from "../config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const [events, setEvents] = useState([]);

   const navigate = useNavigate()

    useEffect(() => {
  const token = localStorage.getItem("adminLogin");

  if (!token) {
    navigate("/admin/login");
  }
}, []);
  

        
        const fetchEvents = async () => {
          const res = await post(`${BackendUrl}/api/get`);
          const data = await res.json();
          
          setEvents(data);
        };


        useEffect(() => {
          fetchEvents();
        }, []);

  return (
    <div>
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
          <p className="hover:bg-gray-800 p-2 rounded">Users</p>
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
              <StatCard title="Tickets" value="1,428" icon={<Ticket />} />
              <StatCard title="Attendees" value="1,158" icon={<Users />} />
              <StatCard title="Revenue" value={events.length} icon={<DollarSign />} />
            </div>

            {/* EVENTS GRID */}
            <h2 className="mt-6 font-bold text-lg">Upcoming Events</h2>

            {/* <div className="grid grid-cols-3 gap-4 mt-3">

              <EventCard title="Music Festival" place="Mogadishu" />
              <EventCard title="Tech Conference" place="Mogadishu" />
              <EventCard title="Business Workshop" place="Mogadishu" />
              <EventCard title="Football Event" place="Mogadishu" />
              <EventCard title="Food Festival" place="Mogadishu" />
              <EventCard title="Art Exhibition" place="Mogadishu" />

            </div> */}

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-3 space-y-4">

            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-3">Today's Schedule</h3>
              <p>✔ Team Meeting</p>
              <p>✔ Event Setup</p>
              <p>✔ Check-in Attendees</p>
              <p>✔ Main Event</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Revenue</h3>
              <div className="h-32 bg-gray-200 mt-2 rounded"></div>
            </div>

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
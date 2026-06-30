import { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl } from "../config";
import FeatureEvent from "./FeatureEvent";
import { Link } from "react-router-dom";

function FeatureEventSection() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
  const res = await axios.get(`${BackendUrl}/api/get`);

  if (res.data.success) {
    setEvents(res.data.data);
  }
};

  return (
    <section className="py-16 px-6">
    <div className=" mb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
     
      <h1 className="text-4xl font-bold text-gray-800">
        Featured Events
      </h1>

      {/* <p className="text-gray-500 mt-2">
        Discover our most popular upcoming events.
      </p> */}
       
       <Link to='/event'>
          <button className="bg-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
            All Events 
          </button>
          </Link>
          </div>
    <div className="grid md:grid-cols-3 gap-6 mt-4">

      {events.slice(0, 3).map((event) => (
        <FeatureEvent
        key={event._id}
        event={event}
        />
      ))}
      </div>
    </div>
    </section>
  );
}

export default FeatureEventSection;
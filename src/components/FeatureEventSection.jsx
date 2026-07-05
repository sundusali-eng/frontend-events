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
    <div className=" max-w-7xl mx-auto">
     <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800">
        Featured Events
      </h1>

      <p className="text-gray-500 mt-2">
        Discover our most popular upcoming events.
      </p>
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
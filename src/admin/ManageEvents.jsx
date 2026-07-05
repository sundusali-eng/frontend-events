import { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl } from "../config";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function ManageEvents() {

  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  const getEvents = async () => {
    try {

      const res = await axios.get(`${BackendUrl}/api/get`);

      if (res.data.success) {
        setEvents(res.data.data);
      }

    } catch (error) {
      console.log(error);
      toast.error("Failed to load events");
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const deleteEvent = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) return;

    try {

      const res = await axios.delete(
        `${BackendUrl}/api/delete/${id}`
      );

      if (res.data.success) {

        toast.success("Event deleted");

        getEvents();

      } else {

        toast.error(res.data.message);

      }

    } catch (error) {

      console.log(error);

      toast.error("Delete failed");

    }
  };

  const filteredEvents = events.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Manage Events
        </h1>

        <input
          type="text"
          placeholder="Search event..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-lg w-72"
        />

      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-green-600 text-white">

            <tr>

              <th className="p-3">Image</th>

              <th className="p-3">Title</th>

              <th className="p-3">Category</th>

              <th className="p-3">Location</th>

              <th className="p-3">Price</th>

              <th className="p-3">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredEvents.map((event) => (

              <tr
                key={event._id}
                className="border-b text-center"
              >

                <td className="p-3">

                  <img
                    src={`${BackendUrl}/images/${event.image}`}
                    className="w-16 h-16 rounded object-cover mx-auto"
                    alt=""
                  />

                </td>

                <td>{event.title}</td>

                <td>{event.category}</td>

                <td>{event.location}</td>

                <td>${event.price}</td>

                <td className="space-x-2">

                <Link to={`/admin/edit-event/${event._id}`}
                 className="bg-blue-600 text-white px-3 py-1 rounded">
                    Edit
                 </Link>

                  <button
                    onClick={() => deleteEvent(event._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
import { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl } from "../config";
import toast from "react-hot-toast";

export default function ManageBookings() {

  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

  const getBookings = async () => {

    try {

      const res = await axios.get(`${BackendUrl}/api/booking/all`);

      if (res.data.success) {
        setBookings(res.data.data);
      }

    } catch (error) {
      console.log(error);
      toast.error("Failed to load bookings");
    }

  };

  useEffect(() => {
    getBookings();
  }, []);

  const deleteBooking = async (id) => {

    if (!window.confirm("Delete this booking?")) return;

    try {

      const res = await axios.delete(
        `${BackendUrl}/api/booking/delete/${id}`, {
          headers: {
            token: localStorage.getItem("adminLogin")
          }
        }
      );
     


      if (res.data.success) {

        toast.success("Booking deleted");

        getBookings();

      }

    } catch (error) {

      console.log(error);

      toast.error("Delete failed");

    }

  };

  const filtered = bookings.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase()) ||
    item.event?.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Manage Bookings
        </h1>

        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded-lg w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-indigo-600 text-white">

            <tr>

              <th className="p-3">User</th>

              <th className="p-3">Email</th>

              <th className="p-3">Event</th>

              <th className="p-3">Guests</th>

              <th className="p-3">Action</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((booking) => (

              <tr
                key={booking._id}
                className="border-b text-center"
              >

                <td>{booking.name}</td>

                <td>{booking.email}</td>

                <td>{booking.event?.title}</td>

                <td>{booking.guests}</td>

                <td>

                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">

                    {booking.status || "Pending"}

                  </span>

                </td>

                <td>

                  <button
                    onClick={() => deleteBooking(booking._id)}
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
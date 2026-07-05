import { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl } from "../config";
import toast from "react-hot-toast";

export default function ManageBookings() {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

  const getBookings = async () => {
    try {
      const res = await axios.get(`${BackendUrl}/api/booking/all`, {
        headers: {
          token: localStorage.getItem("adminLogin"),
        },
      });

      if (res.data.success) {
        setBookings(res.data.bookings);
      }
    } catch (error) {
      toast.error("Failed to load bookings");
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  // const deleteBooking = async (id) => {
  //   if (!window.confirm("Delete this booking?")) return;

  //   try {
  //     const res = await axios.delete(
  //       `${BackendUrl}/api/booking/delete/${id}`,
  //       {
  //         headers: {
  //           token: localStorage.getItem("adminLogin"),
  //         },
  //       }
  //     );

  //     if (res.data.success) {
  //       toast.success("Booking deleted");
  //       getBookings();
  //     }
  //   } catch (error) {
  //     toast.error("Delete failed");
  //   }
  // };

  // 🔥 CONFIRM / CANCEL FUNCTION
  const updateStatus = async (id, status) => {
    try {
      const res = await axios.put(
        `${BackendUrl}/api/booking/status/${id}`,
        { status },
        {
          headers: {
            token: localStorage.getItem("adminLogin"),
          },
        }
      );

      if (res.data.success) {
        toast.success(`Booking ${status}`);
        getBookings();
      }
    } catch (error) {
      toast.error("Status update failed");
    }
  };

  const filtered = bookings.filter(
    (item) =>
      item.userId?.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.eventId?.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Bookings</h1>

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
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((booking) => (
              <tr key={booking._id} className="border-b text-center">
                <td>{booking.userId?.name}</td>
                <td>{booking.userId?.email}</td>
                <td>{booking.eventId?.title}</td>

                {/* STATUS BADGE */}
                <td>
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${
                      booking.status === "Confirmed"
                        ? "bg-green-600"
                        : booking.status === "Cancelled"
                        ? "bg-red-600"
                        : "bg-yellow-500"
                    }`}
                  >
                    {booking.status || "Pending"}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="flex gap-2 justify-center">
                  <button
                    onClick={() => updateStatus(booking._id, "Confirmed")}
                    className="bg-green-600 text-white px-2 py-1 rounded"
                  >
                    Confirm
                  </button>

                  <button
                    onClick={() => updateStatus(booking._id, "Cancelled")}
                    className="bg-yellow-600 text-white px-2 py-1 rounded"
                  >
                    Cancel
                  </button>

                  {/* <button
                    onClick={() => deleteBooking(booking._id)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
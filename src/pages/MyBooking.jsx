import { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl } from "../config";
import { Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function MyBookings() {

    const token = localStorage.getItem("userLogin");

  if (!token) {
    return <Navigate to="/login" />;
  }
  
  const [bookings, setBookings] = useState([]);

  const getBookings = async () => {

    try {

      const res = await axios.get(
        `${BackendUrl}/api/booking/my-bookings`,
        {
          headers: {
            token: localStorage.getItem("userLogin")
          }
        }
      );

      if (res.data.success) {
        setBookings(res.data.bookings);
      }

    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    getBookings();
  }, []);

const deleteBooking = async (id) => {
  try {
    const res = await axios.delete(
      `${BackendUrl}/api/booking/delete/${id}`,
      {
        headers: {
          token: localStorage.getItem("userLogin"),
        },
      }
    );

    if (res.data.success) {
      toast.success("Booking deleted successfully");
      getBookings();
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};

  return (
    <div className="max-w-6xl mx-auto mt-10">

      <h1 className="text-3xl font-bold mb-8">
        My Bookings
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {bookings.map((item) => (

          <div
            key={item._id}
            className="border rounded-xl overflow-hidden shadow"
          >

            <img
              src={`${BackendUrl}/images/${item.eventId.image}`}
              alt={item.eventId.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">

              <h2 className="text-xl font-bold">
  {item.eventId.title}
</h2>

<p className="mt-2">
  📍 {item.eventId.location}
</p>

<p>
  📅 Event Date: {item.eventId.date}
</p>

<p>
  ⏰ Time: {item.eventId.time}
</p>

<p>
  👥 Guests: {item.guests}
</p>

<p>
  💵 Ticket Price: ${item.eventId.price}
</p>

<p>
  💰 Total: ${item.totalPrice}
</p>

<p>
  📌 Status:
  <span className="ml-2 px-2 py-1 rounded bg-yellow-100 text-yellow-700">
    {item.status}
  </span>
</p>

<p>
  📝 Booked On:
     {new Date(item.createdAt).toLocaleDateString()}
           </p>

              <h2 className="text-xl font-bold">
                {item.eventId.title}
              </h2>

              <p className="mt-2">
                📍 {item.eventId.location}
              </p>

              <p>
                📅 {item.eventId.date}
              </p>

              <p>
                💲 {item.eventId.price}
              </p>

            </div>
      <div className="p-4">
       <button
      onClick={() => deleteBooking(item._id)}
       className="bg-red-600 w-full text-white py-2 rounded mb-2"
   >
    Delete
   </button>
   </div>
          </div>

        ))}

      </div>
<Toaster />
    </div>
  );

}
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl } from "../config";
import { Link } from "react-router-dom";

export default function Details(){

 const { id } = useParams();
 const [event,setEvent] = useState(null);

 const getEvent = async () => {
  try {
    const res = await axios.get(`${BackendUrl}/api/get/${id}`);

    setEvent(res.data.data);

  } catch(error){
    console.log(error);
  }
};

const handleBooking = async () => {
  try {

    const res = await axios.post(
  `${BackendUrl}/api/booking/book`,
  {
    eventId: event._id,
  },
  {
    headers: {
      token: localStorage.getItem("userLogin"),
    },
  }
);

console.log(res.data);

     if (res.data.success) {
    alert("Booking created successfully");
      } else {
       alert(res.data.message);
        }
  } catch(error){
    console.log(error);
  }
}


 useEffect(()=>{
   getEvent();
 },[]);


 if(!event) return <h1>Loading...</h1>

return(
  <div className="max-w-5xl mx-auto  bg-white rounded-3xl shadow-xl overflow-hidden">
    <img
      src={`${BackendUrl}/images/${event.image}`}
      alt={event.title}
      className="w-300 lg:h-130 h-full object-cover rounded-lg"
    />

   <div className="p-8">
    
    <h1 className="text-4xl font-bold mt-5">
      {event.title}
    </h1>
    
   <div className="grid md:grid-cols-5 grid-cols-2 mt-4">
    <p>
      📅 {event.date}
    </p>
    <p className="">
      📍 {event.location}
    </p>

    <p className="flex">
      👥 {event.guests}
      <p className="py-1">Guests</p>
    </p>

    <p>
      🕖 {event.time}
    </p>

    <p>
      Category: {event.category}
    </p>
     </div>

    <div className="flex mt-4">
    <h2 className="text-3xl font-bold text-green-600">
      ${event.price} 
    </h2>
      <p className="py-2">/ Ticket</p>
      </div>

     <h1 className="font-bold text-3xl mt-3">About Event</h1>
     <p className="mt-2">
      {event.description}
    </p>

      <button onClick={handleBooking} className="bg-green-500 text-white w-full py-2 rounded mt-5">
        Book Now
      </button>
      

</div>
  </div>
)
 
 
}
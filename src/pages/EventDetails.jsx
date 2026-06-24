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
      `${BackendUrl}/api/booking`,
      {
        eventId: event._id
      },
      {
        headers:{
          token: localStorage.getItem("token")
        }
      }
    );

    console.log(res.data);

    alert("Booking created successfully");

  } catch(error){
    console.log(error);
  }
}


 useEffect(()=>{
   getEvent();
 },[]);


 if(!event) return <h1>Loading...</h1>

return(
  <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

    <img
      src={`${BackendUrl}/images/${event.image}`}
      alt={event.title}
      className="w-full h-full object-cover rounded-lg"
    />
   <div className="p-8">
    
    <h1 className="text-4xl font-bold mt-5">
      {event.title}
    </h1>
     <p className="mt-3">
      {event.description}
    </p>
    

    <p className="mt-3">
      📍 {event.location}
    </p>

    <p>
      📅 {event.date}
    </p>

    <p>
      ⏰ {event.time}
    </p>

    <p>
      Category: {event.category}
    </p>

   <div className="bg-blue-50 w-fit px-6 py-4 rounded-2xl mt-5">

    <h2 className="text-3xl font-bold">
      ${event.price}
    </h2>

      </div>
    
      <button onClick={handleBooking} className="bg-green-500 text-white px-5 py-2 rounded mt-5">
        Book Now
      </button>
   

</div>
  </div>
)
 
 
}
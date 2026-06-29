import { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl } from "../config";

export default function Booking() {

 const [bookings, setBookings] = useState([]);

const getBookings = async () => {
  try {
    const response = await axios.get(`${BackendUrl}/api/my`, {
      headers:{
        token: localStorage.getItem("userLogin")
      }
    });

    setBookings(response.data);

  } catch(error) {
    console.log(error);
  }
};

  useEffect(()=>{
    getBookings();
  },[]);


  return(
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        My Bookings
      </h1>
       
       {bookings.map((item)=>(
  <div key={item._id} className="bg-white shadow p-4 rounded">

    <h2 className="font-bold text-xl">
      {item.eventId?.title}
    </h2>

    <p>Status: {item.status}</p>

    <p>Payment: {item.paymentStatus}</p>

    <p>Amount: ${item.amount}</p>

  </div>
))}

     

      

    </div>
  )
}
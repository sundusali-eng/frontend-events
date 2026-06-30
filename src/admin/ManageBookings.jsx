import {useEffect,useState} from "react";
import axios from "axios";
import {BackendUrl} from "../config";


export default function ManageBookings(){


const [bookings,setBookings]=useState([]);


const getBookings=async()=>{

try{

const res = await axios.get(
`${BackendUrl}/api/booking/all`
);


if(res.data.success){
setBookings(res.data.bookings);
}


}catch(error){
console.log(error);
}


}


useEffect(()=>{
getBookings();
},[]);



return(

<div>


<h1 className="text-3xl font-bold mb-8">
Manage Bookings
</h1>



<div className="bg-white rounded-xl shadow p-5">


{
bookings.map((item)=>(

<div 
key={item._id}
className="border-b py-4"
>


<h2 className="font-bold">
{item.eventId?.title}
</h2>


<p>
User: {item.userId?.name}
</p>


</div>

))
}


</div>



</div>

)

}
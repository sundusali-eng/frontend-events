import { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl } from "../config";


export default function ManageEvents(){

const [events,setEvents] = useState([]);


const getEvents = async()=>{

 try{

  const res = await axios.get(
    `${BackendUrl}/api/get`
  );

  if(res.data.success){
    setEvents(res.data.data);
  }

 }catch(error){
   console.log(error);
 }

}


useEffect(()=>{
 getEvents();
},[]);



const deleteEvent = async(id)=>{

 try{

 const res = await axios.delete(
  `${BackendUrl}/api/delete/${id}`
 );


 if(res.data.success){
   getEvents();
 }


 }catch(error){
  console.log(error);
 }

}



return(

<div>

<h1 className="text-3xl font-bold mb-8">
 Manage Events
</h1>


<div className="grid md:grid-cols-3 gap-6">


{
events.map((event)=>(

<div 
key={event._id}
className="bg-white rounded-xl shadow overflow-hidden"
>


<img
src={`${BackendUrl}/images/${event.image}`}
className="w-full h-48 object-cover"
/>


<div className="p-4">

<h2 className="font-bold text-xl">
{event.title}
</h2>


<p>
{event.location}
</p>


<button
onClick={()=>deleteEvent(event._id)}
className="bg-red-600 text-white px-4 py-2 rounded mt-4"
>
Delete
</button>


</div>


</div>

))
}


</div>


</div>

)

}
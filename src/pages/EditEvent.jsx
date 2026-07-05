import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BackendUrl } from "../config";
import toast from "react-hot-toast";

export default function EditEvent() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [title,setTitle]=useState("");
  const [date,setDate]=useState("");
  const [location,setLocation]=useState("");
  const [category,setCategory]=useState("");
  const [time,setTime]=useState("");
  const [guests,setGuests]=useState("");
  const [price,setPrice]=useState("");
  const [description,setDescription]=useState("");
  const [image,setImage]=useState(null);

  useEffect(()=>{

    getEvent();

  },[]);

 const getEvent = async () => {

  try {

    const res = await axios.get(
      `${BackendUrl}/api/get/${id}`
    );

    if(res.data.success){

      const event = res.data.data;

      setTitle(event.title);
      setDate(event.date);
      setLocation(event.location);
      setCategory(event.category);
      setTime(event.time);
      setGuests(event.guests);
      setPrice(event.price);
      setDescription(event.description);

    }

  } catch (error) {

    console.log(error);

    toast.error("Failed to load event");

  }

}

  const updateEvent = async(e)=>{

    e.preventDefault();

    const formData = new FormData();

    formData.append("title",title);
    formData.append("date",date);
    formData.append("location",location);
    formData.append("category",category);
    formData.append("time",time);
    formData.append("guests",guests);
    formData.append("price",price);
    formData.append("description",description);

    if(image){
      formData.append("image",image);
    }

    const res = await axios.put(
      `${BackendUrl}/api/update/${id}`,
      formData
    );

    if(res.data.success){

      toast.success(res.data.message);

      navigate("/admin/events");

    }else{

      toast.error(res.data.message);

    }

  }

  return(

    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

      <h1 className="text-3xl font-bold mb-6">
        Edit Event
      </h1>

      <form
      onSubmit={updateEvent}
      className="space-y-4">

        <input
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className="w-full border p-3 rounded"
        placeholder="Title"/>

        <input
        type="date"
        value={date}
        onChange={(e)=>setDate(e.target.value)}
        className="w-full border p-3 rounded"/>

        <input
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
        className="w-full border p-3 rounded"
        placeholder="Location"/>

        <input
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
        className="w-full border p-3 rounded"
        placeholder="Category"/>

        <input
        value={time}
        onChange={(e)=>setTime(e.target.value)}
        className="w-full border p-3 rounded"
        placeholder="Time"/>

        <input
        type="number"
        value={guests}
        onChange={(e)=>setGuests(e.target.value)}
        className="w-full border p-3 rounded"
        placeholder="Guests"/>

        <input
        type="number"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        className="w-full border p-3 rounded"
        placeholder="Price"/>

        <textarea
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        className="w-full border p-3 rounded"/>

        <input
        type="file"
        onChange={(e)=>setImage(e.target.files[0])}/>

        <button
        className="bg-green-600 text-white px-6 py-3 rounded">
          Update Event
        </button>

      </form>

    </div>

  );

}
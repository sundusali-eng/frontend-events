import { useState, useEffect } from "react";
import axios from 'axios'
import {BackendUrl} from '../config'
import { data, useNavigate } from "react-router-dom";
import toast, {Toaster} from 'react-hot-toast'


export default function CreateEvent() {
  const navigate = useNavigate();

      
        const [title, setTitle] = useState('')
        const [date, setDate] = useState('')
        const [location, setLocation] = useState('')
        const [category, setCategory] = useState('')
        const [time, setTime] = useState('')
        const [price, setPrice] = useState('')
        const [image, setImage] = useState(null)
        const [description, setDescription] = useState('')
  
    
  const createEvents = async (e)=> {
    e.preventDefault()

    const formData = new FormData()
    formData.append('title', title)
    formData.append('date', date)
    formData.append('location', location)
    formData.append('category', category)
    formData.append('time', time)
    formData.append('price', price)
    formData.append('image', image)
    formData.append('description', description)

    try {
      const response = await axios.post(`${BackendUrl}/api/add`, formData)
      console.log(response.data.success)

      if (response.data.success) {
        toast.success(response.data.message)
        setTitle('')
        setDate('')
        setLocation('')
        setCategory('')
        setTime('')
        setPrice('')
        setImage(null)
        setDescription('')
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
       console.log(error)
        toast.error('somthing went wrong')
    }

  }

  return (
    <div>
    <div className=" max-w-3xl mx-auto mb-6 bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">

        <h1 className="text-2xl font-bold mb-6">
          Create New Event
        </h1>

        <form
          onSubmit={createEvents}
          className="space-y-4"
        >
          <div>
            <label className="block mb-1 font-medium">
              Event Title
            </label>

            <input
              type="text"
              name="title"
              value={title} onChange={(e)=> setTitle(e.target.value)}
              placeholder="Enter event title"
              className="w-full border p-3 rounded outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block mb-1 font-medium">
                Date
              </label>

              <input
                type="date"
                name="date"
                value={date}
                onChange={(e)=> setDate(e.target.value)}
                className="w-full border p-3 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={location}
                onChange={(e)=> setLocation(e.target.value)}
                placeholder="Mogadishu"
                className="w-full border p-3 rounded"
              />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block mb-1 font-medium">
                Category
              </label>

              <select
                name="category"
                value={category}
                onChange={(e)=> setCategory(e.target.value)}
                className="w-full border p-3 rounded"
              >
                <option value="">
                  Select Category
                </option>
                <option>Music</option>
                <option>Events</option>
                <option>Business</option>
                <option>Technology</option>
                <option>Sports</option>
                <option>Education</option>
              </select>
            </div>

             <div>
              <label className="block mb-1 font-medium">
                Time
              </label>

              <input
                type="text"
                name="time"
                value={time}
                onChange={(e)=> setTime(e.target.value)}
                className="w-full border p-3 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Ticket Price ($)
              </label>

              <input
                type="number"
                name="price"
                value={price}
                onChange={(e)=> setPrice(e.target.value)}
                placeholder="20"
                className="w-full border p-3 rounded"
              />
            </div>

          </div>

          <div>
            <label className="block mb-1 font-medium">
              Event Image URL
            </label>

             <label htmlFor="image" className="border-2 border-dashed border-gray-300 rounded-2xl h-52 flex items-center justify-center cursor-pointer hover:border-indigo-500 transition">
                        {
                            image ? (

                                <img src={URL.createObjectURL(image)} className="h-full w-full object-cover rounded-2xl " alt="" />
                            ) : (
                                
                            <p className="text-gray-400">  Click to upload image</p>
                            )
                        }
                          

                    </label>

                    <input type="file" id="image" hidden onChange={(e)=>setImage(e.target.files[0])} />

          </div>

          <div>
            <label className="block mb-1 font-medium">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={description}
              onChange={(e)=> setDescription(e.target.value)}
              placeholder="Write event description..."
              className="w-full border p-3 rounded resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
    <Toaster />
    </div>
  );
}
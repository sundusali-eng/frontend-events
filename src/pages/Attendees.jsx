import { useState, useEffect } from "react";
import axios from 'axios'
import { BackendUrl } from "../config";
import toast, {Toaster} from "react-hot-toast";


export default function Attendees(){

 const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
          const fetchUsers = async ()=>{
            try {
                
                const response = await axios.get(`${BackendUrl}/api/user/register`)
                console.log(response.data)
                setUsers(response.data.data)
                setLoading(false)
                toast.success('success')

            } catch (error) {
                console.log(error)
                setLoading(false)
                toast.error('failed')
            }
          }

          fetchUsers()
     },[])

     if(loading) {
        return <p className="text-center text-gray-500 py-10">show data</p>
     }

    return(
        <div className="flex-1 min-h-screen bg-gray-900 pr-4">
               <div>
                <h1 className="text-3xl font-bold text-gray-800">
                 Users Registers
                </h1>
                 </div>
            <div className="grid grid-cols-3 bg-gray-900 text-white px-2 py-4 font-semibold">

                    <p>Name</p>
                    <p>Email</p>
                    <p>Event</p>

                    </div>

           {
            users.map((user)=>{
                return  <div key={user.id} className="grid grid-cols-3 items-center px-2 py-5 border-b hover:bg-gray-50 transition">
                    <p className="font-semibold text-gray-700">
                    {user.name}
                    </p>
                      <p className="font-bold text-indigo-600">
                    {user.email}
                    </p>
                    <p className="font-semibold text-gray-700">
                    {user.event}
                    </p>
                </div>
            })
           }
        </div>
    )
}
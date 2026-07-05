import {useEffect,useState} from "react";
import axios from "axios";
import {BackendUrl} from "../config";


export default function ManageUsers(){


const [users,setUsers]=useState([]);


const getUsers = async () => {
  try {

    const token = localStorage.getItem("adminLogin");

    const res = await axios.get(
      `${BackendUrl}/api/users`,
      {
        headers: {
          token,
        },
      }
    );

    console.log(res.data);

    if (res.data.success) {
      setUsers(res.data.users);
    }

  } catch (error) {
    console.log(error.response?.data);
  }
};

useEffect(()=>{
getUsers();
},[]);



return(

<div>

<h1 className="text-3xl font-bold mb-8">
Manage Users
</h1>


<div className="bg-white rounded-xl shadow p-5">


{
users.map(user=>(

<div
key={user._id}
className="border-b py-3"
>


<h2 className="font-bold">
{user.name}
</h2>


<p>
{user.email}
</p>


</div>


))
}


</div>


</div>

)

}
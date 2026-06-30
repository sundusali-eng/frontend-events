import { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl } from "../config";


export default function Dashboard(){

const [dashboard,setDashboard] = useState({
    totalEvents:0,
    totalBookings:0,
    totalUsers:0
});


const getDashboard = async()=>{

try{

const res = await axios.get(
`${BackendUrl}/api/admin/dashboard`,
{
 headers:{
 token: localStorage.getItem("adminLogin")
}
}
);

console.log(res.data); 
if(res.data.success){

setDashboard(res.data.data);

}


}catch(error){

console.log(error);

}


}



useEffect(()=>{

getDashboard();

},[]);



return(

<div>


<h1 className="text-3xl font-bold mb-8">
Admin Dashboard
</h1>



<div className="grid md:grid-cols-3 gap-6">


<div className="bg-white shadow rounded-xl p-6">

<h2 className="text-gray-500">
Total Events
</h2>

<p className="text-4xl font-bold mt-3">
{dashboard.totalEvents}
</p>

</div>



<div className="bg-white shadow rounded-xl p-6">

<h2 className="text-gray-500">
Total Bookings
</h2>

<p className="text-4xl font-bold mt-3">
{dashboard.totalBookings}
</p>

</div>




<div className="bg-white shadow rounded-xl p-6">

<h2 className="text-gray-500">
Total Users
</h2>

<p className="text-4xl font-bold mt-3">
{dashboard.totalUsers}
</p>

</div>



</div>


</div>

)

}
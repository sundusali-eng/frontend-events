import { Link, useNavigate } from "react-router-dom";

export default function Sidebar(){

const navigate = useNavigate();

const logout=()=>{

localStorage.removeItem("adminLogin");

navigate("/admin/login");

};

return(

<div className="w-64 bg-gray-900 text-white p-6">

<h1 className="text-3xl font-bold mb-8">
Event Admin
</h1>

<div className="space-y-4 flex flex-col">

<Link to="/admin/dashboard">
Dashboard
</Link>

<Link to="/admin/events">
Manage Events
</Link>

<Link to="/admin/create-event">
Create Event
</Link>

<Link to="/admin/bookings">
Manage Bookings
</Link>

<Link to="/admin/users">
Manage Users
</Link>

<Link to="/admin/messages">
Messages
</Link>

<button
onClick={logout}
className="bg-red-600 py-2 rounded mt-6"
>

Logout

</button>

</div>

</div>

)

}
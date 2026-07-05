import {useEffect,useState} from "react";
import axios from "axios";
import {BackendUrl} from "../config";
import toast, {Toaster} from "react-hot-toast";


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

 const updateStatus = async (id, status) => {
    try {
      const res = await axios.put(
        `${BackendUrl}/api/status/${id}`,
        { status },
        {
          headers: {
            token: localStorage.getItem("adminLogin"),
          },
        }
      );

      if (res.data.success) {
        toast.success("User updated");
        getUsers();
      }
    } catch (error) {
      toast.error("Failed to update user");
    }
  };

useEffect(()=>{
getUsers();
},[]);



 return(
 <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="text-center border-b">
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      user.status === "Blocked"
                        ? "bg-red-600"
                        : "bg-green-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="flex gap-2 justify-center">
                  <button
                    onClick={() => updateStatus(user._id, "Active")}
                    className="bg-green-600 text-white px-2 py-1 rounded"
                  >
                    Activate
                  </button>

                  <button
                    onClick={() => updateStatus(user._id, "Blocked")}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Block
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
 )
}
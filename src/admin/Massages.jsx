  
import { useState, useEffect } from "react";
import axios from 'axios'
import {BackendUrl} from '../config'
import toast, {Toaster} from 'react-hot-toast'
  
  export default function Messages() {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    try {
      const res = await axios.get(`${BackendUrl}/api/contact`, {
        headers: {
          token: localStorage.getItem("adminLogin"),
        },
      });

      if (res.data.success) {
        setMessages(res.data.contacts); // ✅ FIXED
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  const deleteMessage = async (id) => {
  try {
    const res = await axios.delete(
      `${BackendUrl}/api/contact/${id}`,
      {
        headers: {
          token: localStorage.getItem("adminLogin"),
        },
      }
    );

    if (res.data.success) {
      toast.success("Message deleted");
      getMessages();
    }
  } catch (error) {
    toast.error("Delete failed");
  }
};

  return (
    <table className="w-full mt-5">
      <thead>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Message</th>
    <th>Date</th>
    <th>Action</th>
  </tr>
</thead>

<tbody>
  {messages.map((m) => (
    <tr key={m._id}>
      <td>{m.name}</td>
      <td>{m.email}</td>
      <td>{m.phone}</td>
      <td>{m.message.slice(0, 40)}...</td>
      <td>{new Date(m.createdAt).toLocaleDateString()}</td>
      <td>
        <button className="bg-blue-600 text-white px-3 py-1 rounded mr-2">
          View
        </button>

        <button
             onClick={() => deleteMessage(m._id)}
             className="bg-red-600 text-white px-3 py-1 rounded"
        >
           Delete
          </button>
      </td>
    </tr>
  ))}
</tbody>
    </table>
  );
}
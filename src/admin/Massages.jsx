  
import { useState, useEffect } from "react";
import axios from 'axios'
import {BackendUrl} from '../config'
import toast, {Toaster} from 'react-hot-toast'
  
  export default function Messages() {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    try {
      const res = await axios.get(`${BackendUrl}/api/contact/get`, {
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

  return (
    <table className="w-full mt-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
        </tr>
      </thead>

      <tbody>
        {messages?.map((m) => (
          <tr key={m._id}>
            <td>{m.name}</td>
            <td>{m.email}</td>
            <td>{m.phone}</td>
            <td>{m.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
import { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl } from "../config";
import toast from "react-hot-toast";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const getMessages = async () => {
    try {
      const res = await axios.get(`${BackendUrl}/api/contact`, {
        headers: {
          token: localStorage.getItem("adminLogin"),
        },
      });

      if (res.data.success) {
        setMessages(res.data.contacts);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to load messages");
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  const deleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    try {
      const res = await axios.delete(`${BackendUrl}/api/contact/${id}`, {
        headers: {
          token: localStorage.getItem("adminLogin"),
        },
      });

      if (res.data.success) {
        toast.success("Message deleted");
        getMessages();
      }
    } catch (error) {
      console.log(error);
      toast.error("Delete failed");
    }
  };

  const filtered = messages.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Contact Messages</h1>

        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg p-2 w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">

          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((m) => (
              <tr key={m._id} className="border-b text-center">

                <td>{m.name}</td>

                <td>{m.email}</td>

                <td>{m.phone}</td>

                <td>
                  {new Date(m.createdAt).toLocaleDateString()}
                </td>

                <td className="space-x-2">

                  <button
                    onClick={() => setSelected(m)}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
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
      </div>

      {/* View Modal */}

      {selected && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

          <div className="bg-white rounded-xl p-6 w-[500px]">

            <h2 className="text-2xl font-bold mb-4">
              Message Details
            </h2>

            <p><strong>Name:</strong> {selected.name}</p>

            <p><strong>Email:</strong> {selected.email}</p>

            <p><strong>Phone:</strong> {selected.phone}</p>

            <p className="mt-4">
              <strong>Message:</strong>
            </p>

            <div className="bg-gray-100 p-4 rounded mt-2">
              {selected.message}
            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-5 bg-indigo-600 text-white px-5 py-2 rounded"
            >
              Close
            </button>

          </div>

        </div>
      )}
    </div>
  );
}
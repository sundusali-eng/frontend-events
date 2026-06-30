import { Link, Outlet } from "react-router-dom";

export default function AdminLayout(){

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-5">

        <h1 className="text-2xl font-bold mb-8">
          Admin Panel
        </h1>

        <nav className="space-y-4">

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/dashboard/events">
            Events
          </Link>

          <Link to="/dashboard/bookings">
            Bookings
          </Link>

          <Link to="/dashboard/users">
            Users
          </Link>

        </nav>

      </div>


      {/* Page Content */}
      <div className="flex-1 p-8">

        <Outlet />

      </div>

    </div>
  )
}
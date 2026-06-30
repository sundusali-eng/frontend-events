export default function AdminHome() {

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Dashboard Overview
      </h1>


      <div className="grid md:grid-cols-3 gap-6">


        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">
            Total Events
          </h2>

          <p className="text-4xl font-bold mt-3">
            0
          </p>
        </div>


        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">
            Total Bookings
          </h2>

          <p className="text-4xl font-bold mt-3">
            0
          </p>
        </div>


        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">
            Total Users
          </h2>

          <p className="text-4xl font-bold mt-3">
            0
          </p>
        </div>


      </div>


    </div>
  )
}
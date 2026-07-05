import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Home from './components/Home.jsx'
import EventCard from './components/OurService.jsx'
import CreateEvent from './pages/CreateEvents.jsx'
import Events from './pages/Events.jsx'
import Register from './services/Register.jsx'
import Login from './services/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import EventDetails from './pages/EventDetails.jsx'
import Booking from './pages/Booking.jsx'
import Contact from './components/Contact.jsx'
import AdminLogin from './services/AdminLogin.jsx'
import MyBookings from './pages/MyBooking.jsx'
import FeatureEventSection from './components/FeatureEventSection.jsx'
import AdminProtectedRoute from "./services/AdminProtectedRoute.jsx";
import AdminLayout from "./admin/AdminLayout.jsx";
import ManageEvents from './admin/ManageEvents.jsx'
import ManageBookings from './admin/ManageBookings.jsx'
import ManageUsers from './admin/ManageUsers.jsx'
import EditEvent from './pages/EditEvent.jsx'
import Messages from './admin/Massages.jsx'

const router = createBrowserRouter([
  {
    path : "/", element: <App />,
    children:[
      {
         path : "/", element: <Home />
      },
      {
        path: "/event", element: <Events />
      },
      {
         path: "/register", element: <Register />
      }, 
      {
        path: "/login", element: <Login />
      },
      {
        path: "/details/:id", element: <EventDetails />
      },
      {
        path: "/booking/:id", element: <Booking />
      },
      {
        path: "/contact", element: <Contact />
      },
      {
  path: "/admin/login",
  element: <AdminLogin />
},

{
  path: "/admin",
  element: (
    <AdminProtectedRoute>
      <AdminLayout />
    </AdminProtectedRoute>
  ),

  children: [

    {
      index: true,
      element: <Dashboard />
    },

    {
      path: "dashboard",
      element: <Dashboard />
    },

    {
      path: "events",
      element: <ManageEvents />
    },

    {
      path: "create-event",
      element: <CreateEvent />
    },

    {
      path: "bookings",
      element: <ManageBookings />
    },

       {
        path: "users",
        element: <ManageUsers />
        },

          {
          path: "edit-event/:id",
           element: <EditEvent />
           },

           {
          path: "messages",
           element: <Messages />
           }

       ]
      },
      {
       path: "/my-bookings",  element: <MyBookings />
      },
      {
       path: "/feature",  element: <FeatureEventSection />
      }
    
    ] 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider >  */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </StrictMode>,
)

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

import EventDetails from './pages/EventDetails.jsx'
import Booking from './pages/Booking.jsx'
import Contact from './components/Contact.jsx'
import FeaturedEvents from './components/FeatureEvent.jsx'

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
        path: "/createEvent", element: <CreateEvent />
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
        path: "/feature", element: <FeaturedEvents />
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

import { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { User, LogOut, CalendarDays } from "lucide-react";



function Navbar () {

  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false)

    const user = JSON.parse(localStorage.getItem("user"));
 
const navigate = useNavigate()


     const handleIsOpen =()=>{
        setIsOpen(true)
     }

       const handleIsClose =()=>{
        setIsOpen(false)
     }
   
    

  const logout = () => {
    localStorage.clear('userLoging')
    navigate('/login')
  }


   useEffect(() => {
    const token = localStorage.getItem('userLogin')
    setIsLogin(!!token)
  })



 const [isIscrolled, setisIscrolled] =useState(false)

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 50){
        setisIscrolled(true)
      }else{
        setisIscrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return ()=> window.removeEventListener('scroll', handleScroll) 
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-slate-100  text-black shadow-lg">
      <div   className={`max-w-7xl mx-auto px-6 lg:py-0 py-3 relative flex items-center justify-between ${ isOpen ? "bg-white text-black" : isIscrolled ? "bg-white/30 py-2 shadow-md" : "bg-transparent" }`}>
        
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-green-800">
            EventHub
          </h1>
        </div>


        {/* Links */}
        <ul  className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent text-black p-5 md:p-0  gap-5`}>
          <Link to="/">
          <li  className="hover:text-green-400 transition">
           
              Home
         </li>
         </Link>
          <Link to= '/event'>
          <li className="hover:text-green-400 transition">
              Events
          </li>
           </Link>
         <Link to="/feature">
          <li className="hover:text-green-400 transition">
             Feature Events
          </li>
          </Link>
         <Link to= '/contact'>
          <li className="hover:text-green-400 transition">
               Contact
          </li>
          </Link>

          <Link
             to="/my-bookings"
             className="hover:text-green-400 transition"
            >
           My Bookings
         </Link>
      
        </ul>

        {/* Buttons */}
        <div className={`${isOpen ? "flex" : "hidden"} lg:flex flex-col md:flex-row absolute md:static top-[250px] left-0 w-full md:w-auto bg-white md:bg-transparent p-5 gap-3`}>
            {userLogin ? (
        <div className="relative">
          <button onClick={() => setOpen(!open)}>
            <div className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center text-xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-xl text-black overflow-hidden">

              <div className="p-5 border-b">
                <p className="text-gray-500 text-sm">Welcome,</p>
                <h2 className="font-bold text-lg">{user.name}</h2>
              </div>

              <Link
                to="/my-bookings"
                className="flex items-center gap-3 px-5 py-4 hover:bg-gray-100"
              >
                <CalendarDays size={20} />
                My Bookings
              </Link>

              <button
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.reload();
                }}
                className="flex items-center gap-3 px-5 py-4 text-red-500 hover:bg-red-50 w-full"
              >
                <LogOut size={20} />
                Sign Out
              </button>

            </div>
          )}
        </div>
      ) : (
        <Link
          to="/login"
          className="bg-orange-500 px-5 py-2 rounded-lg"
        >
          Login
        </Link>
      )}
      </div>

         <button onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
          {isOpen ? (
         <IoIosClose size={35} />
         ) : (
          <IoMenu size={30} />
             )}
         </button>
      </div>
    </nav>
  );
};

export default Navbar;
import { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";



function Navbar () {

  const [isOpen, setIsOpen] = useState(false);
 
     const handleIsOpen =()=>{
        setIsOpen(true)
     }

       const handleIsClose =()=>{
        setIsOpen(false)
     }



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
        </ul>

        {/* Buttons */}
        <div className={`${isOpen ? "flex" : "hidden"} lg:flex flex-col md:flex-row absolute md:static top-[250px] left-0 w-full md:w-auto bg-white md:bg-transparent p-5 gap-3`}>
          <Link to='/login'>
            <button className="px-4 py-2 border border-green-400 rounded-lg hover:bg-green-400 hover:text-black transition">
              Login
            </button>
             </Link>

             <Link to='/register'>
            <button className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition">
              SingUp
            </button>
            </Link>
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
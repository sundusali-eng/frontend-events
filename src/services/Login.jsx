import { BackendUrl} from "../config"
import axios from "axios"
import toast, {Toaster} from 'react-hot-toast'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()

        try {
            
            const response = await axios.post(`${BackendUrl}/api/user/login`, {email, password})
            if(response.data.success){
                localStorage.setItem("token", response.data.token)
                toast.success(response.data.message)
                navigate('/')
            }
        } catch (error) {
            console.log(error)
            toast.error('somthing went wrong')
        }
    }
    return (

    <div className="min-h-screen flex justify-center bg-gray-100 items-center">
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl w-96 text-center">

    <h1 className="text-2xl font-bold mb-3"> Login </h1>

    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your email"className="w-full border border-gray-900 mt-2 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />

    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password" className="w-full border border-gray-900 mt-2 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
    
    <button type="submit" className="w-50 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition mt-3 duration-300"> Login </button>

<div>
     <p className="text-center text-gray-400 mt-4">
              Don’t have an account?{" "}
       <Link to="/register" className="text-orange-500 hover:text-orange-400 font-semibold" >
        Create account
       </Link>
      </p>
      </div>
     </form>

     </div>

    )

}

export default Login
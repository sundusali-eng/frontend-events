import { BackendUrl} from "../config"
import axios from "axios"
import toast, {Toaster} from 'react-hot-toast'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
         
        try {
            
            const response = await axios.post(`${BackendUrl}/api/user/register`, {email, password, name})
            if(response.data.success){
                localStorage.setItem('userLogin', response.data.token)
                toast.success('user registered successfully')
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
        }
    }

    return (

    <div className="min-h-screen flex justify-center bg-gray-100 items-center">
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl w-96">

    <h1 className="text-2xl font-bold mb-3"> Register </h1>
        
    <input value={name} onChange={(e)=>setName(e.target.value)} type="name" placeholder="Enter your name" className="w-full border border-gray-900 mt-2 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
     <br />
    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your email"className="w-full border border-gray-900 mt-2 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
     <br />
    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password" className="w-full border border-gray-900 mt-2 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
    <br />
    <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition mt-3 duration-300"> Register </button>
      
     </form>

     </div>

    )

}

export default Register
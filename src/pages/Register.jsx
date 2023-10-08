import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
 
function Register() {
  const [username,setUsername] = useState('')
  const navigate = useNavigate()


  function handleSubmit(e){
    e.preventDefault();
  
    navigate('/login')
  }
  return (
    <section className="login h-screen w-screen  flex flex-col items-center justify-center  bg-my-image bg-cover bg-no-repeat bg-fixed bg-center">
      <div className="bg-indigo-950/90 px-10 py-4 rounded-xl">
      <span className="loginTitle text-5xl text-white">Register</span>
      <form className="loginForm mt-5 flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="" className="my-2 text-white">username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}placeholder="Enter your username" className="p-2 bg-white outline-none rounded-lg"/>

      <button className="loginButton mt-5 cursor-pointer py-2 bg-[#37003C] border border-white text-white rounded-full">Register</button>
        <button className="loginButton mt-5 cursor-pointer py-2 bg-[#37003C] border border-white text-white rounded-full"><Link to='/login'>Login</Link></button>
      </form>
      </div>
    </section>
  )
}

export default Register

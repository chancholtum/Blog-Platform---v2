import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { updateName } from "../Slice/userSlice"

function Login() {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogin(e){
    e.preventDefault();

    dispatch(updateName(username))
    navigate('/')
  }
  
  return (
    <section className="login h-screen w-screen  flex flex-col items-center justify-center  bg-my-image bg-cover bg-no-repeat bg-fixed bg-center">
      <div className="bg-indigo-950/90 px-10 py-4 rounded-xl">
      <span className="loginTitle text-5xl text-white">Login</span>
      <form className="loginForm mt-5 flex flex-col" onSubmit={handleLogin}>
        <label htmlFor="" className="my-2 text-white">username</label>
        <input type="text" placeholder="Enter your username" className="p-2 bg-white outline-none rounded-lg" autoFocus value={username} onChange={(e)=>setUsername(e.target.value)}/>

        <button className="loginButton mt-5 cursor-pointer py-2 bg-[#37003C] border border-white text-white rounded-full">Login</button>
      <button className="loginButton mt-5 cursor-pointer py-2 bg-[#37003C] border border-white text-white rounded-full"><Link to='/register'>Register</Link></button>
      <button className="loginButton mt-5 cursor-pointer py-2 bg-[#37003C] border border-white text-white rounded-full"><Link to='/'>Without Login</Link></button>
      </form>
      </div>
    </section>
  )
}

export default Login

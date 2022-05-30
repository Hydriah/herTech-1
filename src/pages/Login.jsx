import React from 'react'
import { Link } from 'react-router-dom'
import {BsXLg} from "react-icons/bs";

export default function Login() {
  return (
    <div className='w-full h-auto flex justify-center items-center bg-gray-200'>
      <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
      <div  className='flex'>
      <h3 className=' flex-1 text-black text-2xl font-bold text-center'>HerTech </h3>
     <Link to ="/">
     <BsXLg size={20}/>  
     </ Link>     
      </div>
   
          <p className='text-black-600 text-md font-sm text-center my-3 mt-2'>Welcome back!</p>

          <input type="email" placeholder="example@email.com" className='w-full h-10 rounded-lg border-2 t border-gray-300 px-3 mt-4' />
          <input type="password" placeholder="password" className='w-full h-10 rounded-lg border-2 border-gray-300 px-3 mt-4' />

          <button className='w-full h-10 rounded-lg bg-black text-white text-md mt-5'>Login to HerTech</button>

          <p className=' text-center mt-6 font-medium  text-gray-500'>OR</p>

          <p className='text-center mt-4 text-gray-900 '>Don't have an account? 
            <Link to="/signup">
              <span className='font-bold text-black'> Sign up</span>
            </Link>
          </p>
          <Link to="/forgotpassword">
            <p className='text-center mt-3 text-gray-900 '>Forgot password?</p>
          </Link>
      </div>
    </div>
  )
}

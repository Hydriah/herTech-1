import React from 'react';
import { Link } from 'react-router-dom';
import {BsXLg} from "react-icons/bs";


export default function Forgotpassword() {
  return (
    <div className='w-full h-auto flex justify-center items-center bg-gray-200'>
    <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
    <div  className='flex'>
      <h3 className=' flex-1 text-black text-2xl font-bold text-center'>HerTech </h3>
     <Link to ="/">
     <BsXLg  size={20}/>  
     </ Link>     
      </div>
        <p className=' text-md font-light text-center  mt-1'>Welcome back!</p>
        <input type="email" placeholder="email address" className='w-full h-10 rounded-lg border-2 border-gray-500 px-3 mt-5' />
        <button className='w-full h-10 rounded-lg bg-black text-white font-bold text-md mt-5'>Login to HerTech</button>
        <p className='text-center mt-5  font-md'>Already have an account? 
          <Link to="/login">
            <span className='font-bold text-black'> Login </span>
          </Link>
        </p>
    </div>
  </div>
  )
}

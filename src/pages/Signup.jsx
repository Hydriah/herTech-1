import React from 'react'
import { FcGoogle} from "react-icons/fc";
// import { FcGoogle} from "react-icons/fc";
import { Link } from 'react-router-dom'
import {BsLinkedin ,BsTypeH3,BsXLg} from "react-icons/bs";
export default function Signup() {
  return (
  //  remember to change parent h-auto to h-screen
  <div className='  w-full h-auto flex justify-center items-center bg-gray-200'>
  <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
  <div  className='flex'>
  <h3 className=' flex-1 text-black text-2xl font-bold text-center'>HerTech </h3>
     <Link to ="/">
     <BsXLg  size={20} />  
     </ Link>     
      </div>
   
        <p className='text-md font-medium text-center mt-2 '>You're 1-click away from creating an account</p>

        <input type="email" placeholder="example@email.com" className='w-full h-10 rounded-lg border-2 border-gray-400 px-4 mt-4' />
        <input type="password"  placeholder="password" className='w-full h-10 rounded-lg border-2 border-gray-400 px-4 mt-4' />
        <input type="password" placeholder="confirm password" className='w-full h-10 rounded-lg border-2 border-gray-400 px-4 mt-4' />
        <Link to="/">
        <button className='w-full h-10 rounded-lg bg-black text-white font-bold text-md mt-5 required'>Create account</button>
      </Link> 
        <p className=' text-center mt-6 font-medium  text-gray-400'>OR</p>
        {/* <Link> */}         
        <button  className='w-full h-10 bg-gray-100 flex rounded-lg p-2 justify-center font-medium mt-4'> <FcGoogle  size={25} /> Continue with Google</button>
        {/* </Link> */}

        {/* {<link>} */}
        <button  className='w-full h-10 bg-gray-100 flex  rounded-lg  p-2 justify-center font-medium mt-4'>  <BsLinkedin   size={23} color="#0072b1"/>
        Continue with Linkedin</button>
        {/* </link> */}
        <p className='text-center mt-5 text-gray-800 font-medium'>Already have an account? 
          <Link to="/login">
            <span className='font-bold text-black'> Login </span>
          </Link>
        </p>
     
    </div>
  </div>

)
}

import React from 'react'
import { NavLink } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className='flex h-screen w-screen items-center  font-Montserrat flex-col gap-11 justify-center'>
   
      <div className='w-1/4 h-1/3 flex flex-col justify-center items-center font-Montserrat bg-teal-700'>
          <p className='text-xl text-white font-bold'> OOPS! Page Not Found</p>
          <h1 className='text-[182px] text-white font-extrabold'>404</h1>
      </div>
      <NavLink to="/">
      <button className=' px-7 bg-white py-3 border-2 border-black hover:bg-gray-200 '>
        HOME
      </button>
      </NavLink>
    </div>
  )
}

export default Error404;  


import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-indigo-400 flex justify-between shadow-lg'>
        <div className='flex  px-10 py-2 '>
           <Link to='/home' className='flex'>
            <h1 className='text-4xl font-semibold text-red-700'>M</h1>
            <h1 className='text-4xl font-semibold text-white'>U</h1>
            <h1 className='text-4xl font-semibold text-red-700'>K</h1>
            <h1 className='text-4xl font-semibold text-white'>E</h1>
            <h1 className='text-4xl font-semibold text-red-700'>S</h1>
            <h1 className='text-4xl font-semibold text-white'>H</h1>
            </Link>
        </div>
        <div className='flex text-white gap-5 px-10 py-2'>
        <Link to='/home' className='text-2xl font-semibold cursor-pointer px-2   hover:text-black '> Home</Link>
        <Link to='/about' className='text-2xl font-semibold cursor-pointer px-3  hover:text-black '> About</Link>
           <Link to='/contact' className='text-2xl font-semibold cursor-pointer px-3   hover:text-black '> Contact</Link>
           <Link to='/login' className='text-xl font-semibold bg-red-500 text-white text-center px-3 py-1 rounded-md hover:bg-red-800' > Logout</Link>

           
            
        </div>

    </div>
  )
}

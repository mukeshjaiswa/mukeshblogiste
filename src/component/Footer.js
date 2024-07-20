import React from 'react'

export default function () {
    const currentYear = new Date().getFullYear();
  
  return (
    <div className='bg-indigo-400 flex justify-center text-white py-2 top-5 bottom-0 w-full'>
        <h1>CopyRight &copy; {currentYear}. All rights reserved.</h1>
      
        
    </div>
  )
}

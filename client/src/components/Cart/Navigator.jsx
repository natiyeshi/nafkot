import React from 'react'
import {MdOutlineNavigateNext as Next } from "react-icons/md"

const Navigator = () => {
  return (
    <div className='relative max-md:w-11/12 w-c72 mx-auto my-5 flex gap-3  '>
       
       <div>Home</div>  
       <Next className='mt- text-redd text-lg' />
       <div>Cart</div>
       
        
        <div className='absolute right-0 max-md:hidden'>
            Need help? Call <span className='text-redd font-bold'>+44 7767 267717</span> 
        </div>

    </div>
  )
}

export default Navigator
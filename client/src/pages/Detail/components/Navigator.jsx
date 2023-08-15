import React from 'react'
import {MdOutlineNavigateNext as Next } from "react-icons/md"

const Navigator = ({ProductData}) => {
  if(ProductData == undefined) return
  return (
    <div className='relative max-md:w-11/12 w-c72 mx-auto my-5 flex   '>
       <div className='max-md:hidden flex gap-3'>
          <div>Home</div>  
          <Next className='mt- text-redd text-lg' />
          <div>packages</div>
          <Next className='mt- text-redd text-lg' />
          <div>{ProductData.title}</div>
       </div>
        
        <div className='absolute md:right-0 '>
            Need help? Call <span className='text-redd font-bold'>+44 7767 267717</span> 
        </div>

    </div>
  )
}

export default Navigator
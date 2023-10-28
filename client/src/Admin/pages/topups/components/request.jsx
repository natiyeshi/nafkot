import React from 'react'
import { BiCopy } from "react-icons/bi"

const Request = ({setAlerting}) => {
  return (
 <div className='bg-white px-4 pt-2 w-full duration-300 hover:shadow-xl rounded shadow-md border   shrink-0'>
        <div className='flex justify-between'>
            <div className='text-lg font-semibold'>5 birr card</div>
            <div className='text-xs  my-auto '>4 days ago</div>
        </div>
        <div className='flex gap-2'>
            <div className='mt-2 mb-3'> Phone Number <span className='font-bold'>+251965482411</span> </div>
            <BiCopy onClick={()=>{
                navigator.clipboard.writeText("+2318542353");
                setAlerting("+2318542353 copied");
            }
            
            } title='Copy' className='my-auto text-lg cursor-pointer'/>
        </div>
        <div className='flex my-2 gap-10  bg-gray-30 w-full   ' >
            <div className=' text-gray-900 duration-300 rounded  py-[5px] font-bold '>Amount 8$</div>
            <button className='bg-redd duration-300 rounded px-8 py-[5px] font-bold text-white'>send</button>
        </div>
    </div>
  )
}

export default Request
import React from 'react'

const DeleteTopup = ({setShowDeleteTopup}) => {
  return (
    <div className=' absolute flex z-20 left-0 right-0 bottom-0 top-0'>
      
        <div className=' m-auto  bg-white z-30 px-7 pt-2  duration-300 rounded shadow-md border  shrink-0'>
              <div className='text-lg font-bold'>Delete Product</div>
              <div className=' text-gray-900 duration-300 rounded  py-[5px] font-semibold '>Are you sure you want to delete this product ?</div>
              <div className='flex flex-row-reverse my-2 gap-10  bg-gray-30 w-full' >
                  <button className='bg-redd duration-300 rounded px-8 py-[5px] font-bold text-white'>Delete</button>
            </div>
      </div>

      <div onClick={()=>{setShowDeleteTopup(false)}} className='absolute -z-10 left-0 right-0 bottom-0 top-0 bg-gray-900  opacity-40'></div>
   
    </div>
  )
}

export default DeleteTopup
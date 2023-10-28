import React from 'react'

const AdminTopup = ({setShowEditTopup,setShowDeleteTopup}) => {
  return (
 <div className='bg-white px-4 pt-2 w-full duration-300 hover:shadow-xl rounded shadow-md border   shrink-0'>
        <div className='text-lg font-bold'>5 birr card</div>
        <div className='mt-2 mb-3'>the cost for 5 birr card is 1$ (one dollar) </div>
        <div className='flex my-2 gap-10  bg-gray-30 w-10/12     ' >
            <button onClick={()=>{setShowDeleteTopup(true)}} className='bg-redd duration-300 rounded px-8 py-[5px] font-bold text-white'>Delete</button>
            <button onClick={()=>{setShowEditTopup(true)}} className='bg-gray-300 text-gray-900 duration-300 rounded px-8 py-[5px] font-bold '>Edit</button>
        </div>
    </div>
  )
}

export default AdminTopup
import React from 'react'

const Topup = () => {
  return (
 <div className=' px-4 pt-2 w-full duration-300 hover:shadow-xl rounded shadow-md border   shrink-0'>
        <div className='text-lg font-bold'>5 birr card</div>
        <div className='mt-2 mb-3'>the cost for 5 birr card is 1$ (one dollar) </div>
        <div className='flex my-2 justify-between  bg-gray-30 w-10/12     ' >
            <div className='font-bold my-auto text-md'>$2.3</div>
            <button className='bg-redd duration-300 rounded px-6 py-[5px] font-bold text-white'>send</button>
        </div>
    </div>
  )
}

export default Topup
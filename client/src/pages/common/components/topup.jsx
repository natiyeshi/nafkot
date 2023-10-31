import React from 'react'
import { Link } from 'react-router-dom'

const Topup = ({data,currency,home}) => {
  const cost =  (data.amount / currency).toFixed(2) 
  return (
      <div className={`${home ? 'mx-2' : "w-full"} px-4 pt-2 duration-300 hover:shadow-xl rounded shadow-md border   shrink-0`}>
            <div className='text-lg font-bold'>{data.amount} birr card</div>
            <div className='mt-2 mb-3'>the cost for {data.amount} birr card is ${cost}  </div>
            <div className='flex my-2 justify-between  bg-gray-30 w-10/12     ' >
                <div className='font-bold my-auto text-md'>${cost}</div>
                <Link to={`/checkout/topup/${data._id}`} className='bg-redd duration-300 rounded px-6 py-[5px] font-bold text-white'>send</Link>
            </div>
        </div>
  )
}

export default Topup
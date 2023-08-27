import React from 'react'
import Products from './products'
import Bar from '../../common/Bar'

const Dashbord = () => {
  return (
    <div className='flex  bg-blue-50 '>
        <Bar />
        <div className='basis-9/12 flex flex-col  p-5 overflow-y-scroll bg-red' style={{maxHeight:"100vh"}}>
            <h1 className='text-xl my-4 '>Good Morning</h1>
            <div className=' bg-red-400 text-white  flex flex-col gap-2 hover:opacity-90 w-1/3 ps-6 pt-5 pb-5 rounded-lg'>
            <h1 className='text-lg font-bold'>
                    Welcome to Nafkot 
            </h1>
            <p>24 hours 7 days 365 days working </p>
            </div>
            <Products />


            <div className='bt-red\\'>
                <h1 className='my-3 font-bold text-lg'>Transactions</h1>
                <p>Money builds business</p>
                <div className='relative bg-slate-800 flex pt-12 gap-6 text-white w-2/5 px-8 py-4 rounded-lg mt-3 text-lg'>
                    <h1 className='left-0 -top-3 px-3 py-2 shadow-lg  rounded-tl-lg  rounded-br-lg text-xs my-3 bg-redd absolute' >in 3 months</h1>
                    <p className='text-sm'> <b className='text-2xl font-extrabold '>53</b>  Transactions </p>
                    <p className='text-sm'> <b className='text-2xl font-extrabold'>34</b>  Customers </p>
                    <p className='text-sm'> <b className='text-2xl font-extrabold'>$55,000</b>  income </p>
                </div>
            </div>

            

        </div>
    </div>
    
  )
}

export default Dashbord
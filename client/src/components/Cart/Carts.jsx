import React from 'react'
import Cart from './Cart'
import {GrClose as Close} from 'react-icons/gr'

const Carts = () => {
  return (
    <div className='w-full px-c14 max-lg:px-3 mb-6'>
        <h1 className='text-center w-2/3 text-xl font-semibold my-5 max-sm:mx-auto'>Carts</h1>
        <div  className='flex gap-5 max-lg:flex-col'>
            <div className=' flex flex-col gap-3 grow '>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                {/* <p className='m-auto text-xl font-semibold text-gray-400 opacity-80'> Your Cart is empty !!! </p> */}

            </div>

            <div className='bg--500 w-2/6 max-lg:w-full'>
                <div className='border px-2 py-5 max-lg:px-c14 max-sm:px-5'>
                    <div className='flex justify-between'>
                       <h1 className='font-semibold text-lg'>Total Estimate</h1>
                       <div className=''> <span className='font-semibold text-xl'>$450</span>  Inc VAT</div> 
                    </div>
                    <div className='text-center mt-5 '>
                        <button  className=' disabled:bg-gray-400 hover:bg-red-400 duration-100  bg-redd px-8 py-3 rounded font-semibold text-white text-'>Proceed to check out</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Carts
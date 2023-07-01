import React from 'react'
import Box from '../Homes/Box'
import Shoa from "../../assets/shoa.svg"
import Hilton from "../../assets/Hilton.svg"
import css from "./css/AllProducts.module.css"

const AllProducts = () => {
  return (
    <div className='  w-c72 max-md:w-full mx-auto mt-10 flex flex-col gap-3 overflow-x-hidden'>
       
       <h1 className='text-center font-bold text-redd text-2xl'>Products</h1>
        <h1 className='text-lg  max-md:text-lg text-center mt-3'>
            FILL THE CART WITH YOUR CHOSEN GIFTS AND MAKE YOUR LOVED ONES HAPPY
        </h1>

        {/* <div className="w-full ">
            <div className='w-6/12 max-lg:w-11/12 mx-auto border-2 flex p-1 rounded'>
                <input type="text" className='grow  focus:outline-none' placeholder='Search if you have something in mind' />
                <button className='bg-red p-2 w-3/12 text-white rounded'>Search</button>
            </div>
        </div> */}

        
        <div className='flex justify-around mt-3 capitalize px-32 max-lg:px-0 max-lg:pe-10  max-lg:hidden max-lg:ps-72 gap-10   bg--900'>
            <p className='cursor-pointer text-large font-bold text-redd '>mostly ordered</p>
            <p className='cursor-pointer text-large hover:text-redd '>holiday</p>
            <p className='cursor-pointer text-large hover:text-redd'>birthday</p>
            <p className='cursor-pointer text-large hover:text-redd'>valentine</p>
            <p className='cursor-pointer text-large hover:text-redd'>special day</p>
            <p className='cursor-pointer text-large hover:text-redd'>groceries</p>
            <p className='cursor-pointer text-large hover:text-redd'>others</p>
        </div>


        <div className='grid mt-2 mb-10 grid-cols-3 max-lg:px-4 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-around'>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box /> 
            <Box />
            <Box />
        </div>
       

    </div>
  )
}

export default AllProducts
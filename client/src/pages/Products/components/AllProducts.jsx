import React from 'react'
import Product from '../../common/components/Product'
import WorkWith from '../../common/components/WorkWith'

const AllProducts = () => {
  return (
    <div className=' pb-20 w-c72 max-md:w-full mx-auto mt-10 flex flex-col gap-3 overflow-x-hidden'>
       
       <h1 className='text-center font-bold text-redd text-2xl'>Products</h1>
        <h1 className='text-lg  max-md:text-lg text-center mt-3'>
            FILL THE CART WITH YOUR CHOSEN GIFTS AND MAKE YOUR LOVED ONES HAPPY
        </h1>

        {/* <div className="w-full ">
            <div className='w-6/12 max-lg:w-11/12 mx-auto border-2 flex p-1 rounded'>
                <input type="text" className='grow  focus:outline-none' placeholder='Search if you have something in mind' />
                <button className='bg-redd p-2 w-3/12 text-white rounded'>Search</button>
            </div>
        </div> */}

        
        
        <Product main={true}/>
        <WorkWith />
        

    </div>
  )
}

export default AllProducts
import React from 'react'
import Product from '../../common/components/Product'
import WorkWith from '../../common/components/WorkWith'

const HomeProduct = () => {
  return (
    <div className='font-medium w-c72 max-md:w-full mx-auto mt-10 flex flex-col gap-3'>
        <h1 className='text-center font-semibold text-redd text-2xl'>Products</h1>
        <h1 className='text-lg max-md:text-lg text-center mt-3'>
            FILL THE CART WITH YOUR CHOSEN GIFTS AND MAKE YOUR LOVED ONES HAPPY
        </h1>
        <Product />
        <WorkWith />
       
    </div>
  )
}

export default HomeProduct
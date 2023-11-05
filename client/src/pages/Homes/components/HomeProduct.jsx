import React from 'react'
import Product from '../../common/components/Product'
import WorkWith from '../../common/components/WorkWith'
import TopupRow from '../../common/components/topup_row'

const HomeProduct = () => {
  return (
    <div className='font-medium w-c72 max-lg:w-full mx-auto mt-2  max-w-7xl flex flex-col gap-3 '>
        
        
        <h1 className='text-center font-semibold text-redd text-2xl'>Products</h1>
        <h1 className='text-lg  text-center mt-3 mb-7'>
            FILL THE CART WITH YOUR CHOSEN GIFTS AND MAKE YOUR LOVED ONES HAPPY
        </h1>
        <TopupRow />
        <Product />
        <WorkWith />
       
    </div>
  )
}

export default HomeProduct
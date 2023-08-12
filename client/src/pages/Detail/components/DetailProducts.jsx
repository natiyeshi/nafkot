import React from 'react'
import Product from '../../common/components/Product'
import WorkWith from '../../common/components/WorkWith'

const DetailProducts = () => {
  return (
    <div className=' pb-20 w-c72 max-md:w-full mx-auto mt-10 flex flex-col gap-3 overflow-x-hidden'>
       
       <h1 className='text-center font-semibold  text-2xl'>Related Items</h1>
       
        <Product main={true}/>
        <WorkWith />

    </div>
  )
}

export default DetailProducts
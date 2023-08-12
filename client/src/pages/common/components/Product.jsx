import React from 'react'
import Box from './Box'
import Shoa from "../../../assets/images/shoa.svg"
import Hilton from "../../../assets/images/Hilton.svg"
import dummyProduct from '../../../data/dummyProduct'

const Product = ({related}) => {
  const temp = related === undefined || related == false
  return (
    <div className=' font-medium w-c72 max-md:w-full mx-auto mt-10 flex flex-col gap-3'>
        {temp ? 
            <>
            <h1 className='text-center font-semibold text-redd text-2xl'>Products</h1>
            <h1 className='text-lg max-md:text-lg text-center mt-3'>
                FILL THE CART WITH YOUR CHOSEN GIFTS AND MAKE YOUR LOVED ONES HAPPY
            </h1>
            </>
        : 
            <h1 className='text-center font-semibold  text-2xl'>Related Items</h1>
        }
        {/* <div className="w-full ">
            <div className='w-6/12 max-lg:w-11/12 mx-auto border-2 flex p-1 rounded'>
                <input type="text" className='grow focus:outline-none' placeholder='Search if you have something in mind' />
                <button className='bg-red p-2 w-3/12 text-white rounded'>Search</button>
            </div>
        </div> */}

        <div className='flex justify-around mt-3 capitalize px-32 max-lg:px-0 max-lg:pe-10  max-lg:hidden max-lg:ps-72 gap-5 bg--900'>
            <p className='hover:text-redd cursor-pointer text-large font-semibold text-redd'>mostly ordered</p>
            <p className='hover:text-redd cursor-pointer text-large '>holiday</p>
            <p className='hover:text-redd cursor-pointer text-large '>birthday</p>
            <p className='hover:text-redd cursor-pointer text-large '>valentine</p>
            <p className='hover:text-redd cursor-pointer text-large '>special day</p>
            <p className='hover:text-redd cursor-pointer text-large '>groceries</p>
            <p className='hover:text-redd cursor-pointer text-large '>others</p>
        </div>

        <div className='grid mt-2 grid-cols-3 max-lg:px-4 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-around'>
            {
                dummyProduct.map(values => <Box key={values._id} {...values} />)
            }
        </div>
        <div className='my-5 text-2xl   text-center flex flex-col gap-10'>
            <h1 className='font-semibold'>Partners</h1>
            <div className='flex justify-around'>
                <div>
                    <img  className='w-3/4 max-lg:hidden' src={Shoa} alt="" loading='lazy' />
                </div>
                <div>
                    <img  className='w-3/4 max-lg:m-auto' src={Hilton} alt="" loading='lazy' />
                </div>
                <div>
                    <img    className='w-3/4  max-lg:m-auto' src={Shoa} alt="" loading='lazy' />
                </div>
                <div>
                    <img className='w-3/4 max-lg:hidden ' src={Hilton} alt="" loading='lazy' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Product
import React from 'react'

import Shoa from "../../../assets/images/shoa.svg"
import Hilton from "../../../assets/images/Hilton.svg"

const WorkWith = () => {
  return (
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
  )
}

export default WorkWith
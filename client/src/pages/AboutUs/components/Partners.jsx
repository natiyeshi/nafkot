import React from 'react'
import Shoa from "../../../assets/images/Shoa.svg"
import Hilton from "../../../assets/images/Hilton.svg"

const Partners = () => {
  return (
    <div className=' px-c14 max-w-7xl mx-auto my-5 max-sm:mt-12 text-2xl font-bold  text-center flex flex-col gap-10'>
        <h1>Partners</h1>
        <div className='flex justify-around'>
            <div>
                <img  className='w-3/4 max-lg:hidden' src={Shoa} alt="" />
            </div>
            <div>
                <img  className='w-3/4 max-lg:m-auto' src={Hilton} alt="" />
            </div>
            <div>
                <img    className='w-3/4  max-lg:m-auto' src={Shoa} alt="" />
            </div>
            <div>
                <img className='w-3/4 max-lg:hidden ' src={Hilton} alt="" />
            </div>
        </div>
    </div>

  )
}

export default Partners
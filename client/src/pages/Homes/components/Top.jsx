import React from 'react'
import Image from "../../../assets/images/Rectangle 6.png"
import people from "../../../assets/images/Asset 15@4x 1.svg"
import mobPeople from "../../../assets/images/mobile_home.png"
import Nav from '../../common/components/Nav'

const Top = () => {
  return (
    <div className=''>
        
        <Nav />
        <div className='flex overflow-x-hidden '>
          <img src={Image} alt="" className='max-md:hidden w-full' loading='lazy'/>
          <img src={mobPeople} alt=""  className='md:hidden w-full' loading='lazy'/>
        </div>
          


        <div className='w-full relative bottom-10 flex justify-center'>
            
            <div className="max-xl:w-[55%] max-xl:mx-2 w-[40%] max-md:w-[85%] px-4 py-5 rounded-md bg-gray-100 flex gap-3 place-items-center justify-center">
                <img src={people} alt="" loading='lazy'/>
                <p>
                    100+ users are actively using this platform
                </p>
            </div>

        </div>


    </div>
  )
}

export default Top
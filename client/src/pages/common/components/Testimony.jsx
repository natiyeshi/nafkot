import React from 'react'
import {AiTwotoneStar as Star} from "react-icons/ai"

const Testimony = ({message,person}) => {
  return (
    <div className='bg-white py-4  justify-center  flex-shrink-0 p-2 px-3 max-sm:basis-3/4 flex flex-col basis-1/3 max-lg:basis-7/12 gap-2 w-full rounded-sm'>
                <div className='flex gap-3 '>
                    <div className='flex my-auto'>
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                    </div>
                    <span className='text-gray-400'>2 days ago</span>
                </div>
                <p>
                {message}
                </p>
                <h3 className='text-normal font-bold'>{person}</h3>
            </div>
  )
}

export default Testimony
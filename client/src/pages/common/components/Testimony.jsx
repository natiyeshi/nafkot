import React from 'react'
import {AiTwotoneStar as Star} from "react-icons/ai"

const Testimony = ({message,person}) => {
  return (
    <div className='bg-white py-3 justify-center px-6  gap-2  rounded'>
                <div className='flex gap-3 my-2 '>
                    <div className='flex my-auto'>
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                    </div>
                    <span className='text-gray-400'>2 days ago</span>
                </div>
                <p className='text-[14px]'>
                {message}
                </p>
                <h3 className='text-normal font-bold my-2'>{person}</h3>
            </div>
  )
}

export default Testimony
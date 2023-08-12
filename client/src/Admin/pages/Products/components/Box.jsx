import React from 'react'
import Img from "../../../../assets/images/Rectangle 1 (6).png"
import {AiTwotoneStar as Star} from "react-icons/ai"

const Box = () => {
  return (
    <div className='border shrink-0 rounded w-72 shadow-sm shadow-slate-500  duration-200  '>
        <div className="relative flex flex-col">
            <img src={Img} alt="" className=' cursor-pointer' />
            <span className='absolute top-3 right-3 bg-white rounded-2xl  p-1 flex place-items-center gap-1 font-semibold' >
                <Star className='text-yellow-500' />
                4.7 (391)   
            </span>
        </div>

        <div className='w-full text-center my-2'>
            <h4 className=' font-semibold' >Ultimate holiday package</h4>
            <p className=' text-xs'>1 large Sheep, 2 large chicken, whiskey, Cake...</p>
            <div className="grow py-2 text-center font-bold"> Amount $450</div>
        </div>

        <div className='flex flex-row justify-between mt-2  text-sm'>
            <button className='grow py-2 text-center font-semibold duration-100 '>Edit</button>
            <button className='grow py-2 text-center font-semibold duration-100 bg-mdark hover:bg-slate-900 text-white rounded-tl'>Delete</button>
        </div>

    </div>
  )
}

export default Box
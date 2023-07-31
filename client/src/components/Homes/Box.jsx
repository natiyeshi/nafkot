import React from 'react'
import Img from "../../assets/Rectangle 1 (6).png"
import {AiTwotoneStar as Star} from "react-icons/ai"

const Box = ({title,price,items}) => {
  
  let desc = "";
  for(let item of items){
    desc += item.amount +" "+ item.name+", "  
  }
  desc = desc.slice(0,-2)

  return (
    <div className='border rounded hover:shadow-xl hover:shadow-slate-500 duration-200 hover:-translate-y-1 '>
        <div className="relative flex flex-col">
            <img src={items[0].img} alt="" className=' cursor-pointer' />
            <span className='absolute top-3 right-3 bg-white rounded-2xl  p-1 flex place-items-center gap-1 font-semibold' >
                <Star className='text-yellow-500' />
                4.7 (391)   
            </span>
        </div>

        <div className='w-full text-center my-2'>
            <h4 className='text-lg font-semibold' >{title}</h4>
            <p>{desc}</p>
        </div>

        <div className='flex justify-between mt-2 text-large'>
            <div className="grow py-2 text-center font-bold">${price}</div>
            <button className='grow py-2 text-center font-semibold duration-100 text-redd hover:text-red-400'>View details</button>
            <button className='grow py-2 text-center font-semibold duration-100 bg-redd hover:bg-red-700 text-white rounded-tl'>Add to cart</button>
        </div>

    </div>
  )
}

export default Box
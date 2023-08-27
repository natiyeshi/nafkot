import React from 'react'
import {CgClose as Close} from 'react-icons/cg'
import { Link } from 'react-router-dom'
import plus from "../../../assets/images/faq plus (1).svg"
import minus from "../../../assets/images/faq minus.svg"


const Cart = ({data,amount,removeItemAmount,addItemAmount,removeCart}) => {
  
  let desc = "";
  for(let item of data.items){
    desc += item.amount +" "+ item.name+", "  
  }

  desc = desc.slice(0,-2)
  return (
    <div className='relative basis-1/2  flex border rounded gap-4'>
        <Link to={`/detail/${data._id}`} className='w-[200px] relative group'>
          <div className='absolute hover:duration-700  justify-center items-center left-0 right-0 top-1/2 bottom-0  bg-gradient-to-t bg-opacity-50 group-hover:from-slate-100 flex hover:bg-opacity-50  hover:flex   z-10'>
            <p className='group-hover:opacity-100 translate-y-2 opacity-0  group-hover:duration-500 duration-300 group-hover:translate-y-0   font-bold'>
              see mored
            </p>
          </div>
          <img src={data.items[0].img} className='rounded h-full w-full  absolute left-0 bottom-0 top-0 right-0 max-sm:hidden' width={""} height={""} alt="" />
        </Link>
        <div className='flex flex-col gap-2 max-lg:p-2 w-full'>
            <h1 className='font-semibold  text-lg  w-10/12 capitalize' style={{}}>{data.title}</h1>
            <p className=''>{desc}</p>
            <div className='flex gap-3 my-3 '>
                <img onClick={() => removeItemAmount(data._id)} src={minus} width={"20px"} className='text-redd cursor-pointer ' alt="" />
                <div className='text-lg font-semibold '>{amount}</div>
                <img onClick={() => addItemAmount(data._id)} src={plus} width={"20px"} className='cursor-pointer' alt="" />
            </div>
            <Close onClick={()=>removeCart(data._id)} className='absolute cursor-pointer right-0 me-2 mt-2 text-xl  text-redd duration-200 hover:rotate-90'/>
            <div className='absolute bottom-0 right-4 mb-2'> <span className='font-semibold '>${data.price} </span> Inc VAT </div>
        </div>
    </div>
  )
}

export default Cart
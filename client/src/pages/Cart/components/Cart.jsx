import React from 'react'
import {CgClose as Close} from 'react-icons/cg'

import plus from "../../../assets/images/faq plus (1).svg"
import minus from "../../../assets/images/faq minus.svg"


const Cart = ({data,amount,removeItemAmount,addItemAmount}) => {

  
  let desc = "";
  for(let item of data.items){
    desc += item.amount +" "+ item.name+", "  
  }

  desc = desc.slice(0,-2)
  return (
    <div className='relative flex border rounded gap-4'>
        <img src={data.items[0].img} className='rounded w-3/12 max-sm:hidden' width={""} alt="" />
        <div className='flex flex-col gap-2 max-lg:p-2 w-full'>
            <h1 className='font-semibold  text-lg  w-10/12 capitalize' style={{}}>{data.title}</h1>
            <p className=''>{desc}</p>
            <div className='flex gap-3 my-3 '>
                <img onClick={() => removeItemAmount(data._id)} src={minus} width={"20px"} className='text-redd cursor-pointer ' alt="" />
                <div className='text-lg font-semibold '>{amount}</div>
                <img onClick={() => addItemAmount(data._id)} src={plus} width={"20px"} className='cursor-pointer' alt="" />
            </div>
            <Close className='absolute cursor-pointer right-0 me-2 mt-2 text-xl  text-redd duration-200 hover:rotate-90'/>
            <div className='absolute bottom-0 right-4 mb-2'> <span className='font-semibold '>${data.price} </span> Inc VAT </div>
        </div>
    </div>
  )
}

export default Cart
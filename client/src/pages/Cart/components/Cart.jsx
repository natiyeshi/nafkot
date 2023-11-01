import React from 'react'
import {CgClose as Close} from 'react-icons/cg'
import { Link,NavLink, useNavigate } from 'react-router-dom'
import plus from "../../../assets/images/faq plus (1).svg"
import minus from "../../../assets/images/faq minus.svg"


const Cart = ({data,amount,removeItemAmount,addItemAmount,removeCart}) => {
  const navigator = useNavigate()
  let desc = "";
  for(let item of data.items){
    desc += item.amount +" "+ item.name+", "  
  }

  desc = desc.slice(0,-2)
  console.log(data.items[0].img,"---")
  return (
    <div  className='relative basis-1/2  flex border rounded gap-4  '>
        <div onClick={()=>navigator(`/detail/${data._id}`)} className='w-[200px] hover:cursor-pointer relative group bg-gray-300'>
            <img src={data.items[0].img} className='rounded h-full w-full object-cover absolute left-0 bottom-0 top-0 right-0 max-sm:hidden' width={""} height={""} alt="" />
        </div>
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
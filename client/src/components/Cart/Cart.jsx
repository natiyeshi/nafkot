import React from 'react'
import {CgClose as Close} from 'react-icons/cg'
import doro from "../../assets/Rectangle 1 (3).png"
import plus from "../../assets/faq plus (1).svg"
import minus from "../../assets/faq minus.svg"

const Cart = () => {
  return (
    <div className='relative flex border rounded gap-4'>
        <img src={doro} className='rounded w-3/12 max-sm:hidden' width={""} alt="" />
        <div className='flex flex-col gap-2 max-lg:p-2 w-full'>
            <h1 className='font-semibold  text-lg  w-10/12' style={{}}>Ultimate holiday package</h1>
            <p className=''>lapte do awef ads</p>
            <div className='flex gap-3 my-3 '>
                <img src={minus} width={"20px"} className='text-redd cursor-pointer ' alt="" />
                <div className='text-lg font-semibold '>1</div>
                <img src={plus} width={"20px"} className='cursor-pointer' alt="" />
            </div>
            <Close className='absolute cursor-pointer right-0 me-2 mt-2 text-xl  text-redd duration-200 hover:rotate-90'/>
            <div className='absolute bottom-0 right-4 mb-2'> <span className='font-semibold '>$450 </span> Inc VAT </div>
        </div>
    </div>
  )
}

export default Cart
import { useState } from "react"
import React from 'react'
// import Plus from "../../../assets/images/plus.svg"
import {FiPlusCircle as Plus} from "react-icons/fi"
import {BiMinusCircle as Minus} from "react-icons/bi"
import css from "../css/faq.module.css"

const Question = ({bool,setBool,num,question,answer}) => {
  let data = num == bool ? css.show : "h-0"
  return (
    
    <div className='flex-shrink-0  overflow-hidden relative bgredd w-9/12  max-md:w-10/12 flex gap-2'>
          
        <div className='flex flex-col gap-2'>
            <h1 className='font-semibold'>{question}</h1>
            <p className={`w-11/12 duration-200  `+ data }>
                {answer}
            </p>
        </div>

        <div className='flex right-0 h-6  cursor-pointer  '>
           {
            num != bool 
            ?  <Plus onClick={()=>{setBool(num)}} className='text-xl' width={70} />
            : <Minus onClick={()=>setBool(-1)} className='text-[22px]' width={78}  /> 
          }
        </div>

    </div>

  )
}

export default Question
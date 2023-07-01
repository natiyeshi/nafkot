import { useState } from "react"
import React from 'react'
import Plus from "../../assets/plus.svg"
import css from "./css/faq.module.css"

const Question = () => {
  let [bool,setBool] = useState(false)
  let data = bool == true ? css.show : "h-0"
  return (
    
    <div className='flex-shrink-0  overflow-hidden relative bgredd w-9/12  max-md:w-10/12 flex gap-2'>
          
        <div className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Ce alergeni conțin produsele Ohvăz?</h1>
            <p className={`w-11/12 duration-200  `+ data }>
                Consultă lista de ingrediente pentru produsele noastre.
                Cu excepția ingredientelor listate nu există posibilitatea
                ca produsele noastre să conțină urme de alte materii prime.
            </p>
        </div>

        <div className='flex right-0 h-6  cursor-pointer  '>
            <img src={Plus} alt="" onClick={()=>{setBool(!bool)}} className='' width={70} />
        </div>

    </div>

  )
}

export default Question
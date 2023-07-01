import React from 'react'
import Person from "../../assets/kelly-sikkema-JN0SUcTOig0-unsplash (1).jpg"
import css from "./css/box.module.css"
const Box = () => {
  return (
    // <div class="transform matrix-0.00 1.00 1.00 0.00 0.00 0.00"></div>
    <div className={' flex  max-sm:bg-redd flex-col gap-3 pb-10 rounded-lg duration-100 rotate-270 hover:-translate-y-1 hover:shadow-2xl '+css.temp} style={{
            background:"#E8E8E8",boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        }}>

        <p className='py-7 px-6'>
            voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore 
        </p>
        
        <div className='mx-auto  overflow-hidden flex '  >
            <img src={Person} width={"400px"} className='m-auto'  style={{ height:"100px",width:"100px",borderRadius:"50%"}} alt="" />
        </div>
        
        <div className='flex flex-col text-center'>
            <h1 className='text-redd font-extrabold'>Abebe Kebede</h1>
            <p className=' font-medium'>software engineering </p>
        </div>

    </div>
  )
}

export default Box
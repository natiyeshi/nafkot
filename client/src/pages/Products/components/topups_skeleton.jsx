import React from 'react'
import css from "../css/topups_skeleton.module.css"

const TopupSkeleton = () => {
  return (
 <div className='bg-gray-100 relative  pt-2 w-full duration-300  rounded shadow-md border   shrink-0'>
        <div className={`w-full py-2 top-0 bg-gradient-to-t from-slate-100 to-white absolute ${css.skeleton}`}></div>
        <div className='mx-4 text-lg font-bold py-2 px-10 my-3 w-1/2 bg-gray-300'></div>
        <div className='mx-4 mt-2 mb-3 py-2 px-10 my-3 bg-gray-300'></div>
        <div className='mx-4 flex my-2 justify-between  bg-gray-30 w-10/12     ' >
            <div className='font-bold my-auto text-md bg-gray-300 p-2'> </div>
            <button className='bg-gray-400 duration-300 rounded px-6 py-[5px] font-bold text-white'></button>
        </div>
    </div>
  )
}

export default TopupSkeleton
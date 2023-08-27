import React,{useState} from 'react'
import { editDesc } from '../../../../core/functions/common'
import { useDispatch } from 'react-redux'
import {AiOutlineArrowLeft as LeftIcon,AiOutlineArrowRight  as RightIcon} from "react-icons/ai"

const DashbordBox = ({title,price,tag,_id,items,deleteItem}) => {
    const dispatch = useDispatch()
  
  const [currItem,setCurrItem] = useState(0)  

  let desc = editDesc(items)
  if(desc.length > 25){
    desc = desc.substring(0,25) + "..."
  }

  // change image with next and previouse
  const changeImage = (bool) => {
    if(bool){
        if(currItem < items.length - 1){
            setCurrItem(currItem + 1)
        }
    } else{
        if(currItem > 0){
            setCurrItem(currItem - 1)
        }
    }
  }
  return (
    <div className='border hover:-translate-y-2  shrink-0  relative flex flex-col rounded w-80 h-fit shadow-sm shadow-slate-500  duration-200  '>
            <div className='absolute flex justify-center items-end pb-2  left-0 right-0 top-52 bottom-0 z-10 bg-opacit-20 bg-gradient-to-t from-gray-900'>
                <p className='overflow-x-hidden text-white px-3'>
                    {desc}
                </p>
            </div>
            <div className='w-full relative h-[280px] '>
                <img src={items[currItem].img} alt="" className='absolute top-0 left-0 w-full h-full' loading='lazy' />
            </div>
            <div onClick={() => changeImage(false)} className='absolute left-2 top-1/2 bg-slate-900 opacity-80 hover:opacity-100 cursor-pointer p-0.5 rounded-full'>
               {currItem > 0 && <LeftIcon className='text-xl text-white' /> }
            </div>
            <div onClick={() => changeImage(true)} className='absolute right-2 top-1/2 bg-slate-900 opacity-80 hover:opacity-100 cursor-pointer p-0.5 rounded-full'>
               {currItem < items.length - 1 && <RightIcon className='text-xl text-white' />}
            </div>
            <div className='absolute right-3 top-3 bg-white px-3  py rounded'>
                {currItem + 1} / {items.length}
            </div>

    </div>
  )
}

export default DashbordBox
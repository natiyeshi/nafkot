import React, { useState } from 'react'
import { editDesc } from '../../../../core/functions/common'
import {AiOutlineArrowLeft as LeftIcon,AiOutlineArrowRight  as RightIcon} from "react-icons/ai"
import {useDispatch} from 'react-redux'
import { removeItem,getAdminProducts } from '../../../../store/features/adminproductslice/adminProductsSlice'

const Box = ({title,price,tag,_id,items,deleteItem}) => {
  const dispatch = useDispatch()
  
  const [currItem,setCurrItem] = useState(0)  

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

  // delete item
  const deleteBox = async () => {
    const res = await deleteItem(_id)
    if(res == true){
        dispatch(removeItem(_id))
    }
  }

  return (
    <div className='border shrink-0 rounded w-72 h-fit shadow-sm shadow-slate-500  duration-200  '>
        <div className="relative flex flex-col">
            <div className='w-full relative h-[200px] '>
                <img src={items[currItem].img} alt="" className='absolute object-cover w-full h-full' loading='lazy' />
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

        <div className='w-full  my-2'>
            <h4 className=' font-semibold text-center' >{title}</h4>
            
            <p className=' text-xs overflow-hidden flex flex-row justify-center '>
                <div className='flex flex-col  '>
                    <div className=''> item name : {items[currItem].name}  </div> 
                    <div> item amount : {items[currItem].amount} </div>
                </div>
            </p>
            
            <div className="grow py-2 text-center font-bold"> Price &pound;{price}</div>
        </div>

        <div className='flex flex-row justify-between mt-2  text-sm'>
            <button onClick={deleteBox} className='grow py-2 text-center rounded font-semibold duration-100 mx-1 mb-1 bg-mdark hover:bg-slate-900 text-white rounded-tl'>Delete</button>
        </div>

    </div>
  )
}

export default Box
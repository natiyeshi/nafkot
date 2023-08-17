import React, { useState } from 'react'
import { editDesc } from '../../../../core/functions/common'
import {AiOutlineArrowLeft as LeftIcon,AiOutlineArrowRight  as RightIcon} from "react-icons/ai"
import {useDispatch} from 'react-redux'
import { removeItem,getAdminProducts } from '../../../../store/features/adminproductslice/adminProductsSlice'
const Box = ({title,price,tag,_id,items}) => {
  const dispatch = useDispatch()
  
  const [currImg,setCurrImg] = useState(0)  
  const desc = editDesc(items)
  const changeImage = (bool) => {
    if(bool){
        if(currImg < items.length - 1){
            setCurrImg(currImg + 1)
        }
    } else{
        if(currImg > 0){
            setCurrImg(currImg - 1)
        }
    }
  }

  const deleteItem = () => {
    dispatch(removeItem(_id))
  }

  return (
    <div className='border shrink-0 rounded w-72 shadow-sm shadow-slate-500  duration-200  '>
        <div className="relative flex flex-col">
            <img src={items[currImg].img} alt="" className='' />
            <div onClick={() => changeImage(false)} className='absolute left-2 top-1/2 bg-slate-900 opacity-80 hover:opacity-100 cursor-pointer p-0.5 rounded-full'>
               {currImg > 0 && <LeftIcon className='text-xl text-white' /> }
            </div>
            <div onClick={() => changeImage(true)} className='absolute right-2 top-1/2 bg-slate-900 opacity-80 hover:opacity-100 cursor-pointer p-0.5 rounded-full'>
               {currImg < items.length - 1 && <RightIcon className='text-xl text-white' />}
            </div>
            <div className='absolute right-3 top-3 bg-white px-3  py rounded'>
                {currImg + 1} / {items.length}
            </div>
        </div>

        <div className='w-full text-center my-2'>
            <h4 className=' font-semibold' >{title}</h4>
            <p className=' text-xs'>{desc}</p>
            <div className="grow py-2 text-center font-bold"> Amount ${price}</div>
        </div>

        <div className='flex flex-row justify-between mt-2  text-sm'>
            <button onClick={deleteItem} className='grow py-2 text-center rounded font-semibold duration-100 mx-1 mb-1 bg-mdark hover:bg-slate-900 text-white rounded-tl'>Delete</button>
        </div>

    </div>
  )
}

export default Box
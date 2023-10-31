import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getCurrency,getError,getLoading } from '../../../../store/features/adminsettingslice/adminSettingSlice'
import css from "../css/message.module.css"

const AdminTopup = ({setShowEditTopup,setDeleteTopup,data}) => {
  
  const currencyData = useSelector(getCurrency)
  const loading = useSelector(getLoading)
  const error = useSelector(getError)

  return (
 <div className='bg-white px-4 pt-2 w-full duration-300 hover:shadow-xl rounded shadow-md border   shrink-0'>
        <div className='text-lg font-semibold'>{data.amount} birr card</div>
        {
          loading  ? 
          <div className={`mt-2 mb-3  bg-gray-200 my-4 py-3 relative `}>
            <div className={`bg-gray-300 absolute py-3 left-0 top-0 h-full px-1 w-fit ${css.currency}`}></div>
          </div>
          : error ?
          <div className='mt-2 mb-3   my-4  relative'>
            <div className='mt-2 mb-3 text-redd'>there is issue on loading currency</div>
          </div>
          :
        <div className='mt-2 mb-3'> the cost for {data.amount} birr card is ${(data.amount / currencyData.currency).toFixed(2)}  </div>
        }
        <div className='flex my-2 gap-10  bg-gray-30 w-10/12     ' >
            <button onClick={()=>{setDeleteTopup(data)}} className='bg-redd duration-300 rounded px-8 py-[5px] font-bold text-white'>Delete</button>
            <button onClick={()=>{setShowEditTopup(data)}} className='bg-gray-300 text-gray-900 duration-300 rounded px-8 py-[5px] font-bold '>Edit</button>
        </div>
    </div>
  )
}

export default AdminTopup
import React,{useEffect, useState} from 'react'
import Product from '../../common/components/Product'
import WorkWith from '../../common/components/WorkWith'
import { fetchContent } from '../../../store/features/productslice/productsSlice'
import { useDispatch } from 'react-redux'
import Topups from './topups'

const AllProducts = () => {
  const dispatch = useDispatch()
  const [isTopup,setIsTopup] = useState(false) 

  useEffect(()=>{
    console.log("-----")
    dispatch(fetchContent())
  },[])
  
  return (
    <div className=' pb-20 w-c72 max-w-7xl max-md:w-full mx-auto mt-10 flex flex-col gap-3 overflow-x-hidden'>
       
       <h1 className='text-center font-bold text-redd text-2xl'>Products</h1>
        <h1 className='text-lg  max-md:text-lg text-center mt-3'>
            FILL THE CART WITH YOUR CHOSEN GIFTS AND MAKE YOUR LOVED ONES HAPPY
        </h1>

        {/* <div className="w-full ">
            <div className='w-6/12 max-lg:w-11/12 mx-auto border-2 flex p-1 rounded'>
                <input type="text" className='grow  focus:outline-none' placeholder='Search if you have something in mind' />
                <button className='bg-redd p-2 w-3/12 text-white rounded'>Search</button>
            </div>
        </div> */}

        <div className='flex relative gap-10 ps-0 py-4 '>
          <div></div>
          {/* <div className=' absolute left-9'></div> */}
          <div onClick={()=>setIsTopup(false)} className={`${!isTopup && 'border rounded-tr-lg border-b-white  z-10 text-redd  rounded-tl-lg'} font-bold w-20  h-[35px] py-2 px-2  cursor-pointer`}>Products</div>
          <div onClick={()=>setIsTopup(true)} className={`${isTopup && 'border rounded-tr-lg border-b-white border-b-4 z-10 text-redd  rounded-tl-lg'} font-bold cursor-pointer  py-2 px-2`}>Topup</div>
          <div className='border-t absolute bottom-4 w-full'></div>
        </div>
        {
          isTopup ? 
          <Topups />
          :

         <Product main={true}/> 
        }
        <WorkWith />
        

    </div>
  )
}

export default AllProducts
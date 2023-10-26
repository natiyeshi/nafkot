import React, { useState,useEffect } from 'react'
import Box from './Box'


import { useSelector } from 'react-redux'
import { getProducts,getTag,filterDatas,getError,getIsLoading } from '../../../store/features/productslice/productsSlice'
import { getCartIds,addToCart } from '../../../store/features/cartslice/cartSlice'
import { useDispatch } from 'react-redux'
import { fetchContent } from '../../../store/features/productslice/productsSlice'
import Skeleton from './Skeleton'

const Product = () => {
  const dispatch = useDispatch()
  const cartIds = useSelector(getCartIds);
  
  let products = useSelector((state) => getProducts(state,cartIds))
  
  let error = useSelector(getError)
  let loading = useSelector(getIsLoading)

  const tag = useSelector(getTag)

  const toCart = (data) =>{
    dispatch(addToCart(data))    
 }
  const getTaggedOnes = (tag) => {
    dispatch(filterDatas(tag))
  }

  useEffect(()=>{
    dispatch(fetchContent())
  },[])

  const dummy = ["","","","","","","","","","","","","","","","","","","","","","","","",""]
  return (
    <div className="py-2  ">
        {/* <div className="w-full ">
            <div className='w-6/12 max-lg:w-11/12 mx-auto border-2 flex p-1 rounded'>
                <input type="text" className='grow focus:outline-none' placeholder='Search if you have something in mind' />
                <button className='bg-red p-2 w-3/12 text-white rounded'>Search</button>
            </div>
        </div> */}

        <div className='flex justify-around mt-3 capitalize px-32 max-lg:px-0 max-lg:pe-10  max-lg:hidden max-lg:ps-72 gap-5 '>
            <p onClick={() => getTaggedOnes("") } className={`hover:text-redd cursor-pointer text-large ${tag == "" && "font-semibold text-redd"}`}>mostly ordered</p>
            <p onClick={() => getTaggedOnes("holiday")}  className={`hover:text-redd cursor-pointer text-large  ${tag == "holiday" && "font-semibold text-redd"}`}>holiday</p>
            <p onClick={() => getTaggedOnes("birthday")}  className={`hover:text-redd cursor-pointer text-large  ${tag == "birthday" && "font-semibold text-redd"}`}>birthday</p>
            <p onClick={() => getTaggedOnes("valentine")}  className={`hover:text-redd cursor-pointer text-large  ${tag == "valentine" && "font-semibold text-redd"}`}>valentine</p>
            <p onClick={() => getTaggedOnes("special day")}  className={`hover:text-redd cursor-pointer text-large  ${tag == "special day" && "font-semibold text-redd"}`}>special day</p>
            <p onClick={() => getTaggedOnes("groceries")}  className={`hover:text-redd cursor-pointer text-large  ${tag == "groceries" && "font-semibold text-redd"}`}>groceries</p>
            {/* <p onClick={() => getTaggedOnes()}  className={`hover:text-redd cursor-pointer text-large  ${tag == "others" && "font-semibold text-redd"}`}>others</p> */}
        </div>

        <div className={`${(products.length > 0 || loading)&& "grid"} mt-2 pt-4 grid-cols-3   max-lg:px-4 gap-7 max-md:grid-cols-2 max-sm:grid-cols-1 justify-around`}>
            {   
                error ? 
              <div className='w-full m-auto col-span-3 flex h-64'>
                <div className='m-auto'>
                {error}
                </div>
             </div> 
            :
              loading ? 
              
              dummy.map(data => <Skeleton />)
            
               :
                 products.length == 0 || products.length == 0 
                ? 
                <div className='w-full m-auto col-span-3 flex h-64'>
                    <div className='m-auto'>
                    nothing found

                    </div>
                </div>
                :
                products.map(values => <Box key={values._id} data={values} toCart={toCart} />)
            }
        </div>
        
        

    </div>
  )
}

export default Product
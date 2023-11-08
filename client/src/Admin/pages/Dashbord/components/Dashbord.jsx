import {useEffect} from 'react'
import Products from './products'
import Bar from '../../common/Bar'
import axios from "../../../hooks/axios"
import ProductTransaction from "./product_transaction"
const Dashbord = () => {

  
  return (
    <div className='flex  bg-blue-50 '>
        <Bar />
        <div className='basis-9/12 p-5 overflow-auto overflow-y-scroll bg-red' style={{maxHeight:"100vh"}}>
            <h1 className='text-xl my-4 '>Good Morning</h1>
            <div className=' bg-red-400 text-white  flex flex-col gap-2 hover:opacity-90 w-1/3 ps-6 pt-5 pb-5 rounded-lg'>
            <h1 className='text-lg font-bold'>
                    Welcome to Nafkot 
            </h1>
            <p>24 hours 7 days 365 days working </p>
            </div>
            <ProductTransaction />
            
        </div>
    </div>
    
  )
}

export default Dashbord
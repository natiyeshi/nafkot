import React from 'react'
import Bar from '../common/Bar'
import {AiOutlinePlus as Add} from "react-icons/ai"
import Product from './components/Product'
import Loading from '../common/components/Error'
import { Link } from 'react-router-dom'

const index = () => {
    
    return (
        <div className='flex relative bg-blue-50 '>
            <Bar />

            <div className='basis-9/12 flex flex-col  p-5 overflow-y-scroll bg-red' style={{maxHeight:"100vh"}}>
            
                <div className='flex '>
                    <div className="basis-2/3  ">
                        <div className='w-10/12 ps-2 max-lg:w-11/12 mx-auto border-2 flex p-1 rounded'>
                            <input type="text" className='grow bg-transparent font-bold focus:outline-none' placeholder='Search if you have something in mind' />
                            <button className='bg-redd hover:bg-opacity-70 p-2 w-3/12 text-white rounded '>Search</button>
                        </div>
                    </div>

                    <div className='basis-1/3 flex  '>
                        
                        <Link to={"/admin/addproduct"} className='bg-gray-700 text-white cursor-pointer hover:bg-gray-900 px-3 flex gap-3 my-auto py-2 rounded-lg'>
                            Add Products
                            <Add className='text-xl font-bold' />
                        </Link>
                    </div>

                </div>

                <div className='px-4 mt-7'>
                    <h1 className='my-3 font-bold text-lg'>Products</h1>
                    <p>our products makes us different </p>
                </div>

                <Product />
                
                

            </div>
        </div>
      )
}

export default index
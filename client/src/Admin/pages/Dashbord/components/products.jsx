import React from 'react'
import Box from '../../common/components/Box'
import css from "../css/css.module.css"
import {useSelector} from 'react-redux'
import { getAdminProducts} from '../../../../store/features/adminproductslice/adminProductsSlice'

const Products = () => {

    const products = useSelector(getAdminProducts)

    return (
        <div>

            <h1 className='my-3 font-bold text-lg'>Products</h1>
            <p>our products makes us different
            </p>
            <div className={`${ css.sc} relative  flex w-11/12 gap-6 h-11/12 overflow-x-auto py-3 my-7`}> 
            {
                products.map(data => <Box {...data}
                    key={
                        data._id
                    }/>)
            }
                <div className='border cursor-pointer group shrink-0 flex rounded hover:shadow-lg w-56 shadow-sm shadow-slate-500 hover:shadow-slate-500 duration-200 hover:-translate-y-1 '>
                    <p className='m-auto text-lg font-bold'>
                        See more products
                    </p>
                </div>
            </div>

        </div>

    )
}

export default Products

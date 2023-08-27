import React, { useEffect, useState } from 'react'
import DatshbordBox from './DashbordBox'
import css from "../css/css.module.css"
import {useSelector} from 'react-redux'
import { getAdminProducts} from '../../../../store/features/adminproductslice/adminProductsSlice'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Products = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        async function fetch(){
            try{
                const result = await axios.post("http://localhost:4000/getproducts/14")
                setProducts(result.data)
            }catch(e){  
                console.log(e)
                alert("wow")
            }
        }
        fetch()
    },[])
    return (
        <div>

            <h1 className='my-3 font-bold text-lg'>Products</h1>
            <p>our products makes us different
            </p>
            <div className={`${ css.sc} relative  flex w-11/12 gap-6 h-11/12 overflow-x-auto py-3 my-7`}> 
            {
                products.map(data => <DatshbordBox {...data}
                    key={
                        data._id
                    }/>)
            }
                <Link to={"/admin/products"} className='text-blue-500 cursor-pointer group shrink-0 my-auto flex rounded w-56 shadow-sm  duration-200  '>
                    <p className='m-auto text-lg '>
                        See more products
                    </p>
                </Link>
            </div>

        </div>

    )
}

export default Products

import React, { useEffect, useState } from 'react'
import Nav from '../common/components/Nav'
import Testimonial from '../common/components/Testimonial'
import DetailProducts from './components/DetailProducts'
import ProductEditor from './components/ProductEditor'
import Navigator from './components/Navigator'
import Footer from '../common/components/Footer'
import ProductData from '../../data/dummyDetail'

import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getSingleProduct } from '../../store/features/productslice/productsSlice'
import axios from '../../core/hooks/axios'

const index = () => {
  const { id } = useParams()
  const navigator = useNavigate()

  const [productData,setProductData] = useState()

  useEffect(()=>{
    async function fetchProduct(){
      try{
        const result = await axios.post("findproduct/"+id)
        setProductData(result.data)
      }catch(e){
        navigator("/products")
      }
    }
    fetchProduct()
  },[id])
  return (
    <div className='text-normal'>
        <Nav />
        <Navigator ProductData={productData} />
        <ProductEditor ProductData={productData} />
        <Testimonial />
        <DetailProducts/>
        <Footer />
    </div>
  )
}

export default index
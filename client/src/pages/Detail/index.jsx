import React, { useEffect } from 'react'
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

const index = () => {
  const { id } = useParams()
  const data = useSelector(state => getSingleProduct(state,Number(id)))
  const navigator = useNavigate()
  useEffect(()=>{
    if(data == undefined){
      navigator("/products")
    }
  },[])
  return (
    <div className='text-normal'>
        <Nav />
        <Navigator ProductData={data} />
        <ProductEditor ProductData={data} />
        <Testimonial />
        <DetailProducts/>
        <Footer />
    </div>
  )
}

export default index
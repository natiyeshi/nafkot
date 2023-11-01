import React, { useEffect, useState } from 'react'
import Nav from '../common/components/Nav'
import Testimonial from '../common/components/Testimonial'
import DetailProducts from './components/DetailProducts'
import ProductEditor from './components/ProductEditor'
import Navigator from './components/Navigator'
import Footer from '../common/components/Footer'
import ProductData from '../../data/dummyDetail'
import TopupRow from '../common/components/topup_row'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getSingleProduct } from '../../store/features/productslice/productsSlice'
import axios from '../../core/hooks/axios'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const index = () => {
  const { id } = useParams()
  const navigator = useNavigate()

  const [productData,setProductData] = useState()
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    async function fetchProduct(){
      try{
        setLoading(true)
        const result = await axios.post("findproduct/"+id)
        setProductData(result.data)
      }catch(e){
        navigator("/products")
      }finally{
        setLoading(false)
      }
    }
    fetchProduct()
  },[id])
  return (
    <div className='text-normal'>
        <Nav />
        <Navigator ProductData={productData} />
        {
          loading  ? 
          <SkeletonTheme >
            <Skeleton width={"100%"} height={"300px"}/> 
          </SkeletonTheme >
          :
          <ProductEditor ProductData={productData} />
        }
        <DetailProducts/>
        <div className='px-c14 max-md:px-1 my-5'>
          <TopupRow />
        </div>
        <Testimonial />
        <Footer />
    </div>
  )
}

export default index
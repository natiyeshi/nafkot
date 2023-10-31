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
          <div className="px-c14 ">
            {/* <SkeletonTheme >
              <div className='flex gap-3 py-10 max-md:flex-col  h-full'>
                <div className='w-1/2 px-2'>
                  <Skeleton height={"300px"}/>
                  <div className='flex justify-around mt-2'>
                    <Skeleton width={"100px"} height={"70px"} />
                    <Skeleton width={"100px"} height={"70px"} />
                    <Skeleton width={"100px"} height={"70px"} />
                    <Skeleton width={"100px"} height={"70px"} />
                  </div>
                </div>
                <div className='w-1/2'>
                  <Skeleton width={"50%"} className='mb-10'/>
                  <Skeleton count={6} width={"80%"}/>
                  <div width={"50%"} className='mb-5'/>
                  <div className='flex gap-2'>
                    <Skeleton width={"150px"} height={"40px"}/>
                    <Skeleton width={"150px"} height={"40px"}/>
                  </div>
                </div>
                
              </div>
            </SkeletonTheme> */}
            loading..
          </div>
          :
          <ProductEditor ProductData={productData} />
        }
        <Testimonial />
        <div className='px-c14 max-md:px-1 my-5'>
          <TopupRow />
        </div>
        <DetailProducts/>
        <Footer />
    </div>
  )
}

export default index
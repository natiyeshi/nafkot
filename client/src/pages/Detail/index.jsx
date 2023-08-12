import React from 'react'
import Nav from '../common/components/Nav'
import Testimonial from '../common/components/Testimonial'
import DetailProducts from './components/DetailProducts'
import ProductEditor from './components/ProductEditor'
import Navigator from './components/Navigator'
import Footer from '../common/components/Footer'
import ProductData from '../../data/dummyDetail'

import { useParams } from 'react-router-dom'

const index = () => {
  const data = useParams()
  console.log(data);
  return (
    <div className='text-normal'>
        <Nav />
        <Navigator ProductData={ProductData} />
        <ProductEditor ProductData={ProductData} />
        <Testimonial />
        <DetailProducts/>
        <Footer />
    </div>
  )
}

export default index
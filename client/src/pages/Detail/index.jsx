import React from 'react'
import Nav from '../common/components/Nav'
import Testimonial from '../common/components/Testimonial'
import Product from '../common/components/Product'
import ProductEditor from './components/ProductEditor'
import Navigator from './components/Navigator'
import Footer from '../common/components/Footer'
import ProductData from '../../data/dummyDetail'

const index = () => {
  return (
    <div className='text-normal'>
        <Nav />
        <Navigator ProductData={ProductData} />
        <ProductEditor ProductData={ProductData} />
        <Testimonial />
        <Product related={true} />
        <Footer />
    </div>
  )
}

export default index
import React from 'react'
import Nav from '../Homes/Nav'
import Testimonial from '../Homes/Testimonial'
import Product from '../Homes/Product'
import ProductEditor from './ProductEditor'
import Navigator from './Navigator'
import Footer from '../Homes/Footer'

const index = () => {
  return (
    <div className='text-normal'>
        <Nav />
        <Navigator />
        <ProductEditor />
        <Testimonial />
        <Product related={true} />
        <Footer />
    </div>
  )
}

export default index
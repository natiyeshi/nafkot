import React from 'react'
import Nav from '../Homes/Nav'
import Footer from '../Homes/Footer'
import AllProducts from './AllProducts'

const index = () => {
  return (
    <div className='text-normal font-medium'>
        <Nav />
        <AllProducts />
        <Footer />
    </div>
  )
}

export default index
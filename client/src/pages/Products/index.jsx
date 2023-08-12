import React from 'react'
import Nav from '../common/components/Nav'
import Footer from '../common/components/Footer'
import AllProducts from './components/AllProducts'

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
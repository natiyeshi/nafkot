import React from 'react'
import Nav from '../Homes/Nav'
import Navigator from './Navigator'
import Carts from './Carts'
import Footer from '../Homes/Footer'
const index = () => {
  return (
    <div className='text-normal'>
        <Nav />
        <Navigator />
        <Carts />
        <Footer />
    </div>
  )
}

export default index
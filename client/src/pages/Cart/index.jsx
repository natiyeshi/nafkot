import React from 'react'
import Nav from '../common/components/Nav'
import Navigator from './components/Navigator'
import Carts from './components/Carts'
import Footer from '../common/components/Footer'
const index = () => {
  return (
    <div className='text-normal'>
        <Nav/>
        <Navigator />
        <Carts />
        <Footer />
    </div>
  )
}

export default index
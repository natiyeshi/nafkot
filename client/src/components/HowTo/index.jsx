import React from 'react'
import Nav from '../Homes/Nav'
import Footer from '../Homes/Footer'
import How from './How'
import Process from './Process'

const index = () => {
  return (
    <div className='text-normal'>
        <Nav />
        <How />
        <Process />
        <Footer />
    </div>
  )
}

export default index
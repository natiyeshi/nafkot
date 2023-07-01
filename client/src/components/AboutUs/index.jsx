import React from 'react'
import Nav from '../Homes/Nav'
import About from './Abouts'
import Partners from './Partners'
import Teams from './Teams'
import Footer from '../Homes/Footer'

const index = () => {
  return (
    <div className='relative text-normal '>
      
        <Nav />
        <About />
        <Partners />
        <Teams />
        <Footer />
    </div>
  )
}

export default index
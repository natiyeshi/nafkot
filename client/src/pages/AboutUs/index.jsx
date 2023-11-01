import React from 'react'
import Nav from '../common/components/Nav'
import About from './components/Abouts'
import Partners from './components/Partners'
import Teams from './components/Teams'
import Footer from '../common/components/Footer'

const index = () => {
  return (
    <div className='relative text-normal '>
      
        <Nav />
        <About />
        <Partners />
        {/* <Teams /> */}
        <Footer />
    </div>
  )
}

export default index
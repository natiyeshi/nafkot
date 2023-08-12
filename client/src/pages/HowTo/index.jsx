import React from 'react'
import Nav from '../common/components/Nav'
import Footer from '../common/components/Footer'
import How from './components/How'
import Process from './components/Process'

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
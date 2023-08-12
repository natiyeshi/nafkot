import React,{useState,useEffect} from 'react'
import Top from './components/Top'
import About from './components/About'
import Product from '../common/components/Product'
import Testimonial from '../common/components/Testimonial'
import Faq from './components/Faq'
import Footer from '../common/components/Footer'

const Home = () => {
  
  return (
    <div className=' '>
        <Top />
        <About />
        <Product />
        <Testimonial />
        <Faq />
        <Footer />

    </div>
  )
}

export default Home
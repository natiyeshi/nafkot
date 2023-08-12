import React,{useState,useEffect} from 'react'
import Top from './components/Top'
import About from './components/About'
import Testimonial from '../common/components/Testimonial'
import Faq from './components/Faq'
import Footer from '../common/components/Footer'
import HomeProduct from './components/HomeProduct'
const Home = () => {
  
  return (
    <div className=' '>
        <Top />
        <About />
        <HomeProduct />
        <Testimonial />
        <Faq />
        <Footer />

    </div>
  )
}

export default Home
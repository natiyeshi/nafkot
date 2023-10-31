import React, { useState } from 'react'
import Nav from '../common/components/Nav'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {getCart} from '../../store/features/cartslice/cartSlice'
import FormDiv from './components/FormDiv'
import Footer from '../common/components/Footer'

const index = () => {
    const carts = useSelector(getCart)
    const intialFormData = {
      firstName : "",lastName : ""
    }
    const [formData,setFormData] = useState() 

    return (
        <>
            <Nav/>
            <div className='w-full  flex justify-center max-md:flex-col pt-10 max-md:px-[1em] px-[10em] max-w-7xl mx-auto gap-5 pb-20  '>

                <div className='w-6/12 bg-gray-100 shadow-lg  mb-20  max-md:mx-auto max-md:w-full  rounded h-fit '>
                    <h1 className='text-lg text-white p-3 font-bold text-start bg-redd rounded-t'>Checkout</h1>
                    <FormDiv />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default index

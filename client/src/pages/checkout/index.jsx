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

    const singlePakcage = (amount, price, name) => {
        return (
            <div className='grid grid-cols-3 mt-2 bg-slate-100  ps-3 py-2 gap-1'>
                <div className=''>
                    {name}</div>
                <div className=''>
                    {amount}</div>
                <div className=''>${
                    amount * price
                }</div>
            </div>
        )
    }

    return (
        <>
            <Nav/>
            <div className='w-full flex justify-center max-md:flex-col pt-10 max-md:px-[1em] px-[10em] max-w-7xl mx-auto gap-5 pb-20  '>

                <div className='w-5/12 bg-gray-50 h-fit rounded  max-md:mx-auto max-md:w-full '>

                    <div className='flex justify-between rounded-t bg-redd p-2 py-3 text-white '>
                        <div className='font-bold text-lg'>Your order</div>
                        <Link to={"/cart"}
                            className='my-auto '>Edit</Link>
                    </div>

                    <div className=' pt-2'>

                        <div className='grid grid-cols-3 mt-2 gap-1 font-bold ps-3 '>
                            <div className=''>Item</div>
                            <div className=''>Quantity</div>
                            <div className=''>Total</div>
                        </div>

                        {
                        carts.cartItems.map(elem => singlePakcage(elem.amount, elem.data.price, elem.data.title))
                    }


                        <div className='text-center flex justify-center gap-3 my-10 text-lg '>
                            <p>
                                Total Price
                            </p>
                            <p className='font-bold'>${
                                carts.total.toLocaleString()
                            }</p>
                        </div>

                    </div>

                </div>

                <div className='w-6/12 bg-gray-100  mb-20  max-md:mx-auto max-md:w-full  rounded h-fit '>

                    <h1 className='text-lg text-white p-3 font-bold text-start bg-redd rounded-t'>Checkout</h1>

                    <FormDiv />
                    
                </div>
            </div>
            <Footer />
        </>
    )
}

export default index

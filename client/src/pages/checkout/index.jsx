import React from 'react'
import Nav from '../common/components/Nav'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCart } from '../../store/features/cartslice/cartSlice'

const index = () => {
  const carts = useSelector(getCart)
  console.log(carts)
  const singlePakcage = (amount,price,name) => {
    return (
          <div className='grid grid-cols-3 mt-2 bg-slate-100  ps-3 py-2 gap-1'>
              <div className=''>{name}</div>
              <div className=''>{amount}</div>
              <div className=''>${amount * price}</div>
            </div>
        )
  }

  return (
    <>
    <Nav/>
    <div className='w-full flex justify-center pt-10 px-[10em] gap-5 pb-20  '>
        
        <div className='w-5/12 bg-gray-50 h-fit rounded '>

          <div className='flex justify-between rounded-t bg-redd p-2 py-3 text-white '>
            <div className='font-bold'>Your order</div>
            <Link to={"/cart"} className=''>Edit</Link>
          </div>

          <div className=' pt-2'>

           <div className='grid grid-cols-3 mt-2 gap-1 font-bold ps-3 ' >
              <div className=''>Item</div>
              <div className=''>Quantity</div>
              <div className=''>Total</div>
            </div>

            {
              carts.cartItems.map(elem => singlePakcage(elem.amount,elem.data.price,elem.data.title))
            }

            
            <div className='text-center flex justify-center gap-3 my-10 text-lg '> <p> Total Price </p> <p className='font-bold'>${carts.total.toLocaleString()}</p>  </div>

          </div>

        </div>

        <div className='w-6/12 bg-gray-100  mb-20 p-2 rounded h-fit '>

          <h1 className='text-xl p-3 font-bold text-center'>Checkout</h1>
          
          <form className=' px-4' onSubmit={(e) => e.preventDefault()}>
              
              {/* error */}
              <div className='text-center text-red-500 font-bold'>
                
              </div>

              <div className='flex ps-4 py-2 justify-around gap-10'>
                  
                  <div className='flex flex-col w-full'>
                    <label className='' htmlFor="">First Name</label>
                    <input type="text" placeholder='first name' className='w-full focus:outline-none border border-gray-300 p-2 rounded-md' />
                  </div>

                  <div className='flex flex-col w-full'>
                    <label className='' htmlFor="">Last Name</label>
                    <input type="text" placeholder='last name' className='w-full focus:outline-none border border-gray-300 p-2 rounded-md' />
                  </div>

              </div>

              <div className='flex ps-4 py-2 justify-around gap-10'>
                  
                  <div className='flex flex-col w-full'>
                    <label className='' htmlFor="">Email</label>
                    <input type="text" placeholder='Email' className='w-full focus:outline-none border border-gray-300 p-2 rounded-md' />
                  </div>

                  <div className='flex flex-col w-full'>
                    <label className='' htmlFor="">Phone Number</label>
                    <input type="text" placeholder='phone number' className='w-full focus:outline-none border border-gray-300 p-2 rounded-md' />
                  </div>

              </div>

              
              <div className='flex ps-4 py-2 justify-around gap-10'>
                  
                  <div className='flex flex-col w-full'>
                    <label className='' htmlFor="">Reciver First Name</label>
                    <input type="text" placeholder='reciver first name' className='w-full focus:outline-none border border-gray-300 p-2 rounded-md' />
                  </div>

                  <div className='flex flex-col w-full'>
                    <label className='' htmlFor="">Reciver Last Name</label>
                    <input type="text" placeholder='reciver last name' className='w-full focus:outline-none border border-gray-300 p-2 rounded-md' />
                  </div>

              </div>

              <div className='flex ps-4 py-2 justify-around gap-10'>
                  
                  <div className='flex flex-col w-full'>
                    <label className='' htmlFor="">Reciver Phone Number 1 </label>
                    <input type="text" placeholder='reciver phone number' className='w-full focus:outline-none border border-gray-300 p-2 rounded-md' />
                  </div>

                  <div className='flex flex-col w-full'>
                    <label className='' htmlFor="">Reciver Phone Number 2 </label>
                    <input type="text" placeholder='reciver phone number 2' className='w-full focus:outline-none border border-gray-300 p-2 rounded-md' />
                  </div>

              </div>

              <div className='flex ps-4 py-2 justify-around gap-10'>
                  
                  <div className='flex flex-col w-full'>
                    <label className='' htmlFor="">Reciver City  </label>
                    <input type="text" placeholder='City' className='w-full focus:outline-none border border-gray-300 p-2 rounded-md' />
                  </div>

                  <div className='flex flex-col w-full'>
                    <label className='' htmlFor="">Reciver Region / sefer </label>
                    <input type="text" placeholder='Region' className='w-full focus:outline-none border border-gray-300 p-2 rounded-md' />
                  </div>

              </div>

              <div className='flex ps-4 py-2 justify-around gap-10'>
                  
                  <div className='flex flex-col w-full'>
                    <label className='' htmlFor="">Reciver Email  </label>
                    <input type="text" placeholder='email' className='w-full focus:outline-none border border-gray-300 p-2 rounded-md' />
                  </div>

                  <div className='flex flex-col w-full'>
                    <label className='' htmlFor="">Message </label>
                    <textarea  type="text" placeholder='message' className='w-full resize-none focus:outline-none border border-gray-300 p-2 rounded-md' />
                  </div>

              </div>


              <div className='flex ps-4 py-2 justify-around gap-10 my-7'>

                 <button className='w-full bg-blue-500 text-white py-3 rounded font-bold capitalize'> 
                    pay pal 
                  </button>

                  <button className='w-full bg-blue-500 text-white py-3 rounded font-bold capitalize'> 
                    pay pal 
                  </button>

                  <button className='w-full bg-blue-500 text-white py-3 rounded font-bold capitalize'> 
                    pay pal 
                  </button>

              </div>

              <div className="text-center  my-10 ">
                <button className='bg-redd px-8 rounded text-white font-bold te py-2'> Place order </button>
              </div>



          </form>

        </div>
    </div>
    </>
  )
}

export default index
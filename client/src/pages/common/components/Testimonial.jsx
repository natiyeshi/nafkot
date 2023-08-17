import React from 'react'
import {AiTwotoneStar as Star} from "react-icons/ai"

const Testimonial = () => {
  return (
    <div className='relative px-c14  max-lg:px-2 bg-gray-100 mx-auto pb-10'>
            
        <h1 className='py-3 text-center text-xl mt-10 mb-5 font-semibold capitalize'>customers review</h1>

        <div className='absolute max-lg:hidden h-full left-0 bottom-0 bg-gradient-to-r from-gray-100 via-gray-100 w-2/6'></div>
        <div className='absolute max-lg:hidden right-0 h-full bottom-0 bg-gradient-to-l from-gray-100 via-gray-100 w-2/6'></div>

        <div className=' flex overflow-auto  py-3 gap-2 testimonial-scroll z-50 mb-3'>
            
            <div className='max-lg:hidden flex-shrink-0 p-2 px-3 flex flex-col basis-2/12 gap-2 rounded-sm'>
               
            </div>

            <div className='bg-white py-7 justify-center flex-shrink-0  p-2 px-3 flex flex-col basis-1/3 max-sm:basis-3/4 max-lg:basis-7/12 gap-2 w-full rounded-sm'>
                <div className='flex gap-3 '>
                    <div className='flex my-auto'>
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                    </div>
                    <span className='text-gray-400'>2 days ago</span>
                </div>
                <p className=''>
                 Probably the best day in my life! My husband
                 surprised with an amazing gift! May God bless you guys. 
                 Great delivery right to my door. Thank you for the very big sheep!
                </p>
                <h3 className='text-normal text-l font-bold'>Efrata Mulugeta</h3>
            </div>

            <div className='bg-white py-7 justify-center  flex-shrink-0 p-2 px-3 max-sm:basis-3/4 flex flex-col basis-1/3 max-lg:basis-7/12 gap-2 w-full rounded-sm'>
                <div className='flex gap-3 '>
                    <div className='flex my-auto'>
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                    </div>
                    <span className='text-gray-400'>2 days ago</span>
                </div>
                <p>
                 Probably the best day in my life! My husband
                 surprised with an amazing gift! May God bless you guys. 
                 Great delivery right to my door. Thank you for the very big sheep!
                </p>
                <h3 className='text-normal font-bold'>Efrata Mulugeta</h3>
            </div>
            <div className='bg-white py-7 justify-center  flex-shrink-0 p-2 px-3 max-sm:basis-3/4 flex flex-col basis-1/3 max-lg:basis-7/12 gap-2 w-full rounded-sm'>
                <div className='flex gap-3 '>
                    <div className='flex my-auto'>
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                    </div>
                    <span className='text-gray-400'>2 days ago</span>
                </div>
                <p>
                 Probably the best day in my life! My husband
                 surprised with an amazing gift! May God bless you guys. 
                 Great delivery right to my door. Thank you for the very big sheep!
                </p>
                <h3 className='text-normal font-bold'>Efrata Mulugeta</h3>
            </div>
            <div className='bg-white py-7 justify-center  flex-shrink-0 p-2 px-3 max-sm:basis-3/4 flex flex-col basis-1/3 max-lg:basis-7/12 gap-2 w-full rounded-sm'>
                <div className='flex gap-3 '>
                    <div className='flex my-auto'>
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                        <Star className='text-yellow-300 my-auto text-lg' />
                    </div>
                    <span className='text-gray-400'>2 days ago</span>
                </div>
                <p>
                 Probably the best day in my life! My husband
                 surprised with an amazing gift! May God bless you guys. 
                 Great delivery right to my door. Thank you for the very big sheep!
                </p>
                <h3 className='text-normal font-bold'>Efrata Mulugeta</h3>
            </div>

            
            <div className='max-lg:hidden flex-shrink-0 p-2 px-3 flex flex-col basis-1/3 gap-2 rounded-sm'>
               
               </div>

        </div>  
    </div>
  )
}

export default Testimonial
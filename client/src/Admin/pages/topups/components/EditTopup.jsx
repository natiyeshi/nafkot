import React from 'react'

const EditTopup = ({setShowEditTopup}) => {
  return (
    <div className=' absolute flex z-20 left-0 right-0 bottom-0 top-0'>
      
        <div className=' m-auto  bg-white z-30 px-7 pt-2  duration-300 rounded shadow-md border  shrink-0'>
              <div className='text-lg font-bold'>Add Topup</div>
              <div className='flex gap-5 my-4'>
                <label htmlFor="" className='my-auto'>Price in birr</label>
                <input type="number" value={"35"} className='border outline-none w-20 text-lg' />
              </div>
              <div className='flex my-2 gap-10  bg-gray-30 w-full' >
                  <div className=' text-gray-900 duration-300 rounded  py-[5px] font-bold '>Amount 8$</div>
                  <button className='bg-redd duration-300 rounded px-8 py-[5px] font-bold text-white'>Edit</button>
            </div>
      </div>

      <div onClick={()=>{setShowEditTopup(false)}} className='absolute -z-10 left-0 right-0 bottom-0 top-0 bg-gray-900  opacity-40'></div>
   
    </div>
  )
}

export default EditTopup
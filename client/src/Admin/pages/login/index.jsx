import React from 'react'
import Logo from "../../../assets/images/Vector (6).svg"
import Close from "../../../assets/images/Vector (7).svg"

const index = () => {
  return (
    <div className='fixed flex  w-screen h-screen  bg-gray-900 bg-opacity-90 top-0 z-10'>
        
        <div className={'m-auto w-1/3 max-lg:w-1/2 max-md:w-4/6 max-sm:w-11/12 h-4/6 p-3 bg-white '}>
            
            <div className='flex justify-between p-5'>
                
                <div className='grid gap-3 text-lg font-bold '>
                    <img src={Logo} width={"30px"} alt="" />
                    Login
                </div>

                <div className='' onClick={()=>{setLoginNow(false)}}>
                    <img src={Close} className='cursor-pointer duration-200 hover:rotate-90' width={"15px"} alt="" />
                </div>
            </div>

            <form className='ps-5 mt-2'>
                <p className='text-redd font-semibold'>*invalid email</p>
               
                <div className='flex flex-col mt-4 gap-1'>
                    <label htmlFor="" className='font-semibold' style={{fontSize:"17px"}}>Email</label>
                    <input type="text"  className='w-10/12 focus:outline-none border border-gray-300 p-2 rounded-md' placeholder='example@gmail.com' />
                </div>

                <div className='flex flex-col mt-4 gap-1'>
                    <label htmlFor="" className='font-semibold' style={{fontSize:"17px"}}>Password</label>
                    <input type="password" className='w-10/12 focus:outline-none border border-gray-300 p-2 rounded-md' placeholder='password' />
                </div>

                <button className='mt-4 px-8 py-1.5 hover:bg-red-400 font-semibold bg-redd text-white ' style={{borderRadius:"5px"}}>
                    Login
                </button>



            </form>

            

        </div>
    </div>
  )
}

export default index
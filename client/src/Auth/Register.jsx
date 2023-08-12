import React from 'react'
import Logo from "../assets/images/Vector (6).svg"
import Close from "../assets/images/Vector (7).svg"
import css from "./css/css.module.css"

const Register = ({setRegisterNow}) => {
  return (
    <div className='fixed flex  w-full h-full font- bg-gray-900 bg-opacity-90 top-0 z-10'>
        
        <div className={'mx-auto  max-lg:w-1/2 max-md:w-4/6 max-sm:w-full max-sm:h-full w-1/3 my-1 p-3 bg-white '+css.show}>
            
            <div className='flex justify-between p-5'>
                
                <div className='grid gap-3 text-lg font-bold '>
                    <img src={Logo} width={"30px"} alt="" />
                    Register
                </div>

                <div className='' onClick={()=>{setRegisterNow(false)}}>
                    <img src={Close} width={"15px"} alt="" className='cursor-pointer duration-200 hover:rotate-90' />
                </div>
            </div>

            <form className='ps-5 mt-1'>
                <p className='text-redd font-semibold'>*invalid email</p>
               
                <div className='flex flex-col mt-4 gap-1'>
                    <label htmlFor="" className='font-bold' >Username</label>
                    <input type="text"  className='w-10/12 focus:outline-none border border-gray-300 p-2 rounded-md' placeholder='username' />
                </div>

                <div className='flex flex-col mt-4 gap-1'>
                    <label htmlFor="" className='font-bold' >Email</label>
                    <input type="text"  className='w-10/12 focus:outline-none border border-gray-300 p-2 rounded-md' placeholder='example@gmail.com' />
                </div>

                <div className='flex flex-col mt-4 gap-1'>
                    <label htmlFor="" className='font-bold' >Phone</label>
                    <input type="number"  className='w-10/12 focus:outline-none border border-gray-300 p-2 rounded-md' placeholder='example@gmail.com' />
                </div>

                <div className='flex flex-col mt-4 gap-1'>
                    <label htmlFor="" className='font-bold' >Password</label>
                    <input type="password" className='w-10/12 focus:outline-none border border-gray-300 p-2 rounded-md' placeholder='password' />
                </div>

                <div className='flex flex-col mt-4 gap-1'>
                    <label htmlFor="" className='font-bold' >Confirm</label>
                    <input type="password" className='w-10/12 focus:outline-none border border-gray-300 p-2 rounded-md' placeholder='confirm' />
                </div>

                <button className='mt-4 px-8 hover:bg-red-400 py-1.5 bg-redd text-white ' style={{borderRadius:"5px"}}>
                    Register
                </button>



            </form>

            

        </div>
    </div>
  )
}

export default Register
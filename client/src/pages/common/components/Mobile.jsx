import React,{useState} from 'react'
import Logo from "../../../assets/images/Logo.svg"
import {NavLink} from "react-router-dom"
import css from "../css/mobild.module.css"
import Close from "../../../assets/images/Vector (7).svg"

const Mobile = ({show,setShow,loginNow,setLoginNow,setRegisterNow,registerNow}) => {
  
  
  let checkLink = ({isActive}) =>  isActive ? 'my-auto duration-100 hover:translate-x-[1%] hover:text-redd text-redd':'my-auto  duration-200 hover:translate-x-[1%] hover:text-redd'

  return (
    <div className={`${show !== true && 'hidden' }`}>

        <div className='fixed z-10 left-0 top-0 h-full w-full overflow-hidden bg-slate-600 opacity-80'
         onClick={() => setShow(false)}
        ></div>
        <div className={` ${css.temp} z-20 fixed right-0 w-4/6 h-full top-0 bg-white p-5 flex flex-col gap-10 `}>
            <div className='flex justify-between'>    
                <img src={Logo} alt="" />
                <img src={Close} alt="" width={"20px"} onClick={() => setShow(false)}/>
            </div>  
            <div className=' flex flex-col font-semibold text-lg text-black '>

                <NavLink    to="/"  className={checkLink} >Home</NavLink >
                <NavLink    to="/products" className={checkLink}>Products</NavLink >
                <NavLink    to="/aboutus" className={checkLink}>About us</NavLink >
                <NavLink    to="/howto" className   ={checkLink}>How to order</NavLink > 
                <a onClick={()=>setShow(false)} href="/#faq" className={"my-auto duration-100  hover:translate-x-[1%] hover:text-redd"}>FAQS</a >
                
                <div className="flex flex-col mt-4 gap-4">
                    <button 
                        onClick={() => {setShow(false); setLoginNow(true)}}
                        className='group w-10/12 hover:bg-red-400 gap-3 hover:bg-redhover hovertranslate-y-[-10%] duration-100 hover:shadow-lg max-lg:w-6/12 max-sm:w-full bg-redd text-white py-2  mx-auto hover:' style={{borderRadius:"5px"}}>
                        Login
                    </button>    
                    <button 
                        onClick={() => {setShow(false); setRegisterNow(true)}}
                        className='w-10/12 max-lg:w-6/12 hover:bg-blue-400 hovertranslate-y-[-10%] duration-100 hover:shadow-lg max-sm:w-full bg-blue-500 text-white py-2  mx-auto '  style={{borderRadius:"5px"}}>
                        Register
                    </button>       
                </div>

            </div>

        </div>
    </div>
  )
}

export default Mobile
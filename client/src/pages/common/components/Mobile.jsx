import React,{useState} from 'react'
import Logo from "../../../assets/images/Logo.svg"
import {NavLink, useNavigate} from "react-router-dom"
import css from "../css/mobild.module.css"
import Close from "../../../assets/images/Vector (7).svg"
import { useSelector } from 'react-redux'
import { isUserLogedIn,loadingUser, logoutUser } from '../../../store/features/userSlice/userSlice'
import { useDispatch } from 'react-redux'
import {MdKeyboardArrowDown as ListIcon} from "react-icons/md"

const Mobile = ({show,setShow,loginNow,setLoginNow,setRegisterNow,registerNow}) => {

  const navigator = useNavigate()
  const dispatch = useDispatch()
  const isLogedIn = useSelector(isUserLogedIn)
  const isLoadingUser = useSelector(loadingUser)

  let checkLink = ({isActive}) =>  isActive ? 'my-auto duration-100 hover:translate-x-[1%] hover:text-redd text-redd':'my-auto  duration-200 hover:translate-x-[1%] hover:text-redd'

  const logout = () =>{
    dispatch(logoutUser())
  }
  const [toggleOption , setToggleOption] = useState(true)
  const flip = () => setToggleOption(data => !data)
  
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
                <div className='my-auto relative'>
                        <div className='flex gap-1'>
                        <NavLink  to="/products"  className={checkLink} >Products</NavLink >
                            <button onClick={flip}><ListIcon  className={`${!toggleOption && '-rotate-180 '} duration-300`} /></button>
                        </div>
                        <div className={`${toggleOption && 'hidden '} pb-1 rounded-lg capitalize duration-300 absolute shadow-lg border  bg-white w-28 mt-2 flex flex-col `}>
                            <div onClick={()=>{ setToggleOption(true); navigator("/products")}} className='font-normal border-b mt-1  hover:bg-gray-50 py-1 cursor-pointer text-center'>items</div>
                            <div onClick={()=> { setToggleOption(true); navigator("/products/topup")}} className='font-normal hover:bg-gray-50 pt-1 cursor-pointer text-center'>topup</div>
                        </div>
                    </div>
                <NavLink    to="/aboutus" className={checkLink}>About us</NavLink >
                <NavLink    to="/howto" className   ={checkLink}>How to order</NavLink > 
                <a onClick={()=>setShow(false)} href="/#faq" className={"my-auto duration-100  hover:translate-x-[1%] hover:text-redd"}>FAQS</a >
                
                <div className="flex flex-col mt-4 gap-4">
                   {isLogedIn ? 
                        <button 
                            onClick={logout}
                            className='group w-10/12 text-red-400 gap-3 hover:bg-redhover hovertranslate-y-[-10%] duration-100 hover:shadow-lg max-lg:w-6/12 max-sm:w-full py-2  mx-auto hover:' style={{borderRadius:"5px"}}>
                            Logout
                        </button>    
                        
                        : <> 
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
                        </>    
                     }
                </div>

            </div>

        </div>
    </div>
  )
}

export default Mobile
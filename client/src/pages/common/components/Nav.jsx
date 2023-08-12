import React,{useState} from 'react'
import { FiMenu as Menu } from "react-icons/fi"
import Logo from "../../../assets/images/Logo.svg"
import cart from "../../../assets/images/cart.svg"
import { NavLink,Link,Router } from 'react-router-dom'
import Login from '../../../Auth/Login'
import Register from '../../../Auth/Register'
import Mobile from '../../Homes/components/Mobile'

const Nav = ({pass}) => {

  let checkLink = ({isActive}) =>  isActive ? 'my-auto max-xl:hidden text-redd duration-200 hover:text-redd' : ' duration-200  hover:text-redd my-auto max-xl:hidden'
  const [loginNow,setLoginNow] = useState(false) 
  const [registerNow,setRegisterNow] = useState(false) 
  const [show,setShow] = useState(false)

  return (
    <div className={'z-10 bg-white font-semibold shadow-sm '+pass}>
        <Mobile show={show} setShow={setShow} loginNow={loginNow} setLoginNow={setLoginNow} setRegisterNow={setRegisterNow}/>
        <div className=" bg-dark w-full font-medium text-white text-center py-1">
            This April, celebrate Fasika with a gift that makes your family happy!
        </div>

        {loginNow && <Login setLoginNow={setLoginNow} />  }
        {registerNow && <Register setRegisterNow={setRegisterNow} />  }

        <div className='w-full px-c14 max-xl:px-3 py-2 flex uppercase  border-b border-red border-opacity-10' >
            
            <div className='w-3/4 flex gap-12 '>

                <img src={Logo} width="100px" alt="" />
                <NavLink    to="/"  className={checkLink} >Home</NavLink >
                <NavLink    to="/products" className={checkLink}>Products</NavLink >
                <NavLink    to="/aboutus" className={checkLink}>About us</NavLink >
                <NavLink    to="/howto" className={checkLink}>How to order</NavLink >
                <a href="/#faq" className={"my-auto max-xl:hidden duration-200  hover:text-redd "}>FAQS</a >
            </div>

            <div className='w-1/4 max-xl:w-2/4 flex justify-around max-xl:justify-end max-xl:gap-7 '>
                
                <div className="flex max-xl:hidden">
                    <div className='my-auto cursor-pointer hover:text-redd duration-200' onClick={()=>setLoginNow(true)}>Login </div> <pre className='my-auto'> / </pre>
                    <div className='my-auto cursor-pointer hover:text-redd duration-200' onClick={()=>setRegisterNow(true)}>Register</div>
                </div>

                <a href="" className='my-auto flex gap-1'>
                    <img src={cart} alt="" />
                    <NavLink to={"/cart"} className={({isActive}) => isActive ? 'text-redd  duration-200 hover:text-redd font-extrabold my-auto' : 'my-auto duration-200 hover:text-redd'}>
                         cart
                    </NavLink>
                </a>

                <Menu className='text-4xl xl:hidden' onClick={() => {setShow(!show)}}/>
            </div>

        </div>
    </div>
  )
}

export default Nav
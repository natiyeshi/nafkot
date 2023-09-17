import React,{useState} from 'react'
import { FiMenu as Menu } from "react-icons/fi"
import Logo from "../../../assets/images/Logo.svg"
import cart from "../../../assets/images/cart.svg"
import { NavLink,Link,Router } from 'react-router-dom'
import Login from '../../../Auth/Login'
import Register from '../../../Auth/Register'
import Mobile from './Mobile'
import { getCart } from '../../../store/features/cartslice/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData, isUserLogedIn,loadingUser,logoutUser } from '../../../store/features/userSlice/userSlice'
import { useNavigate } from 'react-router-dom'
import { removeCartItem } from '../../../store/features/cartslice/cartSlice'

const Nav = ({pass}) => {
  const navigator = useNavigate()
  const dispatch = useDispatch()
  const {cartItems,_} = useSelector(getCart)
  const isLogedIn = useSelector(isUserLogedIn)
  const user = useSelector(getUserData)
  const isLoadingUser = useSelector(loadingUser)
  console.log(cartItems)
  const cartLength = Object.keys(cartItems).length
  
  let checkLink = ({isActive}) =>  isActive ? 'my-auto max-xl:hidden text-redd duration-200 hover:text-redd' : ' duration-200  hover:text-redd my-auto max-xl:hidden'
  const [loginNow,setLoginNow] = useState(false) 
  const [registerNow,setRegisterNow] = useState(false) 
  const [show,setShow] = useState(false)
  const [showLogout,setShowLogout] = useState(false)
  
  const logoutNow = () => {
    setShowLogout(false)
    dispatch(logoutUser())
  }

  let cartsDiv = []
  const Cart = ({data}) =>{
    return (
        <div className='shrink-0 capitalize font-normal gap-3 flex w-full h-[60px]  border  rounded'>
            <div className='w-[70px] relative'>
                <img src={data.items[0].img} className='rounded h-full w-full  absolute left-0 bottom-0 top-0 right-0 max-sm:hidden' width={""} height={""} alt="" />
            </div>
            <div className='flex flex-col gap-1 pt-1'>

                <p className='font-semibold text-small'>{data.title} </p>
                <p className='text-small'> ${data.price} </p>
            </div>
        </div>
    )
  }
  for(let i in cartItems){
     cartsDiv.push(<Cart key={i}  {...cartItems[i]} />)  
  }

  return (
    <div className={'z-10 bg-white font-semibold shadow-sm  '+pass}>
        
        <Mobile show={show} setShow={setShow} loginNow={loginNow} setLoginNow={setLoginNow} setRegisterNow={setRegisterNow}/>
        
        <div className=" bg-dark w-full font-medium text-small text-white text-center py-1">
            This April, celebrate Fasika with a gift that makes your family happy!
        </div>

        {loginNow && <Login setLoginNow={setLoginNow} />  }
        {registerNow && <Register setRegisterNow={setRegisterNow} />  }
        
        <div className='w-full px-c14 max-xl:px-3 py-3 flex uppercase justify-center border-b border-red border-opacity-10' >
            <div className='flex w-full max-w-7xl '>
                <img src={Logo} width="100px" alt="" onClick={()=>navigator("/")} />

                <div className='w-3/4 justify-center flex gap-12 '>

                    <NavLink    to="/"  className={checkLink} >Home</NavLink >
                    <NavLink    to="/products" className={checkLink}>Products</NavLink >
                    <NavLink    to="/aboutus" className={checkLink}>About us</NavLink >
                    <NavLink    to="/howto" className={checkLink}>How to order</NavLink >
                    <a href="/#faq" className={"my-auto max-xl:hidden duration-200  hover:text-redd "}>FAQS</a >
                
                </div>

                <div className='w-1/4 max-xl:w-2/4 flex justify-around max-xl:justify-end max-xl:gap-7 '>
                    
                    <div className="flex max-xl:hidden">
                        {isLogedIn == false ? 
                        <> 
                            <div className='my-auto cursor-pointer hover:text-redd duration-200' onClick={()=>setLoginNow(true)}>Login </div> <pre className='my-auto'> / </pre>
                            <div className='my-auto cursor-pointer hover:text-redd duration-200' onClick={()=>setRegisterNow(true)}>Register</div>
                        </> 
                        :   isLoadingUser ? 
                        <div className='my-auto opacity-30 duration-200'> loading </div> 
                        : <div className='my-auto relative cursor-pointer text-white rounded-full duration-200'>
                                <div className='bg-redd px-1 rounded '  onClick={() => setShowLogout(a => !a)}>
                                    {(user.firstName).substring(0,10)}
                                </div>
                                <div className={` ${!showLogout && "hidden"} shadow shadow-slate-700 gray-500 absolute -left-24 rounded-b rounded-l py-2 px-1 font-normal text-normal bg-gray-600 w-24`}>
                                
                                    <div className='w-full ps-1 ' onClick={logoutNow}>
                                     Logout
                                   </div>
                                   
                                   
                                </div>
                            </div>
                        }
                    </div>

                    <div  className='my-auto group  gap-1 relative'>
                        
                        <NavLink to={"/cart"} className={({isActive}) => isActive ? 'text-redd   duration-200 hover:text-redd  flex gap-1 font-extrabold ' : ' flex gap-1 duration-200 hover:text-redd'}>
                            <div className='relative'>
                            {cartLength > 0 &&
                                <div className='absolute bg-gray-500 flex w-4 h-4 rounded-full -bottom-1 -left-2'>
                                    <small className='m-auto text-white'>
                                        {cartLength}
                                    </small>
                                </div>
                            }
                                <img src={cart} alt="" />
                            </div>
            

                            <p className='my-auto'>cart</p>
                            
                        </NavLink>
                        <div className='absolute  scale-y-0 overflow-y-auto flex group-hover:scale-100 duration-200 flex-col   gap-1 rounded-lg h-fit max-h-[400px] w-[300px] top-6 py-4 px-5 right-0  z-10 bg-white  shadow-xl'>
                            {cartsDiv}
                        </div>

                    </div>

                    <Menu className='text-4xl xl:hidden' onClick={() => {setShow(!show)}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav
import {useState} from 'react'
import { Link } from 'react-router-dom'
import Login from '../../../Auth/Login'
import Register from '../../../Auth/Register'
import { useSelector } from 'react-redux'
import { getUserData, isUserLogedIn,loadingUser,logoutUser } from '../../../store/features/userSlice/userSlice'
import Logo from "../../../assets/images/Logo.svg"
import {FiFacebook as Facebook,FiTwitter as Twitter} from "react-icons/fi" 
import {TbBrandTelegram as Telegram } from "react-icons/tb"
import {BsInstagram as Instagram } from "react-icons/bs"
import Profile from "./profile"

const Footer = () => {  
  
    const isLogedIn = useSelector(isUserLogedIn)
    const user = useSelector(getUserData)
    const isLoadingUser = useSelector(loadingUser)

    const [loginNow,setLoginNow] = useState(false) 
    const [registerNow,setRegisterNow] = useState(false) 
    const [initialEmail,setInitialEmail] = useState("")

    return (<>
            {loginNow && <Login setLoginNow={setLoginNow} initialEmail={initialEmail} />  }
            {registerNow && <Register setRegisterNow={setRegisterNow} />  }
        <div className='w-full px-c14  font-semibold max-lg:px-4 pt-7' style={{background: "#F7F7F7"}}>
            


            <div className='flex max-w-7xl gap-3 mx-auto max-lg:grid  max-lg:grid-cols-2 max-sm:grid-cols-1'>

                <div className='basis-3/12 flex max-md:basis-1/2'>
                    <div className='m-auto flex flex-col '>
                        <img src={Logo} className='scale-[50%]' alt="" />
                        <p className='text-normal font-normal'>All rights reserved © Nafkot 2022</p>
                    </div>
                </div>

                <div className='flex flex-col gap-10 basis-2/12  ps-5 max-md:basis-1/2'>
                    <h1 className='font-bold text-lg   max-lg:text-center '>Navigation</h1>
                    <ul className='flex flex-col gap-1.5  max-lg:flex-row max-lg:justify-around  max-sm:justify-between'>
                        
                        <div className='flex flex-col gap-1.5 '>
                            <Link className='hover:text-redd duration-200 hover:translate-x-[4%]' to={"/"}> Home</Link> 
                            <Link className='hover:text-redd duration-200 hover:translate-x-[4%]'  to={"/aboutus"}> About</Link>
                            <Link className='hover:text-redd duration-200 hover:translate-x-[4%]' to={"/products"}> Products</Link>
                        </div>
                        <div className='flex flex-col gap-1.5 '>
                            <Link className='hover:text-redd duration-200 hover:translate-x-[4%]' to={"/howto"} > How to Order</Link>
                            <Link className='hover:text-redd duration-200 hover:translate-x-[4%]' to={"/cart"}> Cart </Link>
                            <Link className='hover:text-redd duration-200 hover:translate-x-[4%]' to={"/login-admin"}> Admin </Link>
                        </div>

                    </ul>
                </div>
                
                <div className=' flex flex-col gap-10 basis-4/12 max-lg:my-5 max-lg:px-2 px-10'>
                    <h1 className='font-bold text-lg text-center '>Connect with us today</h1>
                        {isLoadingUser   ? 
                        <div className='flex justify-center text-gray-500'>
                            loading....
                        </div>
                        : isLogedIn  ? 
                        <div className='relative'>

                            <Profile footer={true} user={user} ></Profile>
                        </div>

                        :<div className='flex flex-col gap-2 '>
                            <div>Join Our Club</div>
                            <div className=' border border-gray-400 flex p-1 rounded-lg max-sm:w-11/12 max-lg:6/12'>
                                <input onChange={({target}) => setInitialEmail(target.value)} type="text" className='grow text-gray-500 focus:outline-none rounded-md bg-gray-100' placeholder='SEND US YOUR EMAIL' />
                                <button  onClick={() => setLoginNow(true)} className='bg-redd hover:bg-red-400 p-2 hovertranslate-y-[-10%] duration-100 hover:shadow-lg w-3/12 text-white rounded'>Login</button>
                            </div>
                            <div>Dont have account ?</div>
                            <button 
                                onClick={() => setRegisterNow(true)}
                                className='w-full hover:bg-blue-400 hovertranslate-y-[-10%] duration-100 hover:shadow-lg max-sm:w-11/12 bg-blue-500 text-white py-3   '  style={{borderRadius:"5px"}}>
                                Register
                            </button>   
                            <div>Stay updated with our service. <span className='text-redd font-bold'>SUBSCRIBE</span>  now!</div>

                        </div>    
                        } 
                </div>
                {/* <div className='grow'></div> */}
                <div className='flex flex-col gap-10 basis-3/12 max-lg:mt-2'>
                    <h1 className='font-bold text-lg max-lg:text-center lg:mx-auto'>Contact Us</h1>
                    <div className='mx-auto flex  flex-row max-lg:justify-around justify-between max-sm:justify-between'>
                        <div className='flex flex-col grid-cols-2 max-lg:grid max-lg:grid-cols-2 gap-3 max-lg:gap-7'>
                            <div className='flex gap-3 cursor-pointer '> 
                                <div className='bg-redd rounded-full p-[6px]'>
                                    <Telegram className='text-lg text-white'  />
                                </div>
                                <p className='my-auto'>Telegram</p>
                            </div>
                            <div className='flex gap-3 cursor-pointer'> 
                                <div className='bg-redd rounded-full p-[6px]'>
                                    <Facebook className='text-lg text-white'  />
                                </div>
                                <p className='my-auto'>Facebook</p>
                            </div>
                            <div className='flex gap-3 cursor-pointer'> 
                                <div className='bg-redd rounded-full p-[6px]'>
                                    <Instagram className='text-lg text-white'  />
                                </div>
                                <p className='my-auto'>Instagram</p>
                            </div>
                            <div className='flex gap-3 cursor-pointer'> 
                                <div className='bg-redd rounded-full p-[6px]'>
                                    <Twitter className='text-lg text-white'  />
                                </div>
                                <p className='my-auto'>Twitter</p>
                            </div>
                           
                        </div>
                       
                    </div>
                    
                </div>

            </div>

            <div className='border-t font-medium pb-3 mt-6' style={{borderColor:"#F5E0DB"}}>
                <p className='mt-2'>
                    All rights reserved © Nafkot 2022
                </p>
            </div>
        
        </div>
        </>
    )
}

export default Footer
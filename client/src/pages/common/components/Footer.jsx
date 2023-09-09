import {useState} from 'react'
import { Link } from 'react-router-dom'
import Login from '../../../Auth/Login'
import Register from '../../../Auth/Register'
import { useSelector } from 'react-redux'
import { getUserData, isUserLogedIn,loadingUser,logoutUser } from '../../../store/features/userSlice/userSlice'


const Footer = () => {  
  
    const isLogedIn = useSelector(isUserLogedIn)
    const user = useSelector(getUserData)
    const isLoadingUser = useSelector(loadingUser)

    const [loginNow,setLoginNow] = useState(false) 
    const [registerNow,setRegisterNow] = useState(false) 
    
    return (<>
            {loginNow && <Login setLoginNow={setLoginNow} />  }
            {registerNow && <Register setRegisterNow={setRegisterNow} />  }
        <div className='w-full px-c14  font-semibold max-lg:px-4 pt-7' style={{background: "#F7F7F7"}}>
            

            <div className='flex max-w-7xl mx-auto max-lg:grid '>

                <div className='flex flex-col gap-10 basis-1/4'>
                    <h1 className='font-bold text-lg   max-lg:text-center'>Navigation</h1>
                    <ul className='flex flex-col gap-1.5  max-lg:flex-row max-lg:justify-around  max-sm:justify-between'>
                        
                        <div className='flex flex-col gap-1.5'>
                            <Link className='hover:text-redd duration-200 hover:translate-x-[4%]' to={"/"}> Home</Link> 
                            <Link className='hover:text-redd duration-200 hover:translate-x-[4%]'  to={"/aboutus"}> About</Link>
                            <Link className='hover:text-redd duration-200 hover:translate-x-[4%]' to={"/products"}> Products</Link>
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <Link className='hover:text-redd duration-200 hover:translate-x-[4%]' to={"/howto"} > How to Order</Link>
                            <Link className='hover:text-redd duration-200 hover:translate-x-[4%]' to={"/cart"}> Cart </Link>
                            <Link className='hover:text-redd duration-200 hover:translate-x-[4%]' to={"/admin"}> Admin </Link>
                        </div>

                    </ul>
                </div>
                
                <div className=' flex flex-col gap-10 basis-1/3 max-lg:my-5'>
                    <h1 className='font-bold text-lg text-center '>Connect with us today</h1>
                        {isLoadingUser   ? 
                        <div className='flex justify-center text-gray-500'>
                            loading....
                        </div>
                        : isLogedIn  ? 
                        <div className='flex flex-col text-gray-700'>
                            <div>
                                Hi <span className='bg-redd px-2 rounded text-white'>
                                    {user.firstName}
                                </span>,
                                We hope your having wonderfull time with our website
                            </div>


                        </div> 

                        :<div className='flex flex-col gap-3 '>
                        
                            <button 
                                onClick={() => setLoginNow(true)}
                                className='group w-10/12 hover:bg-red-400 gap-3 hover:bg-redhover hovertranslate-y-[-10%] duration-100 hover:shadow-lg max-lg:w-6/12 max-sm:w-11/12 bg-redd text-white py-3  mx-auto hover:' style={{borderRadius:"5px"}}>
                                Login
                            </button>    
                            <button 
                                onClick={() => setRegisterNow(true)}
                                className='w-10/12 max-lg:w-6/12 hover:bg-blue-400 hovertranslate-y-[-10%] duration-100 hover:shadow-lg max-sm:w-11/12 bg-blue-500 text-white py-3  mx-auto '  style={{borderRadius:"5px"}}>
                                Register
                            </button>   
                        </div>    
                        } 
                </div>
                <div className='grow'></div>
                <div className='flex flex-col gap-10 basis-1/3 max-lg:mt-5'>
                    <h1 className='font-bold text-lg max-lg:text-center'>Contact Us</h1>
                    <div className='flex  flex-row max-lg:justify-around justify-between max-sm:justify-between'>
                        <div className='flex flex-col gap-1.5'>
                            <p>Telegram</p>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>linkedin</p>
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <p className='text-redd  font-bold'>@telegram</p>
                            <p className='text-redd  font-bold'>@facebook</p>
                            <p className='text-redd  font-bold'>@instagram</p>
                            <p className='text-redd  font-bold'>@Linkedin</p>
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
import React from 'react'
import {AiOutlineShoppingCart as CartIcon} from "react-icons/ai"
import {CiLogout  as LogoutIcon} from "react-icons/ci"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../../store/features/userSlice/userSlice'

function profile({user,footer}) {
  const style = footer ? "w-full" : " w-[300px] z-20  absolute right-0 mt-2 "
  const dispatch = useDispatch()
  const logoutNow = () =>{
    dispatch(logoutUser())
  }
  
  return (
    
    <div className={ `${style} capitalize font-normal px-3 text-black rounded-lg py-2 shadow-lg border text-normal bg-white `}>
      
        <div className='flex gap-4'>
          <div className=' rounded-full bg-redd flex w-10 h-10'>
             <div className='m-auto font-bold text-white'>{user.firstName[0]}</div> 
          </div>
          <div className='my-auto lowercase'>
            <div className='capitalize font-bold'>{user.firstName} {user.lastName}</div>
            <div className='text-[11px]'>{user.email} </div>
          </div>
        </div>
        <div className='mt-2 flex flex-col gap-2 font-semibold duration-300'>
          <Link to={"/cart"} className='flex gap-3 hover:bg-gray-200 p-2 rounded-lg'> 
            <CartIcon className='text-lg my-auto' />
            <div className='my-auto'>Cart</div>
          </Link>
          <div onClick={logoutNow} className='flex gap-3 hover:bg-gray-200 p-2 rounded-lg'> 
            <LogoutIcon className='text-lg my-auto' />
            <div className='my-auto'>Logout</div>
          </div>
          
        </div>

    </div>
  )
}

export default profile
import React from 'react'
import Logo from "../../../assets/images/vector (6).svg"
import {RxDashboard as D} from "react-icons/rx"
import {BsCartDash as P} from "react-icons/bs"
import {IoMdLogOut as T} from "react-icons/io"
import {CiLogout as L} from "react-icons/ci"
import { Outlet } from 'react-router-dom'

import { NavLink,useLocation } from 'react-router-dom'

const Bar = () => {
  const path = useLocation().pathname
  
  let checkLink = ({isActive}) =>  isActive ? "" : "" 

  return (
    <div className='relative basis-3/12  h-screen bg-white pt-4 '>

          <div className='flex gap-4 ps-6 '>
            <img src={Logo} className='w-8 my-auto' alt="" />
            <p className=' my-auto mt- text-2xl font-bold text-gray-600'>Nafkot</p>
          </div>

          <div className='mt-7 flex flex-col gap-1'>

             
                  
              <NavLink to={"/admin"} className={`${path == "/admin/dashbord" && "bg-red-400 bg-opacity-20 "} relative group ps-10 transition  duration-200 flex font-bold hover:bg-red-400 hover:bg-opacity-20 cursor-pointer gap-5 px-4 py-3`}>
                <div className={`${path == "/admin/dashbord" && "opacity-80 translate-x-0"} absolute left-0  duration-200  top-0 w-1 opacity-0 group-hover:translate-x-0 translate-x-3 group-hover:opacity-80  bg-red-500 h-full`}></div>
                <D className={`${path == "/admin/dashbord" && "text-red-700"} my-auto text-xl duration-200 group-hover:text-red-700 `} />
                <p className={`${path == "/admin/dashbord" && "text-redd"} group-hover:text-redd duration-200`}>Dashbord</p>
              </NavLink>

              <NavLink to={"/admin/products"} className={`${path == "/admin/products" && "bg-red-400 bg-opacity-20 "} relative group ps-10 transition  duration-200 flex font-bold hover:bg-red-400 hover:bg-opacity-20 cursor-pointer gap-5 px-4 py-3`}>
                <div className={`${path == "/admin/products" && "opacity-80 translate-x-0"} absolute left-0  duration-200  top-0 w-1 opacity-0 group-hover:translate-x-0 translate-x-3 group-hover:opacity-80  bg-red-500 h-full`}></div>
                <P className={`${path == "/admin/products" && "text-red-700"} my-auto text-xl duration-200 group-hover:text-red-700 `} />
                <p className={`${path == "/admin/products" && "text-redd"} group-hover:text-redd duration-200`}>Products</p>
              </NavLink>

              <NavLink to={"/admin/addproduct"} className={`${path == "/admin/addproduct" && "bg-red-400 bg-opacity-20 "} relative group ps-10 transition  duration-200 flex font-bold hover:bg-red-400 hover:bg-opacity-20 cursor-pointer gap-5 px-4 py-3`}>
                <div className={`${path == "/admin/addproduct" && "opacity-80 translate-x-0"} absolute left-0  duration-200  top-0 w-1 opacity-0 group-hover:translate-x-0 translate-x-3 group-hover:opacity-80  bg-red-500 h-full`}></div>
                <T className={`${path == "/admin/addproduct" && "text-red-700"} my-auto text-xl duration-200 group-hover:text-red-700 `} />
                <p className={`${path == "/admin/addproduct" && "text-redd"} group-hover:text-redd duration-200`}>add Product</p>
              </NavLink>

              <NavLink to={"/"} className={`${path == "/admin/logout" && "bg-red-400 bg-opacity-20 "} relative group ps-10 transition  duration-200 flex font-bold hover:bg-red-400 hover:bg-opacity-20 cursor-pointer gap-5 px-4 py-3`}>
                <div className={`${path == "/admin/logout" && "opacity-80 translate-x-0"} absolute left-0  duration-200  top-0 w-1 opacity-0 group-hover:translate-x-0 translate-x-3 group-hover:opacity-80  bg-red-500 h-full`}></div>
                <L className={`${path == "/admin/logout" && "text-red-700"} my-auto text-xl duration-200 group-hover:text-red-700 `} />
                <p className={`${path == "/admin/logout" && "text-redd"} group-hover:text-redd duration-200`}>Logout</p>
              </NavLink>
                  
             
          </div>

          <p className='absolute bottom-10  w-full text-center'>
            Nafkot 2023 &copy;copyright 
          </p>
          <Outlet />
    </div>
  )
}

export default Bar
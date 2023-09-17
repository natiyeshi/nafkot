import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CheckAdmin = () => {
    const navigator = useNavigate()
    const [access,setAccess] = useState(false)

    useEffect(()=>{
        const token = localStorage.getItem("admin-token")  
        if(token == null || token == ""){
            navigator("/login-admin")
        } else {
            setAccess(true)
        }
    },[])

  return (
    <div className=''>
         
         {access == true ? <Outlet /> : "Checking admin...."  }
    </div>
  )
}

export default CheckAdmin
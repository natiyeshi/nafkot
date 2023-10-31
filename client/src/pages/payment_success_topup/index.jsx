import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from '../../core/hooks/axios';
import gif from "../../assets/gif/Pulse-1s-200px.gif";
import { useNavigate } from 'react-router-dom';

const index = () => {
  const navigator = useNavigate()   
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [err,setErr] = useState("")
  const [loading,setLoading] = useState(true)
  useEffect(()=>{

    async function fetchData  (){
        try{
            const data = await axios.post("/transaction/save_payment_topup",{
                 session_id : queryParams.get("session_id"),
                 token : queryParams.get("order"),
             })
             console.log(data)
             setLoading(false)
             navigator("/products/topup")
            }catch(err){
                setLoading(false)
                console.log(err)
                setErr(err.response.data?.error?.message || "something goes wrong")
            }
    } 
    fetchData();
  },[])
  return (
    <div className='flex w-full h-screen'>
        <div className='m-auto'>
            {loading ? <>
                <p className='text-center font-bold text-gray-500'>
                Saving your transactions....
            </p>
            <img src={gif} className='' alt="" />
            </> : err ? <>
            <p className='text-xl text-center'>
                Sorry, {err}
            </p>
            <p className='text-center'>
                this might be because of connection so try refreshing the page
            </p>
            <p onClick={() => window.location.reload()} className='text-center cursor-pointer text-redd'>
                refresh
            </p>
            </> : <>
            
            <p className='text-xl text-center'>
               Transactions Registered successfully! 
           </p>
           <p className='text-center mt-2 font-bold text-redd'>
               redirecting....
           </p>
            </>
            }
            
        </div>
        
    </div>
  )
}

export default index
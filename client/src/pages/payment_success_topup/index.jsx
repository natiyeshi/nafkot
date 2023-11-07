import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from '../../core/hooks/axios';
import gif from "../../assets/gif/Pulse-1s-200px.gif";
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti'

const index = () => {
  const navigator = useNavigate()   
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [err,setErr] = useState("")
  const [loading,setLoading] = useState(false)
  const width = window.innerWidth
  const height = window.innerHeight
  useEffect(()=>{

    async function fetchData  (){
        try{
            setLoading(true)
            const data = await axios.post("/transaction/save_payment_topup",{
                 session_id : queryParams.get("session_id"),
                 token : queryParams.get("order"),
             })
             setLoading(false)
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
            </> : err ? 
        
            <>
             <p className='text-xl text-center'>
                    Sorry, {err}
                </p>
            {err === "session already saved!" ? 
            <div className='text-center my-2'>
                <button onClick={()=>navigator("/products/topup")} className='bg-redd px-5 py-2 rounded text-white'>Continue</button>
            </div> 
            :
            <>  
                <p className='text-center'>
                    this might be because of connection so try refreshing the page
                </p>
                <p onClick={() => window.location.reload()} className='text-center cursor-pointer text-redd'>
                    refresh
                </p>
            </>
        }
           
            </> : <>
            
            <p className='text-xl text-center'>
               Transactions Registered successfully! 
           </p>
           <p className='text-center mt-2 font-bold text-redd'>
               <button onClick={()=>navigator("/products/topup")} className='bg-redd px-5 py-2 rounded text-white'>Continue</button>
               <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={1000}
                    recycle={false}
                />
           </p>
            </>
            }
            
        </div>
        
    </div>
  )
}

export default index
import axios from '../../../hooks/axios'
import React, { useEffect, useState } from 'react'
import { BiCopy } from "react-icons/bi"
import gif from "../../../../assets/gif/run.gif"
import Message from './message'
const Request = ({setAlerting,data,setReloadData}) => {

    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const sendMoney = async () =>{
        try{
            setLoading(true)
            await axios.post("/request/sendmoney/"+data._id)
            setReloadData(data => !data)
        }catch(err){
            const AE = err.response?.data?.error.message
            setAlerting( AE ? AE : err.message)
        }finally{
            setLoading(false)
        }
    }

    return (
    <div className='bg-white px-4 pt-2 w-full duration-300 hover:shadow-xl rounded shadow-md border   shrink-0'>
            <div className='flex justify-between'>
                <div className='text-lg font-semibold'>{data.amount} birr card</div>
                <div className='text-xs  my-auto '>4 days ago</div>
            </div>
            <div className='flex gap-2'>
                <div className='mt-2 mb-3'> Phone Number <span className='font-bold'>{data.receiverPhoneNumber}</span> </div>
                <BiCopy onClick={()=>{
                    navigator.clipboard.writeText(data.receiverPhoneNumber);
                    setAlerting(data.receiverPhoneNumber+" copied");
                }
                
                } title='Copy' className='my-auto text-lg cursor-pointer'/>
            </div>
            <div className='flex my-2 gap-10  bg-gray-30 w-full   ' >
                <div className=' text-gray-900 duration-300 rounded  py-[5px] font-bold '>Amount {(data.amount / 100).toFixed(2)}</div>
                {   
                    loading ?
                    <button className='flex gap-3 bg-gray-200 text-gray-900 duration-300 rounded px-4 py-[5px] font-bold '>
                        <div>loading</div>
                        <img src={gif} width={20} alt="" />
                    </button>
                    :
                    data.transfered ?
                    <button className='bg-gray-00 text-gray-900 duration-300 rounded px-8 py-[5px] font-bold '>sent</button>
                    :
                    <button onClick={sendMoney} className='bg-redd duration-300 rounded px-8 py-[5px] font-bold text-white'>send</button>
                }
            </div>
        </div>
  )
}

export default Request
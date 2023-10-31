import axios from '../../../hooks/axios'
import React, { useState } from 'react'
import Message from "./message"

const DeleteTopup = ({setDeleteTopup,deleteTopup,setReloadData}) => {
  const id = deleteTopup._id
  const [deleting , setDeleting] = useState(false)
  const [error , setError] = useState('')
  const [success , setSuccess] = useState(false)

  const deleteData = async () => {
    setDeleting(true)
    try{
      setDeleting(true)
      await axios.post("topup/deletetopups/"+id)
      setReloadData((data) => !data)
      setSuccess(true)
    }catch(err){
      console.log(err)
      setError(err.toString())
    }finally{
      setDeleting(false)
    }
  }  

  return (
    <div className='absolute flex z-20 left-0 right-0 bottom-0 top-0'>
        
        {error && <Message message={err} setAlerting={setError} />}

        <div className=' m-auto  bg-white z-30 px-7 pt-2  duration-300 rounded shadow-md border  shrink-0'>
              <div className='text-lg font-bold'>Delete Product</div>
              { !success ?
                <div className=' text-gray-900 duration-300 rounded  py-[5px] font-semibold '>Are you sure you want to delete {deleteTopup.amount} birr card ?</div>
                :
                <div className=' text-gray-900 duration-300 rounded  py-[5px] font-semibold '>You successfully Deleted {deleteTopup.amount} birr card! </div>
              }
              <div className='flex flex-row-reverse my-2 gap-5  bg-gray-30 w-full' >
                 { 
                 success ? 
                 <button onClick={()=>{setDeleteTopup(null)}} className='bg-gray-200 duration-300 rounded px-8 py-[5px] font-bold '>Close</button>
                 :
                 deleting ?
                  <> 
                  <button className='bg-gray-300 text-gray-500 cursor-wait  duration-300 rounded px-8 py-[5px] font-bold -white'>Deleteing...</button>
                  <button className='bg-gray-300 text-gray-500 cursor-wait duration-300 rounded px-8 py-[5px] font-bold '>Cancel</button>
                  </>
                  :
                  <> 
                  <button onClick={deleteData} className='bg-redd duration-300 rounded px-8 py-[5px] font-bold text-white'>Delete</button>
                  <button onClick={()=>{setDeleteTopup(null)}} className='bg-gray-200 duration-300 rounded px-8 py-[5px] font-bold '>Cancel</button>
                  </>
                  }
            </div>
      </div>

      <div onClick={()=>{if(!deleting) setDeleteTopup(null)}} className='absolute -z-10 left-0 right-0 bottom-0 top-0 bg-gray-900  opacity-40'></div>
   
    </div>
  )
}

export default DeleteTopup
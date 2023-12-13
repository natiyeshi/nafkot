import React, { useState } from 'react'
import Message from './message'
import axios from '../../../hooks/axios'
const EditTopup = ({setShowEditTopup,showEditTopup}) => {

  const [amount,setAmount] = useState(showEditTopup.amount)
  const [success , setSuccess] = useState(false)
  const [error , setError] = useState('')
  const [loading,setLoading ] = useState(false)
  
  const addData = async () =>{
    setLoading(true)
    try{
      const data = parseInt(amount)  
      if(!data || typeof data == 'notnumber'){
        throw(Error("wrong input"))
      }
      const sendData = {
        oldData : showEditTopup._id,
        newAmount :  data
      }
      const response = await axios.post("topup/edit/",sendData)
      setSuccess(true)
    }catch(err){
      console.log(err)
      const AE = err.response?.data?.error.message
      setError( AE ? AE : err.message)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className=' absolute flex z-20 left-0 right-0 bottom-0 top-0'>
        {error && <Message message={error} setAlerting={setError}/>}
        <div className=' m-auto  bg-white z-30 px-7 pt-2   duration-300 rounded shadow-md border  shrink-0 '>
              <div className='text-lg font-bold'>Add Topup</div>
              <div className='flex gap-5 my-4'>
              {!success ?
              <> 
                <label htmlFor="" className='my-auto'>Price in birr</label>
                 <input type="number" value={amount} onChange={({target})=>{
                    setAmount(target.value)
                  }} 
                className='border outline-none w-20 text-lg' />
                </>
                : 
                <div> Product Edited! </div>
              }
              </div>
              <div className='flex my-2 gap-10  bg-gray-30 w-full' >
                 <div className=' text-gray-900 duration-300 rounded  py-[5px] font-bold '>Amount 8&pound;</div>
                {
                  success ? 
                  <button  onClick={()=>{setShowEditTopup(null)}}  className='bg-gray-200 text-gray-600 duration-300 rounded px-4 py-[5px] font-semibold ite'>Finish</button>
                  :
                  loading  ? 
                  <>
                    <button  className='bg-gray-200 cursor-wait text-gray-600 duration-300 rounded px-4 py-[5px] font-semibold ite'>Uploading</button>
                  </>
                  :
                  <>
                    <button onClick={addData} className='bg-redd duration-300 rounded px-8 py-[5px] font-bold text-white'>Upload</button>
                  </>
                  
                }
            </div>
      </div>


      <div onClick={()=>{setShowEditTopup(null)}} className='absolute -z-10 left-0 right-0 bottom-0 top-0 bg-gray-900  opacity-40'></div>
   
    </div>
  )
}

export default EditTopup
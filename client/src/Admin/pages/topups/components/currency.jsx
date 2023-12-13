import React,{useState} from 'react'
import axios from '../../../hooks/axios'
import Message from './message'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrency,setCurrency } from '../../../../store/features/adminsettingslice/adminSettingSlice'

const Currency = ({setShowCurrency}) => {
  const dispatch = useDispatch()
  const [amount,setAmount] = useState('') 
  const [success , setSuccess] = useState(false)
  const [error , setError] = useState('')
  const [loading,setLoading ] = useState(false)
  const [total,setTotal] = useState(false)
  
  const setting = useSelector(getCurrency)

  const addData = async () =>{

    setLoading(true)
    try{
      const data = parseInt(amount)  
      if(!data || typeof data == 'notnumber'){
        throw(Error("wrong input"))
      }
      const response = await axios.post("setting/updatecurrency",{currency : amount})
      console.log(response)
      dispatch(setCurrency(response.data))
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
        {error && <Message message={error} setAlerting={setError} />}
        <div className=' m-auto  bg-white z-30 px-7 pt-2  duration-300 rounded shadow-md border  shrink-0'>
              <div className='text-lg font-bold'>Update currency</div>
              <div className='text-xs'> &pound;1 is {setting.currency} birr now! </ div>
              <div className='flex gap-5 my-2'>
                { success  ? 
                    <>
                      <div className=''>currency updated!</div>
                    </>
                    :
                    <>
                    <label htmlFor="" type="number"  className='my-auto'>price of 1 dollar in birr</label>
                    <input onChange={({target}) => setAmount(target.value) } type="number" className='border outline-none w-20 text-lg' />
                    </>
                }
              </div>
              <div className='flex flex-row-reverse my-2 gap-10  bg-gray-30 w-full' >
                  {
                  success ?
                  <button onClick={()=>{setShowCurrency(false)}} className='bg-gray-400 duration-300 rounded px-8 py-[5px] font-bold text-white'>Close</button>
                  : loading ?
                   <button className='bg-gray-400 duration-300 rounded px-8 py-[5px] font-bold text-white'>Loading currency</button>
                  :
                    <button onClick={addData} className='bg-redd duration-300 rounded px-8 py-[5px] font-bold text-white'>Update</button>
                    }
            </div>
      </div>

      <div onClick={()=>{setShowCurrency(false)}} className='absolute -z-10 left-0 right-0 bottom-0 top-0 bg-gray-900  opacity-40'></div>
   
    </div>
  )
}

export default Currency
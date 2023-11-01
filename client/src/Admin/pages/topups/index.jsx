import {useEffect, useState} from 'react'
import Bar from '../common/Bar'
import AdminTopups from './components/admin_topups'
import Requests from './components/requests'
import Message from './components/message'
import AddTopup from './components/addTopup'
import Currency from './components/currency'
import EditTopup from "./components/EditTopup"
import DeleteTopup from "./components/deleteTopup"
import axios from '../../hooks/axios'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrency, setCurrency } from "../../../store/features/adminsettingslice/adminSettingSlice"

const index = () => {
  const dispatch = useDispatch()
  const [page,setPage] =  useState(0)
  const [alerting,setAlerting] = useState('')
  const [showAaddTopup,setShowAaddTopup] = useState(false)
  const [showCurrency,setShowCurrency] = useState(false)
  
  useEffect(() => {
    setAlerting(alerting);
    const timeout = setTimeout(() => {
      setAlerting('');
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alerting]);

  useEffect(() => {
    async function fetch() {
      try{
        const data = await axios.post("setting/getcurrency")
        dispatch(setCurrency(data.data))
        console.log(data)
      }catch(err){
        console.log(err)
        const AE = err.response?.data?.error.message
        setAlerting( AE ? AE : err.message)
      }
    }
    fetch()
  }, [])
  
  const pages = [<AdminTopups />,<Requests setAlerting={setAlerting} />]
  
  return (
    <div className='flex relative bg-blue-50 '>
        <Bar />
        <div className={` basis-9/12  duration-300 flex flex-col relative p-5 overflow-x-hidden overflow-y-scroll bg-red`} style={{maxHeight:"100vh"}}>
          {alerting && <Message message={alerting} setAlerting={setAlerting} />}
          <h1 className='text-lg font-bold mt- mb-4'>Topup</h1>
          <div className={` flex relative gap-10 ps-0 py-4   `}>
            <div></div>
            <div onClick={()=>setPage(0)} className={`${page == 0 && 'border border-gray-300 rounded-tr-lg border-b-blue-50 border-b-4 z-10 text-redd  rounded-tl-lg font-bold'}   h-[35px] py-2 px-2  cursor-pointer`}>Topups</div>
            <div onClick={()=>setPage(1)} className={`${page == 1 && 'border border-gray-300 rounded-tr-lg border-b-blue-50 border-b-4 z-10 text-redd  rounded-tl-lg font-bold'}  h-[35px] cursor-pointer  py-2 px-2`}>Requests</div>
            <div onClick={()=>setShowAaddTopup(true)} className={`${page == 2 && 'border border-gray-300 rounded-tr-lg border-b-blue-50 border-b-4 z-10 text-redd  rounded-tl-lg font-bold'}  h-[35px] cursor-pointer  py-2 px-2`}>Add Topup</div>
            <div onClick={()=>setShowCurrency(true)} className={`${page == 3 && 'border border-gray-300 rounded-tr-lg border-b-blue-50 border-b-4 z-10 text-redd  rounded-tl-lg font-bold'}  h-[35px] cursor-pointer  py-2 px-2`}>Currency</div>
            <div className='border-t border-t-gray-300 absolute bottom-4 w-full'></div>
          </div>
          <div className=''>
              {pages[page]}
              {showAaddTopup && <AddTopup setShowAaddTopup={setShowAaddTopup} />}
              {showCurrency && <Currency setShowCurrency={setShowCurrency} />}
          </div>
        </div>
    </div>
  )
}

export default index
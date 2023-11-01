import {useEffect,useState} from 'react'
import Request from './request'
import axios from '../../../hooks/axios'
import TopupSkeleton from './topups_skeleton'
import {RxReload as Reload } from "react-icons/rx"
import Message from './message'

const Requests = ({setAlerting}) => {
  
  const [requests,setRequests] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)
  const [reloadData,setReloadData] = useState(false)
  const [filter,setFilter] = useState(0)

  useEffect(() => { 
    async function fetch(){
      try{
        setLoading(true)
        const result = await axios.post("request/getrequests/") 
        setRequests(result.data)
        setError(null)
      }catch(err){
        const AE = err.response?.data?.error.message
        setError( AE ? AE : err.message)
      }finally{
        setLoading(false)
      }
    }

    fetch()
  }, [reloadData])
  
  const arr = ['','','','','','','','','','','','']
  const filterData = ({target}) =>{
    const val = parseInt(target.value)
    setFilter(val)
  }
  return (
    <div>
      <div className='flex flex-row-reverse mr-2 gap-5 '>
            <div onClick={() => setReloadData(data => !data)} className='flex mr-5 bg-white p-2 shadow rounded-full cursor-pointer hover:shadow-xl' title='reload'>
              <Reload className='text-lg' />
            </div>
        <div className='my-auto'>
          <select name="" id="" onChange={filterData} className='p-1 px-2 shadow'>
            <option value="0">All</option>
            <option value="1">Pending</option>
            <option value="2">Sent</option>
          </select>
        </div>
      </div>
    <div className='grid mt-2 relative max-lg:grid-cols-2 max-md:grid-cols-1 px-3 grid-cols-3 gap-x-4 gap-y-3'>
        
        {
        error ?
          <div className='text-center w-full absolute text-lg'>{error}</div>  
        :
        loading ? 
          arr.map((data,ind) => <TopupSkeleton key={ind} />)  
        :
        filter == 1 ?
        requests.map((data,ind) => !data.transfered && <Request key={data._id} data={data} setReloadData={setReloadData} setAlerting={setAlerting} />)  
        :   
        filter == 2 ?
        requests.map((data,ind) => data.transfered && <Request key={data._id} data={data} setReloadData={setReloadData} setAlerting={setAlerting} />)  
        :
        requests.map((data,ind) => <Request key={data._id} data={data} setReloadData={setReloadData} setAlerting={setAlerting} />)  

        }
    </div>
    </div>
    
  )
}

export default Requests
import {useState,useEffect} from 'react'
import Topup from "../../common/components/topup"
import TopupSkeleton from '../../common/components/topups_skeleton'
import axios from '../../../core/hooks/axios'

const Topups = () => {
  
  const [topups,setTopups] = useState([])
  const [loading,setLoading] = useState(true)
  const [deleteTopup,setDeleteTopup] = useState(null)
  const [reloadData,setReloadData] = useState(false)
  const [currency,setCurrency] = useState(1)

  useEffect(() => { 
    async function fetch(){
      try{
        setLoading(true)
        const result = await axios.post("topup/gettopups/") 
        const data = await axios.post("setting/getcurrency")
        setTopups(result.data)
        setCurrency(data.data.currency)
      }catch(e){
        alert("error")
      }finally{
        setLoading(false)
      }
    }

    fetch()
  }, [reloadData])

  const arr = ['','','','','','','','','','','','','']
  return (
    <div className='grid max-lg:grid-cols-2 max-md:grid-cols-1 px-3 grid-cols-3 gap-x-4 gap-y-3'>
        {
          loading ? 
            arr.map((data,ind) => <TopupSkeleton key={ind} data={data} />)
          :
          topups.map((data,ind) => <Topup key={ind} data={data} currency={currency} />)
        }
        
    </div>
  )
}

export default Topups
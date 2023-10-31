import {useEffect,useState} from 'react'
import AdminTopup from "./admin_topup"
import TopupSkeleton from './topups_skeleton'
import axios from '../../../hooks/axios'
import DeleteTopup from "./deleteTopup"
import EditTopup from "./EditTopup"
import {RxReload as Reload } from "react-icons/rx"
import { useDispatch } from 'react-redux'
import { getCurrency,setCurrency } from '../../../../store/features/adminsettingslice/adminSettingSlice'

const AdminTopups = () => {
  const dispatch = useDispatch()
  const [topups,setTopups] = useState([])
  const [loading,setLoading] = useState(true)
  const [deleteTopup,setDeleteTopup] = useState(null)
  const [reloadData,setReloadData] = useState(false)
  const [showEditTopup,setShowEditTopup] = useState(null)

  useEffect(() => { 
    async function fetch(){
      try{
        setLoading(true)
        const result = await axios.post("topup/gettopups/") 
        const data = await axios.post("setting/getcurrency")
        dispatch(setCurrency(data.data))
        setTopups(result.data)
      }catch(e){
        console.log("someting happend",e)
      }finally{
        setLoading(false)
      }
    }

    fetch()
  }, [reloadData])
  
  const skeletons = ["","","","","","","","","","","","","","",""]
  

  return (
    <div className='grid max-lg:grid-cols-2 max-md:grid-cols-1 px-3 grid-cols-3 gap-x-4 gap-y-3'>
         <div></div>
         <div></div>
         <div className='flex flex-row-reverse '>
            <div onClick={() => setReloadData(data => !data)} className='flex mr-5 bg-white p-2 rounded-full cursor-pointer hover:shadow-xl' title='reload'>
              <Reload className='text-lg' />
            </div>
         </div>
         {deleteTopup && <DeleteTopup setReloadData={setReloadData} setDeleteTopup={setDeleteTopup} deleteTopup={deleteTopup} /> }
         {showEditTopup && <EditTopup showEditTopup={showEditTopup} setShowEditTopup={setShowEditTopup} />}
         {
          loading  ? 
          <>
          { skeletons.map((a,ind) => <TopupSkeleton key={ind} /> ) }
            </>
          : 
          topups.map((data,ind) => <AdminTopup data={data} key={ind}  setShowEditTopup={setShowEditTopup} setDeleteTopup={setDeleteTopup}/>)
        }
    </div>
  )
}

export default AdminTopups
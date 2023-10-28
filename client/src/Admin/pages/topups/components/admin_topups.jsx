import React from 'react'
import AdminTopup from "./admin_topup"
import TopupSkeleton from './topups_skeleton'

const AdminTopups = ({setShowEditTopup,setShowDeleteTopup}) => {
  return (
    <div className='grid max-lg:grid-cols-2 max-md:grid-cols-1 px-3 grid-cols-3 gap-x-4 gap-y-3'>
        <AdminTopup setShowEditTopup={setShowEditTopup} setShowDeleteTopup={setShowDeleteTopup}/>
        <AdminTopup setShowEditTopup={setShowEditTopup} setShowDeleteTopup={setShowDeleteTopup}/>
        <AdminTopup setShowEditTopup={setShowEditTopup} setShowDeleteTopup={setShowDeleteTopup}/>
        <AdminTopup setShowEditTopup={setShowEditTopup} setShowDeleteTopup={setShowDeleteTopup}/>
        <AdminTopup setShowEditTopup={setShowEditTopup} setShowDeleteTopup={setShowDeleteTopup}/>
        <AdminTopup setShowEditTopup={setShowEditTopup} setShowDeleteTopup={setShowDeleteTopup}/>
        <AdminTopup setShowEditTopup={setShowEditTopup} setShowDeleteTopup={setShowDeleteTopup}/>
        <AdminTopup setShowEditTopup={setShowEditTopup} setShowDeleteTopup={setShowDeleteTopup}/>

    </div>
  )
}

export default AdminTopups
import React from 'react'
import Topup from "./topup"
import TopupSkeleton from './topups_skeleton'

const Topups = () => {
  return (
    <div className='grid max-lg:grid-cols-2 max-md:grid-cols-1 px-3 grid-cols-3 gap-x-4 gap-y-3'>
        <Topup />
        <Topup />
        <Topup />
        <Topup />
        <Topup />
        <Topup />
        <Topup />
        <Topup />
        <Topup />
        <Topup />
        <Topup />
        {/* <TopupSkeleton />
        <TopupSkeleton />
        <TopupSkeleton />
        <TopupSkeleton />
        <TopupSkeleton />
        <TopupSkeleton />
        <TopupSkeleton /> */}
    </div>
  )
}

export default Topups
import React from 'react'
import Request from './request'

const Requests = ({setAlerting}) => {
  return (
    <div className='grid max-lg:grid-cols-2 max-md:grid-cols-1 px-3 grid-cols-3 gap-x-4 gap-y-3'>
        <Request setAlerting={setAlerting}/>
        <Request setAlerting={setAlerting}/>
        <Request setAlerting={setAlerting}/>
        <Request setAlerting={setAlerting}/>
        
        
    </div>
  )
}

export default Requests
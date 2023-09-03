import React from 'react'
import Box from './Box'

const Teams = () => {
  return (
    <div className='max-w-7xl mx-auto px-c14 max-sm:px-4 mt-12 mb-10 flex flex-col gap-7'>
        <h1 className='text-center text-lg font-bold text-redd uppercase'>Our teams</h1>
        <p className=' max-w-xl mx-auto text-center text-normal' >
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected humour,
        </p>
        <div className='grid grid-cols-3 gap-4 max-lg:grid-cols-2 w-full  max-sm:grid-cols-1'>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />

        </div>
    </div>
  )
}

export default Teams
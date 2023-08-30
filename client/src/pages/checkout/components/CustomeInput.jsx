import React from 'react'

const CustomeInput = ({type = "text",label,name,onChangeFunc}) => {
  return (
        <div className='flex flex-col w-full'>
            <label className='' htmlFor="">{label}</label>
            <input 
                type={type} 
                name={name}
                placeholder={label} 
                onChange={onChangeFunc}
                className='w-full focus:outline-none border border-gray-300 p-2 rounded-md' 
            />
        </div>
  )
}

export default CustomeInput
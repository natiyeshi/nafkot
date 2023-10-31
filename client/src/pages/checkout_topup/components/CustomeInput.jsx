import React from 'react'

const CustomeInput = ({type = "text",label,name,onChangeFunc,loading}) => {
  return (
        <div className='flex flex-col w-full duration-300 '>
            <label className='' htmlFor="">{label}</label>
            <input 
                disabled={loading}
                type={type} 
                name={name}
                placeholder={label} 
                onChange={onChangeFunc}
                className='w-full focus:outline-none border shadow disabled:bg-gray-200 border-gray-300 p-2 rounded-md' 
            />
        </div>
  )
}

export default CustomeInput
import React from 'react'
import {AiOutlineClose as Close} from "react-icons/ai";

const Error = ({err,setErr}) => {
    return (
        <div className={
            `mx-auto py-4  ${
                !err && "py-0 opacity-0"
            }   my-4 bg-orange-800 duration-300 w-1/3 rounded text-white flex justify-between`
        }>
            <p className='text-center w-full'>
                {err} </p>
            <div className='px-3'>
                <Close className='my-auto cursor-pointer '
                    onClick={
                        () => setErr()
                    }/>
            </div>
        </div>
    )
}

export default Error

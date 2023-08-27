import React, {useState} from 'react'
import Bar from "../common/Bar";
import Form from "./components/Form"
import Error from '../common/components/Error';
import {AiOutlineClose as Close} from "react-icons/ai";

const index = () => {
    const [remoteErr, setRemoteErr] = useState()
    return (
        <div className='flex  bg-blue-50 relative'>
            <Bar/>

            <div className='pt-4  basis-9/12 flex flex-col mb-4  w-full max-h-screen overflow-auto'>

                <div className={
                    `mx-auto py-4  ${
                        !remoteErr && "py-0 opacity-0"
                    }   my-4 bg-orange-800 duration-300 w-1/3 rounded text-white flex justify-between`
                }>
                    <p className='text-center w-full'>
                        {remoteErr} </p>
                    <div className='px-3'>
                        <Close className='my-auto cursor-pointer '
                            onClick={
                                () => setRemoteErr("")
                            }/>
                    </div>
                </div>
                <Form setRemoteErr={setRemoteErr}/>

            </div>

        </div>
    )
}

export default index

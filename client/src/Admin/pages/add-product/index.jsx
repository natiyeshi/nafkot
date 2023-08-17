import React from 'react'
import Bar from "../common/Bar";
import Form from "./components/From"

const index = () => {
    return (
        <div className='flex  bg-blue-50 '>
            <Bar/>

            <div className='pt-4  basis-9/12 flex flex-col  w-full max-h-screen overflow-auto'>

                     <Form />

            </div>

        </div>
    )
}

export default index

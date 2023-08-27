import React from 'react'
import gif from "../../../../assets/gif/Pulse-1s-200px.gif"

function Loading({loading,message}) {
  return (
    <div className={
        `absolute  ${
            loading ? "flex" : "hidden"
        } bg-black top-0 left-0 right-0 bottom-0 z-10 bg-opacity-95`
    }>
        <div className='m-auto justify-center flex flex-col'>
            <img src={gif}
                alt=""/>
            <h1 className='text-xl text-center text-white'>{message}</h1>
        </div>
    </div>
  )
}

export default Loading
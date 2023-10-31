import {useState,useEffect} from 'react'
import {AiOutlineClose as CloseIcon} from "react-icons/ai"
import css from "../css/message.module.css"

const Message = ({message,setAlerting}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
          setAlerting('');
        }, 4000);
        return () => {
          clearTimeout(timeout);
        };
    }, []);
    return (
        <div className={`absolute flex gap-2 mt-2 bg-redd px-3 py-2 rounded text-white ${css.message}`}>
            <div className=' flex-grow'>
                    {message}
            </div>
            <div className='my-auto cursor-pointer' onClick={()=>{
                setAlerting("");
            }}>
                <CloseIcon className='' />
            </div>
        </div>
    )
}

export default Message
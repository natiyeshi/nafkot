import React from 'react'
import Logo from "../assets/images/Vector (6).svg"
import Close from "../assets/images/Vector (7).svg"
import css from "./css/css.module.css"
import {useState} from 'react'
import {validateObject} from '../core/functions/common'

const Login = ({setLoginNow}) => {

    const initialData = {
        username: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialData)
    const [err, setErr] = useState("")

    const validateDate = () => {
        const result = validateObject(formData)
        if (!result[0]) {
            setErr(result[1])
            return false;
        }
        setErr("")
        return true;
    }


    const submit = () => {
        if(!validateDate()) return
    }

    const changeInput = ({target}) => {
        setFormData(data => ({
            ...data,
            [target.name]: target.value
        }))
    }


    return (
        <div className='fixed flex  w-screen h-screen  bg-gray-900 bg-opacity-90 top-0 z-10'>

            <div className={
                'm-auto w-1/3 max-lg:w-1/2 max-md:w-4/6 max-sm:w-11/12 h-4/6 p-3 bg-white ' + css.show
            }>

                <div className='flex justify-between p-5'>

                    <div className='grid gap-3 text-lg font-bold '>
                        <img src={Logo}
                            width={"30px"}
                            alt=""/>
                        Login
                    </div>

                    <div className=''
                        onClick={
                            () => {
                                setLoginNow(false)
                            }
                    }>
                        <img src={Close}
                            className='cursor-pointer duration-200 hover:rotate-90'
                            width={"15px"}
                            alt=""/>
                    </div>
                </div>

                <form className='ps-5 mt-2' onSubmit={(e) => e.preventDefault()}>
                    <p className='text-redd font-semibold'>
                        {err}</p>

                    <div className='flex flex-col mt-4 gap-1'>
                        <label htmlFor="" className='font-semibold text-[17px]'>
                            username
                        </label>
                        <input type="text"
                            value={
                                formData.username
                            }
                            onChange={changeInput}
                            name='username'
                            className='w-10/12 focus:outline-none border border-gray-300 p-2 rounded-md'
                            placeholder='example@gmail.com'/>
                    </div>

                    <div className='flex flex-col mt-4 gap-1'>
                        <label htmlFor="" className='font-semibold text-[17px]'>
                            Password
                        </label>
                        <input type="password"
                            value={
                                formData.password
                            }
                            onChange={changeInput}
                            name='password'
                            className='w-10/12 focus:outline-none border border-gray-300 p-2 rounded-md'
                            placeholder='password'/>
                    </div>

                    <button onClick={submit} className='mt-4 px-8 py-1.5 hover:bg-red-400 font-semibold bg-redd text-white '
                        style={
                            {borderRadius: "5px"}
                    }>
                        Login
                    </button>


                </form>


            </div>
        </div>
    )
}

export default Login

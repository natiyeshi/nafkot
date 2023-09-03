import React from 'react'
import Logo from "../assets/images/Vector (6).svg"
import Close from "../assets/images/Vector (7).svg"
import css from "./css/css.module.css"
import {useState} from 'react'
import { validateObject } from '../core/functions/common'
import axios from "../core/hooks/axios"
import { useDispatch } from 'react-redux'
import { loginUser,logoutUser } from '../store/features/userSlice/userSlice'
import gif  from "../assets/gif/rotatebg.gif"

const Register = ({setRegisterNow}) => {
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)
    const initialData = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirm: ""
    }
    const [formData, setFormData] = useState(initialData)
    const [err, setErr] = useState("")

    const changeInput = ({target}) => {
        setFormData(data => ({
            ...data,
            [target.name]: target.value
        }))
    }

    const validateForm = () => {
        const result = validateObject(formData)
        if(!result[0]){
            setErr(result[1])
            return false
        }
        if(formData.password !== formData.confirm){
            setErr("incorrect confirm password")
            return false
        } 
        setErr("")
        return true
    }

    const submit = async () =>  {
        if(!validateForm()) return
        try{
            setLoading(true)
            let data = {...formData}
            delete data.confirm
            const res = await axios.post("/auth/registeruser",data)
            const response = res.data
            dispatch(loginUser(response))
            setRegisterNow(false)
        }catch(err){
            setLoading(false)
            setErr(err.response?.data?.error?.message || err.message)
        }
    }

    return (
        <div className='fixed flex  w-full h-full bg-gray-900 bg-opacity-90 top-0 z-10'>

            <div className={
                'mx-auto relative max-lg:w-1/2 max-md:w-4/6 max-sm:w-full max-sm:h-full w-1/3 my-2 overflow-auto rounded p-3 bg-white ' + css.show
            }>  
                <div className={`bg-gray-100 duration-700 ${loading ? "bg-opacity-60"  :"hidden"  } flex justify-center items-center absolute left-0 right-0 top-0 bottom-0`}>
                    <img src={gif} className='w-1/4' alt="" />
                </div>

                <div className='flex justify-between p-5'>

                    <div className='grid gap-3 text-lg font-bold '>
                        <img src={Logo}
                            width={"30px"}
                            alt=""/>
                        Register
                    </div>

                    <div className=''
                        onClick={
                            () => {
                                setRegisterNow(false)
                            }
                    }>
                        <img src={Close}
                            width={"15px"}
                            alt=""
                            className='cursor-pointer duration-200 hover:rotate-90'/>
                    </div>
                </div>

                <form className='ps-5 my-1' onSubmit={(e) => e.preventDefault()}>
                    <p className='text-redd font-semibold mb-2'>{err}</p>
                    
                    <div className='flex w-10/12 gap-3'>

                        <div className='flex flex-col  gap-1'>
                            <label htmlFor="" className='font-bold'>First Name</label>
                            <input type="text" name='firstName'
                                value={
                                    formData.firstName
                                }
                                onChange={changeInput}
                                className='w-full focus:outline-none border border-gray-300 p-2 rounded-md'
                                placeholder='username'/>
                        </div>

                        <div className='flex flex-col  gap-1'>
                            <label htmlFor="" className='font-bold'>Last Name</label>
                            <input type="text" name='lastName'
                                value={
                                    formData.lastName
                                }
                                onChange={changeInput}
                                className='w-full focus:outline-none border border-gray-300 p-2 rounded-md'
                                placeholder='username'/>
                        </div>
                    </div>


                    <div className='flex flex-col mt-4 gap-1'>
                        <label htmlFor="" className='font-bold'>Email</label>
                        <input type="text" name="email"
                            onChange={changeInput}
                            value={
                                formData.email
                            }
                            className='w-10/12 focus:outline-none border border-gray-300 p-2 rounded-md'
                            placeholder='example@gmail.com'/>
                    </div>

                    <div className='flex flex-col mt-4 gap-1'>
                        <label htmlFor="" className='font-bold'>Phone</label>
                        <input type="number" name='phoneNumber'
                            onChange={changeInput}
                            value={
                                formData.phoneNumber
                            }
                            className='w-10/12 focus:outline-none border border-gray-300 p-2 rounded-md'
                            placeholder='example@gmail.com'/>
                    </div>

                    <div className='flex flex-col mt-4 gap-1'>
                        <label htmlFor="" className='font-bold'>Password</label>
                        <input type="password" name='password'
                            onChange={changeInput}
                            value={
                                formData.password
                            }
                            className='w-10/12 focus:outline-none border border-gray-300 p-2 rounded-md'
                            placeholder='password'/>
                    </div>

                    <div className='flex flex-col mt-4 gap-1'>
                        <label htmlFor="" className='font-bold'>Confirm</label>
                        <input type="password" name='confirm'
                            onChange={changeInput}
                            value={
                                formData.confirm
                            }
                            className='w-10/12 focus:outline-none border border-gray-300 p-2 rounded-md'
                            placeholder='confirm'/>
                    </div>

                    <button 
                        onClick={submit}
                        className='mt-4 px-8 hover:bg-red-400 py-1.5 bg-redd text-white '
                        style={
                            {borderRadius: "5px"}
                    }>
                        Register
                    </button>


                </form>


            </div>
        </div>
    )
}

export default Register

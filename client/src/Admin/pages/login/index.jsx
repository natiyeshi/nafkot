import {useState} from 'react'
import Logo from "../../../assets/images/Vector (6).svg"
import Close from "../../../assets/images/Vector (7).svg"
import axios from '../../hooks/axios'
import { validateObject } from '../../../core/functions/common'
import gif  from "../../../assets/gif/rotatebg.gif"
import { useNavigate } from 'react-router-dom'

const index = () => {
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)

    const initialData = {
        username: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialData)
    const [err, setErr] = useState("")

    const validateDate = () => {
        console.log(formData)
        const result = validateObject(formData)
        if (!result[0]) {
            setErr(result[1])
            return false;
        }
        setErr("")
        return true;
    }


    const submit = async () => {
        if(!validateDate()) return
        try{
            setLoading(true)
            const res = await axios.post("/admin/loginadmin",formData)
            const response = res.data
            setLoading(false)
            setErr("")
            navigate("/admin/products")
        }catch(err){
            setLoading(false)
            console.log(err)
            setErr(err.response?.data?.error?.message || err.message)
        }
    }

    const changeInput = ({target}) => {
        setFormData(data => ({
            ...data,
            [target.name]: target.value
        }))
    }

  return (
    <div className='flex w-screen h-screen  bg-white bg-opacity-90 top-0 z-10'>
        
        <div className={'m-auto border-2 rounded  w-1/3 max-lg:w-1/2  max-md:w-4/6 max-sm:w-11/12 h-4/6 p-3 bg-whit '}>
            <div className={`bg-gray-100 duration-700 ${loading ? "bg-opacity-60"  :"hidden"  } flex justify-center items-center absolute left-0 right-0 top-0 bottom-0`}>
                <img src={gif} className='w-[100px]' alt="" />
            </div>
            
            <div className='flex justify-between p-5'>
                
                <div className='grid gap-3 text-lg font-bold '>
                    <img src={Logo} width={"30px"} alt="" />
                    Admin Login
                </div>

            </div>

            <form className='ps-5 mt-0' onSubmit={e => e.preventDefault()}>
                <p className={`text-redd font-semibold ${err == "" && "h-4"}`}>{err}</p>
                <div className='flex flex-col mt-2 gap-1'>
                    <label htmlFor="" className='font-semibold' style={{fontSize:"17px"}}>Username</label>
                    <input type="text"
                            value={
                                formData.username
                            }
                            onChange={changeInput}
                            name='username'
                            className='w-10/12 focus:outline-none border border-gray-300 p-2 rounded-md'
                            placeholder='username'
                        />
                </div>

                <div className='flex flex-col mt-4 gap-1'>
                    <label htmlFor="" className='font-semibold' style={{fontSize:"17px"}}>Password</label>
                    <input type="password"
                            value={
                                formData.password
                            }
                            onChange={changeInput}
                            name='password'
                            className='w-10/12 focus:outline-none border border-gray-300 p-2 rounded-md'
                            placeholder='password'
                    />
             </div>

                <button onClick={submit} className='mt-4 px-8 py-1.5 hover:bg-red-400 font-semibold bg-redd text-white ' style={{borderRadius:"5px"}}>
                    Login
                </button>



            </form>

            

        </div>
    </div>
  )
}

export default index
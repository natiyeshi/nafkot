import {useEffect, useState} from 'react'
import CustomeInput from './CustomeInput'
import { useSelector } from 'react-redux'
import axios from '../../../core/hooks/axios'
import { useNavigate, useParams } from 'react-router-dom'
import gif from "../../../assets/gif/run.gif"

const FormDiv = () => {
    const navitator = useNavigate()
    const { id }= useParams()
    const [setting,setSetting] = useState(null)
    const [loading,setLoading] = useState(false)
    const [failed,setFailed] = useState(false)
    const [card,setCard] = useState(null)

    const intialFormData = {
      senderFullName : "",senderEmail : "",
      receiverFullName : "" , 
      receiverPhoneNumber : "", receiverPhoneNumber2 : ""
    }

    const [formData,setFormData] = useState(intialFormData) 
    const [err,setErr] = useState("")
    const onChangeFunc = ({target}) => {
        setFormData(data => ({...data,[target.name]: target.value}))
    }
    
    const submit = () => {
        console.log(formData)
        for(let i in formData){
            if(typeof formData[i] == "string" && formData[i].length < 3){
                setErr(`${i} should be at least 3 letter`)
                return
            } 
            if(typeof formData[i] == "number" && formData[i] <= 0){
                setErr(` invalid ${i} `)
                return
            } 
        }
        setErr("")
        sendData(formData)
    }

    const sendData  = async (data) => {
        try{
            setLoading(true)
            data.amount = card.amount
            data.id = id
            const result = await axios.post("/transaction/checkout-session-topup",data)
            const url = result.data.url
            setLoading(false)
            window.location.href = url

        }catch(e){
            setLoading(false)
            setErr(e.response.data?.error?.message || "something goes wrong")
        }
    }

    useEffect(()=>{
        async function fetch(){
            try{
                const response = await axios.post("/topup/gettopupcurrency/"+id)
                setSetting(response.data.setting)
                setCard(response.data.topup)
            }catch(err){
                const AE = err.response?.data?.error.message
                setErr( AE ? AE : err.message)
                alert("something goes wrong! Reload")
                setFailed(true)
            }finally{
                setLoading(false)
            }
        }
        fetch()
    },[])

    return (
        <form className=' px-4 '
            onSubmit={
                (e) => e.preventDefault()
        }>

            <div className='ps-4 text-red-500 font-semibold my-2 mt-3'>

                {err}

            </div>

            <div className='flex gap-10  max-md:gap-3 max-md:flex-col ps-4 py-2 justify-around '>
                <div className='bg-gray-200 py-2 ps-1 rounded text-center font-semibold basis-1/2'>
                    {card?.amount} birr card
                   
                </div>
                <div className='bg-gray-200 py-2 ps-1 rounded text-center font-semibold basis-1/2'>
                    total ${(card?.amount / setting?.currency).toFixed(2)}  
                </div>
            </div>
            <div className='flex gap-10 max-md:gap-3 max-md:flex-col ps-4 py-2 justify-around '>
                <CustomeInput
                    loading={loading}
                    name={"senderFullName"}
                    label={"Full Name"}
                    onChangeFunc={onChangeFunc}
                />
            </div>

            <div className='flex max-md:gap-3 max-md:flex-col ps-4 py-2 justify-around gap-10'>
                <CustomeInput
                    loading={loading}
                    name={"senderEmail"}
                    label={"Email"}
                    onChangeFunc={onChangeFunc}
                />
            </div>


            <div className='flex max-md:gap-3 max-md:flex-col ps-4 py-2 justify-around gap-10'>
                <CustomeInput
                    loading={loading}
                    name={"receiverFullName"}
                    label={"Receiver Full Name"}
                    onChangeFunc={onChangeFunc}
                />
            </div>

            <div className='flex max-md:gap-3 max-md:flex-col ps-4 py-2 justify-around gap-10'>

                <CustomeInput
                    loading={loading}
                    name={"receiverPhoneNumber"}
                    label={"Receiver Phone Number"}
                    onChangeFunc={onChangeFunc}
                />
                <CustomeInput
                    loading={loading}
                    name={"receiverPhoneNumber2"}
                    label={"Receiver Phone Number 2"}
                    onChangeFunc={onChangeFunc}
                />

            </div>


           
            <div className="text-center  my-10 ">
                {
                failed ?
                <></>
                :
                loading  ?
                <button className='bg-gray-100 flex mx-auto gap-3 justify-between cursor-wait px-4 rounded text-white font-bold te py-2'>
                    <div className='text-gray-900 '>Loading...</div>
                    <img src={gif} width={20} alt="" />
                </button> 
                : 
                <button onClick={submit} className='bg-redd px-8 rounded text-white font-bold te py-2'>
                    Place order
                </button>
                }
               
            </div>



        </form>

    )
}

export default FormDiv

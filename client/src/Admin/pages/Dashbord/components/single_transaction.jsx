import React, { useEffect, useState } from 'react'
import axios  from '../../../hooks/axios'
import Skeleton from 'react-loading-skeleton'
import "../css/css.css"
const SingleTransaction = ({data,curr,ind,changeCurrent}) => {

    const [loading,setLoading] = useState(true) 
    const [detail,setDetail] = useState([]) 
    const [error,setError] = useState(null) 
    useEffect(()=>{
      const fetch = async () =>{
        try{
          const response = await axios.post("transaction/getitemstransactionlist/"+data.id)
          setDetail(response.data)
          console.log(response.data)
        }catch(err){
          const AE = err.response?.data?.error.message
          setError( AE ? AE : err.message)
        }finally{
          setLoading(false)
        }
      }
      if(curr == ind){
        fetch()
      } else{
        setLoading(true)
        setDetail([])
        setError(null)
      }
    },[curr])
    

   

  return (
    <>
    <tr onClick={() => changeCurrent(ind)}  className='hover:bg-slate-900   duration-300 cursor-pointer'>
      <td className="capitalize border border-gray-700 py-4 px-6 whitespace-nowrap">{ind + 1}</td>
      <td className="capitalize border border-gray-700 py-4 px-6 whitespace-nowrap">{data.senderFirstName}</td>
      <td className="capitalize border border-gray-700 py-4 px-6 whitespace-nowrap">{data.senderLastName}</td>
      <td className="capitalize border border-gray-700 py-4 px-6 whitespace-nowrap">{data.reciverFirstName}</td>
      <td className="capitalize border border-gray-700 py-4 px-6 whitespace-nowrap">{data.reciverLastName}</td>
      <td className="capitalize border border-gray-700 py-4 px-6 whitespace-nowrap">{data.message}</td>
      <td className="capitalize border border-gray-700 py-4 px-6 whitespace-nowrap">${(data.totalPrice / 100).toLocaleString()}</td>
  </tr>
  <tr className={ind == curr ? '' : 'hidden'}>
    <td colSpan={7} className='bg-slate-700 text- p-2' > 

   
      <div className='m-2 '>
        <div className='font-bold text-lg my-4'>Transaction Detail</div> 
        <div className='flex my-3'>
          
          <div className='grid grid-cols-2 w-2/3 capitalize  '>
            <div className='flex flex-col gap-1'>
              <p>sender full name</p>
              <p>sender email</p>
              <p>receiver full name</p>
            </div>
            <div className='font-semibold flex flex-col gap-1'>
              <p>{data.senderFirstName + " " +data.senderLastName}</p>
              <p>{data.senderEmail}</p>
              <p>{data.reciverFirstName + " " +data.reciverLastName}</p>
            </div>
        </div>
        <div className='grid grid-cols-2 w-2/3 capitalize '>
            <div className='flex flex-col gap-1'>
              <p>receiver phone number 1</p>
              <p>receiver phone number 2</p>
              <p>total price</p>
            </div>
            <div className='font-semibold flex flex-col gap-1'>
              <p>{data.reciverPhoneNumber}</p>
              <p>{data.reciverPhoneNumber2}</p>
              <p>${(data.totalPrice / 100).toLocaleString()}</p>
            </div>
        </div>
      </div>
      <div className='mt-2'>
        <div className='font-bold text-lg my-2'>Products</div> 
      {
      loading  ? 
      <div className='flex gap-4'>
          <Skeleton duration={1.5} width={""}  containerClassName='flex-1' className="bg-redd" highlightColor='rgb(30 40 59)' baseColor='rgb(71 85 105)' height={"200px"} borderRadius={"10px"}></Skeleton>
          <Skeleton duration={1.5} width={""}  containerClassName='flex-1' className="bg-redd" highlightColor='rgb(30 40 59)' baseColor='rgb(71 85 105)' height={"200px"} borderRadius={"10px"}></Skeleton>
          <Skeleton duration={1.5} width={""}  containerClassName='flex-1' className="bg-redd" highlightColor='rgb(30 40 59)' baseColor='rgb(71 85 105)' height={"200px"} borderRadius={"10px"}></Skeleton>
          <Skeleton duration={1.5} width={""}  containerClassName='flex-1' className="bg-redd" highlightColor='rgb(30 40 59)' baseColor='rgb(71 85 105)' height={"200px"} borderRadius={"10px"}></Skeleton>

      </div>
      :
      error ? 
      <div className='bg-red-200 text-red-900 ps-2 rounded-lg p-2 w-fit font-bold'> 
          {error}
      </div>:
        <div className={'overflow-x-scroll text-slate-700 w-[70em] px-2 mb-2 flex gap-5 sc'}>
          {
            detail.map((product,ind)=>{
              return product.map((order,ind)=>{
                return (
                  <div className='bg-slate-600 text-white w-[18em] shadow-lg px-2 py-2 rounded flex-shrink-0  '>
                    <div className='text-lg uppercase py-2'>{order.title}</div>
                    <div className='flex gap-3'>
                      <div>Price</div>
                      <div className='font-semibold'>${order.price}</div>
                    </div> 
                    <div className={'flex flex-col gap-2 mt-1  overflow-auto '}>
                      {
                        order.items.map((item,ind)=>{
                          return (
                          <div className='bg-slate-700 p-1 rounded-lg flex gap-3'>
                            <div className='relative h-[50px] w-[50px]  '>
                              <img src={item.img} alt="" className='absolute rounded-full object-cover w-full h-full ' loading='lazy' />
                          </div>
                            <div className='my-auto'>
                              <div className='font-semibold'>{item.name}</div>
                              <div>Amount {item.amount}</div>
                            </div>
                          </div>) 
                        })
                      }
                    </div>
                </div>
                )
              })
              
            })
          }
            

        </div>
      }
        

        </div>
      </div>
   
    </td>
  </tr>
  </>
  )
}

export default SingleTransaction
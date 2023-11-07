import React, { useEffect, useState } from 'react'
import axios from '../../../hooks/axios';
import SingleTransaction from './single_transaction';
import Skeleton from 'react-loading-skeleton';

const ProductTransaction = () => {
   const [orders,setOrders] = useState([])
   const [loading,setLoading] = useState(true)
   const [total,setTotal] = useState(0)
   const [curr,setCurr] = useState(-1)

  const changeCurrent  = (ind) => {
    setCurr(curr => {
      if (curr == ind){
        return -1;
      }
      return ind;
    })
  }

   useEffect(()=>{
    const fetch = async () =>{
      try{
        const response = await axios.post("/transaction/getallitemstransaction")
        let val = 0
        response.data.map((data,ind) => {
          val = val + (data.totalPrice / 100)
        })
        setTotal(val)
        setOrders(response.data)
      }catch(e){
        console.log(e)
        alert("something goes wrong")
      }finally{
        setLoading(false)
      }
    }
    fetch()
   },[])
    
      
        return (
          <div>
                <div className="mt-2 overflow-x-auto duration-300">
                    <h2 className='text-xl font-semibold my-4'>Product Transaction</h2>
                    <table className="min-w-full rounded-lg bg-slate-800 text-white divide-y divide-gray-200">
                      <thead className="bg-slate-700 text-white">
                        <tr className='uppercase text-xs'>
                          <th className="py-3 px-6 text-left  font-medium  tracking-wider">Sender First Name</th>
                          <th className="py-3 px-6 text-left  font-medium  tracking-wider">Sender Last Name</th>
                          <th className="py-3 px-6 text-left  font-medium  tracking-wider">Receiver First Name</th>
                          <th className="py-3 px-6 text-left  font-medium  tracking-wider">Receiver Last Name</th>
                          <th className="py-3 px-6 text-left  font-medium  tracking-wider">Message</th>
                          <th className="py-3 px-6 text-left  font-medium  tracking-wider">Total Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {loading ? 
                        <tr>
                          <td colSpan={7} className='p-1'>
                            <Skeleton count={4} className="bg-redd" highlightColor='rgb(30 41 59)' baseColor='rgb(51 65 85)' height={"50px"}></Skeleton>
                          </td>
                        </tr> : orders.map((data,ind) => {
                          return (
                            <SingleTransaction  data={data} ind={ind} changeCurrent={changeCurrent} curr={curr} />
                          )
                        })} 
                        
                      
                      </tbody>
            </table>

            </div>
            <div className='bt-red'>
                <h1 className='my-3 font-bold text-lg'>Transactions</h1>
                <p>Money builds business</p>
                <div className='relative bg-slate-800 flex pt-12 gap-6 text-white w-2/5 px-8 py-4 rounded-lg mt-3 text-lg'>
                    <h1 className='left-0 -top-3 px-3 py-2 shadow-lg  rounded-tl-lg  rounded-br-lg text-xs my-3 bg-redd absolute' >in 3 months</h1>
                    <p className='text-sm'> <b className='text-2xl font-extrabold '>{orders.length}</b>  Transactions </p>
                    <p className='text-sm'> <b className='text-2xl font-extrabold'>{Math.max(1,orders.length - 2)}+ </b>  Customers </p>
                    <p className='text-sm'> <b className='text-2xl font-extrabold'>${total}</b>  income </p>
                </div>
            </div>
          </div>
        );
}

export default ProductTransaction


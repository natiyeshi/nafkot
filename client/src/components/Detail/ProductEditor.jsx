import React,{useState} from 'react'
import {BiLeftArrowAlt as LeftArrow} from "react-icons/bi"
import {BiRightArrowAlt as RightArrow} from "react-icons/bi"
import {AiOutlineCheck as Check} from "react-icons/ai"
import Img1 from "../../assets/Rectangle 1 (2).png"
import Img2 from "../../assets/Rectangle 1 (3).png"
import Img3 from "../../assets/Rectangle 1 (4).png"
import Img4 from "../../assets/Rectangle 1 (5).png"
import Img5 from "../../assets/Rectangle 1 (6).png"
import plus from "../../assets/faq plus (1).svg"
import minus from "../../assets/faq minus.svg"

const productEdit = () => {
  const images = [Img1,Img2,Img3,Img4,Img5]
  const [curr,setCurr] = useState(0)
  
  const changeImg = tar =>{
    if(curr + tar > -1 && curr + tar < images.length){
      setCurr(curr + tar)
    }
  }
  var pad = images.length > 4 ? parseInt((images).length - 4) * 115 + 120 : 100
  pad = images.length < 4 ? 0 : pad

  return (
    <div className='grid grid-cols-2 max-md:grid-cols-1 max-md:px-4 px-c14 h-scree select-none h-sreen mt-14 gap-5'>
       
        <div className='  flex  flex-col gap-6'>
          <div className='relative shower bg--300 flex w-full  gap-3 '>
                <LeftArrow onClick={() => changeImg(-1)} className='absolute cursor-pointer text-3xl top-1/2 left-2 bg-white bg-opacity-60 hover:bg-opacity-100 transform duration-500 text-redd rounded-full '/>
                <img src={images[curr]}  className='mx-auto rounded w-full' alt="" />
                <RightArrow onClick={() => changeImg(1)} className='absolute cursor-pointer right-2 text-3xl top-1/2  text-redd bg-white bg-opacity-60 hover:bg-opacity-100 transform duration-500 rounded-full '/>
          </div>
          <div className='flex w-full overflow-x-scroll gap-5 mb-3 justify-center' >
              <div style={{minWidth:pad+"px"}} className=''></div>

              {images.map((data,i) =>
                 <img 
                 onClick={() => setCurr(i)} src={data} width={"110px"} className='rounded cursor-pointer' alt="" />
              )}

              <div className='w-98'></div>
          </div>

        </div>

        <div className='bg-green-00 md:ms-14 flex flex-col gap-3 '>
              <h3 className='text-2xl font-bold'>Ultimate holiday package</h3>
              <div className='mt-5 text-large'>
                <div className='flex gap-3 relative '> 
                  <Check className='mt-1' />
                   Fără zahăr adăugat,
                </div>
                <div className='flex gap-3 relative '>
                  <Check className='mt-1' />
                  Lapte de migdale prepara
                </div>
                <div className='flex gap-3 relative '>
                  <Check className='mt-1' />
                  Livrare la rece în toată
                </div>
                <div className='flex gap-3 relative '>
                  <Check className='mt-1' />
                  Livrare la rece
                 </div>
                <div className='flex gap-3 relative '>
                  <Check className='mt-1' />
                  Livrareasd redasce înads toată
                </div>

              </div>
              <div className='flex gap-5 mt-5'>
                <img src={minus} className='cursor-pointer' alt="" />
                <div className='text-xl font-semibold'>1</div>
                <img src={plus} className='cursor-pointer' alt="" />
                <div className='text-large'><span className='text-xl font-semibold'>$400</span> <span>inc</span> Vat </div>
              </div>

              <div className='flex max-lg:flex-col max-lg:gap-2  gap-5 mt-6'>
                <button className='bg-blue-600 py-2 px-7 font-semibold text-large duration-100 hover:bg-blue-400 rounded text-white'>Go to cart</button>
                <button className='bg-redd py-2 px-7  font-semibold  text-large duration-100 hover:bg-red-400 rounded text-white'>Add to cart</button>
              </div>

        </div>
    </div>
  )
}

export default productEdit
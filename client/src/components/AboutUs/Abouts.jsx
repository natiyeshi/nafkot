import React from 'react'
import Image from "../../assets/Asset 10@4x 1.svg"
import Svg from "../../assets/Vector (9).svg"
import css from "./css/abouts.module.css"

const about = () => {
  return (
    <div className='relative px-c14 max-md:px-4'>
        
        <img src={Svg} alt="" className={'absolute -left-52 -top-60 -z-50 max-lg:hidden '+css.slide} />

        <div className='flex flex-col gap-3 mt-12 t'>

          <h1 className=' text-center text-lg text-redd font-semibold  '>ABOUT US</h1>
          <p className={' text-center max-w-xl mx-auto '} >
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum is sLorem Ipsum is simply 
            dummy text of the printing and typesetting industry. Lorem Ipsum is
             sLorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum is s
          </p>

        </div>

        <div className='flex gap-5 mt-16 max-md:grid'>
          <div className='bg-white '>
            <img src={Image} width={"55%"} className={'mx-auto max-md:w-1/3 max-sm:w-1/2 '+css.rotatePic} alt="" />
          </div>
          
          <div className='w-1/2 max-md:w-full mt-3 flex flex-col gap-5 '>
             <h1 className='text-lg  text-redd  text-center font-semibold'>WHO WE ARE ?</h1>
             <p className='max-md:max-w-xl mx-auto max-md:text-center w-full'>
                Lorem*4It is a long established fact that a reade
                r will be dis versions have evolved over the years, sometimes 
                by accident, sometimes on purp4It is a long
                established fact that a reade is a long established fact that a reade
             </p>
             <button className='bg-redd hover:bg-red-400 duration-100 w-fit py-2 px-6 font-semibold text-white mx-auto' style={{borderRadius:"5px"}}>
              Contact us
             </button>
          </div>

        </div>

    </div>
  )
}

export default about
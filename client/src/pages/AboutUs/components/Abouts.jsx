import React from 'react'
import Image from "../../../assets/images/Asset 10@4x 1.svg"
import Svg from "../../../assets/images/Vector (9).svg"
import css from "../css/abouts.module.css"

const about = () => {
  return (
    <div className='relative px-c14 max-md:px-4 max-w-7xl mx-auto '>
        
        <img src={Svg} alt="" className={'absolute -left-52 -top-60 -z-50 max-lg:hidden '+css.slide} />

        <div className='flex flex-col gap-3 mt-12 t'>

          <h1 className=' text-center text-lg text-redd font-semibold  '>ABOUT US</h1>
          <p className={' text-center max-w-xl mx-auto '} >
          Welcome to Nafkot, the ultimate destination for authentic Ethiopian gifts and souvenirs.
           At Nafkot, we are passionate about 
          bringing Ethiopians together and connecting them with their homeland,
           no matter where they are in the world.
          </p>

        </div>

        <div className='flex gap-5 mt-16 max-md:grid'>
          <div className='bg-white '>
            <img src={Image} width={"55%"} className={'mx-auto max-md:w-1/3 max-sm:w-1/2 '+css.rotatePic} alt="" />
          </div>
          
          <div className='w-1/2 max-md:w-full mt-3 flex flex-col gap-5 '>
             <h1 className='text-lg  text-redd  text-center font-semibold'>WHO WE ARE ?</h1>
             <p className='max-md:max-w-xl  mx-auto max-md:text-center w-full'>
             Our story began with a simple idea – to create a brand that celebrates the rich and vibrant culture of Ethiopia and connects Ethiopians across the globe. As a team of young and talented individuals, we understand the importance of staying connected with your roots and your loved ones, no matter where life takes you.

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
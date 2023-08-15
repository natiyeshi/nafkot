import React from 'react'
import aboutImg from "../../../assets/images/Asset 10@4x 1.png"
import Logo from "../../../assets/images/Layer 2.png"

const About = () => {
    return (
        <div className='flex flex-col'>
            <div className="w-c72 max-w-[1000px] mx-auto flex gap-10 mt-6 max-lg:flex-col max-lg:w-11/12    ">

                <img src={aboutImg}
                    className='w-1/2 max-w-[500px] mx-0 max-lg:m-auto  max-md:m-0 max-lg:w-full'
                    alt=""
                    loading='lazy'/>

                <div className='w-1/2 max-lg:w-full flex flex-col my-auto gap-5 max-lg:m-auto'>
                    <h4 className='font-bold text-xl '>CONNECTING OUR PEOPLE ACROSS THE WORLD</h4>
                    <p className=' font-medium'>
                        The diagram shows the population of Ethiopian people living across the world.
                                         Ethiopians are usually known, amongst each other, to be living across
                                         all over the world.  Nafkot's goal is to connect all these foreign living
                                          Ethiopians with their home land, with the people they love and cherish most.
                    </p>
                </div>

            </div>

            <div className='py-3 px-c14 max-lg:px-3 w-full flex mt-16 bg-gray-100 justify-around place-items-center max-lg:flex-col'>


                    <div className='text-lg  font-semibold w-5/12 max-lg:text-center max-lg:w-full '>
                        WHAT WE SERVE
                    </div>

                    <div className='grid font-medium max-[350px]:grid-cols-1 grid-cols-4 max-lg:mt-8 max-lg:grid-cols-2 max-lg:gap-5  w-full justify-between grow flex-wrap'>

                        <div className='flex gap-2 max-lg:justify-center'>
                            <img src={Logo}
                                className='w-[25px] h-[25px]'
                                alt=""
                                loading='lazy'/>
                            <p className='my-auto'>Fast, Free Delivery</p>
                        </div>

                        <div className='flex gap-2  max-lg:justify-center'>
                            <img src={Logo}
                                className='w-[25px] h-[25px]'
                                alt=""
                                loading='lazy'/>
                            <p className='my-auto'>Fast, Free Delivery</p>
                        </div>
                        <div className='flex gap-2  max-lg:justify-center'>
                            <img src={Logo}
                                className='w-[25px] h-[25px]'
                                alt=""
                                loading='lazy'/>
                            <p className='my-auto'>Fast, Free Delivery</p>
                        </div>
                        <div className='flex gap-2  max-lg:justify-center'>
                            <img src={Logo}
                                className='w-[25px] h-[25px]'
                                alt=""
                                loading='lazy'/>
                            <p className='my-auto'>Fast, Free Delivery</p>
                        </div>

                    </div>

                </div>


        </div>
    )
}

export default About

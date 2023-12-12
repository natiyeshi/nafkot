import React,{useEffect, useState} from 'react'
import {BiLeftArrowAlt as LeftArrow} from "react-icons/bi"
import {BiRightArrowAlt as RightArrow} from "react-icons/bi"
import {AiOutlineCheck as Check} from "react-icons/ai"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import plus from "../../../assets/images/faq plus (1).svg"
import minus from "../../../assets/images/faq minus.svg"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCart,addToCart,increaseAmount,decreaseAmount,getSingleCart } from '../../../store/features/cartslice/cartSlice'
import "../css/abcd.css"

const productEdit = ({ProductData}) => {

  if(ProductData == undefined) return

  const dispatch = useDispatch()

  const cart= useSelector(state => getSingleCart(state,ProductData._id))
  
  const increaseAmt = () => dispatch(increaseAmount(ProductData._id))
  const decreaseAmt = () => dispatch(decreaseAmount(ProductData._id))

  const toCart = () => {
      dispatch(addToCart(ProductData))
  }


  const productItems = ProductData.items
  
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });
  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    adaptiveHeight: true,
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-fokr',
    dots: false,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: true,
    adaptiveHeight: true,
    
  };

  
  return (
    <div className='grid grid-cols-2 max-w-7xl m-auto max-md:grid-cols-1 max-md:px-4 px-c14 h-scree select-none h-sreen mt-14 gap-5'>
       
        <div className='flex  flex-col gap-6 '>
          <div className="App">
                <div className="slider-wrapper">
                  <Slider
                        {...settingsMain}
                        asNavFor={nav2}
                        ref={slider => (setSlider1(slider))}
                    >
                    {productItems.map((data) =>
                      <img className="slick-slide-image rounded"  src={`${data.img}`} />
                    )}

                  </Slider>
                  <div className="thumbnail-slider-wrap ">
                    <Slider
                      {...settingsThumbs}
                      asNavFor={nav1}
                      ref={slider => (setSlider2(slider))}
                    >

                      {productItems.map((data,ind) =>
                        <img key={ind} className="slick-slide-image p-2 rounded-xl"  src={`${data.img}`} />
                      )}

                    </Slider>
                  </div>
                </div>

                </div>
        </div>

        <div className='bg-green-00 md:ms-14 flex flex-col gap-3 '>
              <h3 className='text-2xl font-bold capitalize'>{ProductData.title}</h3>
              <div className='mt-5 text-large'>
                {
                  productItems.map((data,i)=>(
                    <div key={i} className='flex gap-3 relative '> 
                      <Check className='mt-1' />
                      {data.name}
                    </div>
                  ))
                  
                }

              </div>
              { cart !== undefined &&
                <div className='flex gap-5 mt-5'>
                  <img  onClick={decreaseAmt} src={minus} className='cursor-pointer' alt="" />
                  <div className='text-xl font-semibold'>{cart.amount}</div>
                  <img onClick={increaseAmt} src={plus} className='cursor-pointer' alt="" />
                  <div className='text-large'><span className='text-xl font-semibold'>&pound;{(cart.data.price * cart.amount).toLocaleString()}</span> <span>inc</span> Vat </div>
                </div>
              }

              <div className='flex max-lg:flex-col max-lg:gap-2  gap-5 mt-6'>
                <Link  to={"/cart"} className='bg-blue-600 py-2 px-7 text-center font-semibold text-large duration-100 hover:bg-blue-400 rounded text-white'>Go to cart</Link>
                { cart == undefined && <button onClick={toCart} className='bg-redd py-2 px-7 font-semibold  text-large duration-100 hover:bg-red-400 rounded text-white'>Add to cart</button>}
              </div>

        </div>
    </div>
  )
}

export default productEdit
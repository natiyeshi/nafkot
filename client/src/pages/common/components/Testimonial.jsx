import React,{useState,useRef} from 'react'
import Testimony from './Testimony'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/testimonial.css"

const Testimonial = () => {
   
   const tests = [
    { message : "I was so impressed with the quality of the Ethiopian coffee I received from Nafkot. It was some of the best coffee I've ever tasted, and it was clear that a lot of care went into sourcing and roasting it. I will definitely be ordering more in the future!" , person : "Mark S" },
    { message : "I ordered a traditional Ethiopian dress from Nafkot for my wedding, and I couldn't have been happier with the result. The dress was beautifully made and fit me perfectly. It was truly a work of art, and I received so many compliments on it. Thank you, Nafkot, for making my special day even more special!" , person : "Sofia A."  },
    { message :  "I recently purchased some handmade Ethiopian jewelry from Nafkot and I was blown away by the craftsmanship and attention to detail. Each piece was unique and absolutely stunning. I received my order quickly and it was clear that a lot of care went into packaging and shipping my items. I can't wait to wear my new jewelry and show it off to everyone!",person : "Kebede"},
    {
        message: "I was thrilled with the gift box I ordered from Nafkot for my sister's birthday. It was a perfect selection of items that truly captured the beauty of Ethiopia. The attention to detail in packaging and presenting the gift was impressive, and my sister absolutely loved it! Nafkot's commitment to quality and curation is commendable, and I'm already looking forward to ordering from them again in the future!",
        person: "Rachel D"
      },
      {
        message: "I recently acquired a stunning handwoven Ethiopian blanket from Nafkot, and it has quickly become one of my favorite possessions. The colors are incredibly vibrant, and the quality is exceptional. I love how versatile and unique it is; I can use it as a throw on my couch or take it with me on a picnic. Every time I use it, I receive compliments! Thank you, Nafkot, for offering such remarkable pieces.",
        person: "James H"
      },
      {
        message: "My ordering experience with Nafkot was nothing short of great. The website was user-friendly, and the checkout process was seamless. I received my order promptly, and it was exactly as I expected. The customer service was outstanding; I received regular updates and felt confident reaching out to the team with any inquiries. I highly recommend Nafkot to anyone seeking authentic and high-quality Ethiopian products.",
        person: "Emily L"
      },
      {
        message: "I recently purchased a set of Ethiopian spices from Nafkot, and they have completely transformed my cooking. The flavors are incredibly rich and complex, adding a special touch to all my dishes. I appreciate that the spices are sustainably sourced and packaged in eco-friendly materials. Nafkot has earned a loyal customer in me, and I will undoubtedly be ordering from them again!",
        person: "Ahmed K"
      },
      {
        message: "I ordered a breathtaking Ethiopian painting from Nafkot, and it has become the centerpiece of my living room. The colors are vibrant, and the level of detail is truly impressive. It's an exceptional, one-of-a-kind piece that I will cherish for years to come. Nafkot, thank you for bringing the beauty of Ethiopia into my home!",
        person: "Maria P"
      },
      {
        message: "I recently purchased an Ethiopian cookbook from Nafkot, and it has quickly become my go-to resource for authentic Ethiopian recipes. The recipes are easy to follow, and the photography is stunning. I admire that the cookbook also provides background information about Ethiopian culture and ingredients. It's evident that a lot of care went into creating this cookbook, and I highly recommend it to anyone interested in Ethiopian cuisine.",
        person: "David G"
      },
      {
        message: "I was thoroughly impressed with the level of customer service I received from Nafkot. When I had questions about my order, the team responded promptly and provided helpful information. Even after my order arrived, they followed up to ensure my satisfaction. Nafkot's dedication to customer care is truly commendable.",
        person: "Mark S"
      }
   ];
   const slider = useRef(null);
   var settings = {
    dots: true,
    infinite: true,
    speed:600,
    slidesToShow: 3,
    prevArrow: false,
    nextArrow: false,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='relative px-c14 pt-6 mt-10 mb-4 max-lg:px-2 bg-gray-100 mx-auto pb-10'>
            
        <h1 className='py-3 text-center text-xl mt-10 mb-5 font-semibold capitalize'>customers review</h1>

        <div className='absolute max-lg:hidden h-full left-0 bottom-0 bg-gradient-to-r from-gray-100 via-gray-100 w-2/6'></div>
        <div className='absolute max-lg:hidden right-0 h-full bottom-0 bg-gradient-to-l from-gray-100 via-gray-100 w-2/6'></div>
        <div className='testimony'>
            <Slider ref={slider} {...settings} className='absolute'>
              {tests.map(({message,person}) => (<Testimony message={message} person={ person   } />))} 
            </Slider>
        </div>

    </div>
  )
}

export default Testimonial
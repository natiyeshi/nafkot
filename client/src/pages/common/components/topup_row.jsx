import {useState,useEffect,useRef} from 'react'
import Topup from "./topup"
import TopupSkeleton from './topups_skeleton'
import axios from '../../../core/hooks/axios'
import {MdKeyboardArrowLeft as LeftIcon}  from "react-icons/md"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

const TopupRow = () => {
  
  const [topups,setTopups] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)
  const [reloadData,setReloadData] = useState(false)
  const [currency,setCurrency] = useState(1)
  const arr = ['','','','','','','','','','','','','']
  
  const slider = useRef(null);

  function CustomArrowNext({onClick}){
    return <>
         <div
            className='bg-gray-100 p-1 w-fit block relative rounded-full cursor-pointer hover:bg-gray-200'
            onClick={onClick}
          >
            <LeftIcon className='text-lg' />
          </div>
    </>
  }

  function CustomArrowPrev({onClick}){
    return <>
         <div
            className='bg-gray-100  p-1 rotate-180 rounded-full cursor-pointer hover:bg-gray-200'
            onClick={onClick}
          >
            <LeftIcon className='text-lg ' />
          </div>
    </>
  }
  var settings = {
    dots: true,
    infinite: true,
    speed:600,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    centerMode: true,
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

  const [canSlide,setCanSlide] = useState(0)
  const [size,setSize] = useState(10)

  useEffect(() => { 
    async function fetch(){
      try{
        setLoading(true)
        const result = await axios.post("topup/gettopups/") 
        const data = await axios.post("setting/getcurrency")
        setTopups(result.data)
        setSize(result.data.length - 3)
        setCurrency(data.data.currency)
        setError(null)
      }catch(err){
        const AE = err.response?.data?.error.message
        setError( AE ? AE : err.message)
      }finally{
        setLoading(false)
      }
    }

    fetch()
  }, [reloadData])


  return (
    <div className='mb-7'>
      <div className='flex justify-between mb-3 px-3'>
        <Link to={"/products/topup"} className='mb-4 text-lg text-redd font-semibold'>Topups</Link>
        <div className='flex gap-3 my-auto'>
            <CustomArrowNext  onClick={() => { slider?.current?.slickPrev()}} />
            <CustomArrowPrev  onClick={() => {
                 slider?.current?.slickNext()
            }} />
        </div>
        </div>

        {
          error ? 
          <div className='text-center'> {error} </div>
          :
          <Slider afterChange={(e)=>setCanSlide(e)} ref={slider} {...settings} className='absolute'>
          {loading  ? 
            arr.map((data, ind) => <TopupSkeleton key={ind} data={data} home={true} />)
          : 
            topups.map((data, ind) =>  <Topup home={true} key={ind} data={data} currency={currency} />)
          }
      </Slider>}
    </div>
  )
}

export default TopupRow
import React,{useState,useEffect,useRef} from 'react'
import Top from './components/Top'
import About from './components/About'
import Testimonial from '../common/components/Testimonial'
import Faq from './components/Faq'
import Footer from '../common/components/Footer'
import HomeProduct from './components/HomeProduct'

const Home = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-130px" }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

   useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
      });
    }
  }, [isIntersecting]);
  
  return (
    <div className=' overflow-x-hidden'>
        <Top />
        <div ref={ref} className={`${isIntersecting ? " duration-700 opacity-100 translate-x-0  " : " duration-700 opacity-0 translate-x-[70em] "}` }>
        </div> 
          
          <About />
        <HomeProduct />
        <Testimonial />
        <Faq />
        <Footer />

    </div>
  )
}

export default Home
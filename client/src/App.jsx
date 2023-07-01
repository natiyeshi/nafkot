import css from './App.module.css'
import { Route , Routes, } from 'react-router-dom'
import Home from './components/Homes/home'
import Detail from "./components/Detail"
import Cart from "./components/Cart"
import AboutUs from "./components/AboutUs"
import HowTo from "./components/HowTo"
import Products from "./components/Products"
import { useEffect,useState } from 'react'
import Nav from './components/Homes/Nav'

function App() {
  const [displayElement, setDisplayElement] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setDisplayElement(true);
      } else {
        setDisplayElement(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (<div className='text-normal  font-medium'>
      {displayElement && <Nav pass={" sticky top-0 left-0 w-full "+css.show } />}
      <Routes >

        <Route path="/" element={<Home /> }  />
        <Route path="/detail" element={<Detail />}  />
        <Route path="/cart" element={<Cart />}  />
        <Route path="/aboutus" element={<AboutUs />}  />
        <Route path="/howto" element={<HowTo />}  />
        <Route path="/products" element={<Products />}  />
      </Routes>
  </div>
  )
}

export default App

import { useEffect,useState } from 'react'

import css from './css/App.module.css'
import { Route , Routes, } from 'react-router-dom'

import Home from './pages/Homes'
import Detail from "./pages/Detail"
import Cart from "./pages/Cart"
import AboutUs from "./pages/AboutUs"
import HowTo from "./pages/HowTo"
import Products from "./pages/Products"
import Nav from './pages/common/components/Nav'

import Dashbord from './Admin/pages/Dashbord/components/Dashbord'
import Product from './Admin/pages/Products'

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
  
  const nav = displayElement ? <Nav pass={" sticky top-0 left-0 w-full "+css.show } /> : <></>
  
  return (<div className='text-normal  font-medium'>
      <Routes >

        <Route path="/" element={<>{nav}<Home /></> }  />
        <Route path="/detail" element={<>{nav}<Detail /></>}  />
        <Route path="/cart" element={<>{nav}<Cart /></>}  />
        <Route path="/aboutus" element={<>{nav}<AboutUs /></>}  />
        <Route path="/howto" element={<>{nav}<HowTo /></>}  />
        <Route path="/products" element={<>{nav}<Products /></>}  />
        <Route path="/admin">
          <Route path=""  element={<Dashbord />} />
          <Route path="products"  element={<Product />} />
        </Route>
        
        <Route path="*" element={<h1 className='text-xl m-10'>Are you lost ? go to <a href="/" className='text-blue-400'>home</a> </h1>}/>
      </Routes>
  </div>
  )
}

export default App

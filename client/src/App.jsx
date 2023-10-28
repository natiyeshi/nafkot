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
import Checkout from "./pages/checkout/"

import Dashbord from './Admin/pages/Dashbord/components/Dashbord'
import TopupsAdmin from './Admin/pages/topups'
import Product from './Admin/pages/Products'
import AddProduct from "./Admin/pages/add-product"
import { getUser } from './store/features/userSlice/userSlice'
import { useDispatch } from 'react-redux'
import AdminLogin from "./Admin/pages/login"
import CheckAdmin from './Admin/hooks/CheckAdmin'
import PaymentSuccess from "./pages/payment_success"
import PaymentCanceled from "./pages/payment_failure"

function App() {
  const dispatch = useDispatch()
  const [displayElement, setDisplayElement] = useState(false);
  useEffect(() => {
    dispatch(getUser())
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
  
  return (<div className='text-normal  font-medium '>
      <Routes >

        <Route path="/" element={<>{nav}<Home /></> }  />
        <Route path="/detail/:id" element={<>{nav}<Detail /></>}  />
        <Route path="/cart" element={<>{nav}<Cart /></>}  />
        <Route path="/aboutus" element={<>{nav}<AboutUs /></>}  />
        <Route path="/howto" element={<>{nav}<HowTo /></>}  />
        <Route path="/products" element={<>{nav}<Products /></>}  />
        <Route path="/checkout" element={<>{nav}<Checkout /></>}  />
        <Route path="/success" element={<>{nav}<PaymentSuccess /></>}  />
        
        <Route path="/login-admin"  element={<AdminLogin />} />
        
        <Route path="/admin" element={<CheckAdmin />}>
          <Route path="dashbord"  element={<Dashbord />} />
          <Route path="products"  element={<Product />} />
          <Route path="addproduct"  element={<AddProduct />} />
          <Route path="topups"  element={<TopupsAdmin />} />
        </Route>
        
        <Route path="*" element={<h1 className='text-xl m-10'>Are you lost? go to <a href="/" className='text-blue-400'>home</a> </h1>}/>
      </Routes>
  </div>
  )
}

export default App

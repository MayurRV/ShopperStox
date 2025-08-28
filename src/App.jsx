import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Card from './Pages/Card'
import LoginSignUp from './Pages/LoginSignUp'
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Footer from './components/Footer/Footer'

import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'
import ShopContextProvider from './Context/ShopContext'
import Watermark from './Watermark'


function App() {
  

  return (
    
    <>
    {/* <Watermark/> */}
      <ShopContextProvider>
      <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path='/shop' element={<Shop/>} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category={"men"}/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category={"women"}/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category={"kids"}/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>

        <Route path='/cart' element={<Card/>}/>
        <Route path="/" element={<LoginSignUp/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
      
      </ShopContextProvider>
    </>
  )
}

export default App

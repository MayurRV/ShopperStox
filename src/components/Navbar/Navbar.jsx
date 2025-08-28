import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {

    let [menu,setMenu]=useState("shop")

    let{getTotalCartCount}=useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>ShopperStox</p>
        </div>
        <ul className='nav-links'>
            <li onClick={()=>{setMenu("shop")}}> <Link to={'/shop'} style={{textDecoration:"none"}}>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link to={'/men'} style={{textDecoration:"none"}}>Men</Link> {menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}> <Link to={'/women'} style={{textDecoration:"none"}}>Women</Link> {menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}> <Link to={'/kids'} style={{textDecoration:"none"}}>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-cart-icon">
            <Link to={'/'} style={{textDecoration:"none"}}> <button>Login</button> </Link>
            <Link to={'/cart'} style={{textDecoration:"none"}}> <img src={cart_icon} alt="" /> </Link>
            
            <div className="nav-cart-count">{getTotalCartCount()}</div>
        </div>
      
      
    </div>
  )
}

export default Navbar

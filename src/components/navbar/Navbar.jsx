import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const[menu,setMenu]=useState('shop');
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='logo'/>
            <p>KUNCHI-SHOPPING</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link to='/' className='underline' >Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link to='/mens' className='underline'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link to='/womens' className='underline'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids' className='underline'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button><Link to='/login'className='underline'>Login</Link></button>
            <Link to='/cart' ><img src={cart_icon} alt=""/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

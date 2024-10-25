import React, { useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets'; 
import { Link } from 'react-router-dom';
// Ensure this path is correct

const Navbar = () => {
  const [menu,setMenu] = useState("home")

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className="navbar-logo" /> {/* Added class for styling */}
      <ul className='navbar-menu'>
         <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
         <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
         <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</a>
         <a href="#contact-us"  onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact</a>
      </ul>
      <div className='navbar-right'>
         <img src={assets.search_icon} alt="Search Icon" className="navbar-search-icon" />
         <div className='navbar-right'>
            <img src={assets.basket_icon} alt=""/> 
            <div className='dot'></div>
      </div>
      <button>sign in</button>
      </div> 
    </div>
  );
};

export default Navbar;

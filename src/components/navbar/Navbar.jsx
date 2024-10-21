import React, { useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets'; // Ensure this path is correct

const Navbar = () => {
  const [menu,setMenu] = useState("home")

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className="navbar-logo" /> {/* Added class for styling */}
      <ul className='navbar-menu'>
         <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
         <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
         <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</li>
         <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact</li>
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

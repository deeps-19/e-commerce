import React, { useState } from 'react'
import { Link} from "react-router-dom";

import DehazeIcon from '@mui/icons-material/Dehaze';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
 import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import "./navbar.css";

const Navbar = () => {
  // <RouterProvider router={router} />
    const[MobileMenu,setMobileMenu]= useState(false)
 
  return (
    <>
       
      <header className="header">
        <div className="container d_flex">
          <div className="catgrories  d_flex">
            <span className="fa-solid a-border-all"></span>
            <h4>
              categories
                         </h4>
          </div>
          <div className="navlink">
            <ul className={MobileMenu ? "nav-links-mobile":"link f_flex capitalize"} onClick={()=>setMobileMenu(false)}>
              <li>
           
                <Link to="/" >Home</Link>
              </li>
                <li>
                  <Link  to="/product" >Product</Link>

                </li>
                <li>
                  <Link to="/" relative='path'>conatct</Link>
                </li>
            
            </ul>
          
             <button className='toggel' onClick={()=>setMobileMenu(!MobileMenu)}>
             {

                MobileMenu ? <i > <CloseOutlinedIcon/>  </i> : 
                <i > <DehazeIcon/> </i>
             }
            
            </button> 
          </div> 
        </div>  
      </header>        
    </>
  )
}

export default Navbar

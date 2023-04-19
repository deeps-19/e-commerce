import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import "./navbar.css"
import { BrowserRouter } from 'react-router-dom'
import { Route, Router, Routes } from 'react-router-dom';
const Header = ({cartItem}) => {
  return (
    <div>
      
        <Search cartItem={cartItem} />
        <Navbar/>
        
      
     
    </div>
  )
}

export default Header

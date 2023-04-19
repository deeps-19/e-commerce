import logo from './logo.svg';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './common/Header';
// import {BrowserRouter as  Route, Router, Routes } from 'react-router-dom';

import Pages from './Page/Pages';
import Data from './Component/Flashdeal/Data';
import { useState } from 'react';
import Cart from './common/cart/Cart';
import Sdata from './Component/Shop/Sdata';
import Product from './Page/Product';
import Footer from './common/footer/Footer';
function App() {

  const {productItems}= Data
  const {shopItems}= Sdata
  const [cartItem,setCardItem] = useState([])
  const addtoCart = (product) =>{
    const productExit = cartItem.find((item)=>item.id === product.id)
    if(productExit){
      setCardItem(cartItem.map((item)=>(item.id === product.id ? { ...productExit, qty:productExit.qty + 1 } : item) ))
    }else{
      setCardItem([ ...cartItem,{ ...product,qty:1}])
    }
    
  }

  const decreaseQty=(product)=>{
    const productExit=cartItem.find((item)=>item.id === product.id)
    if(productExit.qty == 1){
      setCardItem(cartItem.filter((item)=>item.id!==product.id))

    }
    else{
      setCardItem(cartItem.map((item)=> (item.id === product.id?{...productExit,qty:productExit.qty-1}:item)))
    }
  }
  return (
    <>
    
    <Router>
      <Header  cartItem={cartItem} />
      <Routes>
        <Route exact path="/" element={<Pages productItems={productItems} addtoCart={addtoCart}  cartItem={cartItem} shopItems={shopItems}/>}/>
        <Route exact path="/product" element={<Product productItems={productItems} addtoCart={addtoCart}  decreaseQty={decreaseQty}/>}/>
        <Route exact path="/Cart" element={<Cart cartItem={cartItem} addtoCart={addtoCart} decreaseQty={decreaseQty}/>}/>
      

        
      </Routes>
      <Footer/>
    </Router>
    <div>
      </div>
    </>
    
    
  );
}

export default App;

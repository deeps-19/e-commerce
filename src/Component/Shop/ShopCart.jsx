import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./shopstyle.css"
import StarRateIcon from '@mui/icons-material/StarRate';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Slider from "react-slick";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const ShopCart = ({ shopItems , addtoCart}) => {

  const[count,setcount]=useState(0)
  const increment=()=>{
    setcount(count+1)
  }
  
  return (
    <>


        {shopItems.map((shopItems ) => {
          return (

            <div className="box">
              <div className="product mtop">
                <div class="img">

                  <span className='discount'>{shopItems.discount}%off</span>
                  <img src={shopItems.cover} alt="" />
                  <div className='product-like'>
                    <label >{count}</label><br />
                    <i onClick={increment}><FavoriteBorderIcon /> </i>
                  </div>

                </div>
              </div>
              <div className="product-details">
                <h3>{shopItems.name}</h3>
                <div className="rate">

                  <i><StarRateIcon /></i>
                  <i><StarRateIcon /></i>
                  <i><StarRateIcon /></i>
                  <i><StarRateIcon /></i>
                  <i><StarRateIcon /></i>
                </div>
                <div className="price">
                  <h4> ₹{shopItems.price}.00</h4>
                </div>
              </div>
              <button onClick={() => addtoCart(shopItems)}>
               <i>
                
                <AddOutlinedIcon />
                </i> 
              </button>
            </div>
      )
    })}
    
    </>
  )
}

export default ShopCart

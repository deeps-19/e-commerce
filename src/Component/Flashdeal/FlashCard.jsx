import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./flashstyle.css"
import StarRateIcon from '@mui/icons-material/StarRate';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Slider from "react-slick";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
const NextArrow=(props)=>{
  const {onClick} =props
  return(
    <div className='control-btn ' onClick={onClick}>
      <button className='next'>
          <ArrowForwardOutlinedIcon/>
      </button>
    </div>
  )
}
const PrevArrow=(props)=>{
  const {onClick} =props
  return(
    <div className='control-btn ' onClick={onClick}>
      <button className='prev'>
          <ArrowForwardOutlinedIcon/>
      </button>
    </div>
  )
}

const FlashCard = ({ productItems , addtoCart}) => {

  const[count,setcount]=useState(0)
  const increment=()=>{
    setcount(count+1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (
    <>
      <Slider {...settings}>

        {productItems.map((productItems ) => {
          return (

            <div className="box">
              <div className="product mtop">
                <div class="img">

                  <span className='discount'>{productItems.discount}%off</span>
                  <img src={productItems.cover} alt="" />
                  <div className='product-like'>
                    <label >{count}</label><br />
                    <i onClick={increment}><FavoriteBorderIcon /> </i>
                  </div>

                </div>
              </div>
              <div className="product-details">
                <h3>{productItems.name}</h3>
                {/* <div className="rate">

                  <i><StarRateIcon /></i>
                  <i><StarRateIcon /></i>
                  <i><StarRateIcon /></i>
                  <i><StarRateIcon /></i>
                  <i><StarRateIcon /></i>
                </div> */}
                <div className="price">
                  <h4> ₹{productItems.price}.00</h4>
                </div>
              </div>
              <button onClick={() => addtoCart(productItems)}>
               <i>
                
                <AddOutlinedIcon />
                </i> 
              </button>
            </div>
      )
    })}
    </Slider>
    </>
  )
}

export default FlashCard

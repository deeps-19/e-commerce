import React from 'react'
import Tdata from './Tdata'
import './topstyle.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const TopCart = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow:3 ,
        slidesToScroll: 1,
        autoplay: false,
        
      }
  return (
      <div>
        <Slider {...settings}>

        {Tdata.map((value,index)=>{
            return(
                <>
                <div className="box product" key={index}>
                    <div className="nametop d_flex">
                        <span className="tleft">
                            {value.para}
                        </span>
                        <span className="tright">
                            {value.desc}
                        </span>
                    </div>
                    <img src={value.cover} alt="" />

                </div>
            </>
            )
        })}

    </Slider>
    </div>
  )
}

export default TopCart

import React from 'react'
import Ddata from "./Ddata"
import Slider from "react-slick";
import "./discount.css"
const Dcart = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:6,
        slidesToScroll: 1,
        autoplay:true,
        
      }
    return (
        <div>
            <Slider {...settings}>

            
                {Ddata.map((val, index) => {
                    return (
            <>
                        <div Class="product" key={index}>

                        <div className="box " key={index}>
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <h4>{val.name}</h4>
                            <span>{val.price}</span>

                            </div>
                        </div>
                </>
                    )
                })}
            </Slider>
            
        </div>
    )
}

export default Dcart

import React from 'react'
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import './newstyle.css'
import Cart from './Cart';
const Newarrival = () => {
  return (
    <>
      <section className="NewArrivals background">
      <div className="container">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                 <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />

                <h2>New Arrivals</h2>
              </div>
              <div className="heading-right row">
                <span>View All</span>
                <i>

                <ArrowRightOutlinedIcon/>
                </i>
              </div>
            </div>
                <Cart/>
          </div>

      </section>
    </>
  )
}

export default Newarrival

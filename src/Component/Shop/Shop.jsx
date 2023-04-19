import React from 'react'
import Catg from './Catg'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import ShopCart from './ShopCart';
import './shopstyle.css'

const Shop = ({ shopItems, addtoCart }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <Catg />
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row f_flex">

                <h2>Mobile Phones</h2>
              </div>
              <div className="heading-right row">
                <span>View All</span>
                <i>

                  <ArrowRightOutlinedIcon />
                </i>
              </div>
            </div>
            <div className="product-content grid1">
              <ShopCart shopItems={shopItems} addtoCart={addtoCart} />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Shop

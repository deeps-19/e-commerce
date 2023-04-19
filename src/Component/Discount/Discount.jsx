import React from 'react'
import Dcart from './Dcart'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Discount = () => {
  return (
    <div>
      <section className="Discount NewArrivals background ">
      <div className="container">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                 <img src='https://cdn-icons-png.flaticon.com/512/563/563352.png' />

                <h2>Big Discount</h2>
              </div>
              <div className="heading-right row">
                <span>View All</span>
                <i>

                <ArrowRightOutlinedIcon/>
                </i>
              </div>
            </div>
                <Dcart/>
          </div>

      </section>
    </div>
  )
}

export default Discount

import React from 'react'
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import TopCart from './TopCart';
import './topstyle.css'
const Topcate = () => {
  return (
    <div>
        <section className="TopCate background">
          <div className="container">
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <i>
                  <BorderAllOutlinedIcon/>
                </i>
                  
                <h2>Top Categories</h2>
              </div>
              <div className="heading-right row">
                <span>View All</span>
                <i>

                <ArrowRightOutlinedIcon/>
                </i>
              </div>
            </div>
            <TopCart/>
          </div>
        </section>
    </div>
  )
}

export default Topcate

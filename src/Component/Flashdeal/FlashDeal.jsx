import React from 'react'
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FlashCard from './FlashCard';
const FlashDeal = ( {productItems ,addtoCart}) => {
  return (
    <>
      <section className='flash'>
        <div className="container">
            <div className="heading f_flex">
                <FlashOnIcon/>
                <h1>
                    Flash Deals
                </h1>
            </div>
                <FlashCard productItems={productItems} addtoCart={addtoCart}/>

        </div> 

      </section>
    </>
  )
}

export default FlashDeal

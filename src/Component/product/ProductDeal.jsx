import React from 'react'
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ProductCard from './ProductCard';
const ProductDeal = ( {productItems ,addtoCart,decreaseQty}) => {
  return (
    <>
      <section className='box1'>
        <div className="product-content grid2">
            
                <ProductCard productItems={productItems} addtoCart={addtoCart} decreaseQty={decreaseQty}/>

        </div> 

      </section>
    </>
  )
}

export default ProductDeal

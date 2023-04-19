import React from 'react'
import ProductDeal from '../Component/product/ProductDeal'
import ShopCart from '../Component/Shop/ShopCart'

const Product = ({productItems ,addtoCart,shopItems,decreaseQty}) => {
  return (
    <div>
        <ProductDeal productItems={productItems} addtoCart={addtoCart} decreaseQty={decreaseQty}/>
        
    </div>
  )
}

export default Product

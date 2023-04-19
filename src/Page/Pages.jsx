import React from 'react'
import Home from '../Component/mainpage/Home'
import FlashDeal from '../Component/Flashdeal/FlashDeal'
import Topcate from '../Component/Top/Topcate'
import Newarrival from '../Component/newarrivel/Newarrival'
import Discount from '../Component/Discount/Discount'
import Shop from '../Component/Shop/Shop'
import Annocument from "../Component/annocument/Annocument"
import Wrapper from "../Component/wrapper/Wrapper"
const Pages = ({productItems,cartItem,addtoCart,shopItems}) => {
  return (
    <div>
        <Home cartItem={cartItem} />
 
        <FlashDeal productItems={productItems} addtoCart={addtoCart}/> 
        <Topcate/>
        <Newarrival/>
        <Discount/>
        <Shop shopItems={shopItems} addtoCart={addtoCart}/>
        <Annocument/>
        <Wrapper/>
     </div>
  )
}

export default Pages

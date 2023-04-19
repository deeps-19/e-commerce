import React from 'react'
import './style.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
const Cart = ({ cartItem, addtoCart ,decreaseQty}) => {
  const totalprice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)
  return (
    <div>
      <section className='cart-items'>
        <div className="container d_flex">
          <div className="card-deatails">
            {cartItem.length === 0 && <h1 className='no-items product'>No Items are selected</h1>}



            {cartItem.map((item) => {
              const productQty = item.price * item.qty
              return (
                <div className="card-list product d_flex">
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">

                      <button className="removeCart">
                        < CloseOutlinedIcon />
                      </button>
                    </div>
                  <div className='cartControl d_flex'>
                    <button className='inCart' onClick={() => addtoCart(item)}>
                      <AddOutlinedIcon />
                    </button>
                    
                    <span>{item.qty}</span>
                    <button className='inCart' onClick={()=>decreaseQty(item)}>
                      <RemoveOutlinedIcon/>
                        
                    </button>
                  </div>
                  </div>
                  <div className="cart-item-price"></div>
                </div>
              )
            })}
          </div>
            <div className="cart-total product">
              <h2>Cart Summary</h2>
              <div className="d_flex">
                <h4>Total Price:</h4>
                <h3>${totalprice}</h3>
              </div>
            </div>
        </div>

      </section>
    </div>
  )
}

export default Cart

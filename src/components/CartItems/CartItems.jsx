import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png' 
import CartSubmit from '../../CartSubmit/CartSubmit'

const CartItems = () => {
    let {all_product,cartItems,removeToCart,getToCartAmount}=useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Prices</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {
            all_product.map((e)=>{
                if(cartItems[e.id]>0){
                    return(

                        <div>
                            <div className="cartitems-format">
                                <img className='carticon-product-icon' src={e.image} alt="" />
                                <p>{e.name}</p>
                                <p>{e.new_price}</p>
                                <buttton className="cartitems-quantity">{cartItems[e.id]}</buttton>
                                <p>{e.new_price*cartItems[e.id]}</p>
                                <img className="carticon-remove-icon" src={remove_icon} alt="" onClick={()=>removeToCart(e.id)} />
                            </div>
                        </div>

                    )
                }
                return null;
            })
        }

        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getToCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Shipping Fee</h3>
                            <h3>Free</h3>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getToCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={{CartSubmit}}>Proceed to Checkout</button>
            </div>
            
            <div className="cartitems-promocode">
                <p>If you have promo code,Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>

        </div>  
      
    </div>
  )
}

export default CartItems

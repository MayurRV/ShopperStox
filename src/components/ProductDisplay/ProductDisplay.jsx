import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { useState } from 'react'

const ProductDisplay = (props) => {
  let {product} = props;
  let {addToCart}=useContext(ShopContext)

  let {removeToCart}=useContext(ShopContext)

  let {emptyresetcart}=useContext(ShopContext)

  let [number,setNumber]=useState(0)

    const incr=()=>{
        return( setNumber(number+1) )
    }

    const decr=()=>{
       return (number>0?setNumber(number-1):0)

    // return(setNumber(number-1))
    }
    
    const reset=()=>{
        
        setNumber(0);
        emptyresetcart(product.id);
    }

  return <>
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} alt="" className="productdisplay-main-img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Natural fibers like cotton, wool, and silly, as well as synthetic materials like polyster and rayon, are commonly used
        </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        {/* <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button> */}

        <div className='loger'>
                                                                                                        
                {number===0 ? (

                    <button /*style={{color:"greenyellow",height:"30px",width:"180px",textAlign:"center",backgroundColor:"yellow",borderRadius:"20px"}}*/ onClick={()=>{setNumber(number=1); addToCart(product.id); }}>Add to cart </button>
                ):(
                    <div className='adderotop'>
                      <button className='adder plus' /*style={{height:"25px",width:"25px",backgroundColor:"red",color:"black",fontSize:"20px"}} /*onClick={incr}*/ onClick={()=>{setNumber(incr); addToCart(product.id); }} >+</button>
                      <button className='adder no' /*style={{height:"25px",width:"35px",backgroundColor:"midnightblue",color:"whitesmoke"}}*/ >{number}</button>
                      <button className='adder minus' /*style={{height:"25px",width:"25px",backgroundColor:"blue",color:"black",fontSize:"20px"}} /*onClick={decr}*/ onClick={()=>{setNumber(decr); removeToCart(product.id)}}>-</button>
                      <button className='adder reset'  /*style={{height:"25px",width:"70px",backgroundColor:"cyan",color:"black",fontSize:"15px",borderRadius:"9px"}} /*onClick={reset}*/ onClick={()=>{reset()}}>Reset</button>
                    </div>
                    ) 
                    
                }


            
        </div>

        <p className="productdisplay-right-category">
          <span>Category : <span>Women, T-Shirt, Crop Top</span></span>
        </p>
        <p className="productdisplay-right-category">
          <span>Tags : <span>Modern, Latest</span></span>
        </p>
      </div>


    </div>
  </>
}

export default ProductDisplay


///////////////////ENDSSSSS////////////////////////////

// experiments in down




{/* <div style={{display:"flex",justifyContent:"center",gap:'10px'}}>
                                                                                                        
                {number===0 ? (

                    <button style={{height:"30px",width:"100px",backgroundColor:"yellow",borderRadius:"20px"}} onClick={()=>{setNumber(number=1) && addToCart(product.id)}}>Add to cart </button>
                ):(
                    <>
                    <button style={{height:"25px",width:"25px",backgroundColor:"red",color:"black",fontSize:"20px"}} onClick={incr}>+</button>
                    <button style={{height:"25px",width:"35px",backgroundColor:"midnightblue",color:"whitesmoke"}} >{number}</button>
                    <button style={{height:"25px",width:"25px",backgroundColor:"blue",color:"black",fontSize:"20px"}} onClick={decr}>-</button>
                    <button style={{height:"25px",width:"70px",backgroundColor:"cyan",color:"black",fontSize:"15px",borderRadius:"9px"}} onClick={reset}>Reset</button>
                    </>
                    ) 
                    
                }


            
        </div> */}
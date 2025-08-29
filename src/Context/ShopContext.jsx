// import React, { createContext, useState } from 'react'
// import all_product from '../components/assets/all_product'

// export let ShopContext=createContext(null);

// let getDefaultCart=()=>{
//   let cart={};
//   for(let index=0 ; index<all_product.length ; index++){
//     cart[index]=0
//   }
//   return cart;
// }

// const ShopContextProvider = ({children}) => {

//   let [cartItems,setCartItems]=useState(getDefaultCart())

//   let addToCart=(itemId)=>{
//     setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
//     // console.log(addToCart);
//   }

//   let removeToCart=(itemId)=>{
//     setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//   }

//   let emptyresetcart=(itemId)=>{
//     setCartItems((prev)=>({...prev,[itemId]:prev[itemId]*0}))
//   }

//   let getToCartAmount=()=>{

//     let totalAmount =0;
//     for(const item in cartItems){
//       if(cartItems[item]>0){
//         let itemInfo=all_product.find((product)=>product.id === Number(item));
//         totalAmount+=cartItems[item]*itemInfo.new_price;
//       }
//     }
//     return totalAmount;
//   };

//   let getTotalCartCount=()=>{
//     let totalItem=0;
//     for( const item in cartItems){
//       if(cartItems[item]>0){
//         totalItem+=cartItems[item];
//       }
//     }
//     return totalItem;
//   };

//   console.log(cartItems);

//   let contextValue={all_product,cartItems,addToCart,removeToCart,getToCartAmount,getTotalCartCount,emptyresetcart}
  
//   return (
//     <ShopContext.Provider value={contextValue}>
//       {children}
//     </ShopContext.Provider>
//   )
// }

// export default ShopContextProvider

//-------------Gauravs code---------------


import React, { createContext, useEffect, useState } from 'react'
import all_product from '../components/assets/all_product'

export let ShopContext = createContext(null);

let getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0
  }
  return cart;
}

const ShopContextProvider = ({ children }) => {

  let [cartItems, setCartItems] = useState(() => {

    const cartData = sessionStorage.getItem("cart")
    return cartData ? JSON.parse(cartData) : getDefaultCart();


  })

  useEffect(() => {

    sessionStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])


  let addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // console.log(addToCart);
  }

  let removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  let emptyresetcart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] * 0 }))
  }

  let getToCartAmount = () => {

    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.new_price;
      }
    }
    return totalAmount;
  };

  let getTotalCartCount = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  console.log(cartItems);

  let contextValue = { all_product, cartItems, addToCart, removeToCart, getToCartAmount, getTotalCartCount, emptyresetcart }

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
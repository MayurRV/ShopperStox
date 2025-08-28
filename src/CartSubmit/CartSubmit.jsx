import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const CartSubmit = () => {

    let {all_products}=useContext(ShopContext)

  return (
    <div>

        <h1>Submit here the order is op</h1>

        <div>
            <h2>Your Added Products to the Cart are been displayed below</h2>

            <div className="displayproducts">
                
            </div>
        </div>


      
    </div>
  )
}

export default CartSubmit

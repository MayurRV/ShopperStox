import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/Item/Item'
import './Css/ShopCategory.css'
// import all_product from '../components/assets/all_product'

const ShopCategory = (props) => {
  let {all_product}=useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>

        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>

      </div>

      <div className="shopCategory-products">
        {all_product.map((item,i)=>{
          
          if(props.category === item.category){
            return(
              <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            )
          }
          else{
            return null;
          }

        })}
      </div>
      <center>
      <div className="shopCategory-loadmore">
       
        Explore More
      </div></center>


    </div>
  )
}

export default ShopCategory

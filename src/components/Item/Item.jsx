import React from 'react'
import "./Item.css"
import { Link, useNavigate } from 'react-router-dom'

const Item = ({id,name,image,new_price,old_price,emptyresetcart}) => {
  const navigate = useNavigate();

  // const refreshPage =()=>{
  //     navigate('.',{ replace : true})
  // }

  return (
    <>
        <div className='item' >
            <Link to={`/product/${id}`}><img onClick={()=>{window.scrollTo({top:0,behavior:"smooth"});}} src={image} alt={name} /></Link>
            <p>{name}</p>

            
            
            <div className='prices'>
                <div className="new_prices">$ {new_price}</div>
                <div className="old_prices">$ {old_price}</div>
            </div>

        </div>
    </>
  )
}

export default Item

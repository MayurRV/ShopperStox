import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../assets/arrow.png'

const Breadcrum = (props) => {
    let {product}=props;
  return (
    <div className='breadcrum'>

        Home <img src={arrow_icon} alt="" />
        Shop <img src={arrow_icon} alt="" />
        {product.category} <img src={arrow_icon} alt="" />
        <span>{product.name}</span>
      
    </div>
  )
}

export default Breadcrum

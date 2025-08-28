import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrum/Breadcrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import Description from '../components/DescriptionBox/Description'
import RelatedItems from '../components/RelatedItems/RelatedItems'

const Product = () => {

  let {all_product,emptyresetcart}=useContext(ShopContext)   
  let {productId}=useParams();
  let product=all_product.find((e)=>e.id===Number(productId))




  return (
    <div >
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedItems display={product}/>
    </div>
  )
}

export default Product

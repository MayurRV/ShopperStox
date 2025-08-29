// import React from 'react'
// import data_product from '../assets/data'
// import './RelatedItems.css'
// import Item from '../Item/Item'
// import all_product from '../assets/all_product'

// const RelatedItems = (props) => {
  
//   let {display}=props;

//   return (
//     <div className='relatedProducts'>
//         <h1>Related Products</h1>
//         <hr />
//         <div className="relatedProducts-items">
//             {/* {data_product.map((item,i)=>{
//                 return(
//                     <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//                 )
//             })} */}

//             {all_product.filter(item=>item.category===display.category).slice(4,8).map((item,i)=>{

//               // if(display.category == item.category){
//                 return(
//                     <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} emptyresetcart={0}/>
//                 )
//               // }
              
                
//             })}

//         </div>
      
//     </div>
//   )
// }

// export default RelatedItems

//----------Gauravs code edit

import React from 'react'
import data_product from '../assets/data'
import './RelatedItems.css'
import Item from '../Item/Item'
import all_product from '../assets/all_product'

const RelatedItems = (props) => {

  let { display } = props;

  return (
    <div className='relatedProducts' >
      <h1>Related Products</h1>
      <hr />
      <div className="relatedProducts-items" onClick={()=>{window.scrollTo({top:0,behaviour:"smooth"}); window.location.reload();}}>
        {/* {data_product.map((item,i)=>{
                return(
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                )
            })} */}

        {all_product.filter(item => item.category === display.category).slice(4, 8).map((item, i) => {

          // if(display.category == item.category){
          return (
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} emptyresetcart={0} />
          )
          // }


        })}

      </div>

    </div>
  )
}

export default RelatedItems

import React from 'react'
import './Product.css'
import { useStateValue } from './Stateprovider'

function Product({title,image,price,rating,id}) {
  const [{basket},dispatch]=useStateValue();

const addToBasket=()=>{
  dispatch({
    type:'ADD_TO_BASKET',
    item:{
      id:id,
      title:title,
      image:image,
      price:price, 
      rating:rating,  
    },
  });

};

  return (
    
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating).fill().map((_,i) =>(<p>⭐</p>))}
            
        </div>
        </div>
        <img src={image} alt=''/>
        <button onClick={addToBasket}>Add to Basket</button>
      
    </div>
  )
}

export default Product
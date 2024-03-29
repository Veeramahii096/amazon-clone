import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './Stateprovider'
import FlipMove from 'react-flip-move';

function CheckoutProduct({id,image,title,price,rating}) {

    const [{basket},dispatch]=useStateValue();
    const removefromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })

    }
  return (
    
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image}/>
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'><small>₹</small><strong>{price}</strong></p>
        <div>
        <p className='checkoutProduct__rating'> {Array(rating).fill().map((_,i) =>(<p>⭐</p>))}</p>
      </div>
      <button onClick={removefromBasket}>Remove from Basket</button>
    </div>
    </div>
  )
}

export default CheckoutProduct

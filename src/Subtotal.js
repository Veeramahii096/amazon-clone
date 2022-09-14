import React from 'react'
import './Subtotal.css'
import CurrencyFormat from'react-currency-format'
import { useStateValue } from './Stateprovider'
import {getBaskterTotal} from './reducer'
function Subtotal() {
  const [{basket},dispatch]=useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat renderText={(value)=>(<>
      <p>SubTotal({basket?.length} items):
      <strong>{value}</strong></p>
      <small className='subtotal__gift'>
        
        <input type='checkbox'/>This order contain Gift
      </small>
    </>)}
    decimalScale={3}
    value={getBaskterTotal(basket)}
    displayType={'text'}
    thousandSeparator={true}
    prefix={"₹"}
    />
    <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal

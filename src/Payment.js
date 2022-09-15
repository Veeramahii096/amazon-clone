import React, { useEffect } from 'react'
import './Payment.css'
import { useStateValue } from './Stateprovider';
import CheckoutProduct from './CheckoutProduct'
import {Link, useNavigate} from 'react-router-dom'
import { useElements, useStripe,CardElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBaskterTotal } from './reducer';
import axios from './axios';
function Payment() {
    const navigate=useNavigate();
    const [{basket,user},dispatch]=useStateValue();
    const stripe=useStripe();
    const elements=useElements();
    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);
    const [succeeded,setSucceeded]=useState(false);
    const[processing,setProcessing]=useState("")
    const[clientSecret,setClientSecret]=useState(true);
    useEffect(()=>{
        const getClientSecret=async()=>{
            const response=await axios({
                method:'post',
                url:`/payments/create?total=${getBaskterTotal(basket)*100}`,
            });
            setClientSecret(response.data.clientSecret)
        }

    getClientSecret();
    }, [basket]);

    console.log('The client secret is>>>',clientSecret)
    const handledSubmit=async(event)=>{
        event.preventDefault();
        setProcessing(true);
       const payload=await stripe.confirmCardPayment(clientSecret,{payment_method:{
        card:elements.getElement(CardElement)
       }}).then(({paymentIntent})=>{
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        
        dispatch({
            type:'EMPTY_BASKET'})
        navigate("/orders", { replace: true });
       }) 

    }
    const handleChange=event=>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message:'');
    }
  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>Checkout(<Link to='/checkout'>{basket?.length} items</Link>)</h1>
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Delivery Address</h3>
            </div>
            <div className='payment__address'>
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Los Angeles, CA</p>
            </div>
        </div>
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Review items and Delivery</h3>
            </div>
            <div className='payment__items'>
                {basket.map(item=>(
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}/>
                ))}
            </div>
        </div>
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Payment Method</h3>
            </div>
            <div className='Payment__Details'>
                <form onSubmit={handledSubmit}>
                    <CardElement onChange={handleChange}/>
                    <div className='payment_priceContainer'>
                    <CurrencyFormat renderText={(value)=>(
                        <h3>OrderdTotal:
                        {value}</h3>
                        
                        )}
                        decimalScale={3}
                        value={getBaskterTotal(basket)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={"₹"}
                        />
                        <button disabled={processing || disabled ||succeeded}><span>{processing ?<p>processing</p>:"Buy Now"}</span></button>
                    </div>
                    {error && <div>{error}</div>}
                </form>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Payment

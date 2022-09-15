import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,
  Routes,Route}
from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './Stateprovider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import { useState } from 'react';


function App() {
 const promise=loadStripe('pk_test_51Li441SEqeYd8iuHfx9V4A5rTHY9Y0lkpUlqTLSuehMbvnFd2BwW8MsDqSnWqwnybuMUtdkVvV2mLnjAtJT16JLm000BGY67Qm')
 
 const [{},dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
       
      }})
    
    },[]);

  return (
    <Router>
      <div className="App">
        
      <Header/>
        <Routes>
        
        <Route path='/login' element={<Login />} >
        
        </Route>
        
       <Route path='/checkout' element={<Checkout />} >
        </Route>
        {(
      <Route
      path="/payment"
    element={(
      <Elements stripe={promise}>
        <Payment />
      </Elements>
    )}
  />
)}
        <Route path='/'  element={<Home/>}>
        
        </Route>
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;

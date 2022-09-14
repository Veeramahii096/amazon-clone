import React from 'react'
import './Header.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'
import{useStateValue} from './Stateprovider'
import { auth } from './firebase';
function Header() {

  const [{basket,user},dispatch]=useStateValue();
  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <Link to ='/'>
      <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/></Link>
       
        <div className='header__search'>
        <input className='header__searchInput'type='text'/>
        <SearchIcon className='header__searchIcon' /></div>
        <div className='header__nav'>
          <Link  to ={!user &&'./login'} className='link' >
          <div onClick={handleAuthentication} className ='header__option'>
            <span className='header__OptionLineOne'>Hello,{user?.email}</span>
            <span className='header__OptionLineTwo'>{user ?'Sign Out':'Sign In'}</span>
          </div>
          </Link>
          <div className='header__option'>
            <span className='header__OptionLineOne'>Returns</span>
            <span className='header__OptionLineTwo'>&Orders</span>
          </div>
          <div className='header__option'>
            <span className='header__OptionLineOne'>Your</span>
            <span className='header__OptionLineTwo'>Prime</span>
          </div>
          <Link to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingCartIcon/>
            <span className='header__optionLineTwo header__BasketCount'>{basket?.length}</span>
          </div></Link>
          
        </div>

    </div>
  )
}

export default Header

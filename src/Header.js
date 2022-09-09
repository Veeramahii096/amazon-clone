import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
        <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
        <div className='headersearch'>
        <input className='header__searchInput'type='text'/></div>
        <div className='header__nav'></div>

    </div>
  )
}

export default Header

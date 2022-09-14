import React from 'react'
import './Home.css';

import Product from './Product';
import SimpleImageSlider from "react-simple-image-slider";

function Home() {

  const images = [
    { url: "https://m.media-amazon.com/images/I/71nqaV173zL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/71QkSMqD5CL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/61f720t266L._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/61AQSNQQBaL._SX3000_.jpg" },

    { url: "https://m.media-amazon.com/images/I/61gzEy1KqCL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/71cp9PVuTfL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/51qBj3502YL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/61nhlTOivrL._SX3000_.jpg" },
  ];
  return (
    <div className='Home'>
      <div className='home__container'>
      <div className='slider'>
      <SimpleImageSlider
        width={1325}
        height={300}
        images={images}
        showBullets={false}
        autoPlay={true}
        
        showNavs={true}
        
      />
      
    </div>
      
        <div className='home__row'>
                <Product id='124545' title='Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers'
                price={39990.60} image="https://images-eu.ssl-images-amazon.com/images/I/41ezRvTwcaL._SX300_SY300_QL70_FMwebp_.jpg"
                 rating={3}/>

                <Product id='2423423' title='Samsung Galaxy Buds Pro Intelligent ANC with 99% Noise Cancellation Bluetooth Truly Wireless in Ear'
                price={1500.80} image="https://images-eu.ssl-images-amazon.com/images/I/41zYFz1vfxL._AC_SX184_.jpg"
                 rating={5} />
                
            </div>
            <div className='home__row'>
                <Product  id='343545'title='Fire-Boltt Ninja 2 Max 1.5" Full Touch Display, SpO2, Heart Rate, 20 Sports Mode '
                price={1999.60} image="https://images-eu.ssl-images-amazon.com/images/I/41EQYr-n85L._AC_SX184_.jpg"
                 rating={4}/>
                <Product id='44355' title='Redgear Pro Series Wired Gamepad with Integrated Force Feedback, Illuminated ABXY Keys, '
                price={699.20} image="https://m.media-amazon.com/images/I/51300qVfYmL._AC_UL320_.jpg"
                 rating={3}/>
                <Product id='53432' title='Redgear Shadow Blade Mechanical Keyboard with Drive Customization, Spectrum LED Lights'
                price={1999.30} image="https://m.media-amazon.com/images/I/61NKGdlO36L._AC_UL320_.jpg"
                 rating={4}/>
                
            </div>
            <div className='home__row'>
                <Product id='634243' title='Mi 80 cm (32 inches) 5A Series HD Ready Smart Android LED TV L32M7-5AIN (Black)'
                price={13999.00} image="https://m.media-amazon.com/images/I/81tD7OZ0RXL._AC_UY218_.jpg"
                 rating={4}/>
                
            </div>
                    
        
        
      </div>
    </div>
  )
}

export default Home

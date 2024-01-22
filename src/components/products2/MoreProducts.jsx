import React from 'react';
import './MoreProducts.css';
import rated1 from '../images/rated1.png';

const MoreProducts = () => {
  return (
    <div className='moreproducts'>
        {/* <div className="small-container">
            <h1>Top Rated Products</h1>
            <div className="toprated">
                <div className="pack">
                    <img src={rated1} alt="" />
                    <h4>Apple i-Pad</h4>
                </div>
                <div className="pack">
                    <img src={rated1} alt="" />
                    <h4>Apple i-Pad</h4>
                </div>
                <div className="pack">
                    <img src={rated1} alt="" />
                    <h4>Apple i-Pad</h4>
                </div>
                <div className="pack">
                    <img src={rated1} alt="" />
                    <h4>Apple i-Pad</h4>
                </div>
                <div className="pack">
                    <img src={rated1} alt="" />
                    <h4>Apple i-Pad</h4>
                </div>
                <div className="pack">
                    <img src={rated1} alt="" />
                    <h4>Apple i-Pad</h4>
                </div>
                <div className="pack">
                    <img src={rated1} alt="" />
                    <h4>Apple i-Pad</h4>
                </div>
            </div>
        </div> */}
        
        <div className="small-container">
            <div className="back">
                <div className="too">
                <h6 style={{color:"white"}}>GRAND SALE</h6>
                <h2 style={{color:"white"}}>APPLE iPhone 13.Get 30% Off!</h2>
                <button>SHOP NOW</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default MoreProducts
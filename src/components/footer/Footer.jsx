import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div class="row">
            <div class="footer-col-1">
                <h3>Download Our App</h3>
                <p>Downlaod App for andriod and ios phone</p>
                <div class="app-logo">
                    <img src="./images/play-store.png" alt="playstrore" />
                    <img src="./images/app-store.png" alt="appstore" />
                </div>
            </div>
            <div class="footer-col-2">
                {/* <img src="./images/logo-white.png" alt=""> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, architecto ipsam harum expedita a maiores accusamus quaerat beatae, illum quis porro reprehenderit. Expedita!</p>
                </div>
            <div class="footer-col-3">
                <h3>Useful Links</h3>
                <ul>
                    <li>Coupons</li>
                    <li>Blog Post</li>
                    <li>Return Policy</li>
                    <li>Join Affiliate</li>
                </ul>     
            </div>
            <div class="footer-col-4">
                <h3>Follow Us</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>YouTube</li>
                </ul>     
            </div>
            
        </div>
        <p class="copyr">CopyRight</p>
    </div>
  );
}

export default Footer
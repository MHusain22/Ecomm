import React from 'react'
import './Card.css';
import shop from '../images/shop.png';
import payment from '../images/payment.png';
import clock from '../images/clock.png';
import t from '../images/t.png';


const Card = () => {
  return (
    <div className='card'>
        <div className="small-container">
            <div className="row">
                <div className="col">
                    <img src={payment} alt="" />
                    <h3>Safe payment</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="col">
                    <img src={shop} alt="" />
                    <h3>Shop With Confidence</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="col">
                    <img className='t' src={t} alt="" />
                    <h3>World Wide Dilevery</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="col">
                    <img src={clock} alt="" />
                    <h3>24/7 Help Center</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>

            <div className="row">
                <div className="col2 first">
                
                </div>
                {/* <div className="col2 second">
                    
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Card;
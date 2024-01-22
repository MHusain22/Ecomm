import React from 'react'
import './Contact.css'
import contactus from '../images/contactus.png';

const Contact = () => {
  return (
    <>
      <h1>Contact US</h1>
      <div className="formcontainer">
        <form action="">
          <input type="text" placeholder='Name' name="" id="" />
          <input type="email" placeholder='Email' name="" id="" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
          <img src={contactus} alt="" />
        </div>
    </>
  )
}

export default Contact
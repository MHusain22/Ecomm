import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import cart from "../images/cart.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">ELECTRO</div>
        <nav>
          <ul>
            <li>HOME</li>
            <Link
              to="/shop"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li>SHOP</li>
            </Link>
            <li>ABOUT</li>
            <li>BLOG</li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li>CONTACT</li>
            </Link>
          </ul>
        </nav>
        <div className="last">
          <Link to="/login">
            <p className="log">LOGIN</p>
          </Link>
          <Link to="/register">
            <p className="log">REGISTER</p>
          </Link>
          <Link to="/cart">
            <a href="">
              <img src={cart} className="cart" alt="" />
            </a>
          </Link>
        </div>
      </div>

      <div className="middle">
        <h3>HEADPHONE PRO</h3>
        <h1>And then the pro comes</h1>
        <p>Lorem ipsum dolor sitiua quae excepturi explicabo.</p>
        <p>Starting from $1899</p>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default Header;

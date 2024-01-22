import React, { useReducer, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { useCartContext } from "../../context/cart_context";
import remove from "../images/remove.png";
import immg from "../images/cart.png";

const Cart = () => {
  const { cart } = useCartContext();
  // console.log(cart);

  const {
    removeItem,
    clearCart,
    setDecrease,
    setIncrease,
    total_item,
    total_price,
  } = useCartContext();

  return (
    <div>
      <div className="container" style={{ background: "hsl(0, 0%, 90%)" }}>
        <div className="logo" style={{ color: "black" }}>
          ELECTRO
        </div>
        <nav>
          <ul style={{ fontWeight: "bold" }}>
            <li>HOME</li>
            <li>SHOP</li>
            <li>ABOUT</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <div className="last">
          <Link to="/cart">
            <span>
              <a href="">
                <img src={immg} className="immg" width="15%" alt="cart" />
              </a>
              <span className="item">{total_item}</span>
            </span>
          </Link>
        </div>
      </div>

      <div className="car">
        <div className="small-container">
          <div className="row">
            <div className="column">
              <table>
                <tr>
                  <th>Products Details</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
                {cart.length === 0 && (
                  <p style={{ textAlign: "center" }}>No items in the Cart</p>
                )}
                {cart.map((item) => (
                  <tr>
                    <td className="pd">
                      <img src={item.Image} width="15%" alt="" />
                      {item.name}
                    </td>
                    <td className="but">
                      <span onClick={() => setDecrease(item.id)}>-</span>
                      <span className="num">{item.quantity}</span>
                      <span onClick={() => setIncrease(item.id)}>+</span>
                    </td>
                    <td>{`$${item.price * item.quantity}`}</td>
                    <tr>
                      <img
                        onClick={() => removeItem(item.id)}
                        src={remove}
                        alt=""
                      />
                    </tr>
                  </tr>
                ))}
              </table>
              <Link to="/shop">
                <button className="btn">Continue Shopping</button>
              </Link>
              <button className="btn" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
            <div className="column">
              <div className="inner">
                <span>
                  <span className="subtotal">Cart Subtotal</span>
                  <span className="price">${total_price}</span>
                </span>
                <hr />
                <ul>
                  <li>Safe dilevery</li>
                  <li>will be dilevered in 3-4 working days</li>
                  <li>
                    shipping Fee <strong>5$</strong>
                  </li>
                </ul>
                <hr />
                <span>
                  <span className="subtotal">Total</span>
                  <span className="price p2">${total_price + 5}</span>
                </span>
                <button>Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;

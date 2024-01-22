import React from "react";
import "./Products.css";
import MoreProducts from "../products2/MoreProducts";
import { ProductData } from "../ProductData.js";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cart_context.js";

const Products = () => {
  let box = document.querySelector(".product-container");

  const btnpre = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const btnnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  const { addToCart } = useCartContext();

  return (
    <div className="products">
      <div className="small-container">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Top Deals of The Day
        </h2>
        <div className="row">
          {ProductData.map((data) => (
            <div className="row">
              <div className="col3" key={data.id}>
                <img src={data.Image} alt="image" />
                <NavLink
                  to="/cart"
                  onClick={() =>
                    addToCart(data.id, data.name, data.price, data.Image)
                  }
                >
                  <button className="cbtn">Add To Cart</button>
                </NavLink>
                <h6>{data.type}</h6>
                <h3>{data.name}</h3>
                <h3>{`$${data.price}`}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="ad">
          <div className="text">
            <h6>SUPER DEAL</h6>
            <h2>APPLE iPhone 15</h2>
            <h2>$1,099</h2>
            <button>SHOP NOW</button>
          </div>
        </div>

        <div className="contain">
          <div className="box">
            <div className="text2">
              <h6>TOP DEALS</h6>
              <h2>APPLE 2023</h2>
              <h2>MacBook AIR M2</h2>
              <button className="mac">SHOP NOW </button>
            </div>
          </div>
          {/* carousel */}

          <div className="product-carousel">
            <button className="pre-btn" onClick={btnpre}>
              <p>&lt;</p>
            </button>
            <button className="next-btn" onClick={btnnext}>
              <p>&gt;</p>
            </button>

            <div className="product-container">
              {ProductData.toReversed().map((data) => (
                <div className="cor">
                  <img src={data.Image} alt="" />
                  <h3>{data.name}</h3>
                  <h3>{data.price}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <MoreProducts />
    </div>
  );
};

export default Products;

// HARD CODED using html

{
  /* <div className="col3">
                <img src={product1} alt="" />
                <button className='cbtn'>Add To Cart</button>
                <h6>PHONES</h6>
                <h3>Phone 13 Pro</h3>
                <h3>$2000.00</h3>
            </div>
            <div className="col3">
                <img src={product2} alt="" />
                <button className='cbtn'>Add To Cart</button>
                <h6>HEADPHONES</h6>
                <h3>Uborn P45 Wireless Pro</h3>
                <h3>$199.99</h3>
            </div>
            <div className="col3">
                <img src={product3} alt="" />
                <button className='cbtn'>Add To Cart</button>
                <h6>CAMERA</h6>
                <h3>Nikon lens A43</h3>
                <h3>$80.00</h3>
            </div>
            <div className="col3">
                <img src={product4} alt="" />
                <button className='cbtn'>Add To Cart</button>
                <h6>SMARTWATCHES</h6>
                <h3>Fire-boult Smartwatch</h3>
                <h3>$30.00</h3>
            </div>
            <div className="col3">
                <img src={product5} alt="" />
                <button className='cbtn'>Add To Cart</button>
                <h6>PLAYSTATION</h6>
                <h3>PS% Gamepad pro 4</h3>
                <h3>$56.00</h3>
            </div>
            <div className="col3">
                <img src={product6} alt="" />
                <button className='cbtn'>Add To Cart</button>
                <h6>LAPTOPS</h6>
                <h3>Macbook air M2</h3>
                <h3>$3999.99</h3>
            </div> */
}

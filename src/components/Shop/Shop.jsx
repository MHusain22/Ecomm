import "./Shop.css";
import { NavLink } from "react-router-dom";
import { ProductData } from "../ProductData.js";
import { useCartContext } from "../../context/cart_context.js";
import { useFilterContext } from "../../context/filter_context.js";


const Shop = () => {
  const { addToCart } = useCartContext();
  const { sorting, updateFilterValue } = useFilterContext();
  const {
    filters: { text,type },
  } = useFilterContext();

  //to get unique data for each fields
  const getUniqueData = (data,property) => {
    let newVal = data.map((currEl) => {
      return currEl[property];
    });
    return (newVal = ["All",...new Set(newVal)]); //to get type category only once except all 
    // console.log(newVal);
  }

  //unique data
  const categoryData = getUniqueData(ProductData,"type");

  return (
    <div className="shop">
      <div className="leftshop">
        <h3>Category</h3>
        {/* {
          categoryData.map((currElem,index) => {
              return <button key={index}
                type="button"
                name="type"
                value={currElem}
                onClick={updateFilterValue}
              >
                {currElem}
              </button>
          })
        } */}
        <ul>
          <li>All</li>
          <li>Phones</li>
          <li>Laptop</li>
          <li>PlayStation</li>
          <li>Headphones</li>
          <li>SmartWatch</li>
        </ul>
        <h3>Company</h3>
        <select className="compselect" name="" id="">
          <option value="sfda">Apple</option>
          <option value="xsa">Samsung</option>
          <option value="as">Nikon</option>
          <option value="aa">FireBoult</option>
        </select>
        <h3>Price</h3>
        <div className="fl">
          <label for="vol">value</label>
          <input type="range" id="vol" name="vol" min="0" max="100"></input>
          <button className="btn">Clear Filter</button>
        </div>
      </div>
      <div className="small-container">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Products</h2>
        <form onSubmit={(e) => e.preventDefault()} action="">
                <input type="text" name="text" value={text} onChange={updateFilterValue} />
            <div className="search">
                
            </div>
        </form>
        <label htmlFor="sort"></label>
        <select onClick={sorting} name="sort" id="sort" className="sortselect">
          <option value="lowest">Price(low to high)</option>
          <option value="highest">Price(high to low)</option>
          <option value="a-z">Price(a-z)</option>
          <option value="z-a">Price(z-a)</option>
        </select>
        <div className="row">
          {ProductData.map((data) => (
            <div className="row">
              <div className="coln" key={data.id}>
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
      </div>
    </div>
  );
};

export default Shop;

import React from 'react'
import Header from './header/Header'
import Products from './products/Products'
import Footer from './footer/Footer'
import Card from './cards/Card'
import { Link } from 'react-router-dom';
import product1 from './images/product1.jpg';

const Home = () => {
  return (
    <div>
    <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
     <Header />
      <Card />
      <Products />
      <Footer />
      </Link>

    </div>
  )
}

export default Home

{/* using props */}
{/* <Products title="PHONES" name="iPhone 13 pro" price="$2000" img={product1}/> */}
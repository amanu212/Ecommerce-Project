import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
//Import the data for the products container
//import { products } from '../../Starting-code/data/products'
import Header from '../../components/Header'
import ProductsGrid from './ProductsGrid'
import HomeFavicon from '../../assets/images/home-favicon.png'
import './HomePage.css'

function HomePage({ products, cart, loadCart }) {

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const filteredProducts = products.filter((product) => {
    if(!search) {
      return true;
    }

    return product.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <>
      <title>Home Page</title>
      <link rel="icon" type="image/svg+xml" href={HomeFavicon} />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid 
          products={products}
          filteredProducts={filteredProducts}
          loadCart={loadCart}
        />
      </div>
    </>
  );
}

export default HomePage;
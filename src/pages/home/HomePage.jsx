import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
//Import the data for the products container
//import { products } from '../../Starting-code/data/products'
import  Header from '../../components/Header'
import ProductsGrid from './ProductsGrid'
import HomeFavicon from '../../assets/images/home-favicon.png'
import './HomePage.css'
import { formatMoney } from '../../utils/formatMoney'


  function HomePage({products, cart, loadCart})  {

  return (
    <>
      <title>Home Page</title>
      <link rel="icon" type="image/svg+xml" href={HomeFavicon} />

      <Header cart = {cart} />

    <div className="home-page">
      <ProductsGrid products = {products}
                    loadCart = {loadCart}/>
    </div>
  </>
  );
}

export default HomePage;
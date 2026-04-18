import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Product from './Product'
import { formatMoney } from '../../utils/formatMoney'
import './Homepage.css'


function ProductsGrid({ loadCart, filteredProducts }) {

  window.axios = axios;

  return (
    <div className="products-grid">
      {filteredProducts.map((product) => {

        return (
          <Product key={product.id} product={product}
            loadCart={loadCart}
            filteredProducts={filteredProducts}
          />
        )
      })}
    </div>
  ) 
}

export default ProductsGrid

import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Product from './Product'
import { formatMoney } from '../../utils/formatMoney'
import './Homepage.css'


function ProductsGrid({ products, loadCart }) {

  return (

    <div className="products-grid">

      {products.map((product) => {

        return (
          <Product key={product.id} product={product}
            loadCart={loadCart}
          />
        )
      })}
    </div>
  )
}

export default ProductsGrid

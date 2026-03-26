import React from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
import './Checkout.css'
import { Fragment } from 'react'
import { formatMoney } from '../../utils/formatMoney'

function CartItemDetails({ cart, item, loadCart }) {

  const [cartQuantity, setCartQuantity] = useState(1);

  const quantityContainer = useRef(null)
  const updateSpan = useRef(null)
  const deleteSpan = useRef(null)

  const deleteCartItem = async () => {

    await axios.delete(`/api/cart-items/${item.productId}`, {
      productId: item.productId
    })

    await loadCart();
  }

  const updateCartItem = async () => {

    await axios.put(`/api/cart-items/${item.productId}`, {
      productId: item.productId,
    })   
  }


  return (
    <Fragment>
      <img className="product-image"
        src={item.product.image} />

      <div className="cart-item-details">
        <div className="product-name">
          {item.product.name}
        </div>
        <div className="product-price">
          {formatMoney(item.product.priceCents)}
        </div>
        <div ref={quantityContainer} className="product-quantity">
          <span>
            Quantity: <span className="quantity-label">{item.quantity}</span>
          </span>
          <span className="update-quantity-link link-primary" ref={updateSpan} onClick = {updateCartItem}>
            Update
          </span>
          <span ref={deleteSpan} className="delete-quantity-link link-primary" onClick = {deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </Fragment>
  )
}

export default CartItemDetails
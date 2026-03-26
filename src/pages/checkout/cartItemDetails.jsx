import React from 'react'
import { useState, useRef } from 'react'
import './Checkout.css'
import { Fragment } from 'react'
import { formatMoney } from '../../utils/formatMoney'

function CartItemDetails({ cart, item, loadCart }) {

  const [cartQuantity, setCartQuantity] = useState(1);

  const quantityContainer = useRef(null)
  const updateSpan = useRef(null)
  const deleteSpan = useRef(null)

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
          <span className="update-quantity-link link-primary" ref={updateSpan}>
            Update
          </span>
          <span ref={deleteSpan} className="delete-quantity-link link-primary">
            Delete
          </span>
        </div>
      </div>
    </Fragment>
  )
}

export default CartItemDetails
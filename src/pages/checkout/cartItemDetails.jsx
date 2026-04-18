import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Checkout.css'
import { Fragment } from 'react'
import { formatMoney } from '../../utils/formatMoney'

function CartItemDetails({ item, loadCart }) {

  const [cartQuantity, setCartQuantity] = useState(item.quantity);
  const [isEditing, setIsEditing] = useState(false);



  const deleteCartItem = async () => {

    await axios.delete(`/api/cart-items/${item.productId}`, {
      productId: item.productId
    })

    await loadCart();
  }

   

  const updateInputValue = (event) => {
    const cartQuantitySelected = Number(event.target.value);
    setCartQuantity(cartQuantitySelected);
  }

  const updateCartItemKeyDown = async (event) => {
    if (event.key === 'Enter') {
      await updateCartItem();
    }

    else if (event.key === 'Escape') {
      setIsEditing(false);
      setCartQuantity(item.quantity);
    }
  }

  const updateCartItem = async () => {

    await axios.put(`/api/cart-items/${item.productId}`, {
      productId: item.productId,
      quantity: cartQuantity
    })

    await loadCart();
    setIsEditing(false)
  }

  useEffect(() => {
    setCartQuantity(item.quantity)
  }, [item.quantity])


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
        <div className="product-quantity">
          {isEditing === false ? (

            <>
              <span className="quantity-span">
                Quantity: <span className="quantity-label">{item.quantity}</span>
              </span>
              <span className="update-quantity-link link-primary" onClick={() => {setIsEditing(true)}}>
                Update
              </span>
              <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
                Delete
              </span>
            </>
          )
            : (
              <>
                <input value={cartQuantity} type='number' className='update-input-field' onChange={updateInputValue} onKeyDown={updateCartItemKeyDown} />
                <span onClick={updateCartItem} className = 'save-cancel-span'>Save</span>
                <span onClick={() => {setIsEditing(false)}} className = 'save-cancel-span'>Cancel</span>
              </>
            )
          }

        </div>
      </div>
    </Fragment>
  )
}

export default CartItemDetails
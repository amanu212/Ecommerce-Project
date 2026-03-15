import React from 'react'
import { Link } from 'react-router'

import LockIcon from '../../assets/images/icons/checkout-lock-icon.png'
import './CheckoutHeader.css'

function CheckoutHeader({cart}) {
  let totalQuantity = 0
  cart.forEach((item) => {
    totalQuantity += item.quantity;
  })


  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="logo" src="images/logo.png" />
            <img className="mobile-logo" src="images/mobile-logo.png" />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (<Link className="return-to-home-link"
            to="/">{totalQuantity} items</Link>)
        </div>

        <div className="checkout-header-right-section">
          <img src={LockIcon} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutHeader
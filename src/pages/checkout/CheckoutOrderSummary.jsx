import React from 'react'
import dayjs from 'dayjs'
import CartItemDetails from './cartItemDetails'
import DeliveryDate from './DeliveryDate'
import DeliveryOptions from './DeliveryOptions'
import { formatMoney } from '../../utils/formatMoney'
import './Checkout.css'
function CheckoutOrderSummary({cart, deliveryOptions, loadCart}) {
  
  return (
    <div className="order-summary">

      {deliveryOptions.length > 0 && cart.map((item) => {

        const selectedDeliveryOption = deliveryOptions
          .find((deliveryOption) => {
            return deliveryOption.id === item.deliveryOptionId
          })


        return (
          <div key={item.id} className="cart-item-container">
            <DeliveryDate selectedDeliveryOption = {selectedDeliveryOption} /> 

            <div className="cart-item-details-grid">
              <CartItemDetails cart = {cart}
                               item = {item}
                               loadCart = {loadCart}/>

              <DeliveryOptions item = {item} 
                               deliveryOptions = {deliveryOptions}
                               loadCart = {loadCart}/>

            </div>
          </div>
        )
      })
      }
    </div>
  )
}

export default CheckoutOrderSummary
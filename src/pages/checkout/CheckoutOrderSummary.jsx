import React from 'react'
import dayjs from 'dayjs'
import CartItemDetails from './cartItemDetails'
import DeliveryDate from './DeliveryDate'
import { formatMoney } from '../../utils/formatMoney'
import './Checkout.css'
function CheckoutOrderSummary({cart, deliveryOptions}) {
  
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
              item = {item}/>

              <div className="delivery-options">
                <div className="delivery-options-title">
                  Choose a delivery option:
                </div>
                {deliveryOptions.map((deliveryOption) => {

                  let priceString = 'Free Shipping'

                  if (deliveryOption.priceCents > 0) {
                    priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`
                  }

                  return (
                    <div key={deliveryOption.id} className="delivery-option">
                      <input type="radio"
                        checked={deliveryOption.id === item.deliveryOptionId}
                        className="delivery-option-input"
                        name={`delivery-option-${item.productId}`} />
                      <div>
                        <div className="delivery-option-date">
                          {dayjs(deliveryOption.
                            estimatedDeliveryTimeMs).format('dddd, MMMM, D')}
                        </div>
                        <div className="delivery-option-price">
                          {priceString}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })
      }
    </div>
  )
}

export default CheckoutOrderSummary
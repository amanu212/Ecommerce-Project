import React from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import { formatMoney } from '../../utils/formatMoney'



function DeliveryOptions( { deliveryOptions, item, loadCart} ) {
  //{console.log("All delivery options:", deliveryOptions)}
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>
      
      {deliveryOptions.map((deliveryOption) => {
        
        let priceString = 'Free Shipping'

        if (deliveryOption.priceCents > 0) {
          priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`
        }
        
        const updateDeliveryOptions = async () => {

          await axios.put(`/api/cart-items/${item.productId}`, {
            deliveryOptionId: deliveryOption.id
          })

         await loadCart();
        }
         
        return (
          <div key={deliveryOption.id} className="delivery-option" onClick={updateDeliveryOptions}>
            <input type="radio"
              className="delivery-option-input"
              name={`delivery-option-${item.productId}`} 
              checked={deliveryOption.id === item.deliveryOptionId}/>
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.
                  estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                 
              </div>
              <div className="delivery-option-price">
                {priceString}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DeliveryOptions
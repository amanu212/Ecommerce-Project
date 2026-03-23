import React from "react"
import { Fragment } from "react"
import dayjs from 'dayjs'
import BuyAgain from '../../assets/images/icons/buy-again.png'

function OrderDetailsGrid({orders, order}) {

  console.log(orders)
  return (
    <div className="order-details-grid">
      {order.products.map((orderItem) => {
        //{console.log(order.Id)}
        return (
          <Fragment key={orderItem.productId}>
            <div className="product-image-container">
              <img src={orderItem.product.image} />
            </div>

            <div className="product-details">
              <div className="product-name">
                {orderItem.product.name}
              </div>
              <div className="product-delivery-date">
                Arriving On: {dayjs(orderItem.estimatedDeliveryTimeMs).format('MMMM, D')}
              </div>
              <div className="product-quantity">
                Quantity: {orderItem.quantity}
              </div>
              <button className="buy-again-button button-primary">
                <img className="buy-again-icon" src={BuyAgain} />
                <span className="buy-again-message">Add to Cart</span>
              </button>
            </div>

            <div className="product-actions">
              <a href={`/tracking/${order.id}/${orderItem.productId}`}>
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>
          </Fragment>
        )
      })
      }
    </div>

  )
}

export default OrderDetailsGrid
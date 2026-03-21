import React from 'react'
import { Fragment } from 'react'
import dayjs from 'dayjs'
import { formatMoney } from '../../utils/formatMoney'
import './orders.css'
import BuyAgain from '../../assets/images/icons/buy-again.png'

function OrdersGrid({ orders }) {

  return (
    <div className="orders-grid">
      {orders.length > 0 && orders.map((order) => {

        return (
          <div key={order.id} className="order-container">

            <div className="order-header">
              <div className="order-header-left-section">
                <div className="order-date">
                  <div className="order-header-label">Order Placed:</div>
                  <div>{dayjs(order.orderTimeMs).format('MMMM, D')}</div>
                </div>
                <div className="order-total">
                  <div className="order-header-label">Total:</div>
                  <div>{formatMoney(order.totalCostCents)}</div>
                </div>
              </div>

              <div className="order-header-right-section">
                <div className="order-header-label">Order ID:</div>
                <div>{order.id}</div>
              </div>
            </div>

            <div className="order-details-grid">
              {order.products.map((orderItem) => {
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
                      <a href="/tracking">
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
          </div>
        )
      })
      }
    </div>

  )
}

export default OrdersGrid
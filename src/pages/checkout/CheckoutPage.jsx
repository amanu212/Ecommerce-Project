import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react'
import CheckoutHeader from './CheckoutHeader';
import CartFavicon from '../../assets/images/cart-favicon.png'
import './Checkout.css'
import { formatMoney } from '../../../src/utils/formatMoney'
import dayjs from 'dayjs';

function CheckoutPage({cart}) {


  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
      .then((response) => {
        setDeliveryOptions(response.data)
      })


    axios.get('/api/payment-summary')
      .then((response) => {
        setPaymentSummary(response.data)
      })
  }, [])

  console.log(paymentSummary);


  //console.log(deliveryOptions);

  /*
  const today = dayjs();
  console.log(today.format())

  //console.log(cart)
  */

  return (
    <>

    <title>Checkout Page</title>
    <link rel="icon" type="image/svg+xml" href={CartFavicon} />

    <CheckoutHeader cart = {cart}/>

    <div className="checkout-page">
      <div className="page-title">Review your order</div>

      <div className="checkout-grid">
        <div className="order-summary">
          
          { cart.map((item) => {

              const selectedDeliveryOption = deliveryOptions
                .find((deliveryOption) => {
                 return deliveryOption.id === item.deliveryOptionId
              })


              return (
              <div key = {item.id} className="cart-item-container">
                <div className="delivery-date">
                  Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                </div>

                <div className="cart-item-details-grid">
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
                      <span>
                        Quantity: <span className="quantity-label">{item.quantity}</span>
                      </span>
                      <span className="update-quantity-link link-primary">
                        Update
                      </span>
                      <span className="delete-quantity-link link-primary">
                        Delete
                      </span>
                    </div>
                  </div>

                  <div className="delivery-options">
                      <div className="delivery-options-title">
                        Choose a delivery option:
                      </div>
                      {deliveryOptions.map((deliveryOption) => {

                        let priceString = 'Free Shipping'

                        if(deliveryOption.priceCents > 0) {
                          priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`
                        }
                      
                        return (
                          <div key = {deliveryOption.id} className="delivery-option">
                            <input type="radio" 
                                   checked = {deliveryOption.id === item.deliveryOptionId}
                              className="delivery-option-input"
                              name= {`delivery-option-${item.productId}`} />
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

        <div className="payment-summary">
          {paymentSummary && (
              <>
              <div className="payment-summary-title">
              Payment Summary
              </div>

              <div className="payment-summary-row">
              <div>Items ({paymentSummary.totalItems}):</div>
              <div className="payment-summary-money">{formatMoney(paymentSummary.productCostCents)}</div>
              </div>

              <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">{formatMoney(paymentSummary.shippingCostCents)}</div>
              </div>

              <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">{formatMoney(paymentSummary.totalCostBeforeTaxCents)}</div>
              </div>

              <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">{formatMoney(paymentSummary.taxCents)}</div>
              </div>

              <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">{formatMoney(paymentSummary.totalCostCents)}</div>
              </div>

              <button className="place-order-button button-primary">
              Place your order
              </button>
              </>
          )}
            
          </div>
      </div>
    </div>
    </>
  );
}

export default CheckoutPage;
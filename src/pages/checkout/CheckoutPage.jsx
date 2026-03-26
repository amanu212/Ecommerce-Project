import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react'
import CheckoutHeader from './CheckoutHeader';
import CheckoutOrderSummary from './CheckoutOrderSummary'
import PaymentSummary from './PaymentSummary';
import CartFavicon from '../../assets/images/cart-favicon.png'
import './Checkout.css'
import { formatMoney } from '../../../src/utils/formatMoney'
import dayjs from 'dayjs';

function CheckoutPage({cart, loadCart}) {


  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {

      const deliveryOptionsData = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
        setDeliveryOptions(deliveryOptionsData.data)

      const paymentSummaryData = await axios.get('/api/payment-summary')
        setPaymentSummary(paymentSummaryData.data)

    }
    fetchCheckoutData()
  }, [])

  //console.log(paymentSummary);


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

        <CheckoutOrderSummary cart = {cart} 
                      deliveryOptions = {deliveryOptions}
                      loadCart = {loadCart}/>

        <PaymentSummary paymentSummary = {paymentSummary} />
      </div>
    </div>
    </>
  );
}

export default CheckoutPage;
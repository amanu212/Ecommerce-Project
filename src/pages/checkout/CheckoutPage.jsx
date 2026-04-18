import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react'
import CheckoutHeader from './CheckoutHeader';
import CheckoutOrderSummary from './CheckoutOrderSummary'
import PaymentSummary from './PaymentSummary';
import CartFavicon from '../../assets/images/cart-favicon.png'
import './Checkout.css'

function CheckoutPage({cart, loadCart}) {

  //console.log(cart)
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  const fetchCheckoutData = async () => {

    const deliveryOptionsData = await axios.get('/api/delivery-options')
    //console.log("🔍 Raw delivery options from backend:", deliveryOptionsData.data);  

    const processedOptions = deliveryOptionsData.data.map(option => ({
      ...option,
      estimatedDeliveryTimeMs: Date.now() + (option.deliveryDays * 24 * 60 * 60 * 1000)
    }));

    //console.log("🚚 Processed delivery options with estimated delivery times:", processedOptions);
    setDeliveryOptions(processedOptions);

    const paymentSummaryData = await axios.get('/api/payment-summary')
      setPaymentSummary(paymentSummaryData.data);
      console.log("💰 Payment summary from backend:", paymentSummaryData.data);
  }

  useEffect(() => {

    fetchCheckoutData()
    
  }, [cart])

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

        <PaymentSummary paymentSummary = {paymentSummary} 
                        loadCart = {loadCart}/>
      </div>
    </div>
    </>
  );
}

export default CheckoutPage;
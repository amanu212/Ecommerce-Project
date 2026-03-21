import React from 'react'
import axios from 'axios'
import { useEffect, useState, Fragment } from 'react'
import dayjs from 'dayjs';
import Header from '../../components/Header'
import OrdersGrid from './OrdersGrid'
import OrderLogo from '../../assets/images/orders-favicon.png'
import BuyAgain from '../../assets/images/icons/buy-again.png'
import './orders.css'
import { formatMoney } from '../../utils/formatMoney';

  function OrderPage({ cart }) {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
      axios.get(('/api/orders?expand=products'))
        .then((response) => {
          setOrders(response.data)
        })
    }, []);

    //console.log(orders)
    return (
      <>

        <title>Orders Page</title>
        <link rel="icon" type="image/svg+xml" href={OrderLogo} />

        <Header cart={cart} />

        <div className="orders-page">
          <div className="page-title">Your Orders</div>
          <OrdersGrid orders = {orders} />

        </div>
      </>
    )
  }

export default OrderPage;
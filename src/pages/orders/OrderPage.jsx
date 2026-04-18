import React from 'react'
import axios from 'axios'
import { useEffect, useState, Fragment, useNavigate } from 'react'
import dayjs from 'dayjs';
import Header from '../../components/Header'
import OrdersGrid from './OrdersGrid'
import OrderLogo from '../../assets/images/orders-favicon.png'
import BuyAgain from '../../assets/images/icons/buy-again.png'
import './orders.css'
import { formatMoney } from '../../utils/formatMoney';

  function OrderPage({ cart, loadCart }) {

    const [orders, setOrders] = useState([]);
    window.axios = axios;
      const ordersData = async () => {
        const ordersData = await axios.get('/api/orders?expand=products')
        console.log(ordersData.data)  
        setOrders(ordersData.data)
      }

      useEffect(() => {
        ordersData();
      }, [])

      const resetOrders = async () => {
        await axios.delete('/api/orders')
        setOrders([]);
      }

      const navigate = useNavigate();

      

    //console.log(orders)
    return (
      <>

        <title>Orders Page</title>
        <link rel="icon" type="image/svg+xml" href={OrderLogo} />

        <Header cart={cart} />
        <button style={{ backgroundColor: 'lightgray', margin: '60px 0 0', border: 'none', padding: '10px 20px', cursor: 'pointer' }} onClick={resetOrders}>
          Reset the orders
        </button>
        <div className="orders-page">
          <div className="page-title">Your Orders</div>
          <OrdersGrid orders = {orders} 
                      loadCart = {loadCart}/>

        </div>
      </>
    )
  }

export default OrderPage;
import React from 'react'
import { Fragment } from 'react'
import dayjs from 'dayjs'
import OrderListHeader from './OrderListHeader'
import OrderDetailsGrid from './OrderDetailsGrid'
import { formatMoney } from '../../utils/formatMoney'
import './orders.css'
import BuyAgain from '../../assets/images/icons/buy-again.png'

function OrdersGrid({ orders }) {

  return (
    <div className="orders-grid">
      {orders.length > 0 && orders.map((order) => {

        return (
          <div key={order.id} className="order-container">

            <OrderListHeader orders = {orders}
                             order = {order} />


            <OrderDetailsGrid orders = {orders}
                             order = {order} />
          </div>
        )
      })
      }
    </div>

  )
}

export default OrdersGrid
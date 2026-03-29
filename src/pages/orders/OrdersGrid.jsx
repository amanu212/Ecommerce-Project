import React from 'react'
import { Fragment } from 'react'
import dayjs from 'dayjs'
import OrderListHeader from './OrderListHeader'
import OrderDetailsGrid from './OrderDetailsGrid'
import './orders.css'

function OrdersGrid({ orders, loadCart }) {
  //{console.log(orders)}
  return (

    

    <div className="orders-grid">
      {orders.length > 0 && orders.map((order) => {

        return (
          <div key={order.id} className="order-container">

            <OrderListHeader order = {order} />


            <OrderDetailsGrid order = {order}
                              loadCart = {loadCart} />
          </div>
        )
      })
      }
    </div>

  )
}

export default OrdersGrid
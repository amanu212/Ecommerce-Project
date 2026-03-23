import React from 'react'
import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import  HomePage  from './pages/home/HomePage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import OrderPage from './pages/orders/OrderPage'
import TrackingPage from './pages/TrackingPage'
import ErrorPage from './pages/404-page'
//import CheckoutPage from './pages/CheckoutPage'


function App() {

  const [products, setProducts ] = useState([])
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {

      const productsResponse = await axios.get('/api/products')
        setProducts(productsResponse.data)
        
      const cartsResponse = await axios.get('/api/cart-items?expand=product')
          setCart(cartsResponse.data)
    }

    getHomeData()

    const ordersData = async () => {
      const ordersData = await axios.get('/api/orders?expand=products')
        setOrders(ordersData.data)
    }

    ordersData();
    
  }, [])

  return (
    <Routes>
      <Route path = '/' element = {<HomePage cart = {cart}
                                             products = {products}/>} />
      <Route path="checkout" element = {<CheckoutPage cart = {cart}
                                                      products = {products}/>} />
      <Route path="orders" element = {<OrderPage cart = {cart} 
                                                 orders= {orders}/>} />
      <Route path="tracking/:orderId/:productId" element = {<TrackingPage cart = {cart}
                                                                          orders = {orders}/>} />
      <Route path = '*' element = {<ErrorPage />} />
    </Routes>
  )
}

export default App

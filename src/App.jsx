import React from 'react'
import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import  HomePage  from './pages/HomePage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import OrderPage from './Pages/OrderPage'
import TrackingPage from './pages/TrackingPage'
import ErrorPage from './pages/404-page'
//import CheckoutPage from './pages/CheckoutPage'


function App() {

  const [products, setProducts ] = useState([])
  const [cart, setCart] = useState([])
  
  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data)
        })

    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data)
      })
  }, [])

  return (
    <Routes>
      <Route path = '/' element = {<HomePage cart = {cart}
                                             products = {products}/>} />
      <Route path="checkout" element = {<CheckoutPage cart = {cart}
                                                      products = {products}/>} />
      <Route path="orders" element = {<OrderPage cart = {cart} />} />
      <Route path="tracking" element = {<TrackingPage/>} />
      <Route path = '*' element = {<ErrorPage />} />
    </Routes>
  )
}

export default App

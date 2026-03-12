import React from 'react'
import { Routes, Route } from 'react-router'
import  HomePage  from './pages/HomePage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import OrderPage from './Pages/OrderPage'
import TrackingPage from './pages/TrackingPage'
//import CheckoutPage from './pages/CheckoutPage'


function App() {
  return (
    <Routes>
      <Route path = '/' element = {<HomePage />} />
      <Route path="checkout" element = {<CheckoutPage/>} />
      <Route path="orders" element = {<OrderPage/>} />
      <Route path="tracking" element = {<TrackingPage/>} />
    </Routes>
  )
}

export default App

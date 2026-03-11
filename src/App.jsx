import React from 'react'
import { Routes, Route } from 'react-router'
import  HomePage  from './pages/HomePage'
import CheckoutPage from './Pages/CheckoutPage'
//import CheckoutPage from './pages/CheckoutPage'


function App() {
  return (
    <Routes>
      <Route index element = {<HomePage />} />
      <Route path="checkout" element = {<CheckoutPage/>} />
    </Routes>
  )
}

export default App

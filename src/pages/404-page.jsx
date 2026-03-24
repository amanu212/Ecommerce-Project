import React from 'react'

import Header from '../components/Header'
import '../components/Header.css'
import './404-page.css'

import ErrorFavicon from '../assets/images/error-favicon.jpg'

function ErrorPage( {cart}) {

  return (
    <>
    <title>Error Page</title>
    <link rel="icon" type="image/svg+xml" href={ErrorFavicon} />


    <Header cart = {cart} />
    <div className = "error-container">
      <p className = "error-message">The page you are looking for cannot be found</p>
    </div>
    
    </>
  )
}

export default ErrorPage;
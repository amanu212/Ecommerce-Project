import React from 'react'

// 1. Change 'header' to 'Header' (Capital H)
import Header from '../components/Header' 

// 2. Change 'header.css' to 'Header.css' (Capital H)

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
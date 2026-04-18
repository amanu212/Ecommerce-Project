import { NavLink } from 'react-router'
import React from "react";
import { useNavigate } from "react-router";
import "./Header.css"

import CartIcon from '../assets/images/icons/cart-icon.png'
import SearchArrow from '../assets/images/icons/search-icon.png'


  function Header({cart}) {

    const [searchTerm, setSearchTerm] = React.useState("");
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
      navigate(`/?search=${searchTerm}`);
    }
    
    let totalQuantity = 0;

    cart.forEach((item) => {
      totalQuantity += item.quantity
    })

    const handleSearch = () => {
      handleSearchChange({ target: { value: searchTerm } });
    }
    
    const handleKeyDown = (event) => { 
      if (event.key === 'Enter') {
        handleSearch();
      }
    }

    //console.log(searchTerm);
    return (
        <div className="header">
            <div className="left-section">
              <NavLink to="/" className="header-link">
                <img className="logo"
                  src="images/logo-white.png" />
                <img className="mobile-logo"
                  src="images/mobile-logo-white.png" />
              </NavLink>
            </div>

            <div className="middle-section">
              <input className="search-bar" type="text" placeholder="Search" value={searchTerm} onChange={handleSearchChange} onKeyDown = {handleKeyDown} />

              <button className="search-button" onClick={handleSearch}>
                <img className="search-icon" src={SearchArrow} />
              </button>
            </div>

            <div className="right-section">
              <NavLink className ="orders-link header-link" to="/orders">

                <span className="orders-text">Orders</span>
              </NavLink>

              <NavLink className="cart-link header-link" to="/checkout">
                <img className="cart-icon" src={CartIcon} />
                <div className="cart-quantity">{totalQuantity}</div>
                <div className="cart-text">Cart</div>
              </NavLink>
            </div>
          </div>
        )}

  export default Header;
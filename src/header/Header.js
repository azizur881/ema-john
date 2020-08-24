import React from 'react';
import logo from '../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div id="head">
            
            <img className ="head" src={logo} alt=""/>
            <nav className="nav-bar">
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>

        </div>
    );
};

export default Header;
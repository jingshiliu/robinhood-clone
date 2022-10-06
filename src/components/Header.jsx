import React from 'react';
import {ReactComponent as Logo} from '../svg/robinhood.svg'
import '../CSS/Header.css'

function Header(props) {
    return (
        <div className='Header'>
            <div className='header__logo'>
                <a href="#">
                    <Logo className='.Logo' />
                </a>
            </div>
            <div className='header__searchbar'>
                <input type="text" alt='search bar' placeholder='Search'/>
            </div>
            <div className="header__menu-items">
                <a href="#">Free Stocks</a>
                <a href="#">Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>
        </div>
    );
}

export default Header;
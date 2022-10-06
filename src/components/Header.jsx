import React from 'react';
import Logo from '../svg/robinhood.svg'

function Header(props) {
    return (
        <div className='Header'>
            <div className='header__logo'>
                <img src={Logo} alt="Robinhood logo" width={25}/>
            </div>
            <div className='header__searchbar'>
                <input type="text" alt='search bar'/>
            </div>
            <div className="header__menu-items"></div>
        </div>
    );
}

export default Header;

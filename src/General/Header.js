import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                PARAGON COMP
            </div>
            <div className="header__main">
                <nav className="header__nav">
                    <a className="header__navLink" href="/">HOME</a>
                    <a className="header__navLink" href="/about">ABOUT</a>
                    <a className="header__navLink" href="#">SERVICES</a>
                    <a className="header__navLink" href="#">PRODUCT</a>
                    <a className="header__navLink" href="#">MEDIA</a>
                    <a className="header__navLink" href="#">CONTACT</a>
                </nav>
                <span className="header__userServices">
                    <span className="header__userIcon">
                        <input className="header__userSearch" type="text" placeholder="Search.." />
                        <SearchIcon />
                    </span>
                    <ShoppingCartIcon className="header__userIcon" />
                </span>
            </div>
        </div>
    )
}

export default Header;
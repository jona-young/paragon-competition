import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
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
                    <a className="header__navLink" href="/contact">CONTACT</a>
                </nav>
                <span className="header__userServices">
                    <span className="header__userIcon">
                        <a href="#"><InstagramIcon style={{color:"black"}} /></a>
                        <a href="#"><FacebookIcon style={{color:"black"}}  /></a>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Header;
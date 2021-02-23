import React from 'react';
import './Footer.css';

function Footer () {
    return (
        <div className="footer">
            <div className="footer__box">
                Hours of Operation
                <br />
                <span className="footer__text">
                    M-F 9:30 AM - 6:00 PM
                    <br />
                    SAT 10:00 AM - 2:00 PM
                </span>

            </div>
            <div className="footer__box">
                Address
                <br />
                <span className="footer__text">
                    1681 LANGSTAFF ROAD UNIT 12
                    VAUGHAN, ON L4K 5T3 CANADA
                </span>
            </div>
            <div className="footer__box">
                Phone & Email
                <br />
                <span className="footer__text">
                    905-760-9996
                    <br />
                    SALES@PARAGONCOMPETITION.COM
                </span>
            </div>
        </div>
    )
}

export default Footer;
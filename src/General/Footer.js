import React from 'react';
import './Footer.css';

function Footer () {
    return (
        <div className="footer">
            <div className="footer__box">
                Hours of Operation
                <br />
                <p className="footer__text">
                    M-F 9:30 AM - 6:00 PM
                </p>
                <p className="footer__text">
                    SAT 10:00 AM - 2:00 PM
                </p>

            </div>
            <div className="footer__box">
                Address
                <br />
                <p className="footer__text">
                    1681 LANGSTAFF ROAD UNIT 12
                    VAUGHAN, ON L4K 5T3 CANADA
                </p>
            </div>
            <div className="footer__box dropbelow">
                Phone & Email
                <br />
                <p className="footer__text">
                    905-760-9996
                </p>
                <p className="footer__text">
                    SALES@PARAGONCOMPETITION.COM

                </p>
            </div>
        </div>
    )
}

export default Footer;
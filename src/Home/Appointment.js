import React from 'react';
import brand1 from '../Photos/service1.png';
import brand2 from '../Photos/service2.png';
import brand3 from '../Photos/service3.png';
import brand4 from '../Photos/service4.png';
import './Appointment.css';

function Appointment () {
    return (
        <div className="appointment__cover">
            <div className="appointment__box">
                <p className="appointment__title">
                    HOW LONG HAS IT BEEN SINCE YOU SERVICED YOUR DAMPERS?
                </p>
                <p className="appointment__text">
                    PROTECT YOUR INVESTMENT. AS THE FACTORY AUTHORIZED REBUILD CENTRE FOR AST, MOTON, OHLINS, AND JRZ IN CANADA, WE TAKE DAMPERS SERIOUSLY.
                </p>
                <a className="appointment__link" href="/contact">
                    <p className="appointment__book">
                        BOOK YOUR APPOINTMENT
                    </p>
                </a>
            </div>
            <div className="appointment__brands">
                <img className="appointment__singleBrand" src={brand1} />
                <img className="appointment__singleBrand" src={brand2} />
                <img className="appointment__singleBrand" src={brand3} />
                <img className="appointment__singleBrand" src={brand4} />
            </div>
        </div>
    )
}

export default Appointment;
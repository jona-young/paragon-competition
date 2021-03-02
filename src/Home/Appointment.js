import React from 'react';
import brand1 from '../Photos/service1.png';
import brand2 from '../Photos/service2.png';
import brand3 from '../Photos/service3.png';
import brand4 from '../Photos/service4.png';
import './Appointment.css';

function Appointment () {
    return (
        <div className="appointment__cover">
            <p className="appointment__title indent">
                HOW LONG HAS IT BEEN SINCE YOU SERVICED YOUR DAMPERS?
            </p>
            <p className="appointment__text indent">
                PROTECT YOUR INVESTMENT. AS THE FACTORY AUTHORIZED REBUILD CENTRE FOR AST, MOTON, OHLINS, AND JRZ IN CANADA, WE TAKE DAMPERS SERIOUSLY.
            </p>
            <p className="appointment__book">
                <a className="appointment__link" href="#">BOOK YOUR APPOINTMENT</a>
            </p>
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
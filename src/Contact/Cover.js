import React from 'react';
import './Cover.css';

function Cover () {
    return (
        <div className="cover">
            <div className="cover__center">
                <div className="cover__box">
                    <p className="cover__title">
                        CONTACT
                    </p>
                    <p className="cover__text">
                        WHETHER YOU NEED TO GEAR UP, GET FITTED, OR TALK SHOP WITH EXPERIENCED RACERS, WE'D LOVE TO HEAR FROM YOU.
                    </p>
                </div>
                <div className="cover__formbox">
                    <div className="cover__subbox">
                        <p className="cover__subheading">NAME</p>
                        <input className="cover__name" type="text" placeholder="Name.." />
                    </div>
                    <div className="cover__subbox">
                        <p className="cover__subheading">EMAIL</p>
                        <input className="cover__name" type="text" placeholder="Email.." />
                    </div>
                    <div className="cover__subbox">
                        <p className="cover__subheading">PHONE NUMBER</p>
                        <input className="cover__name" type="text" placeholder="Phone Number.." />
                    </div>
                    <div className="cover__submsg">
                        <p className="cover__subheading">MESSAGE</p>
                        <textarea className="cover__message" type="text" placeholder="Message.." />
                    </div>
                </div>
                <p className="cover__button">
                    <a className="cover__link" href="#">BOOK YOUR APPOINTMENT</a>
                </p>
            </div>
        </div>
    )
}

export default Cover;
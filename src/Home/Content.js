import React from 'react';
import './Content.css';

function Content () {
    return (
        <div className="content">
            <p className="content__title">
                MEET THE TEAM
            </p>
            <div className="content__box">
                <p className="content__subtitle">
                    YOU CAN'T ORDER EXPERIENCE OUT OF A CATALOGUE.
                </p>
                <p className="content__text">
                    OUR TEAM OF SEASONED RACERS CAN GEAR YOU UP FOR ANY DISCIPLINE THAT YOU RACE IN AND SHARE THEIR FIRSTHAND KNOWLEDGE. EXPERIENCE IS SO MUCH MORE THAN A PRODUCT DESCRIPTION.
                </p>
                <p className="content__about">
                    <a className="content__link" href="#">ABOUT US</a>
                </p>
            </div>

        </div>
    )
}

export default Content;
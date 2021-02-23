import React from 'react';
import Slideshow from '../Functions/Slideshow.js';
import Appointment from '../Functions/Appointment';
import './Home.css';

function Home () {
    return (
        <div className="Home">
            <Slideshow />
            <br />
            Content Page to break up the images and make it look clearner
            <br /><br />
            <Appointment />
        </div>
    )
}

export default Home;
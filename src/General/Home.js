import React from 'react';
import Slideshow from '../Home/Slideshow.js';
import Content from '../Home/Content.js';
import Appointment from '../Home/Appointment';

function Home () {
    return (
        <div>
            <Slideshow />
            <Content />
            <Appointment />
        </div>
    )
}

export default Home;
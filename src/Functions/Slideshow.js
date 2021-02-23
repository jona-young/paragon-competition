import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slideshow.css';

function Slideshow () {
    return (
        <Carousel showThumbs={false}>
            <div>
                <div className="slideshow__image1" />
                <span className="slideshow__text">LEADING BY EXPERIENCE</span>
            </div>
            <div>
                <div className="slideshow__image2" />
                <span className="slideshow__text">Experience Matters</span>
            </div>
            <div>
                <div className="slideshow__image3" />
                <span className="slideshow__text">Experience Paragon</span>
            </div>
        </Carousel>
    )
}

export default Slideshow;
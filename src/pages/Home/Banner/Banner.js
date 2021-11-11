import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/img0.avif';
import img2 from '../../../images/img1.avif';
import img3 from '../../../images/img2.avif';

import './Banner.css';
const Banner = () => {
    return (
        <div >
            <Carousel variant="dark">
                <Carousel.Item>
                    <div
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),url(${img1})` }} className='banner-pos'>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),url(${img2})` }} className='banner-pos'>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),url(${img3})` }} className='banner-pos'>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
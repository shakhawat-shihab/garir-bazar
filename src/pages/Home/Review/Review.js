import React from 'react';
import { useState } from "react";
import { Carousel, Spinner } from 'react-bootstrap';
import useReview from '../../../hooks/useReview';
import './Review.css';
import Rating from 'react-rating';

const Review = () => {
    const { review, isLoadingReview } = useReview();
    console.log(review);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    if (isLoadingReview) {
        return (
            <div className='my-3 text-center' >
                <h1 className='text-center fw-bold'>Our Cars</h1>
                <Spinner animation='grow'></Spinner>
            </div>);
    }
    else {
        return (
            <div className='my-5'>
                <h1 className='text-center fw-bold mb-5'>Happy Client's Review </h1>
                {/* <Container> */}
                <Carousel activeIndex={index} onSelect={handleSelect} fade variant='dark' className='px-3 px-md-5'>
                    {/* <Container> */}
                    {
                        review.map(x => <Carousel.Item>
                            <div className='row mx-0 g-3'>
                                <div className='col-md-4 d-flex align-items-center justify-content-end' id='review-user'>
                                    <img
                                        className="d-block rounded-circle"
                                        src={x.img}
                                        alt="First slide"
                                        width='150px'
                                        height='150px'
                                    />
                                </div>
                                <div className='col-md-7 d-flex flex-column align-items-center justify-content-center'>
                                    <h4 className='text-capitalize fw-bold'>{x.name}</h4>
                                    <Rating
                                        emptySymbol="fa fa-star-o fa-2x fs-5 text-warning"
                                        fullSymbol="fa fa-star fa-2x fs-5 text-warning"
                                        initialRating={x.rating}
                                        readonly
                                    />
                                    <h5 className='px-2 py-3'>{x.review}</h5>
                                </div>
                            </div>
                        </Carousel.Item>)
                    }
                </Carousel>
                {/* </Container> */}
            </div >
        );
    }
};

export default Review;
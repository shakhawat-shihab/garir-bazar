import React from 'react';
import Banner from '../Banner/Banner';
import CarDemo from '../CarDemo/CarDemo';
import Review from '../Review/Review';
import Specialities from '../Specialities/Specialities';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CarDemo></CarDemo>
            <Review></Review>
            <Specialities></Specialities>
        </div>
    );
};

export default Home;
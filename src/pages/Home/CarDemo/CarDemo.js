import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useCar from '../../../hooks/useCar';
import ServiceCard from '../../Service/ServiceCard/ServiceCard';


const CarDemo = () => {
    const { car, isLoadingCar } = useCar();
    if (isLoadingCar) {
        return (
            <div className='my-3 text-center' >
                <h1 className='text-center fw-bold'>Our Cars</h1>
                <Spinner animation='grow'></Spinner>
            </div>);
    }
    else {
        return (
            <div className='my-5'>
                <h1 className='text-center fw-bold'>Our Cars</h1>
                <Container>
                    <Row md={2} lg={3} sm={2} xs={1} className="g-3 m-0 mt-3">
                        {car.slice(0, 6).map(x => <ServiceCard key={x.id} data={x}></ServiceCard>)}
                    </Row>
                </Container>
            </div>
        );
    }

};

export default CarDemo;
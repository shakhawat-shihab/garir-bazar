import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useCar from '../../../hooks/useCar';
import { AiFillHome } from "react-icons/ai";
import { BsFillCartCheckFill } from 'react-icons/bs';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import air from '../../../images/car/air-con.svg';
import body from '../../../images/car/body-type-sedan.svg';
import condition from '../../../images/car/condition.svg';
import driver from '../../../images/car/drive-type.svg';
import fuel from '../../../images/car/fuel-type.svg';
import gear from '../../../images/car/gearbox.svg';
import mile from '../../../images/car/mileage.svg';
import year from '../../../images/car/year.svg';
import engine from '../../../images/car/engine.svg';
const ServiceDetails = () => {
    const { serviceId } = useParams();
    const history = useHistory();
    const { car, isLoadingCar } = useCar();
    const [currentService, setCurrentService] = useState({});
    //console.log('car ', car, serviceId, currentService);
    useEffect(() => {
        setCurrentService(car.find(x => x.id === serviceId));
    }, [car, serviceId]);

    return (
        isLoadingCar === false
            ?
            <div className='mt-5 pt-4'>
                <div className=''>
                    <h2 className='border-bottom text-center fw-bold py-3'>About <span className='text-primary'>{currentService?.name}</span> </h2>
                    <div className='mx-3 mt-3  text-center' >
                        <img src={currentService?.img} alt={" image of " + currentService?.name} width='75%' className='rounded' />
                    </div>
                    <Container className='py-4'>
                        <Row lg={4} md={3} xs={2} className='m-0 g-0 border-top'>
                            {
                                currentService?.engine &&
                                <Col >
                                    <div className='d-flex align-items-center justify-content-center border-bottom border-end border-start py-2'>
                                        <img src={engine} alt="" />
                                        <div className='d-flex flex-column align-items-center justify-content-center ps-3' >
                                            <p className='m-0'>ENGINE</p>
                                            <h5 className='text-capitalize'>{currentService?.engine}</h5>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {
                                currentService?.gearbox &&
                                <Col>
                                    <div className='d-flex align-items-center justify-content-center border-bottom border-end border-start py-2'>
                                        <img src={gear} alt="" />
                                        <div className='d-flex flex-column align-items-center justify-content-center ps-3' >
                                            <p className='m-0'>GEARBOX</p>
                                            <h5 className='text-capitalize'>{currentService?.gearbox}</h5>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {
                                currentService?.mileage &&
                                <Col>
                                    <div className='d-flex align-items-center justify-content-center border-bottom border-end border-start py-2'>
                                        <img src={mile} alt="" />
                                        <div className='d-flex flex-column align-items-center justify-content-center ps-3' >
                                            <p className='m-0'>MILAGE</p>
                                            <h5 className='text-capitalize'>{currentService?.mileage}</h5>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {
                                currentService?.year &&
                                <Col>
                                    <div className='d-flex align-items-center justify-content-center border-bottom border-end border-start py-2'>
                                        <img src={year} alt="" />
                                        <div className='d-flex flex-column align-items-center justify-content-center ps-3' >
                                            <p className='m-0'>YEAR</p>
                                            <h5>{currentService?.year}</h5>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {
                                currentService?.bodyType &&
                                <Col>
                                    <div className='d-flex align-items-center justify-content-center border-bottom border-end border-start py-2'>
                                        <img src={body} alt="" />
                                        <div className='d-flex flex-column align-items-center justify-content-center ps-3' >
                                            <p className='m-0'>BODYTYPE</p>
                                            <h5 className='text-capitalize'>{currentService?.bodyType}</h5>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {
                                currentService?.fuel &&
                                <Col>
                                    <div className='d-flex align-items-center justify-content-center border-bottom border-end border-start py-2'>
                                        <img src={fuel} alt="" />
                                        <div className='d-flex flex-column align-items-center justify-content-center ps-3' >
                                            <p className='m-0'>FUEL</p>
                                            <h5 className='text-capitalize'>{currentService?.fuel}</h5>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {
                                currentService?.airCon &&
                                <Col>
                                    <div className='d-flex align-items-center justify-content-center border-bottom border-end border-start py-2'>
                                        <img src={air} alt="" />
                                        <div className='d-flex flex-column align-items-center justify-content-center ps-3' >
                                            <p className='m-0'>AIRCON</p>
                                            <h5 className='text-capitalize'>{currentService?.airCon}</h5>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {
                                currentService?.driver &&
                                <Col>
                                    <div className='d-flex align-items-center justify-content-center border-bottom border-end border-start py-2'>
                                        <img src={driver} alt="" />
                                        <div className='d-flex flex-column align-items-center justify-content-center ps-3' >
                                            <p className='m-0'>DRIVER</p>
                                            <h5 className='text-capitalize'>{currentService?.driver}</h5>
                                        </div>
                                    </div>
                                </Col>
                            }
                            {
                                currentService?.condition &&
                                <Col>
                                    <div className='d-flex align-items-center justify-content-center border-bottom border-end border-start py-2'>
                                        <img src={condition} alt="" />
                                        <div className='d-flex flex-column align-items-center justify-content-center ps-3' >
                                            <p className='m-0'>CONDITION</p>
                                            <h5 className='text-capitalize'>{currentService?.condition}</h5>
                                        </div>
                                    </div>
                                </Col>
                            }
                        </Row>
                    </Container>
                    <div className='py-2 px-3'>
                        <h5 className=' fw-bold text-center'>
                            Price: <span className='text-warning'>{currentService?.price} ৳</span>
                        </h5>
                    </div>
                </div>
                <div className='py-4 text-center '>
                    <Button variant='primary' onClick={() => { history.push('/home') }} className='ms-2' >
                        Go Back to
                        <AiFillHome className='ps-2 fs-3' />
                    </Button>
                    <Button variant='primary' onClick={() => { history.push(`/order/${currentService?.id}`) }} className='ms-4' >
                        Purchase
                        <BsFillCartCheckFill className='ps-2 fs-3' />
                    </Button>
                </div>
            </div>
            :
            <div className='mt-5 pt-5 text-center' style={{ height: '100vh' }}>
                <Spinner animation='grow'></Spinner>
            </div>
    );
};

export default ServiceDetails;
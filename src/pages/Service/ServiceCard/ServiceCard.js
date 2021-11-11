import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useHistory } from 'react-router';
const ServiceCard = (props) => {
    const history = useHistory();
    const { id, name, img, price } = props.data;
    //console.log(props?.from);
    // /dashboard/manage-service
    return (
        < Col >
            <Card className='h-100 pb-3 shadow-sm service-card rounded' >
                {/* <div className='mx-auto '  > */}
                <img src={img} className='w-100 rounded-top' height='250px' alt={name} />
                {/* </div> */}
                <Card.Body className='py-2' >
                    <Card.Title className='text-primary fw-bold pb-2'>{name}</Card.Title>
                    <Card.Text style={{ textAlign: 'justify' }}>

                    </Card.Text>
                </Card.Body>
                <div className=' px-3 d-flex justify-content-between align-items-center '>
                    <div className='d-flex flex-column'>
                        <h5 className='text-warning fw-bold m-0'>
                            {price} ৳
                        </h5>
                        <br />
                        {
                            props.data?.offer && <span className='text-danger fw-bold'>({props.data.offer} % off)</span>
                        }
                    </div>
                    <Button variant='primary' onClick={() => { history.push(`/service/${id}`) }} >
                        Show Details
                        <BsFillInfoCircleFill className='ps-1 fs-4' />
                    </Button>
                </div>
                {
                    props?.from === '/dashboard/manage-service' &&
                    <div className='text-center mt-3 mb-2 '>
                        <Button variant='warning' onClick={() => props?.event(id)} className='text-danger'>
                            Delete
                        </Button>
                    </div>

                }
            </Card >
        </Col>

    );
};

export default ServiceCard;
import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router';
import swal from 'sweetalert';
import useCar from '../../../hooks/useCar';
import ServiceCard from '../../Service/ServiceCard/ServiceCard';

const ManageServices = () => {
    const { car, isLoadingCar, setCar } = useCar();
    const loc = useLocation();
    function handleServiceDelete(id) {
        //console.log('service delete id', id);
        swal({
            title: "Are you sure to Delete?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((x) => {
                if (x) {
                    fetch(`https://garir-bazar.herokuapp.com/deleteService/${id}`, {
                        method: 'delete'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal({
                                    title: "Successfully Deleted!",
                                    icon: "success",
                                    button: "Ok",
                                });
                                const remainingCar = car.filter(x => x.id !== id);
                                setCar(remainingCar);
                            }
                            else {
                                swal({
                                    title: "Failed to delete!",
                                    icon: "warning",
                                    button: "Ok",
                                });
                            }
                        })
                }
            });
    }
    return (
        <div>
            {
                !isLoadingCar ?
                    <div>
                        <Container>
                            <Row md={2} lg={3} sm={2} xs={1} className="g-2 m-0 my-3">
                                {
                                    car.map(x => <ServiceCard key={x.id} data={x} from={loc.pathname.toLocaleLowerCase()} event={handleServiceDelete}></ServiceCard>)
                                }
                            </Row>
                        </Container>
                    </div>
                    :
                    <div className='mt-5 pt-5 text-center' style={{ height: '100vh' }}>
                        <Spinner animation='grow'></Spinner>
                    </div>

            }
        </div>
    );
};

export default ManageServices;
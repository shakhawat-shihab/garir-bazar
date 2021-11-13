import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router';
import swal from 'sweetalert';
import useOrder from '../../../hooks/useOrder';
import SingleOrder from '../SingleOrder/SingleOrder'
const MyOrder = () => {
    window.scrollTo(0, 0);
    const location = useLocation();
    const { orders, isLoadingOrder, setOrders } = useOrder();
    //console.log('orders: ', orders, ' isLoadingOrder ', isLoadingOrder);
    const handleStatus = (desiredStatus, id) => {
        //console.log('delete')
        swal({
            title: "Are you sure to Delete?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((x) => {
                if (x) {
                    fetch(`https://garir-bazar.herokuapp.com/deleteOrder/${id}`, {
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
                                const remainingUsers = orders.filter(x => x._id !== id);
                                setOrders(remainingUsers);
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
                !isLoadingOrder
                    ?
                    orders.length
                        ?
                        <div className='row g-0 justify-content-center mb-5 mt-2'>
                            <div className='col-12 px-2 px-md-0 col-md-11 '>
                                <div className='row m-0 g-0 border-bottom border-top border-2 border-dark text-center'>
                                    <div className='col-md-10 col-8 border-end border-2 border-dark py-2'>
                                        <h4 className='fw-bold text-primary'>Orders</h4>
                                    </div>
                                    <div className='col-md-2 col-4 py-2'>
                                        <h4 className='fw-bold text-primary'>Status</h4>
                                    </div>
                                </div>
                                {
                                    orders.map(x => <SingleOrder data={x} key={x._id} from={location.pathname.toLowerCase()} event={handleStatus}></SingleOrder>)
                                }
                            </div>
                        </div>
                        :
                        <div style={{ height: '55vh' }} className='d-flex align-items-center justify-content-center' >
                            <h1 className='text-secondary fw-bold'>
                                You have no placed order
                            </h1>
                        </div>
                    :
                    <div className='mt-5 pt-5 text-center' style={{ height: '100vh' }}>
                        <Spinner animation='grow'></Spinner>
                    </div>
            }
        </div>
    );
};

export default MyOrder;
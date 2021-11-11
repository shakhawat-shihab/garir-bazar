import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router';
import useAllOrder from '../../../hooks/useAllOrder';
import SingleOrder from '../SingleOrder/SingleOrder';
import swal from 'sweetalert';
const ManageAllOrder = () => {
    window.scrollTo(0, 0);
    const location = useLocation();
    const { isLoadingAllOrder, allOrders, setAllOrders } = useAllOrder();
    //console.log('all orders: ', allOrders);
    const handleStatus = (desiredStatus, id) => {
        //console.log(desiredStatus, id);
        swal({
            title: "Are you sure to Change Status of this order?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((x) => {
                if (x) {
                    if (desiredStatus.status === 'Delete') {
                        fetch(`http://localhost:5000/deleteOrder/${id}`, {
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
                                    const remainingUsers = allOrders.filter(x => x._id !== id);
                                    setAllOrders(remainingUsers);
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
                    else {
                        const newArr = allOrders.map(x => {
                            if (x._id === id) {
                                x.status = desiredStatus.status;
                            }
                            return x;
                        });
                        fetch(`http://localhost:5000/updateOrder/${id}`, {
                            method: 'put',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify({ status: desiredStatus.status })
                        })
                            .then(resp => resp.json())
                            .then(data => {
                                // console.log(data);
                                if (data.modifiedCount > 0) {
                                    setAllOrders(newArr);
                                    swal({
                                        title: "The Order Status is successfully Changed",
                                        icon: "success",
                                        button: "Ok",
                                    });
                                }
                                else {
                                    swal({
                                        title: "Failed to update the status of the order",
                                        icon: "warning",
                                        button: "Ok",
                                    });
                                }
                            });
                    }

                }
            });




    }
    return (
        <div>
            {
                !isLoadingAllOrder
                    ?
                    allOrders.length
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
                                    allOrders.map(x => <SingleOrder data={x} key={x._id} from={location.pathname.toLocaleLowerCase()} event={handleStatus} ></SingleOrder>)
                                }
                            </div>
                        </div>
                        :
                        <div style={{ height: '55vh' }} className='d-flex align-items-center justify-content-center' >
                            <h1 className='text-secondary fw-bold'>
                                No order!!!
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

export default ManageAllOrder;
import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { NavLink, Switch, Route, useRouteMatch, useLocation, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../LogIn/AdminRoute/AdminRoute';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import Payment from '../Paymnet/Payment';
import './Dashboard.css'
const Dashboard = () => {
    const { user, isLoading, admin, isLoadingAdmin } = useAuth();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //for nested routing
    let { path, url } = useRouteMatch();
    //console.log(path, url);

    const style = {
        color: 'red'
    }
    return (
        <div className='mt-5 pt-4'>
            <div className='row  mx-0 py-2 border-bottom'>
                <div className='col-md-8 ' >
                    <h2 className='fw-bold text-center'>{user.displayName.trim() + "'s"} Dashboard </h2>
                </div>
                <div className='col-md-4'>
                    <div className='text-center' >
                        <Button variant="primary" onClick={handleShow} className="me-2">
                            Dashboard Menu
                        </Button>
                    </div>
                </div>
            </div>



            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton className='bg-secondary'>
                    <Offcanvas.Title className='text-white' >Dashboard</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>

                        {admin ? <>
                            <div className='drawer-list-item py-3 border-dark border-bottom '>
                                <h4 className='text-center m-0'>
                                    <NavLink exact to={`${url}`} activeStyle={style} style={{ textDecoration: 'none' }}>Profile</NavLink>
                                </h4>
                            </div>
                            <div className='drawer-list-item py-3 border-dark border-bottom'>
                                <h4 className='text-center m-0'>
                                    <NavLink exact to={`${url}/manage-order`} activeStyle={style} style={{ textDecoration: 'none' }}>Manage Orders</NavLink>
                                </h4>
                            </div>

                        </>
                            :
                            <>
                                <div className='drawer-list-item py-3 border-dark border-bottom '>
                                    <h4 className='text-center m-0'>
                                        <NavLink exact to={`${url}`} activeStyle={style} style={{ textDecoration: 'none' }}>Profile</NavLink>
                                    </h4>
                                </div>
                                <div className='drawer-list-item py-3 border-dark border-bottom'>
                                    <h4 className='text-center m-0'>
                                        <NavLink exact to={`${url}/payment`} activeStyle={style} style={{ textDecoration: 'none' }}>Payment</NavLink>
                                    </h4>
                                </div>
                            </>
                        }
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

            <div>
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>

                    <Route exact path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>

                    <AdminRoute path={`${path}/manage-order`}>
                        <ManageAllOrder></ManageAllOrder>
                    </AdminRoute>
                    {/* <AdminRoute path={`${path}/manage-orders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute> */}
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;
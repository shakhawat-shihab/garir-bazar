import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo_img from '../../../images/logo.png';
import profile from '../../../images/profile.png';
import './NavigationBar.css';
import { GrEdit } from "react-icons/gr";
import { GoSignOut } from "react-icons/go";
const NavigationBar = () => {
    const [showUser, setShowUser] = useState(false);
    const { user, logOut } = useAuth();
    const [pos, setPos] = useState(false);
    var prevScrollpos = window.pageYOffset;
    let { pathname } = useLocation();
    if (pathname === '/') {
        pathname = '/home';
    }
    function scrollOccured() {
        let currentScrollPos = window.pageYOffset;
        // console.log('c ', currentScrollPos, ' & p ', prevScrollpos);
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        }
        else {
            document.getElementById("navbar").style.top = "-71px";
        }
        prevScrollpos = currentScrollPos;
        if (currentScrollPos >= 20) {
            setPos(true);
        } else {
            setPos(false);
        }
    }
    window.addEventListener('scroll', scrollOccured);
    return (
        <div>
            <Navbar collapseOnSelect expand="md" variant="dark" id='navbar'
                className={'px-3 px-md-5 py-0 fixed-top bg-nav-md ' + (pathname === '/home' ? (pos ? ' bg-nav-2 ' : ' bg-nav-1 ') : 'bg-nav-2')}
            >
                {/* <Container> */}
                <Navbar.Brand as={NavLink} to='/home' className='py-3'>
                    <img src={logo_img} alt="Hospice logo" width='145px' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to='/home' activeClassName="selected" className='my-nav-link'  >
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/services' activeClassName="selected" className='my-nav-link'  >
                            Explore
                        </Nav.Link>

                        {
                            (user.displayName || user.email)
                                ?
                                <>
                                    <Nav.Link as={NavLink} to='/dashboard' activeClassName="selected" className='my-nav-link'  >
                                        Dashboard
                                    </Nav.Link>
                                    <NavDropdown
                                        title={
                                            <div className='h-100 d-flex align-items-center  '>
                                                {
                                                    user.photoURL
                                                        ?
                                                        <img src={user.photoURL} alt="" width='55px' height='40px' className='rounded-circle ' />
                                                        :
                                                        <img src={profile} alt="" width='55px' />
                                                }
                                            </div>
                                        }
                                        show={showUser}
                                        onMouseEnter={() => { setShowUser(true) }}
                                        onMouseLeave={() => { setShowUser(false) }}
                                        className='m-0'
                                        id="collasible-nav-dropdown" >
                                        <NavDropdown.Item as={NavLink} to='/dashboard' activeClassName="selected" >
                                            <GrEdit />
                                            {
                                                // !isLoading &&
                                                <span className='ps-2'>
                                                    {
                                                        user.displayName ?
                                                            user.displayName.substr(0, user?.displayName.indexOf(' ')) :
                                                            user.displayName
                                                    }
                                                </span>
                                            }
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={NavLink} to='/login' activeClassName="selected" onClick={logOut}  >
                                            <GoSignOut />
                                            <span className='ps-2'> Log Out </span>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </>
                                :
                                <Nav.Link as={NavLink} to='/login' activeClassName="selected" className='my-nav-link'  >
                                    Log In
                                </Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar >


        </div>
    );
};

export default NavigationBar;
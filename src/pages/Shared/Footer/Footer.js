import React from 'react';
import './Footer.css';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container bg-dark text-white">
                <div className="row m-0 py-3 px-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 ">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                                <h5 className="text-uppercase text-info">About</h5>
                                <ul className="list-unstyled text-uppercase mt-3" style={{ fontSize: "14px" }}>
                                    <li>About us</li>
                                    <li>Contact</li>
                                    <li>Work With Us</li>
                                    <li>Terms of Use</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                                <h5 className="text-uppercase text-info">Other Services</h5>
                                <ul className="list-unstyled text-uppercase mt-3" style={{ fontSize: "14px" }}>
                                    <li>Car Checkup</li>
                                    <li>Car Wash</li>
                                    <li>Tier replacement</li>
                                    <li>Repair AC</li>
                                    <li>Break Change</li>
                                </ul>

                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                                <h5 className="text-uppercase text-info">Resources</h5>
                                <ul className="list-unstyled text-uppercase mt-3" style={{ fontSize: "14px" }}>
                                    <li>Categories</li>
                                    <li>Our experts</li>
                                    <li>Home Services</li>

                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                                <h5 className="text-uppercase text-info">Offfers</h5>
                                <ul className="list-unstyled text-uppercase mt-3" style={{ fontSize: "14px" }}>
                                    <li>Eid Offer</li>
                                    <li>Membership Offer</li>
                                    <li>Raffel Draw</li>
                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                                <h5 className="text-uppercase text-info">Our Branches</h5>
                                <ul className="list-unstyled text-uppercase mt-3" style={{ fontSize: "14px" }}>
                                    <li>Dhaka</li>
                                    <li>Sylhet</li>
                                    <li>Chottogram</li>

                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                                <h5 className="text-uppercase text-info">Follow Us On</h5>
                                <div className="mt-3">
                                    <BsFacebook className='text-primary mx-2 fs-3' />
                                    <BsTwitter className='text-white mx-2 fs-3' />
                                    <BsYoutube className='text-danger mx-2 fs-3' />
                                    <BsInstagram className='text-warning mx-2 fs-3' />
                                </div>

                            </div>
                        </div>
                    </div>
                    <p className='py-4 border-top bg-dark text-center text-info m-0 fs-5'>
                        &copy; 2021 @ <span className='text-danger'>Shakhawat Shihab</span>  - All Rights Reserved.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Footer;
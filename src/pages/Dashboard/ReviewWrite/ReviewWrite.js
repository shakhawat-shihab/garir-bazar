import React from 'react';
import { useState } from "react";
import { FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Rating from 'react-rating';
import axios from 'axios';
import swal from 'sweetalert';

const ReviewWrite = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const [rating, setRating] = useState(0);
    const onSubmit = data => {
        data.rating = rating;
        data.img = user?.photoURL || ' https://i.ibb.co/X2sVX2b/profile.png ';
        //console.log(data);
        axios.post('https://garir-bazar.herokuapp.com/submitReview', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Your Review is successfully submitted",
                        icon: "success",
                        button: "Ok",
                    });
                    reset();
                }
            })
    }
    //console.log(rating);
    const visibile = {
        visibility: 'visible'
    }
    const invisibile = {
        visibility: 'hidden'
    }
    return (
        <div>
            <div className='mt-4'>
                <div className='row m-0 g-0 justify-content-center my-4'>
                    <div className=" col-10  shadow-lg rounded-3 p-3 p-sm-4 header-bg ">
                        <h3 className="text-center pb-4 ">Write a review </h3>
                        <div className='mb-3 text-center'>
                            {
                                user.photoURL ?
                                    <img src={user.photoURL} alt="" className='rounded-circle' width='120px' />
                                    :
                                    <img src='https://i.ibb.co/X2sVX2b/profile.png' alt="" className='rounded' width='120px' />
                            }
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingName" placeholder="Enter your name"
                                    value={user.displayName} readOnly
                                    {...register("name", { required: true })} />
                                <label htmlFor="floatingName">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput"
                                    placeholder="name@example.com" value={user.email} readOnly
                                    {...register("email", { required: true })} />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <FloatingLabel controlId="floatingTextarea2" label="Your Comments">
                                <Form.Control
                                    {...register("review", { required: true })}
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                                <span style={errors.review ? visibile : invisibile} className='text-danger ps-2' >* Enter your review</span>
                            </FloatingLabel>
                            <h4>Give us a rating</h4>
                            <Rating
                                emptySymbol="fa fa-star-o fa-2x "
                                fullSymbol="fa fa-star fa-2x "
                                fractions={2}
                                // onClick={(rate) => rate ? setRating(rate) : setRating(0)}
                                onClick={(rate) => rate && setRating(rate)}
                            />
                            <span className='' >{rating}/5</span>

                            <div className='text-center mt-3'>
                                <input type="submit" value='Add Review' />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewWrite;
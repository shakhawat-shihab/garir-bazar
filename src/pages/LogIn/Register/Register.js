import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

const Register = () => {
    return (
        <div>
            <div className='mt-5 pt-5 mb-4'>
                <div className='p-sm-5 px-3 py-4 bg-white rounded shadow mx-auto container-of-form' >
                    <RegisterForm />
                    <div className='text-center my-2'>
                        <Link to='/login' className=' text-center'>Already have an Account?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
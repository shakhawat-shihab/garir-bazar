import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div className='mt-2' style={{ height: '70vh' }}>
            <div className='d-flex flex-column h-100 justify-content-center align-items-center'>
                <div className='mb-3 text-center'>
                    {
                        user.photoURL ?
                            <img src={user.photoURL} alt="" className='rounded-circle' width='120px' />
                            :
                            <img src='https://i.ibb.co/X2sVX2b/profile.png' alt="" className='rounded-circle' width='120px' />
                    }
                </div>
                <h2>Name: <span>{user.displayName}</span></h2>
                <h2>Email: <span>{user.email}</span></h2>
            </div>
        </div>
    );
};

export default DashboardHome;
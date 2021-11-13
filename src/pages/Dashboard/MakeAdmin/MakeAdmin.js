import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const { token } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        //console.log(data);
        fetch('https://garir-bazar.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(responseData => {
                //console.log(responseData);
                if (responseData.modifiedCount) {
                    //console.log(responseData);
                    swal({
                        title: `User with email address '${data.email}' is successfully promoted to admin `,
                        icon: "success",
                        button: "Ok",
                    });
                    reset();
                }
                else if (responseData.matchedCount) {
                    swal({
                        title: `User with email address '${data.email}' is already an Admin`,
                        icon: "success",
                        button: "Ok",
                    });
                    reset();
                }
                else {
                    swal({
                        title: `User with email address '${data.email}' not found`,
                        icon: "warning",
                        button: "Ok",
                    });
                    reset();
                }

            })
    }
    const visibile = {
        visibility: 'visible'
    }
    const invisibile = {
        visibility: 'hidden'
    }
    return (
        <div className='row m-0 g-0 justify-content-center my-4 '>
            <div className=' col-10 shadow-lg p-2 rounded-3' >
                <h3 className='py-3 text-center'  >Promote a user to admin</h3>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" placeholder="Enter Service Id"
                            {...register("email", { required: true })} />
                        <label htmlFor="floatingName">Enter Email </label>
                        <span style={errors.email ? visibile : invisibile} className='text-danger ps-2' >* Enter a user's email address to make him admin</span>
                    </div>
                    <div className='text-center'>
                        <input type="submit" value='Make Admin' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;
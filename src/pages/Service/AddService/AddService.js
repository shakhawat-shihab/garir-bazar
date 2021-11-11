import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        //console.log(data);
        axios.post('http://localhost:5000/addService', data)
            .then(res => {
                // console.log('new ', res?.data?.insertedId);
                // console.log('already have this id', res?.data);
                if (res?.data === 'already have this id') {
                    swal({
                        title: 'A entry is already inserted with this ID in the Database!',
                        icon: "error",
                        buttons: true,
                        dangerMode: true,
                    })
                }
                else if (res?.data?.insertedId) {
                    swal({
                        title: "The Service is successfully added",
                        icon: "success",
                        button: "Ok",
                    });
                    reset();
                }
            })
    };
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
                        <h3 className="text-center pb-4 ">Add Service</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-floating mb-2">
                                <input type="text" className="form-control" placeholder="Enter Service Id"
                                    {...register("id", { required: true })} />
                                <label htmlFor="floatingName">Service Id (must be unique)</label>
                                <span style={errors.id ? visibile : invisibile} className='text-danger ps-2' >* Enter a unique id</span>
                            </div>
                            <div className="form-floating mb-2">
                                <input type="text" className="form-control" placeholder="Enter Service Name"
                                    {...register("name", { required: true })} />
                                <label htmlFor="floatingName">Service Name</label>
                                <span style={errors.name ? visibile : invisibile} className='text-danger ps-2' >* Enter an approiate name</span>
                            </div>
                            <div className="form-floating mb-2">
                                <select {...register("bodyType", { required: true })} className="form-control">
                                    <option value="sedan">Sedan</option>
                                    <option value="suv">SUV</option>
                                </select>
                                <label htmlFor="floatingName">Body Type</label>
                                <span style={errors.bodyType ? visibile : invisibile} className='text-danger ps-2' >* Choose a category</span>
                            </div>
                            <div className="form-floating mb-2">
                                <input type="text" className="form-control" placeholder="Enter Engine's power"
                                    {...register("engine", { required: true })} />
                                <label htmlFor="floatingInput">Engine</label>
                                <span style={errors.engine ? visibile : invisibile} className='text-danger ps-2' >* Enter engine's Power</span>
                            </div>
                            <div className="form-floating mb-2">
                                {/* <input type="text" className="form-control" placeholder="Enter Gearbox system"
                                    {...register("gearbox", { required: true })} /> */}
                                <select {...register("gearbox", { required: true })} className="form-control">
                                    <option value="auromatic">Automatic</option>
                                    <option value="manual">Manual</option>
                                </select>
                                <label htmlFor="floatingInput">Gearbox</label>
                                <span style={errors.gearbox ? visibile : invisibile} className='text-danger ps-2' >* Enter Gearbox system</span>
                            </div>
                            <div className="form-floating mb-2">
                                <input type="text" className="form-control" placeholder="Enter Mileage"
                                    {...register("mileage")} />
                                <label htmlFor="floatingInput">Mileage</label>
                            </div>
                            <div className="form-floating mb-2">
                                <input type="text" className="form-control" placeholder="Enter Year"
                                    {...register("year")} />
                                <label htmlFor="floatingInput">Year</label>
                            </div>
                            <div className="form-floating mb-2">
                                <input type="text" className="form-control" placeholder="Enter Fuel type"
                                    {...register("fuel")} />
                                <label htmlFor="floatingInput">Fuel</label>
                            </div>
                            <div className="form-floating mb-2">
                                {/* <input type="text" className="form-control" placeholder="Enter Aircondition"
                                    {...register("airCon")} /> */}
                                <select {...register("airCon")} className="form-control">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <label htmlFor="floatingInput">Aircon</label>
                            </div>
                            <div className="form-floating mb-2">
                                {/* <input type="text" className="form-control" placeholder="Enter Driver's side"
                                    {...register("driver")} /> */}
                                <select {...register("driver")} className="form-control">
                                    <option value="left">Left</option>
                                    <option value="right">Right</option>
                                </select>
                                <label htmlFor="floatingInput">Driver</label>
                            </div>
                            <div className="form-floating mb-2">
                                <input type="text" className="form-control" placeholder="Enter Condition"
                                    {...register("condition")} />
                                <label htmlFor="floatingInput">Condition</label>
                            </div>
                            <div className="form-floating mb-2">
                                <input type="number" className="form-control" step="0.01"
                                    placeholder="Enter Price"
                                    {...register("price", { required: true })} />
                                <label htmlFor="floatingPhone">Price</label>
                                <span style={errors.price ? visibile : invisibile} className='text-danger ps-2' >* Enter the price</span>
                            </div>
                            <div className="form-floating mb-2">
                                <input type="text" className="form-control"
                                    placeholder="Enter image"
                                    {...register("image", { required: true })} />
                                <label htmlFor="floatingPhone">Image Url</label>
                                <span style={errors.image ? visibile : invisibile} className='text-danger ps-2' >* Enter the image url</span>
                            </div>
                            <div className='text-center'>
                                <input type="submit" value='Add Service' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;
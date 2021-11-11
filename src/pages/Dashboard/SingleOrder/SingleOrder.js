import { useForm } from "react-hook-form";

const SingleOrder = (props) => {
    const { register, handleSubmit } = useForm();
    console.log(props.from);
    const { _id, name, transaction, address, division, email, status } = props.data;
    const onSubmit = data => {
        //console.log(data);
        props?.event(data, _id)
    }
    return (
        <div className='row m-0 border-bottom border-2 border-dark g-0'>
            < div className='col-md-10 col-8 border-end border-2 border-dark  py-4' >
                <h6 className='fw-bold text-center'> Order Id: <small  > #{_id.substr(0, 20)}...</small> </h6>
                <h5>Name: {name}</h5>
                <h5>Email: <span className='fs-6'>{email}</span> </h5>
                <h5>Address: <span className='fs-6'>{address}, {division}</span> </h5>
                <h6>Transaction Id: {transaction}</h6>
                {
                    props.data?.items && <div className='row g-0 m-0 py-3 align-items-center justify-content-between py-3 '>
                        <div className='col-md-6 col-11'>

                            <img src={props.data?.items?.[0]?.img} alt="" width='100%' className='rounded' />
                        </div>
                        <div className='col-md-5 col-11'>
                            <h5 className='fw-bold'>{props?.data?.items?.[0]?.name}</h5>
                            <h5>Price: <span className='fs-6'>{props.data?.items?.[0]?.price}</span> </h5>
                            <h5>Engine: <span className='fs-6'>{props.data?.items?.[0]?.engine}</span> </h5>
                            <h5>Gearbox: <span className='fs-6'>{props.data?.items?.[0]?.gearbox}</span> </h5>
                        </div>
                    </div>
                }
            </div >
            <div className='col-md-2 col-4  d-flex align-items-center justify-content-center '>
                <div className='text-center text-capitalize'>
                    {
                        props.from === '/dashboard/my-order' ?
                            <>
                                <span className={'my-2 fw-bold ' + status === 'Pending' ? ' text-warning fs-4' : 'text-success fs-4'}>{status}</span>
                                <div className="form-floating mb-2">
                                    <div className='text-center'>
                                        <input type="submit" className='bg-success btn text-white px-3' value='Delete' onClick={() => { onSubmit({ status: 'Delete' }) }} />
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <span className={'my-2 fw-bold ' + (status === 'Pending' ? 'text-warning fs-4' : 'text-success fs-4')}>{status}</span>
                                <div className="form-floating mb-2">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-floating mb-2">
                                            <select {...register("status", { required: true })} className="form-control">
                                                <option value="Pending">Pending</option>
                                                <option value="Accepted">Accepted</option>
                                                <option value="Delivered">Delivered</option>
                                                <option value="Delete">Delete</option>
                                            </select>
                                            <label htmlFor="floatingName">Status</label>
                                        </div>
                                        <div className='text-center'>
                                            <input type="submit" className='bg-success btn text-white px-3' value='Save' />
                                        </div>
                                    </form>
                                </div>
                            </>
                    }
                    {/* <br />
                    <Button variant='success my-2' onClick={() => { props.eventHandlerApprove(_id) }}>Approve </Button>
                    <br />
                    <Button variant='danger' onClick={() => { props.eventHandlerDelete(_id) }}> Delete </Button> */}
                </div>
            </div>
        </div>

    );
};

export default SingleOrder;
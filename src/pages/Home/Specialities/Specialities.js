import './Specialities.css'
const Specialities = () => {
    return (
        <div className='my-5'>
            <div className="container">
                <h1 className="text-center pt-5 fw-bold">Our Specialities</h1>
                <h5 className="text-center  text-secondary">Here are some reasons why we are the best car dwellers!</h5>
                <div className="row g-4 row-cols-lg-3 row-cols-md-3 row-cols-1 my-5">
                    <div className="col ">
                        <div className="card h-100 border-0 single-speciality">
                            <img src='https://i.ibb.co/0CTLZn7/expart.png' className="card-img-top w-50 mx-auto speciality-img" alt="speciality" />
                            <div className="card-body">
                                <h5 className="card-title text-center fw-bold">Experienced Team</h5>
                                <p className="card-text text-center">We have special expert who are special for individual car brands, so no need to worry!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="card h-100 border-0 single-speciality">
                            <img src='https://i.ibb.co/YcTMt2M/location.png' className="card-img-top w-50 mx-auto speciality-img" alt="speciality" />
                            <div className="card-body">
                                <h5 className="card-title text-center fw-bold">Closer to You</h5>
                                <p className="card-text text-center">We have our showrooms in almost every divisional citys in Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="card h-100 border-0 single-speciality">
                            <img src='https://i.ibb.co/M8LgB74/Service-vector-icon-Style-is-bicolor-flat-rounded-iconic-symbol-service-icon-is-drawn-with-blue-and.jpg' className="card-img-top w-50 mx-auto speciality-img" alt="speciality" />
                            <div className="card-body">
                                <h5 className="card-title text-center fw-bold">Home Service</h5>
                                <p className="card-text text-center">We are always ready to help you, this is why we don't take extra charge for Home services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Specialities;

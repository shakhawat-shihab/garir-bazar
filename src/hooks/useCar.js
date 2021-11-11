import { useEffect, useState } from "react";

const useCar = () => {
    const [car, setCar] = useState([]);
    const [isLoadingCar, setIsLoadingCar] = useState(true);
    //''
    useEffect(() => {
        fetch('http://localhost:5000/services/car')
            .then(resp => resp.json())
            .then(data => {
                setCar(data);
                //console.log(data);
                setIsLoadingCar(false);
            })
    }, [])

    return { car, isLoadingCar, setCar };
}
export default useCar;

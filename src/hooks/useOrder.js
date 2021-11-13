import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useOrder = () => {
    const { token, user, isLoading } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isLoadingOrder, setIsLoadingOrder] = useState(true);

    useEffect(() => {
        // erkm (!isLoadingUser && token) conditio slo change korc seta ( token )
        if (!isLoading && token) {
            console.log(isLoading, token);
            fetch(`https://garir-bazar.herokuapp.com/myOrder?email=${user.email}`, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    //data holds all orders of a user [array]
                    //console.log(data)
                    let newArr = [];
                    for (const iterator of data) {
                        //iterator holds single order of a user [obj]
                        // console.log(iterator)
                        //here we have one item per order but we can search multiple using below link
                        // const ids = Object.keys(iterator.product);
                        const ids = [iterator.product];
                        //console.log('ids ', ids);
                        axios.post('https://garir-bazar.herokuapp.com/service/byId', ids)
                            .then(res => {
                                //console.log(res.data)
                                iterator.items = res.data;
                                // newArr.push(iterator)
                            })
                        newArr.push(iterator)
                    }
                    console.log('newArr', newArr);
                    setOrders(newArr);
                    setIsLoadingOrder(false);
                });
        }
    }, [user.email, token, isLoading])

    return { isLoadingOrder, orders, setOrders }
}
export default useOrder;
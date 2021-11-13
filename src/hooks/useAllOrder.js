import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
const useAllOrder = () => {
    const { token, user, isLoading } = useAuth();
    const [allOrders, setAllOrders] = useState([]);
    const [isLoadingAllOrder, setIsLoadingAllOrder] = useState(true);
    useEffect(() => {
        if (!isLoading && token) {
            //console.log(isLoading, token);
            fetch(`https://garir-bazar.herokuapp.com/orders`, {
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
                    //console.log('newArr', newArr);
                    setAllOrders(newArr);
                    setIsLoadingAllOrder(false);
                });
        }
    }, [user.email, token, isLoading])
    return { isLoadingAllOrder, allOrders, setAllOrders }
}
export default useAllOrder;
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;

            const url = `https://rocky-fortress-41049.herokuapp.com/order?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data);
        };
        getOrders();
    }, [user, navigate]);



    if (!orders.length > 0) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Order Quantity</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order?.name}</td>
                                <td>{order?.customer}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.phone}</td>
                                <td>{order.address}</td>

                                {/* <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.price && order.paid) && <Link to={``}><span className='text-success'>Paid</span></Link>}
                                </td>
                                 */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
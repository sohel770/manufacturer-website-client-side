import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import usePurchaseDetails from '../Hooks/usePurchaseDetails';
import auth from '../firebase.init';



const ProductPurchase = () => {
    const { productId } = useParams();
    const [product] = usePurchaseDetails(productId);
    const [user] = useAuthState(auth);
console.log(productId)
    const handleOrderSubmit = (event) => {
        event.preventDefault();
        const name = user.displayName;
        const customer = user.email;
        const productName = event.target.productName.value;
        const price = event.target.price.value;
        const minQuantity = event.target.minQuantity.value;
        const availableQuantity = event.target.availableQuantity.value;
        const orderQuantity = event.target.orderQuantity.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;

        const order = { name, customer, productName, minQuantity, price, availableQuantity, orderQuantity, phone, address };

        fetch('https://rocky-fortress-41049.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast('Order placed Successfully');
                    event.target.reset();
                }
            });
    }

    return (
        <div className='container mx-auto'>
            <h2 className='text-primary text-3xl text-center font-bold mt-8'>Purchase Informations</h2>
            <div className="hero bg-base-200 my-12 rounded-xl">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleOrderSubmit}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' value={user.displayName} placeholder="name" className="input input-bordered" disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' value={user.email} placeholder="email" className="input input-bordered" disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" name='productName' value={product.name} placeholder="product name" className="input input-bordered" disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name='price' value={product.price} placeholder="price" className="input input-bordered" disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Minimum Order Quantity</span>
                                    </label>
                                    <input type="number" name='minQuantity' value={product?.minQuantity} placeholder="minimum quantity" className="input input-bordered" disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Order Quantity</span>
                                    </label>
                                    <input type="number" name='availableQuantity' value={product.availableQuantity} placeholder="available quantity" className="input input-bordered" disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Order Quantity</span>
                                    </label>
                                    <input type="number" name='orderQuantity' placeholder="qunatity" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="number" name='phone' placeholder="phone number" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" name='address' placeholder="your address" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Place Order</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="text-center lg:text-left bg-primary rounded-xl p-4">
                        <div className=''>
                            <img className='w-full' src={product.img} alt="" />
                        </div>
                        <p className="py-6">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPurchase;
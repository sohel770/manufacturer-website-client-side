import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, description, price, minQuantity, availableQuantity, img } = product;
    const navigate = useNavigate();

    const handleNavigateToPurchase = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <section>
            <div className="card max-w-lg bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p><strong>Price</strong> {price}</p>
                    <p><strong>Minimum Order Qunatity:</strong> {minQuantity} pc</p>
                    <p><strong>Available Order Qunatity:</strong> {availableQuantity} pc</p>
                    <p><strong>Description</strong> {description} </p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleNavigateToPurchase(_id)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
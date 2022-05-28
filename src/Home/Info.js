import React from 'react';
import mediToolImage1 from '../Assests/images/medi-tools1.jpg'
const Info = () => {
    return (
        <div className='my-28'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={mediToolImage1} />
                    <div>
                        <h1 className="text-5xl font-bold">Medical Accessories</h1>
                        <p className="py-6">Buy branded medical equipment such as medical supplies, surgical instruments for personal care, home and hospitals online at best prices</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
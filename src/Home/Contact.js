import React from 'react';
import banner2 from '../Assests/images/banner/banner-3.jpg';
const Contact = () => {
    return (
        <section
            style={{
                background: `url(${banner2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.6)"
            }}
            className='flex justify-center py-16 mt-12'>
            <div>
                <div>
                    <h4 className="text-xl text-primary font-bold text-center">Contact Us</h4>
                    <h2 className='text-3xl text-center mb-10 text-white'>Stay Connected With Us</h2>
                </div>
                <div className='flex justify-center'>
                    <form>
                        <div className='mb-5'>
                            <input type="email" className='border lg:w-96 h-12 text-xl px-4 rounded-lg focus:outline-primary' placeholder='Email' />
                        </div>
                        <div className='mb-5'>
                            <input type="text" className='border lg:w-96 h-12 text-xl px-4 rounded-lg focus:outline-primary' placeholder='Subject' />
                        </div>
                        <div className='mb-5'>
                            <textarea type="text" className='border lg:w-96 h-32 text-xl px-4 py-3 rounded-lg focus:outline-primary' placeholder='Your Message' />
                        </div>
                        <div className="text-center">
                            <button className='btn btn-primary'><span className='px-9'>Submit</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
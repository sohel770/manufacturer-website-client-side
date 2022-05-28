import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('http://localhost:5000/review').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section className='container mx-auto my-28'>
            <h2 className='text-primary text-3xl text-center font-bold mb-8'>Reviews By Our Customers</h2>
            <div className='gap-5 grid lg:grid-cols-4 md:grid-cols-2'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;
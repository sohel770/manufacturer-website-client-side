import React from 'react';

const Review = ({ review }) => {
    const { img, rating, name, comment } = review;
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="avatar">
                    <div className="w-24 mask mask-hexagon">
                        <img src={img} />
                    </div>
                </div>
                <h2 className="card-title">Ratings: {rating}</h2>
                <h2 className="card-title">{name}</h2>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Review;
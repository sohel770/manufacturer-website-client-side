import React from 'react';
import Banner from './Banner';
import Explore from './Explore';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Explore></Explore>
        </div>
    );
};

export default Home;
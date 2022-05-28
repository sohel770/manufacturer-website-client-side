import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Explore from './Explore';
import Info from './Info';
import Products from './Products';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Explore></Explore>
            <Info></Info>
            <Summary></Summary>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;
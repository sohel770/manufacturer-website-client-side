import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Products from '../Products/Products';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Products></Products>
          <Summary></Summary>
          <Brands></Brands>
        </div>
    );
};

export default Home;
import React from 'react';
import banner1 from '../Assests/images/banner/banner-1.jpg';
import banner2 from '../Assests/images/banner/banner-2.jpg';
import banner3 from '../Assests/images/banner/banner-3.jpg';
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={banner1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={banner2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={banner3} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-primary btn-xs">1</a>
                <a href="#item2" className="btn btn-primary btn-xs">2</a>
                <a href="#item3" className="btn btn-primary btn-xs">3</a>
            </div>
        </div>
    );
};

export default Banner;
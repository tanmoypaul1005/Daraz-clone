import React from 'react';
import SideBar from './SideBar/SideBar';
import './Home.css';
import Banner from './Banner/Banner';
import Banner2 from './Banner2/Banner2';
import FlashSale from '../FlashSale/FlashSale';
import Categories from './../Categories/Categories';
import Product from '../Product/Product';
const Home = () => {
    return (
        <div>
            <div style={{backgroundColor: "rgb(193, 245, 243)"}} className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-2'><SideBar/></div>
                <div className='col-md-9'><Banner/></div>
            </div>
       <Banner2/>
       <FlashSale/>
       <Categories/>
       <Product/>
        </div>
    );
};

export default Home;
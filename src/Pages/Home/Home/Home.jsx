import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Cover from '../Cover/Cover';
import PopularMenu from '../../Shared/PopularMenu/PopularMenu';
import FeatureProduct from '../FeatureProduct/FeatureProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Cover></Cover>
            <PopularMenu></PopularMenu>
            <FeatureProduct></FeatureProduct>
        </div>
    );
};

export default Home;
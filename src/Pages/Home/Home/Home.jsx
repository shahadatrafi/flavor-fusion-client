import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Cover from '../Cover/Cover';
import PopularMenu from '../../Shared/PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Cover></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;
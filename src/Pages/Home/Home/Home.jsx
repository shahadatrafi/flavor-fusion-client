import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../../Shared/PopularMenu/PopularMenu';
import FeatureProduct from '../FeatureProduct/FeatureProduct';
import Cover from '../../Shared/Cover/Cover';
import bg from '../../../assets/home/chef-service.jpg'
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Flavor Fusion | Home</title>
            </Helmet>

            <Banner></Banner>
            <Category></Category>
            <Cover
                heading='Flavor Fusion'
                img={bg}
            ></Cover>
            <PopularMenu></PopularMenu>
            <FeatureProduct></FeatureProduct>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
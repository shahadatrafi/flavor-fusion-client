import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import featureImg from '../../../assets/home/featured.jpg'
import './feature.css'

const FeatureProduct = () => {
    return (
        <div className='feature-item bg-fixed py-32'>
            <div>
            <div className='container mx-auto z-10'>
            <SectionTitle
                subHeading='---Check it out---'
                heading='FROM OUR MENU'
            ></SectionTitle>
            <div className='flex items-center px-16 pt-6 gap-6'>
                <div className='w-1/2'>
                    <img className='' src={featureImg} alt="" />
                </div>
                <div className='text-2xl text-white w-1/2'>
                    <h3>March 20, 2023</h3>
                    <h2>WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default FeatureProduct;
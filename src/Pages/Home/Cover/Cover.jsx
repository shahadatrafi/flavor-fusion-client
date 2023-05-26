import React from 'react';
import bg from '../../../assets/home/chef-service.jpg'

const Cover = () => {
    return (
        <div className='bg-cover bg-center container mx-auto flex items-center mb-28' style={{ backgroundImage:`url(${bg})` }}>
            <div className='bg-base-100 mx-28 my-32 rounded-lg shadow-lg'>
                <div className='w-3/5 my-24 mx-auto text-center'>
                <h2 className='text-5xl mb-5' >Flavor Fusion</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati, molestias ex iste alias expedita blanditiis iure doloremque enim impedit beatae necessitatibus debitis dolorum esse?</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;
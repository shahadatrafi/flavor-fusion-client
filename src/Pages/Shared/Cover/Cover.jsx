import React from 'react';

const Cover = ({heading, img, description}) => {
    return (
        <div className='bg-cover bg-center mx-auto flex items-center mb-28' style={{ backgroundImage:`url(${img})` }}>
            <div className='hero-overlay container mx-28 my-32 rounded-lg shadow-lg'>
                <div className='w-3/5 my-24 mx-auto text-white text-center'>
                <h2 className='text-5xl uppercase mb-5' >{heading}</h2>
                    <p>{ description}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;
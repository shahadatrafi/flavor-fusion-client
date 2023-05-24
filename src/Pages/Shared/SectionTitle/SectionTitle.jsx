import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center w-3/12 mx-auto mb-12'>
            <h3 className='italic text-yellow-500 text-xl mb-4'>{subHeading}</h3>
            <h2 className='text-4xl uppercase border-y-4 py-4 '>{heading}</h2>
        </div>
    );
};

export default SectionTitle;
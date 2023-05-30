import React from 'react';

const MenuItem = ({ item }) => {
    const {_id, image, name, price, recipe} = item
    return (
        <div className='flex justify-between gap-4 items-center'>
            <img className='h-[100px] w-[118px] object-cover'style={{borderRadius: "0 200px 200px "}} src={image} alt="" />
            <div>
                <h3 className='text-xl mb-2'>{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-xl text-yellow-600'>${price}</p>
        </div>
    );
};

export default MenuItem;
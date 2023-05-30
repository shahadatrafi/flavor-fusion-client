import React from 'react';
import FoodCard from '../FoodCard/FoodCard';

const ShopTab = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-28'>
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default ShopTab;
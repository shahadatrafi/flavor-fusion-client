import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/PopularMenu/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, img, heading, description}) => {
    return (
        <div>

            {heading && <Cover
                img={img}
                heading={heading}
                description={description}
            ></Cover>}
            <div className=' mb-24 container mx-auto'>
                <div className='grid grid-cols-2 gap-6'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
                </div>
                <div className='text-center'>
                <Link to={`/our-shop/${heading}`}><button className=" btn btn-outline bg-gray-100 border-0 border-b-4 mt-12">ORDER YOUR FAVOURITE FOOD</button></Link>
                </div>
                
            </div>
            
        </div>
    );
};

export default MenuCategory;
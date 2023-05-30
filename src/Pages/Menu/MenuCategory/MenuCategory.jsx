import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/PopularMenu/MenuItem';

const MenuCategory = ({items, img, heading, description}) => {
    return (
        <div>

            {heading && <Cover
                img={img}
                heading={heading}
                description={description}
            ></Cover>}
            <div className='grid grid-cols-2 gap-6 mb-28 container mx-auto'>
                {
                    items.map(item => <MenuItem
                        key={item.id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;
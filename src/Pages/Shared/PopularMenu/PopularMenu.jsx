import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import MenuItem from './MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {

    const [menus] = useMenu([]);
    const popularMenu = menus.filter(menu => menu.category === 'popular')

    return (
        <div className='container mx-auto'>
            <SectionTitle
                heading="FROM OUR MENU"
                subHeading="---Check it out---"
            ></SectionTitle>
            <div className='grid grid-cols-2 gap-6 mb-28'>
                {
                    popularMenu.map(item => <MenuItem
                        key={item.id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;
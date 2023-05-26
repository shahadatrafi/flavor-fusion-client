import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const PopularMenu = () => {

    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenus(popularItems)
            });
    },[])

    return (
        <div className='container mx-auto'>
            <SectionTitle
                heading="FROM OUR MENU"
                subHeading="---Check it out---"
            ></SectionTitle>
            <div>
                {
                    menus.map(menu => <li>{menu.name}</li>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;
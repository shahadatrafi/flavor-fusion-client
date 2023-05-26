import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const PopularMenu = () => {

    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenus(data));
    },[])

    return (
        <div className='container mx-auto'>
            <SectionTitle
                heading="FROM OUR MENU"
                subHeading="---Check it out---"
            ></SectionTitle>
            <div>
                <h4>{ menus.length}</h4>
            </div>
        </div>
    );
};

export default PopularMenu;
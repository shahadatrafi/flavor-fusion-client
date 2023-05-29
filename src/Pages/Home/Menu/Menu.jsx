import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Shared/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div >
            <Cover
                heading={'OUR MENU'}
                description={"Would you like to try a dish?"}
                img={img}
            ></Cover>
            <div className="container mx-auto">
            <PopularMenu></PopularMenu>
            </div>
            <Cover
                heading={'OUR MENU'}
                description={"Would you like to try a dish?"}
                img={img}
            ></Cover>
            <div className="container mx-auto">
            <PopularMenu></PopularMenu>
            </div>
            <Cover
                heading={'OUR MENU'}
                description={"Would you like to try a dish?"}
                img={img}
            ></Cover>
            <div className="container mx-auto">
            <PopularMenu></PopularMenu>
            </div>
        </div>
    );
};

export default Menu;
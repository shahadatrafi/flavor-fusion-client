import React from 'react';
import Cover from '../Shared/Cover/Cover';
import img from '../../assets/menu/banner3.jpg'
import dessertBg from '../../assets/menu/dessert-bg.jpeg'
import saladBg from '../../assets/menu/salad-bg.jpg'
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import soupBg from '../../assets/menu/soup-bg.jpg'
import { Helmet } from 'react-helmet-async';
import MenuCategory from './MenuCategory/MenuCategory';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';

const Menu = () => {
    const [menus] = useMenu([]);
    const offerMenu = menus.filter(menu => menu.category === 'offered');
    const dessertsMenu = menus.filter(menu => menu.category === 'dessert');
    const pizzaMenu = menus.filter(menu => menu.category === 'pizza');
    const saladsMenu = menus.filter(menu => menu.category === 'salad');
    const soupsMenu = menus.filter(menu => menu.category === 'soup');
    return (
        <div >
            <Helmet>
                <title>Flavor Fusion | Our Menu </title>
            </Helmet>
            <Cover
                heading={'OUR MENU'}
                description={"Would you like to try a dish?"}
                img={img}
            ></Cover>
            <SectionTitle
                heading={"TODAY'S OFFER"}
                subHeading={"---Don't miss---"}
            ></SectionTitle>
            <MenuCategory
                items={offerMenu}
            ></MenuCategory>
            <MenuCategory
                items={dessertsMenu}
                img={dessertBg}
                heading={'DESSERTS'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>
            <MenuCategory
                items={pizzaMenu}
                img={pizzaBg}
                heading={'PIZZA'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>
            <MenuCategory
                items={saladsMenu}
                img={saladBg}
                heading={'SALADS'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>
            <MenuCategory
                items={soupsMenu}
                img={soupBg}
                heading={'SOUPS'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>
        </div>
    );
};

export default Menu;
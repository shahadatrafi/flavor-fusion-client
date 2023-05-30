import React, { useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import bg from '../../assets/shop/banner2.jpg'
import useMenu from '../../hooks/useMenu';
import ShopTab from './ShopTab/ShopTab';
import { useParams } from 'react-router-dom';


const Shop = () => {

    const [tabIndex, setTabIndex] = useState(0)
    const [menus] = useMenu([]);
    const { category } = useParams();
    console.log(category);
    const dessertsMenu = menus.filter(menu => menu.category === 'dessert');
    const pizzaMenu = menus.filter(menu => menu.category === 'pizza');
    const saladsMenu = menus.filter(menu => menu.category === 'salad');
    const soupsMenu = menus.filter(menu => menu.category === 'soup');
    const drinksMenu = menus.filter(menu => menu.category === 'drinks');

    return (
        <div>
            <Cover
                img={bg}
                heading={'OUR SHOP'}
                description={'WOULD YOU LIKE TO TRY A DISH'}
            ></Cover>
            <div className='container mx-auto'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salads</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Pizzas</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <ShopTab items={saladsMenu}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopTab items={dessertsMenu}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopTab items={pizzaMenu}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopTab items={soupsMenu}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopTab items={drinksMenu}></ShopTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Footer from '../../Pages/Shared/Footer/Footer';

const Main = () => {

    const location = useLocation();
    const isPathname = location.pathname.includes('/login') || location.pathname.includes('/sign-up');

    return (
        <div>
            {isPathname || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isPathname || <Footer></Footer>}
        </div>
    );
};

export default Main;
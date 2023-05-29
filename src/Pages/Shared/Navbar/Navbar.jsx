import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navigation = <>
        <li><Link>Home</Link></li>
        <li><Link>CONTACT us</Link></li>
        <li><Link>DASHBOARD</Link></li>
        <li><Link to="/our-menu">Our Menu</Link></li>
        <li><Link>Our Shop</Link></li>
    </>

    return (

        <div className='fixed z-10 w-full bg-black bg-opacity-40'>
            <div className="navbar text-white  container mx-auto">
                <div className=" navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu uppercase menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navigation}
                        </ul>
                    </div>
                    <div className=' uppercase'>
                        <a className="text-xl font-bold tracking-wide"><span>Flavor</span> Fusion</a>
                        <p className='font-semibold tracking-[7px]'>Restaurant</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 uppercase">
                        {navigation}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#D99904] hover:bg-[#f9af00db] border-0">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
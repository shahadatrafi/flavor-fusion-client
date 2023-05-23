import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-neutral text-neutral-content'>
            <div className="footer container mx-auto">
                <div className='ml-auto py-10 w-1/2'>
                    <h2 className='uppercase text-xl mb-6'>Contact Us</h2>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className='mr-auto ml-10 py-10 w-1/2'>
                    <span className="uppercase text-xl mb-6">Social</span>
                    <p className='mb-8'>Join us on social media</p>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a><FaFacebookF></FaFacebookF></a>
                        <a><FaTwitter></FaTwitter></a>
                        <a><FaInstagram></FaInstagram></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
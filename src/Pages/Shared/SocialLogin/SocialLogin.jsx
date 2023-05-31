import React from 'react';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className=' text-center px-16 '>
            <p className='font-semibold'>or sign in with</p>
            <div className='flex justify-around mt-6 text-xl '>
                <button className='border-2 border-black rounded-full p-3'><FaFacebookF /></button>
                <button className='border-2 border-black rounded-full p-3'><FaGoogle></FaGoogle></button>
                <button className='border-2 border-black rounded-full p-3'><FaGithub></FaGithub></button>
            </div>
        </div>
    );
};

export default SocialLogin;
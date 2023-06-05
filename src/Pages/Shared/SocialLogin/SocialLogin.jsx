import React from 'react';
import { useContext } from 'react';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const { user, googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);

                const newUser = { name: loggedUser.displayName, email: loggedUser.email }

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate(from, { replace: true })
                    })
            })
            .catch(err => {
                console.error(err.message);
            })
    }

    return (
        <div className=' text-center px-16 '>
            <p className='font-semibold'>or sign in with</p>
            <div className='flex justify-around mt-6 text-xl '>
                <button className='border-2 border-black rounded-full p-3'><FaFacebookF /></button>
                <button onClick={handleGoogleLogin} className='border-2 border-black rounded-full p-3'><FaGoogle></FaGoogle></button>
                <button className='border-2 border-black rounded-full p-3'><FaGithub></FaGithub></button>
            </div>
        </div>
    );
};

export default SocialLogin;
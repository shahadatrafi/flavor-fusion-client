import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import img from '../../assets/others/authentication2.png'
import bgimg from '../../assets/others/authentication.png'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Login = () => {

    const { userLogIn } = useContext(AuthContext);

    const [disable, setDisable] = useState(true);
    const captchaRef = useRef();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogIn(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
                navigate(from, {replace: true})
            })
            .catch(err => {
            console.error(err.message);
        })
    }

    const handleBlur = () => {
        const userCaptchaValue = captchaRef.current.value;
        if (validateCaptcha(userCaptchaValue) === true) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }

    return (
        <div className="hero container mx-auto py-10 my-10 border-2 shadow-xl " style={{backgroundImage: `url(${bgimg})`}}>
            <div className="hero-content flex-col lg:flex-row items-center">
                <div className="md:w-1/2">
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full md:w-1/2  ">
                <h1 className="text-4xl font-bold text-center">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} onBlur={handleBlur} placeholder="Type the captcha" className="input input-bordered" />
                        </div>
                        {/* TO DO : need to button disable */}
                        <div className="form-control mt-6">
                            <input disabled={false} className="btn bg-yellow-600 border-0 hover:bg-yellow-700" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center mb-3'>New here? <Link className='font-semibold' to='/sign-up'>Create a New Account</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React from 'react';
import img from '../../assets/others/authentication2.png'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Registration = () => {

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }

    return (
        <div className="hero container mx-auto py-10 my-10 border-2 shadow-xl ">
            <div className="hero-content flex-col lg:flex-row items-center">
                <div className="md:w-1/2">
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full md:w-1/2  ">
                    <h1 className="text-4xl font-bold text-center">Sign Up!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
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
                            <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Type the captcha" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-yellow-600 border-0 hover:bg-yellow-700" type="submit" value="Login" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Registration;
import React, { useContext } from 'react';
import img from '../../assets/others/authentication2.png'
import bgimg from '../../assets/others/authentication.png'

import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';


const Registration = () => {

    const navigate = useNavigate();

    const { userSignUp } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        userSignUp(data.email, data.password)
            .then(res => {

                const loggedUser = res.user;
                console.log(loggedUser);

                updateProfile(loggedUser, {
                    displayName: data.name
                })
                    .then(() => {

                        const newUser = { name: data.name, email: data.email }

                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire(
                                        'Well Done!',
                                        'You created account successfully...!',
                                        'success'
                                    )
                                    navigate('/');
                                }
                            })
                    })
                    .catch(err => {
                        console.error(err.message);
                    })


            })
            .catch(err => {
                console.error('error is', err.message);
            })
    };

    return (
        <div className="hero container mx-auto py-10 my-10 border-2 shadow-xl " style={{ backgroundImage: `url(${bgimg})` }}>
            <div className="hero-content flex-col lg:flex-row items-center">
                <div className="md:w-1/2">
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full md:w-1/2  ">
                    <h1 className="text-4xl font-bold text-center">Sign Up!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="Your Name" className="input input-bordered mb-2" />
                            {errors.name && <span className='text-red-600 ml-2'>Shit man...! You Have A Beautiful Name. Put It Here</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered mb-2" />
                            {errors.email && <span className='text-red-600 ml-2'>Shit man...! You Have To Put Your Email Here</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} name='password' placeholder="password" className="input input-bordered mb-2" />
                            {errors.password && <span className='text-red-600 ml-2'>Type a password...</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-yellow-600 border-0 hover:bg-yellow-700" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center mb-3'>Already registered?<Link className='font-semibold' to='/login'> Go to log in</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Registration;
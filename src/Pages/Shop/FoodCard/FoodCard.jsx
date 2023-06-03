import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';

const FoodCard = ({ item }) => {
    const { _id, image, name, price, recipe } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
        console.log(item);
        if (user) {
            const cartItem = {name, itemId: _id, price, recipe, image, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type':'application/json' 
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Successfully Added On Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'You have to Login first to add to cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <img className='object-cover' src={image} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <p className='bg-black text-white px-2 py-1 absolute top-3 right-3 rounded'>${price}</p>
                <div className="card-actions justify-end">
                    <Link><button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-gray-100 border-0 border-b-4">Add To Cart</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
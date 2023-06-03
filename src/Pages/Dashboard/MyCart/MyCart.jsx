import React from 'react';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';

const MyCart = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <div className='flex justify-evenly items-center mt-40 mb-10'>
                <h4 className='text-4xl'>Total Items: {cart.length}</h4>
                <h4 className='text-4xl'>Total Price: $ <span> {total}</span></h4>
                <button className="btn bg-[#D1A054] border-0">Small</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table mx-auto ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                {item.name}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button className="btn btn-ghost text-xl text-white bg-red-600 hover:bg-red-700"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyCart;